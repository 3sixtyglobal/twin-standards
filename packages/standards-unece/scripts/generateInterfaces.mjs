// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
import fs, { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateIndexFile } from './generateIndexFile.mjs';

/**
 * Tool to generate TypeScript interfaces from UNECE JSON LD files.
 * This script reads the JSON LD definitions and creates complete TypeScript interfaces
 * with all properties, including their types, descriptions, and required fields.
 * The CSV file for the spec is used to include cardinality information.
 */

// Resolve paths relative to this script file so the script can be run from any cwd
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DATA_DIR = path.join(__dirname, '..', 'src-data', 'D23B');
const BASE_OUTPUT_DIR = path.join(__dirname, '..', 'src', 'models');
const CLASS_OUTPUT_DIR = 'bsp';
const LIST_OUTPUT_DIR = 'lists';
const MAX_LINE_LENGTH = 120;

/**
 * Load JSON-LD mapping.
 */
async function loadJsonLdMapping() {
	const jsonLd = await loadJSON(path.join(SOURCE_DATA_DIR, 'unece.jsonld'));

	const jsonLdMapping = {};

	if (jsonLd['@graph']) {
		for (const jsonLdItem of jsonLd['@graph']) {
			// These are code list values
			if (isJsonListItem(jsonLdItem)) {
				const type = jsonLdItem['@type'];
				jsonLdMapping[type] ??= {};
				jsonLdMapping[type].values ??= [];
				jsonLdMapping[type].values.push(jsonLdItem);
			} else {
				const isClass = isJsonLdClass(jsonLdItem);
				const isProperty = isJsonLdProperty(jsonLdItem);

				const id = jsonLdItem['@id'];

				if (isClass || isProperty) {
					const existingValues = jsonLdMapping[id]?.values;
					const existingProperties = jsonLdMapping[id]?.properties;

					jsonLdMapping[id] = jsonLdItem;
					jsonLdMapping[id].values = existingValues;
					jsonLdMapping[id].properties = existingProperties;

					if (isProperty && jsonLdItem['schema:domainIncludes']) {
						const domainIncludes = Array.isArray(jsonLdItem['schema:domainIncludes'])
							? jsonLdItem['schema:domainIncludes'].map(di => di['@id'])
							: [jsonLdItem['schema:domainIncludes']['@id']];

						for (const domainInclude of domainIncludes) {
							jsonLdMapping[domainInclude] ??= {};
							jsonLdMapping[domainInclude].properties ??= [];
							jsonLdMapping[domainInclude].properties.push(jsonLdItem);
						}
					}

					if (Array.isArray(jsonLdItem['unece:cefactElementMetadata'])) {
						for (const metaDataItem of jsonLdItem['unece:cefactElementMetadata']) {
							const alias = metaDataItem['@id'];
							jsonLdMapping[id].aliases ??= [];
							jsonLdMapping[id].aliases.push(alias.replace('cefact:', 'unece:'));
						}
					}

					jsonLdMapping[id].isDeprecated = /deprecated/i.test(
						jsonLdItem['rdfs:comment'].toString()
					);
				} else if (jsonLdItem['@type'] === 'rdf:Seq') {
					// Ignore sequence
				} else {
					throw new Error(
						`Unknown JSON-LD type: ${jsonLdItem['@type']} for item ${JSON.stringify(jsonLdItem)}`
					);
				}
			}
		}
	}

	return jsonLdMapping;
}

/**
 * Load JSON-Schema mapping.
 */
