// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import fs from "node:fs/promises";
import path from "node:path";
import { Is } from "@3sixty/core";
import { DataTypeHandlerFactory } from "@3sixty/data-core";
import { JsonLdDataTypes } from "@3sixty/data-json-ld";
import { OdrlDataTypes } from "../../src/dataTypes/odrlDataTypes.js";

const SCHEMAS_DIRECTORY = path.join(import.meta.dirname, "..", "..", "src", "schemas");

/**
 * Collect all the absolute $refs from a schema.
 * @param schema The schema to collect the refs from.
 * @param refs The set to collect the refs into.
 */
function collectRefs(schema: unknown, refs: Set<string>): void {
	if (Array.isArray(schema)) {
		for (const entry of schema) {
			collectRefs(entry, refs);
		}
	} else if (Is.object(schema)) {
		for (const [key, value] of Object.entries(schema)) {
			if (key === "$ref" && Is.stringValue(value) && value.startsWith("https://")) {
				refs.add(value);
			} else {
				collectRefs(value, refs);
			}
		}
	}
}

/**
 * Load all the generated schemas.
 * @returns The generated schemas.
 */
async function loadSchemas(): Promise<{ $id?: string }[]> {
	const filenames = (await fs.readdir(SCHEMAS_DIRECTORY)).filter(f => f.endsWith(".json"));

	return Promise.all(
		filenames.map(async filename =>
			JSON.parse(await fs.readFile(path.join(SCHEMAS_DIRECTORY, filename), "utf8"))
		)
	);
}

describe("OdrlDataTypes", () => {
	beforeAll(() => {
		// The JSON-LD types are owned by a declared dependency of this package.
		JsonLdDataTypes.registerTypes();
		OdrlDataTypes.registerTypes();
	});

	test("should register a data type for the id of every generated schema", async () => {
		const schemas = await loadSchemas();
		const unregistered = schemas
			.map(schema => schema.$id)
			.filter(id => Is.stringValue(id) && !DataTypeHandlerFactory.hasName(id));

		expect(unregistered).toEqual([]);
	});

	test("should register a data type for every ref in the generated schemas", async () => {
		const schemas = await loadSchemas();
		const refs = new Set<string>();
		for (const schema of schemas) {
			collectRefs(schema, refs);
		}

		const unregistered = [...refs]
			.filter(() => true)
			.filter(ref => !DataTypeHandlerFactory.hasName(ref));

		expect(unregistered).toEqual([]);
	});
});
