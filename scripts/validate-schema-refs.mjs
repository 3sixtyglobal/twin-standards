// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/**
 * This script validates that every $ref in the built JSON schemas resolves to a data
 * type registered by the package which owns it. A ref with no registered target is
 * fetched from the hosted schema site the first time it is validated, which is slow,
 * races with concurrent validations and silently accepts anything when the fetch fails.
 *
 * A namespace is local when a package in the workspace, or one of its TWIN
 * dependencies, ships a schema whose $id sits in it. Refs into any other namespace
 * cannot be registered from here, so they are reported as warnings rather than
 * failures, they still resolve over the network if the hosted site serves them.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { DataTypeHandlerFactory } from '@twin.org/data-core';
import { directoryExists, fileExists, loadJson } from './common.mjs';

/**
 * The namespaces which a schema shipped by this workspace declares an $id in.
 */
const localNamespaces = new Set();

/**
 * Read the schemas shipped by a package.
 * @param packageDirectory The root directory of the package.
 * @returns The schemas keyed by their filename, empty if the package ships none.
 */
async function readPackageSchemas(packageDirectory) {
	const schemasDirectory = path.join(packageDirectory, 'dist', 'es', 'schemas');

	if (!(await directoryExists(schemasDirectory))) {
		return {};
	}

	const schemas = {};
	const schemaFilenames = (await fs.readdir(schemasDirectory)).filter(f => f.endsWith('.json'));

	for (const schemaFilename of schemaFilenames) {
		schemas[schemaFilename] = await loadJson(path.join(schemasDirectory, schemaFilename));
	}

	return schemas;
}

/**
 * Record the namespaces of the schemas shipped by a package.
 * @param packageDirectory The root directory of the package.
 */
async function collectLocalNamespaces(packageDirectory) {
	const schemas = Object.values(await readPackageSchemas(packageDirectory));

	for (const schema of schemas) {
		if (typeof schema.$id === 'string') {
			localNamespaces.add(schema.$id.slice(0, schema.$id.lastIndexOf('/') + 1));
		}
	}
}

/**
 * Register all the data types exposed by a module.
 * @param moduleSpecifier The module to import and register the types from.
 */
async function registerModuleTypes(moduleSpecifier) {
	const module = await import(moduleSpecifier);

	for (const exported of Object.values(module)) {
		// Only the data type classes have a parameterless registerTypes, the
		// DataTypeHelper exported by data-core takes arguments.
		if (typeof exported?.registerTypes === 'function' && exported.registerTypes.length === 0) {
			exported.registerTypes();
		}
	}
}

/**
 * Register the data types of a built package and the TWIN dependencies it declares.
 * @param workspace The workspace directory of the package.
 * @returns True if the package was built and its types were registered.
 */
async function registerWorkspaceTypes(workspace) {
	const indexFilename = path.join(workspace, 'dist', 'es', 'index.js');

	if (!(await fileExists(indexFilename))) {
		return false;
	}

	const workspacePackageJson = await loadJson(path.join(workspace, 'package.json'));

	for (const dependency of Object.keys(workspacePackageJson.dependencies ?? {})) {
		if (dependency.startsWith('@twin.org/')) {
			await registerModuleTypes(dependency);
			await collectLocalNamespaces(path.join('node_modules', dependency));
		}
	}

	await registerModuleTypes(pathToFileURL(path.resolve(indexFilename)).href);
	await collectLocalNamespaces(workspace);

	return true;
}

/**
 * Collect all the absolute $ref values from a JSON schema.
 * @param schema The schema to collect the refs from.
 * @param refs The set to collect the refs into.
 */
function collectRefs(schema, refs) {
	if (Array.isArray(schema)) {
		for (const entry of schema) {
			collectRefs(entry, refs);
		}
	} else if (schema !== null && typeof schema === 'object') {
		for (const [key, value] of Object.entries(schema)) {
			if (key === '$ref' && typeof value === 'string' && /^https?:\/\//.test(value)) {
				refs.add(value);
			} else {
				collectRefs(value, refs);
			}
		}
	}
}

/**
 * Find the refs in a package which have no registered data type.
 * @param workspace The workspace directory of the package.
 * @returns The unresolved refs, split by whether their namespace is local.
 */
async function findUnresolvedRefs(workspace) {
	const schemas = await readPackageSchemas(workspace);

	const local = {};
	const external = {};

	for (const [schemaFilename, schema] of Object.entries(schemas)) {
		const refs = new Set();
		collectRefs(schema, refs);

		for (const ref of refs) {
			if (!DataTypeHandlerFactory.hasName(ref)) {
				const namespace = ref.slice(0, ref.lastIndexOf('/') + 1);
				const target = localNamespaces.has(namespace) ? local : external;
				target[ref] ??= [];
				target[ref].push(schemaFilename);
			}
		}
	}

	return { local, external };
}

/**
 * Write the refs and the schemas which reference them.
 * @param refs The unresolved refs mapped to the schemas which reference them.
 */
function writeRefs(refs) {
	for (const ref of Object.keys(refs).sort()) {
		process.stdout.write(`  ${ref}\n`);
		process.stdout.write(`    referenced from ${refs[ref].sort().join(', ')}\n`);
	}
}

/**
 * Execute the process.
 */
async function run() {
	process.stdout.write('Validate Schema Refs\n');
	process.stdout.write('====================\n');
	process.stdout.write('\n');

	const packageJson = await loadJson('package.json');

	const builtWorkspaces = [];
	for (const workspace of packageJson.workspaces) {
		if (await registerWorkspaceTypes(workspace)) {
			builtWorkspaces.push(workspace);
		}
	}

	process.stdout.write(`Packages: ${builtWorkspaces.length}\n`);
	process.stdout.write(`Registered types: ${DataTypeHandlerFactory.names().length}\n`);
	process.stdout.write(`Local namespaces: ${localNamespaces.size}\n`);
	process.stdout.write('\n');

	let unresolvedCount = 0;

	for (const workspace of builtWorkspaces) {
		const { local, external } = await findUnresolvedRefs(workspace);

		if (Object.keys(local).length > 0 || Object.keys(external).length > 0) {
			process.stdout.write(`${workspace}\n`);

			unresolvedCount += Object.keys(local).length;
			writeRefs(local);

			if (Object.keys(external).length > 0) {
				process.stdout.write(
					'  no package here registers these namespaces, they resolve over the network\n'
				);
				writeRefs(external);
			}

			process.stdout.write('\n');
		}
	}

	if (unresolvedCount > 0) {
		throw new Error(
			`There are ${unresolvedCount} $refs with no registered data type, they would be fetched over the network during validation`
		);
	}

	process.stdout.write('All schema refs into local namespaces resolve to registered data types\n');
}

run().catch(err => {
	process.stderr.write(`${err}\n`);
	// eslint-disable-next-line unicorn/no-process-exit
	process.exit(1);
});