async function loadJsonSchemaMapping(jsonLdMapping) {
	const jsonSchema = await loadJSON(path.join(SOURCE_DATA_DIR, 'UNECE-BSPContextCCL.json'));

	for (const schema of Object.values(jsonSchema.$defs)) {
		if (schema.title && schema.properties) {
			const title = `unece:${schema.title.replace(/ /g, '')}`;
			let jsonLd = jsonLdMapping[title];

			// Not a top level mapping, try aliases
			if (!jsonLd) {
				for (const key of Object.keys(jsonLdMapping)) {
					const item = jsonLdMapping[key];
					if (item.aliases?.includes(title)) {
						jsonLd = item;
						break;
					}
				}
			}

			if (!jsonLd) {
				throw new Error(`No JSON-LD mapping found for JSON-Schema title: ${title}`);
			}

			if (!jsonLd.properties) {
				throw new Error(`No JSON-LD properties found for JSON-Schema title: ${title}`);
			}

			for (const propKey of Object.keys(schema.properties)) {
				const propSchema = schema.properties[propKey];
				const schemaCCts = `unece:${propSchema.title.replace(/ /g, '')}`;

				const jsonLdProperty = jsonLd.properties?.find(p => p.aliases.includes(schemaCCts));

				if (jsonLdProperty) {
					// The cardinality from the CSV alone is not sufficient, we need to also check the JSON-Schema
					jsonLdProperty.maxItems = propSchema.maxItems === 1 ? 1 : 0;
				} else {
					throw new Error(
						`No JSON-LD property found for JSON-Schema property: ${propKey} in title: ${title}`
					);
				}
			}
		}
	}
}

/**
 * Load csv mapping.
 */
async function loadCsvData() {
	const content = await fs.readFile(path.join(SOURCE_DATA_DIR, 'unece-reduced.csv'), 'utf8');
	const lines = content.split(/\r?\n/).filter(Boolean);

	const headers = lines[0].split(',').map(h => camelCase(h.trim()));
	const result = [];
	for (let i = 1; i < lines.length; i++) {
		const values = lines[i].split(',');
		const obj = {};
		if (values.length === headers.length) {
			for (let j = 0; j < headers.length; j++) {
				obj[headers[j]] = values[j] !== undefined ? values[j].trim() : '';
			}
			result.push(obj);
		}
	}

	return result;
}

/**
 * Check if object is a list item.
 */
function isJsonListItem(object) {
	return object['rdf:value'] && object['rdfs:comment'];
}

/**
 * Check if object is a class.
 */
function isJsonLdClass(object) {
	return object['@type'] === 'rdfs:Class';
}

/**
 * Check if object is a property.
 */
function isJsonLdProperty(object) {
	const type = object['@type'];
	return type === 'rdf:Property' || (Array.isArray(type) && type.includes('rdf:Property'));
}

/**
 * Check if item is deprecated.
 */
function isItemDeprecated(item) {
	return item?.['rdfs:comment']?.toString().toLowerCase().includes('deprecated') ?? false;
}

/**
 * Strip 'unece:' prefix from input.
 */
function stripUnece(input) {
	return input.replace(/^unece:/, '');
}

/**
 * Generate a TypeScript class from a schema definition.
 */
async function generateClass(
	typeName,
	interfaceName,
	description,
	propData,
	imports,
	importLines,
	typeLines,
	isDeprecated
) {
	const propertyLines = [];
	propertyLines.push(...createComment('JSON-LD Context.', '\t'));
	propertyLines.push('\t"@context"?: UneceContextType;');
	propertyLines.push('');
	propertyLines.push(...createComment('JSON-LD Type.', '\t'));
	propertyLines.push(`\ttype: typeof UneceTypes.${typeName};`);

	for (const prop of propData) {
		propertyLines.push('');
		propertyLines.push(...createComment(`${prop.description}`, '\t', prop.see, prop.isDeprecated));
		const propString = `\t${prop.key}${prop.required ? '' : '?'}: ${prop.type};`;
		propertyLines.push(propString);
	}

	imports.push({ type: 'IJsonLdNodeObject', package: '@twin.org/data-json-ld' });

	generateImportLines(
		CLASS_OUTPUT_DIR,
		imports.filter(i => i.type !== interfaceName),
		importLines
	);

	importLines.push('import type { UneceContextType } from "../uneceContextType.js";');
	importLines.push('import type { UneceTypes } from "../uneceTypes.js";');

	typeLines.push('');
	typeLines.push(
		...createComment(description, '', `https://vocabulary.uncefact.org/${typeName}`, isDeprecated)
	);
	typeLines.push(`export interface ${interfaceName} extends IJsonLdNodeObject {`);
	typeLines.push(...propertyLines);
	typeLines.push('}');
}

/**
 * Process a single class from the JSON-LD mapping.
 */
