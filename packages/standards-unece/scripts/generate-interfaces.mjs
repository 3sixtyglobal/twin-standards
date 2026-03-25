// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
import fs, { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateIndexFile } from './generate-index-file.mjs';

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
const TYPE_CODE_OUTPUT_DIR = 'typeCodes';
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
					const existingRangeIncludes = jsonLdMapping[id]?.rangeIncludes;

					jsonLdMapping[id] = jsonLdItem;
					jsonLdMapping[id].values = existingValues;
					jsonLdMapping[id].properties = existingProperties;
					jsonLdMapping[id].rangeIncludes = existingRangeIncludes;

					if (isProperty) {
						if (jsonLdItem['schema:domainIncludes']) {
							const domainIncludes = Array.isArray(jsonLdItem['schema:domainIncludes'])
								? jsonLdItem['schema:domainIncludes'].map(di => di['@id'])
								: [jsonLdItem['schema:domainIncludes']['@id']];

							for (const domainInclude of domainIncludes) {
								jsonLdMapping[domainInclude] ??= {};
								jsonLdMapping[domainInclude].properties ??= [];
								jsonLdMapping[domainInclude].properties.push(jsonLdItem);
							}
						}
						if (jsonLdItem['schema:rangeIncludes']) {
							const rangeIncludes = Array.isArray(jsonLdItem['schema:rangeIncludes'])
								? jsonLdItem['schema:rangeIncludes'].map(di => di['@id'])
								: [jsonLdItem['schema:rangeIncludes']['@id']];

							for (const rangeInclude of rangeIncludes) {
								jsonLdMapping[rangeInclude] ??= {};
								jsonLdMapping[rangeInclude].rangeIncludes ??= [];
								jsonLdMapping[rangeInclude].rangeIncludes.push(jsonLdItem);
							}
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
 * Load csv mapping.
 */
async function loadCsvData() {
	const content = await fs.readFile(path.join(SOURCE_DATA_DIR, 'unece-reduced.csv'), 'utf8');
	const lines = content.split(/\r?\n/).filter(Boolean);

	const csvMapping = {};

	const headers = ['dictionaryEntryName', 'occurrenceMin', 'occurrenceMax'];
	for (let i = 0; i < lines.length; i++) {
		const values = lines[i].split(',');
		const obj = {};
		if (values.length === headers.length) {
			for (let j = 0; j < headers.length; j++) {
				obj[headers[j]] = values[j] !== undefined ? values[j].trim() : '';
			}

			// dictionaryEntryName have spaces and some have hyphens followed by lowercase letters
			// we need to convert them to match the JSON-LD labels which are used as keys in the mapping
			obj.dictionaryEntryName = obj.dictionaryEntryName
				.replace(/ /g, '')
				.replace(/-([a-z])/g, (_, ch) => `-${ch.toUpperCase()}`);

			csvMapping[obj.dictionaryEntryName] = obj;
		}
	}

	return csvMapping;
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
 * Check if a code list includes a mutually-defined value (ZZZ).
 */
function hasListMutuallyDefinedValue(item) {
	return (
		Array.isArray(item?.values) && item.values.some(valueItem => valueItem?.['rdf:value'] === 'ZZZ')
	);
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
		propertyLines.push(
			...createComment(`${prop.description}`, '\t', prop.see, prop.isDeprecated, prop.format)
		);
		const propString = `\t${prop.key}${prop.required ? '' : '?'}: ${prop.type};`;
		propertyLines.push(propString);
	}

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
	typeLines.push(`export interface ${interfaceName} {`);
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

		const cctsTitle = getCCTSTitle(typeName, propItem, propKey);
		let csvMappingProp;
		if (csvMapping[cctsTitle]) {
			csvMappingProp = csvMapping[cctsTitle];
		}

		const isIdentifier = cctsTitle?.endsWith('.Identifier');
		const isDateTime = cctsTitle?.endsWith('.DateTime');

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
				const shouldAllowString = isList && hasListMutuallyDefinedValue(jsonLdPropMapping);
				const propBaseType = shouldAllowString ? `${propImportType} | string` : propImportType;

				imports.push({
					type: propImportType,
					outputDir: isList ? LIST_OUTPUT_DIR : CLASS_OUTPUT_DIR
				});

				if (isArray && !isLimited) {
					propType = shouldAllowString ? `(${propBaseType})[]` : `${propImportType}[]`;
				} else {
					propType = propBaseType;
				}
			}
		} else if (propType.startsWith('xsd:')) {
			const typeMap = {
				'xsd:string': 'string',
				'xsd:dateTime': 'string',
				'xsd:date': 'string',
				// Decimal type to string mapping is deliberate to avoid precision issues in JavaScript
				// See https://unece.org/sites/default/files/2023-11/API-TECH-SPEC_JSON_Schema_NDR_version1p0.pdf
				// section 3.5.1 Primitive Data Type
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

		// Perform custom substitutions for typeCodes
		if (propKey === 'typeCode' && (item.rangeIncludes ?? []).length > 0) {
			propType = `Unece${typeName}TypeCodeList | string`;
			imports.push({
				type: `Unece${typeName}TypeCodeList`,
				outputDir: TYPE_CODE_OUTPUT_DIR
			});
		}

		if (isIdentifier) {
			propType = 'string | IJsonLdValueObject';
			imports.push({
				type: 'IJsonLdValueObject',
				package: '@twin.org/data-json-ld'
			});
		}

		props.push({
			key: propKey,
			description: propDescription,
			type: propType,
			required: isRequired ?? false,
			see: `https://vocabulary.uncefact.org/${propKey}`,
			isDeprecated: isPropDeprecated,
			format: isDateTime ? 'date-time' : ''
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
function getCCTSTitle(typeName, jsonLdItem) {
	if (Array.isArray(jsonLdItem['unece:cefactElementMetadata'])) {
		const metaElement = jsonLdItem['unece:cefactElementMetadata'].find(
			me => me['unece:domainName'] === typeName
		);
		if (metaElement) {
			return metaElement['@id'].replace('cefact:', '');
		}
	}
}

/**
 * Process a list class from the JSON-LD mapping.
 */
async function processList(id, item, generatedTypes, locales) {
	const description = item['rdfs:comment'] ?? 'No description available.';

	if (!Array.isArray(item.values)) {
		process.stdout.write(`  Skipping list with no values: ${id}\n`);
	} else {
		const typeName = stripUnece(id);

		const itemLocales = {};

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

			itemLocales[`unece:${typeName}#${value}`] = mainComment;
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

		locales[typeName] = itemLocales;

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
 * Process a range include list from the JSON-LD mapping.
 */
async function processRangeList(rangeIncludeTypeName, item, generatedTypes, locales) {
	const baseTypeName = stripUnece(item['@id']);
	const rangeTypeName = rangeIncludeTypeName;

	const itemLocales = {};

	const description = `Values for Unece${baseTypeName} typeCode property.`;
	process.stdout.write(`  Processing range include list: ${rangeTypeName}\n`);

	const typeLines = [];

	const listIdDeprecated = isItemDeprecated(item);

	typeLines.push('');
	typeLines.push(
		...createComment(
			description,
			'',
			`https://vocabulary.uncefact.org/${baseTypeName}`,
			listIdDeprecated
		)
	);
	typeLines.push('// eslint-disable-next-line @typescript-eslint/naming-convention');
	typeLines.push(`export const Unece${rangeTypeName} = {`);

	for (let i = 0; i < (item.rangeIncludes ?? []).length; i++) {
		const valueItem = (item.rangeIncludes ?? [])[i];
		const itemId = valueItem['@id'];
		const label = valueItem['rdfs:label'];
		const commentParts = Array.isArray(valueItem['rdfs:comment'])
			? valueItem['rdfs:comment']
			: [valueItem['rdfs:comment']];
		const mainComment = commentParts[0];
		itemLocales[itemId] = mainComment ?? itemId;
		itemLocales[`${itemId}_label`] = generateLabel(label);
		typeLines.push(
			...createComment(
				[mainComment ? mainComment : itemId].concat(commentParts.slice(1)),
				'\t',
				`https://vocabulary.uncefact.org/${label}`,
				commentParts.join('').toLowerCase().includes('deprecated')
			)
		);
		if (i < (item.rangeIncludes ?? []).length - 1) {
			typeLines.push(`\t${pascalCase(label)}: "${itemId}",`);
			typeLines.push('');
		} else {
			typeLines.push(`\t${pascalCase(label)}: "${itemId}"`);
		}
	}
	typeLines.push('} as const;');
	typeLines.push('');
	typeLines.push(
		...createComment(
			description,
			'',
			`https://vocabulary.uncefact.org/${baseTypeName}`,
			listIdDeprecated
		)
	);
	const exportText = `export type Unece${rangeTypeName} = (typeof Unece${rangeTypeName})[keyof typeof Unece${rangeTypeName}];`;
	typeLines.push(exportText);

	locales[rangeTypeName] = itemLocales;

	await writeCodeFile(TYPE_CODE_OUTPUT_DIR, `unece${rangeTypeName}`, [], typeLines);

	generatedTypes.push({
		typeName: rangeTypeName,
		fileName: `unece${rangeTypeName}`,
		outputDir: TYPE_CODE_OUTPUT_DIR,
		description
	});
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
 * Generate UneceDataTypes file
 */
async function generateUneceDataTypes(generatedTypes) {
	const outputPath = path.join(__dirname, '..', 'src', 'dataTypes', 'uneceDataTypes.ts');

	const sortedTypes = [...generatedTypes, { typeName: 'ContextType' }].sort((a, b) =>
		a.typeName.localeCompare(b.typeName)
	);

	const lines = fileHeaderLines();

	lines.push('import { DataTypeHelper } from "@twin.org/data-core";');
	lines.push('import { JsonLdProcessor } from "@twin.org/data-json-ld";');
	lines.push('import { UneceContexts } from "../models/uneceContexts.js";');
	lines.push('import { UneceTypes } from "../models/uneceTypes.js";');

	for (const t of sortedTypes) {
		lines.push(
			`import Unece${t.typeName}Schema from "../schemas/Unece${t.typeName}.json" with { type: "json" };`
		);
	}

	lines.push('');
	lines.push('/**');
	lines.push(' * Handle all the data types for UN/CEFACT.');
	lines.push(' */');
	lines.push('export class UneceDataTypes {');
	lines.push('\t/**');
	lines.push('\t * Register the JSON-LD Redirects.');
	lines.push('\t */');
	lines.push('\tpublic static registerRedirects(): void {');
	lines.push('\t\tJsonLdProcessor.addRedirect(');
	lines.push('\t\t\t/https:\\/\\/vocabulary\\.uncefact\\.org\\/?/,');
	lines.push('\t\t\tUneceContexts.JsonLdContext');
	lines.push('\t\t);');
	lines.push('\t}');
	lines.push('');
	lines.push('\t/**');
	lines.push('\t * Register all the data types.');
	lines.push('\t */');
	lines.push('\tpublic static registerTypes(): void {');
	lines.push('\t\tconst types = [');

	for (let i = 0; i < sortedTypes.length; i++) {
		const t = sortedTypes[i];
		lines.push('\t\t\t{');
		if (t.typeName !== 'ContextType') {
			lines.push(`\t\t\t\ttype: UneceTypes.${t.typeName},`);
		} else {
			lines.push('\t\t\t\ttype: "UneceContextType",');
		}
		lines.push(`\t\t\t\tschema: Unece${t.typeName}Schema`);
		lines.push('\t\t\t},');
	}

	lines.push('\t\t\t{');
	lines.push('\t\t\t\ttype: "ContextType",');
	lines.push('\t\t\t\tschema: UneceContextTypeSchema');
	lines.push('\t\t\t}');

	lines.push('\t\t];');
	lines.push('');
	lines.push(
		'\t\tDataTypeHelper.registerTypes(UneceContexts.Namespace, UneceContexts.JsonLdContext, types);'
	);
	lines.push('\t\tDataTypeHelper.registerTypes(');
	lines.push('\t\t\tUneceContexts.JsonSchemaNamespace,');
	lines.push('\t\t\tUneceContexts.JsonLdContext,');
	// False positive
	// eslint-disable-next-line no-template-curly-in-string
	lines.push('\t\t\ttypes.map(t => ({ type: `Unece${t.type}`, schema: t.schema }))');
	lines.push('\t\t);');
	lines.push('\t}');
	lines.push('}');
	lines.push('');

	await writeFile(outputPath, lines.join('\n'), 'utf8');
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
	existingContent.types = ['./src/models/uneceContextType.ts', ...types];
	existingContent.externalReferences = {
		'IJsonLd(.*)': 'https://schema.twindev.org/json-ld/JsonLd$1'
	};
	existingContent.autoExpandTypes = ['UneceContextType'];

	await saveJSON(tsToSchemaPath, existingContent);
}

/**
 * Update the locales
 */
async function generateLocales(locales) {
	const localesPath = path.join(__dirname, '..', 'locales', 'en.json');

	const existingContent = await loadJSON(localesPath);

	existingContent.codeLists = {};
	const codeListKeys = Object.keys(locales);
	const sortedKeys = codeListKeys.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'case' }));
	for (const codeListKey of sortedKeys) {
		existingContent.codeLists[camelCase(codeListKey)] = locales[codeListKey];
	}

	await saveJSON(localesPath, existingContent);

	const lines = fileHeaderLines();
	lines.push('/**');
	lines.push(' * The types of UNECE code lists.');
	lines.push(' * @see https://vocabulary.uncefact.org/code-lists');
	lines.push(' */');
	lines.push('// eslint-disable-next-line @typescript-eslint/naming-convention');
	lines.push('export const UneceCodeLists = {');

	for (let i = 0; i < sortedKeys.length; i++) {
		const t = sortedKeys[i];
		lines.push(...createComment(t, '\t', `https://vocabulary.uncefact.org/${t}`));
		const comma = i < sortedKeys.length - 1 ? ',' : '';
		lines.push(`\t${t}: "unece:${t}"${comma}`);
		if (i < sortedKeys.length - 1) {
			lines.push('');
		}
	}

	lines.push('} as const;');
	lines.push('');
	lines.push('/**');
	lines.push(' * The types of UNECE code lists.');
	lines.push(' * @see https://vocabulary.uncefact.org/code-lists');
	lines.push(' */');
	lines.push('export type UneceCodeLists = (typeof UneceCodeLists)[keyof typeof UneceCodeLists];');
	lines.push('');

	await writeFile(path.join(BASE_OUTPUT_DIR, 'uneceCodeLists.ts'), lines.join('\n'));
}

/**
 * Load and parse JSON file.
 */
async function loadJSON(filePath) {
	const content = await fs.readFile(filePath, 'utf8');

	return JSON.parse(content);
}

/**
 * Save JSON file with pretty formatting.
 */
async function saveJSON(filePath, data) {
	await writeFile(filePath, `${JSON.stringify(data, undefined, '\t')}\n`, 'utf8');
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
function createComment(text, prefix = '', url = '', isDeprecated = false, format = '') {
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
	if (format?.length) {
		commentLines.push(`${prefix} * @json-schema format:${format}`);
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
 * Generate a human-friendly label from a camelCase code.
 * Extends the heuristic from FormatHelper.formatString() in supply-chain-service
 * with acronym-boundary splitting so that e.g. "IOTDevice" becomes "IOT Device".
 * e.g. "arrivalEvent" -> "Arrival Event", "attachedIOTDevice" -> "Attached IOT Device"
 * @param value The camelCase code value (e.g. from rdfs:label).
 * @returns The formatted label string.
 */
function generateLabel(value) {
	if (!value) {
		return '';
	}

	let s = value.trim();
	if (s.includes(':')) {
		s = s.split(':').pop() ?? s;
	}

	s = s
		.replace(/[_-]+/g, ' ')
		.replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
		.replace(/([\da-z])([A-Z])/g, '$1 $2')
		.replace(/\s+/g, ' ')
		.trim();

	return s
		.split(' ')
		.map(w => {
			if (w.length > 1 && w === w.toUpperCase()) {
				return w;
			}
			return w.length ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : w;
		})
		.join(' ');
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

	const csvMapping = await loadCsvData();

	const locales = {};

	const generatedTypes = [];
	for (const id of Object.keys(jsonLdMapping)) {
		const item = jsonLdMapping[id];
		const isList = Array.isArray(item.values) || id.endsWith('List');

		if (isJsonLdClass(item)) {
			if (!isList) {
				await processClass(jsonLdMapping, csvMapping, id, item, generatedTypes);

				if (
					item.properties?.find(p => p['@id'] === 'unece:typeCode') &&
					(item.rangeIncludes ?? []).length > 0
				) {
					await processRangeList(`${stripUnece(id)}TypeCodeList`, item, generatedTypes, locales);
				}
			} else if (isList) {
				await processList(id, item, generatedTypes, locales);
			}
		}
	}

	process.stdout.write('✅ Update src/models/uneceTypes\n');
	await generateUneceTypes(generatedTypes);

	process.stdout.write('✅ Update src/dataTypes/uneceDataTypes\n');
	await generateUneceDataTypes(generatedTypes);

	process.stdout.write('✅ Update src/index.ts with generated model exports\n');
	await generateIndexFile();

	process.stdout.write('✅ Update ts-to-schema.json with generated model exports\n');
	await generateTsToSchemaJson(generatedTypes);

	process.stdout.write('✅ Update locales\n');
	await generateLocales(locales);

	process.stdout.write('\n✅ Interface generation complete!\n');
}

main();