async function processClass(jsonLdMapping, csvMapping, id, item, generatedTypes) {
	const importLines = [];
	const typeLines = [];
	const typeName = stripUnece(id);
	const interfaceName = `IUnece${typeName}`;
	const description = item['rdfs:comment'] ?? 'No description available.';
	const props = [];
	const imports = [];
	const isDeprecated = isItemDeprecated(item);

	process.stdout.write(`  Processing type: ${id}\n`);

	for (const propItem of item.properties ?? []) {
		const propKey = propItem['rdfs:label'];

		const metaDescriptionIndex = propItem['unece:cefactElementMetadata']?.findIndex(
			m => m['unece:domainName'] === typeName
		);

		const propDescription =
			metaDescriptionIndex >= 0
				? propItem['unece:cefactElementMetadata'][metaDescriptionIndex]['rdfs:comment']
				: (propItem['rdfs:comment'] ?? 'No description available.');

		let propType = propItem['schema:rangeIncludes']['@id'];

		const titles = getCCTSTitles(propItem);
		let csvMappingProp;

		for (const title of titles) {
			// let cleanTitle = title.replace(/[^\d.A-Za-z]/g, '');
			const titleParts = title.split('.').map(t => t.trim());
			const objectClassTermParts = titleParts[0].split('_');
			const objectClassTerm = objectClassTermParts[objectClassTermParts.length - 1];
			const propertyTermParts = titleParts[1].split('_');
			const propertyTerm = propertyTermParts[propertyTermParts.length - 1];
			const representationTermParts = titleParts[2].split('_');
			const representationTerm = representationTermParts[representationTermParts.length - 1];
			const cleanTitle = [objectClassTerm, propertyTerm, representationTerm]
				.filter(t => t.trim().length > 0)
				.join('.')
				.replace(/[ -]/g, '');

			if (csvMapping[cleanTitle]) {
				csvMappingProp = csvMapping[cleanTitle];
			} else {
				throw new Error(`No CSV mapping found for CCTS title: ${cleanTitle} in type ${typeName}`);
			}
		}

		const isRequired = csvMappingProp?.occurrenceMin === '1';
		const isArray = csvMappingProp?.occurrenceMax === 'unbounded';
		let isPropDeprecated = false;

		const jsonLdPropMapping = jsonLdMapping[propType];
		const isLimited = propItem?.maxItems === 1;

		if (propType.startsWith('unece:')) {
			if (!jsonLdPropMapping) {
				throw new Error(
					`No JSON-LD mapping found for property type: ${propType} for property ${propKey} in type ${typeName}`
				);
			}

			const isList = Array.isArray(jsonLdPropMapping.values);
			isPropDeprecated = isItemDeprecated(jsonLdPropMapping);

			if (propType.endsWith('List') && !isList) {
				// If its a list type but has no values, we treat it as a string property
				propType = 'string';
			} else {
				const propImportType = isList
					? `Unece${stripUnece(propType)}`
					: `IUnece${stripUnece(propType)}`;

				imports.push({
					type: propImportType,
					outputDir: isList ? LIST_OUTPUT_DIR : CLASS_OUTPUT_DIR
				});

				if (isArray && !isLimited) {
					propType = `${propImportType}[]`;
				} else {
					propType = propImportType;
				}
			}
		} else if (propType.startsWith('xsd:')) {
			const typeMap = {
				'xsd:string': 'string',
				'xsd:dateTime': 'string',
				'xsd:date': 'string',
				'xsd:decimal': 'string',
				'xsd:boolean': 'boolean',
				'xsd:base64Binary': 'string'
			};

			if (!typeMap[propType]) {
				throw new Error(
					`Unknown xsd property type: ${propType} for property ${propKey} in type ${typeName}`
				);
			}

			propType = typeMap[propType];
		}

		props.push({
			key: propKey,
			description: propDescription,
			type: propType,
			required: isRequired ?? false,
			see: `https://vocabulary.uncefact.org/${propKey}`,
			isDeprecated: isPropDeprecated
		});
	}

	await generateClass(
		typeName,
		interfaceName,
		description,
		props,
		imports,
		importLines,
		typeLines,
		isDeprecated
	);

	await writeCodeFile(CLASS_OUTPUT_DIR, interfaceName, importLines, typeLines);

	generatedTypes.push({
		typeName,
		fileName: interfaceName,
		outputDir: CLASS_OUTPUT_DIR,
		description
	});
}

/**
 * Get CCTS titles from JSON-LD item.
 */
function getCCTSTitles(jsonLdItem) {
	const metaData = jsonLdItem['unece:cefactElementMetadata'];
	const titles = [];

	if (Array.isArray(metaData)) {
		for (const metaDataItem of metaData) {
			if (metaDataItem['@id']) {
				titles.push(metaDataItem['@id'].replace('cefact:', ''));
			}
		}
	}

	return titles;
}

/**
 * Process a list class from the JSON-LD mapping.
 */
async function processList(jsonLdMapping, jsonSchemaMapping, id, item, generatedTypes) {
	const description = item['rdfs:comment'] ?? 'No description available.';

	if (!Array.isArray(item.values)) {
		process.stdout.write(`  Skipping list with no values: ${id}\n`);
	} else {
		const typeName = stripUnece(id);

		const typeLines = [];

		const listIdDeprecated = isItemDeprecated(item);

		typeLines.push('');
		typeLines.push(
			...createComment(
				description,
				'',
				`https://vocabulary.uncefact.org/${typeName}`,
				listIdDeprecated
			)
		);
		typeLines.push('// eslint-disable-next-line @typescript-eslint/naming-convention');
		typeLines.push(`export const Unece${typeName} = {`);

		const existingLabels = [];
		for (let i = 0; i < (item.values ?? []).length; i++) {
			const valueItem = (item.values ?? [])[i];
			const value = valueItem['rdf:value'];
			const commentParts = Array.isArray(valueItem['rdfs:comment'])
				? valueItem['rdfs:comment']
				: [valueItem['rdfs:comment']];
			const mainComment = commentParts[0];
			let label = pascalCase(mainComment.replace(/\([^)]*\)/, '')).replace(/[^\dA-Za-z]/g, '');
			if (!existingLabels.includes(label)) {
				existingLabels.push(label);
			} else {
				label = `${label}${pascalCase(value).replace(/[^\dA-Za-z]/g, '')}`;
			}
			if (label.length > 80) {
				const words = wordsSplit(label);
				const shortLabel = [];
				for (const word of words) {
					if (shortLabel.join('').length + word.length <= 80) {
						shortLabel.push(word);
					}
				}
				label = shortLabel.join('');
			}
			if (/^\d/.test(label)) {
				label = `"${label}"`;
			}
			typeLines.push(
				...createComment(
					[mainComment ? `${mainComment}: ${value}` : value].concat(commentParts.slice(1)),
					'\t',
					undefined,
					commentParts.join('').toLowerCase().includes('deprecated')
				)
			);
			if (i < (item.values ?? []).length - 1) {
				typeLines.push(`\t${label}: "unece:${typeName}#${value}",`);
				typeLines.push('');
			} else {
				typeLines.push(`\t${label}: "unece:${typeName}#${value}"`);
			}
		}
		typeLines.push('} as const;');
		typeLines.push('');
		typeLines.push(
			...createComment(
				description,
				'',
				`https://vocabulary.uncefact.org/${typeName}`,
				listIdDeprecated
			)
		);
		const exportText = `export type Unece${typeName} = (typeof Unece${typeName})[keyof typeof Unece${typeName}];`;
		typeLines.push(exportText);

		await writeCodeFile(LIST_OUTPUT_DIR, `unece${typeName}`, [], typeLines);

		generatedTypes.push({
			typeName,
			fileName: `unece${typeName}`,
			outputDir: LIST_OUTPUT_DIR,
			description
		});
	}
}

/**
 * Generate import lines.
 */
function generateImportLines(outputDir, imports, importLines) {
	const importsPerDir = {};
	const sameDirImports = [];
	const importedTypes = [];
	const packageImports = [];

	for (const importType of imports) {
		if (!importedTypes.includes(importType.type)) {
			importedTypes.push(importType.type);

			if (importType.package) {
				packageImports.push(importType);
			} else if (outputDir === importType.outputDir) {
				sameDirImports.push(importType.type);
			} else {
				importsPerDir[importType.outputDir] ??= [];
				importsPerDir[importType.outputDir].push(importType.type);
			}
		}
	}

	packageImports.sort((a, b) => a.package.localeCompare(b.package, 'en', { sensitivity: 'case' }));

	importLines.push(
		...packageImports.map(imp => `import type { ${imp.type} } from "${imp.package}";`)
	);

	sameDirImports.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'case' }));

	importLines.push(
		...sameDirImports.map(
			type =>
				`import type { ${type} } from "./${/^I[A-Z]/.test(type) ? type : camelCase(type)}.js";`
		)
	);

	const sortedKeys = Object.keys(importsPerDir);
	sortedKeys.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'case' }));

	for (const dir of sortedKeys) {
		const sortedImports = importsPerDir[dir];
		sortedImports.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'case' }));
		for (const type of sortedImports) {
			importLines.push(
				`import type { ${type} } from "../${dir}/${/^I[A-Z]/.test(type) ? type : camelCase(type)}.js";`
			);
		}
	}
}

/**
 * Generate UneceTypes constant file
 */
async function generateUneceTypes(generatedTypes) {
	const lines = fileHeaderLines();
	lines.push('/**');
	lines.push(' * The types of UNECE data.');
	lines.push(' */');
	lines.push('// eslint-disable-next-line @typescript-eslint/naming-convention');
	lines.push('export const UneceTypes = {');

	// Sort interface names alphabetically
	const sortedNames = generatedTypes.sort((a, b) => a.typeName.localeCompare(b.typeName));

	for (let i = 0; i < sortedNames.length; i++) {
		const t = sortedNames[i];
		lines.push(...createComment(t.description, '\t'));
		const comma = i < sortedNames.length - 1 ? ',' : '';
		lines.push(`\t${t.typeName}: "${t.typeName}"${comma}`);
		if (i < sortedNames.length - 1) {
			lines.push('');
		}
	}

	lines.push('} as const;');
	lines.push('');
	lines.push('/**');
	lines.push(' * The types of UNECE data.');
	lines.push(' */');
	lines.push('export type UneceTypes = (typeof UneceTypes)[keyof typeof UneceTypes];');
	lines.push('');

	await writeFile(path.join(BASE_OUTPUT_DIR, 'uneceTypes.ts'), lines.join('\n'));
}

/**
 * Update ts-to-schema.json file
 */
async function generateTsToSchemaJson(generatedTypes) {
	const tsToSchemaPath = path.join(__dirname, '..', 'ts-to-schema.json');

	const existingContent = await loadJSON(tsToSchemaPath);

	const types = generatedTypes
		.map(t => `./src/models/${t.outputDir}/${t.fileName}.ts`)
		.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'case' }));

	existingContent.baseUrl = 'https://schema.twindev.org/unece/';
	existingContent.types = types;
	existingContent.externalReferences = {};
	existingContent.autoExpandTypes = ['UneceContextType'];

	await writeFile(tsToSchemaPath, `${JSON.stringify(existingContent, undefined, '\t')}\n`, 'utf8');
}

/**
 * Load and parse JSON file.
 */
async function loadJSON(filePath) {
	const content = await fs.readFile(filePath, 'utf8');

	return JSON.parse(content);
}

/**
 * Common file header lines used in generated files.
 */
function fileHeaderLines() {
	const lines = [];
	lines.push('// Copyright 2025 IOTA Stiftung.');
	lines.push('// SPDX-License-Identifier: Apache-2.0.');
	lines.push('/* cSpell:disable */');
	lines.push(
		'/* This file is auto-generated with the generateInterfaces script, do not edit manually. */'
	);
	return lines;
}

/**
 * Write code file.
 */
async function writeCodeFile(outputDir, typeName, importLines, typeLines) {
	const outputLines = fileHeaderLines();

	outputLines.push(...importLines);
	outputLines.push(...typeLines);

	outputLines.push('');

	await mkdir(path.join(BASE_OUTPUT_DIR, outputDir), { recursive: true });
	await writeFile(
		path.join(BASE_OUTPUT_DIR, outputDir, `${typeName}.ts`),
		outputLines.join('\n'),
		'utf8'
	);
}

/**
 * Create a comment with word wrapping.
 */
function createComment(text, prefix = '', url = '', isDeprecated = false) {
	const commentLines = [];
	commentLines.push(`${prefix}/**`);
	if (Array.isArray(text)) {
		for (const line of text) {
			commentLines.push(...createCommentInner(line, prefix));
		}
	} else {
		commentLines.push(...createCommentInner(text, prefix));
	}
	if (url) {
		commentLines.push(`${prefix} * @see ${url}`);
	}
	if (isDeprecated) {
		commentLines.push(`${prefix} * @deprecated`);
	}
	commentLines.push(`${prefix} */`);
	return commentLines;
}

/**
 * Create a comment inner with word wrapping.
 */
function createCommentInner(text, prefix = '') {
	const commentLines = [];

	text = text.replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();

	if (!text.endsWith('.')) {
		text = `${text}.`;
	}
	commentLines.push(...splitTextByWords(text).map(line => `${prefix} * ${line}`));
	return commentLines;
}

/**
 * Split text into lines by words.
 */
function splitTextByWords(text, length = MAX_LINE_LENGTH) {
	const words = text.split(/\s+/); // split into words
	const result = [];
	let currentLine = '';

	for (const word of words) {
		if (`${currentLine} ${word}`.trim().length > length) {
			result.push(currentLine.trim());
			currentLine = word;
		} else {
			currentLine += ` ${word}`;
		}
	}

	if (currentLine) {
		result.push(currentLine.trim());
	}

	return result;
}

/**
 * Camel case all the words.
 * @param input The input to convert.
 * @returns The camel case version of the input.
 */
function camelCase(input) {
	const output = input;
	const words = wordsSplit(output);
	return words.length === 0
		? ''
		: `${words[0].toLowerCase()}${words
				.slice(1)
				.map(w => `${w[0].toUpperCase()}${w.slice(1).toLowerCase()}`)
				.join('')}`;
}

/**
 * Pascal case all the words.
 * @param input The input to convert.
 * @param stripInterfacePrefix Strip interface prefixes.
 * @returns The pascal case version of the input.
 */
function pascalCase(input) {
	const output = input;
	return wordsSplit(output)
		.map(w => `${w[0].toUpperCase()}${w.slice(1).toLowerCase()}`)
		.join('');
}

/**
 * Split a string into words.
 * @param input The input to split.
 * @returns The string split into words.
 */
function wordsSplit(input) {
	return (
		input
			.replace(/([A-Z])/g, ' $1')
			.trim()
			.match(/[^\u0000-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007F]+/g) ?? []
	);
}

/**
 * Main generation function
 */
async function main() {
	const jsonLdMapping = await loadJsonLdMapping();
	await loadJsonSchemaMapping(jsonLdMapping);

	const csvData = await loadCsvData();

	const csvMapping = {};

	for (const row of csvData) {
		const cctsKey = [
			row.objectClassTerm,
			row.propertyTerm,
			row.representationTerm,
			row.associatedObjectClass
		]
			.filter(t => t.trim().length > 0)
			.join('.')
			.replace(/ /g, '')
			.replace(/-([a-z])/gi, (_, char) => char.toUpperCase());

		csvMapping[cctsKey] = row;
	}

	const generatedTypes = [];
	for (const id of Object.keys(jsonLdMapping)) {
		const item = jsonLdMapping[id];
		const isList = Array.isArray(item.values) || id.endsWith('List');

		if (isJsonLdClass(item)) {
			if (!isList) {
				await processClass(jsonLdMapping, csvMapping, id, item, generatedTypes);
			} else if (isList) {
				await processList(jsonLdMapping, csvMapping, id, item, generatedTypes);
			}
		}
	}

	process.stdout.write('✅ Update src/models/uneceTypes\n');
	await generateUneceTypes(generatedTypes);

	process.stdout.write('✅ Update src/index.ts with generated model exports\n');
	await generateIndexFile();

	process.stdout.write('✅ Update ts-to-schema.json with generated model exports\n');
	await generateTsToSchemaJson(generatedTypes);

	process.stdout.write('\n✅ Interface generation complete!\n');
}

main();
