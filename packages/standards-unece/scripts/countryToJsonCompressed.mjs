// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { createReadStream } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createInterface } from 'node:readline';
import { fileURLToPath } from 'node:url';
import { Compression } from '@twin.org/core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const countriesDir = path.join(__dirname, '../src-data/locode/countries/csv');
const countriesJsonDir = path.join(__dirname, '../src-data/locode/countries/json');
const compressedDir = path.join(__dirname, '../src/data/countries');
const subdivisionsJsonDir = path.join(__dirname, '../src-data/locode/subdivisions/json');
const subdivisionsCompressedDir = path.join(__dirname, '../src/data/subdivisions');
const countriesJsonldFile = path.join(__dirname, '../src-data/locode/unlocode-countries.jsonld');
const functionsJsonldFile = path.join(__dirname, '../src-data/locode/unlocode-functions.jsonld');
const countriesTsListFile = path.join(__dirname, '../src/models/locode/unLocodeCountriesList.ts');
const countriesTsFile = path.join(__dirname, '../src/models/locode/unLocodeCountries.ts');
const functionsTsListFile = path.join(__dirname, '../src/models/locode/unLocodeFunctionsList.ts');
const functionsTsFile = path.join(__dirname, '../src/models/locode/unLocodeFunctions.ts');

/**
 * Parse a CSV line handling quoted fields properly
 */
function parseCSVLine(line) {
	const result = [];
	let current = '';
	let inQuotes = false;

	for (let i = 0; i < line.length; i++) {
		const char = line[i];
		const nextChar = line[i + 1];

		if (char === '"') {
			if (inQuotes && nextChar === '"') {
				// Escaped quote
				current += '"';
				i++; // Skip next quote
			} else {
				// Toggle quote state
				inQuotes = !inQuotes;
			}
		} else if (char === ',' && !inQuotes) {
			// Field separator
			result.push(current.trim());
			current = '';
		} else {
			current += char;
		}
	}

	// Add the last field
	result.push(current.trim());

	return result;
}

/**
 * Parse geo-coordinates from remarks field
 * Format: DDMMN/S DDDMME/W (e.g., "4230N 00131E")
 * Converts to decimal degrees
 */
function parseGeoCoordinates(remarks) {
	if (!remarks || remarks.trim() === '') {
		return null;
	}

	const parts = remarks.trim().split(/\s+/);
	if (parts.length !== 2) {
		return null;
	}

	const latStr = parts[0];
	const lngStr = parts[1];

	// Parse latitude (DDMMN/S)
	const latMatch = latStr.match(/^(\d{2})(\d{2})([NS])$/);
	if (!latMatch) {
		return null;
	}

	const latDegrees = Number.parseInt(latMatch[1], 10);
	const latMinutes = Number.parseInt(latMatch[2], 10) / 60;
	const latDirection = latMatch[3];
	let lat = latDegrees + latMinutes;
	if (latDirection === 'S') {
		lat = -lat;
	}

	// Parse longitude (DDDMME/W)
	const lngMatch = lngStr.match(/^(\d{3})(\d{2})([EW])$/);
	if (!lngMatch) {
		return null;
	}

	const lngDegrees = Number.parseInt(lngMatch[1], 10);
	const lngMinutes = Number.parseInt(lngMatch[2], 10) / 60;
	const lngDirection = lngMatch[3];
	let lng = lngDegrees + lngMinutes;
	if (lngDirection === 'W') {
		lng = -lng;
	}

	return {
		lat: Number.parseFloat(lat.toFixed(6)),
		lng: Number.parseFloat(lng.toFixed(6))
	};
}

/**
 * Parse function field and extract function codes
 * Converts digits to "unlcdf:X" format
 * e.g., "--34-6--" becomes "346"]
 */
function parseFunctionCodes(functionField) {
	if (!functionField || functionField.trim() === '') {
		return [];
	}

	// Extract all digits from the field
	const digits = functionField.match(/\d/g);
	if (!digits || digits.length === 0) {
		return [];
	}

	// Convert to unlcdf format and remove duplicates
	return [...new Set(digits)];
}

/**
 * Convert CSV row to object with UN/LOCODE field names
 * Based on the UNLOCODE format columns
 */
function csvRowToObject(fields) {
	// Remove leading/trailing quotes from fields
	const cleanFields = fields.map(f => f.replace(/^"|"$/g, ''));

	const coordinatesField = cleanFields[10] || '';
	const functionField = cleanFields[6] || '';
	const obj = {
		// countryCode: cleanFields[1] || '',
		locationCode: cleanFields[2] || '',
		label: cleanFields[3] || ''
		// subdivisionCode: cleanFields[5] || ''
		// status: cleanFields[7] || '',
		// changeIndicator: cleanFields[8] || '',
		// remarks: cleanFields[9] || '',
		// location: coordinatesField,
	};

	if (cleanFields[5].length > 0) {
		obj.subdivisionCode = cleanFields[5];
	}

	if (cleanFields[4] !== cleanFields[3] && cleanFields[4]) {
		obj.labelWithDiacritics = cleanFields[4] || '';
	}

	// Parse function codes and create array
	const functionCodes = parseFunctionCodes(functionField);
	if (functionCodes.length > 0) {
		obj.function = functionCodes.join('');
	}

	// Parse geo-coordinates from remarks if available
	const geoCoordinates = parseGeoCoordinates(coordinatesField);
	if (geoCoordinates) {
		obj.lat = geoCoordinates.lat;
		obj.lng = geoCoordinates.lng;
	}

	return obj;
}

/**
 * Process a single CSV file and convert to JSON
 */
async function processCsvFile(csvFilePath) {
	return new Promise((resolve, reject) => {
		const fileName = path.basename(csvFilePath, '.csv');
		const jsonFilePath = path.join(countriesJsonDir, `${fileName}.json`);

		const rows = [];
		const fileStream = createReadStream(csvFilePath, { encoding: 'utf8' });
		const rl = createInterface({
			input: fileStream,
			crlfDelay: Infinity
		});

		rl.on('line', line => {
			if (line.trim()) {
				// Skip empty lines and the country header line (first line without location code)
				const fields = parseCSVLine(line);
				if (fields[2]) {
					// Has a location code, so it's a data row
					const obj = csvRowToObject(fields);
					rows.push(obj);
				}
			}
		});

		rl.on('close', async () => {
			// Write JSON file with compression
			const jsonData = JSON.stringify(rows, null, 2);

			// Write uncompressed JSON
			await fs.writeFile(jsonFilePath, jsonData, 'utf8');

			// Write compressed version
			const encoder = new TextEncoder();
			const jsonBytes = encoder.encode(jsonData);
			const compressedData = await Compression.compress(jsonBytes, 'gzip');
			const compressedFilePath = path.join(compressedDir, `${fileName}.json.gz`);
			await fs.writeFile(compressedFilePath, compressedData);

			resolve({ fileName, rowCount: rows.length });
		});

		rl.on('error', reject);
	});
}

/**
 * Process subdivision CSV files and convert to JSON with compression
 */
async function processSubdivisionCsvFile(csvFilePath) {
	return new Promise((resolve, reject) => {
		const fileName = path.basename(csvFilePath, '.csv');
		const jsonFilePath = path.join(subdivisionsJsonDir, `${fileName}.json`);

		const rows = [];
		const fileStream = createReadStream(csvFilePath, { encoding: 'utf8' });
		const rl = createInterface({
			input: fileStream,
			crlfDelay: Infinity
		});

		rl.on('line', line => {
			if (line.trim()) {
				const fields = parseCSVLine(line);
				// Subdivision CSV format: "CC","SubdivisionCode","Label","Type"
				if (fields.length >= 4 && fields[1]) {
					const obj = {
						code: fields[1],
						label: fields[2] || ''
					};
					if (fields[3]) {
						obj.type = fields[3];
					}
					rows.push(obj);
				}
			}
		});

		rl.on('close', async () => {
			// Write JSON file and compress it
			const jsonData = JSON.stringify(rows, null, 2);

			// Ensure json directory exists
			await fs.mkdir(subdivisionsJsonDir, { recursive: true });

			// Write uncompressed JSON
			await fs.writeFile(jsonFilePath, jsonData, 'utf8');

			// Write compressed version
			const encoder = new TextEncoder();
			const jsonBytes = encoder.encode(jsonData);
			const compressedData = await Compression.compress(jsonBytes, 'gzip');
			const compressedFilePath = path.join(subdivisionsCompressedDir, `${fileName}.json.gz`);
			await fs.writeFile(compressedFilePath, compressedData);

			resolve({ fileName, rowCount: rows.length });
		});

		rl.on('error', reject);
	});
}

/**
 * Transform country data to IUnLocodeCountry format
 */
function transformCountries(countries) {
	return countries.map(country => ({
		uri: country['@id'],
		label: country['rdfs:label'],
		value: country['rdf:value']
	}));
}

/**
 * Transform function data to IUnLocodeFunction format
 */
function transformFunctions(functions) {
	return functions.map(func => ({
		uri: func['@id'],
		label: func['rdfs:label'],
		comment: func['rdfs:comment'],
		value: func['rdf:value']
	}));
}

/**
 * Generate shared file header.
 */
function generateSharedHeader() {
	return `// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated. Do not edit manually. */`;
}

/**
 * Generate TypeScript list file content
 */
function generateListFileContent(countries) {
	// Generate property entries with JSDoc comments
	const entries = countries
		.map(
			country => `\t/**
\t * ${country.label}: ${country.value}.
\t */
\t${country.value}: "${country.uri}"`
		)
		.join(',\n\n');

	const exportCode = `${generateSharedHeader()}

/**
 * UN/LOCODE Countries list.
 * @see https://vocabulary.uncefact.org/unlocode-countries
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UnLocodeCountriesList = {
${entries}
} as const;

/**
 * UN/LOCODE Countries list.
 * @see https://vocabulary.uncefact.org/unlocode-countries
 */
export type UnLocodeCountriesList = (typeof UnLocodeCountriesList)[keyof typeof UnLocodeCountriesList];
`;

	return exportCode;
}

/**
 * Generate TypeScript function list file content
 */
function generateFunctionListFileContent(functions) {
	const entries = functions
		.map(
			func => `\t/**
	 * ${func.label}: ${func.value}.
	 */
	${func.value}: "${func.uri}"`
		)
		.join(',\n\n');

	const exportCode = `${generateSharedHeader()}

/**
 * UN/LOCODE Functions list.
 * @see https://vocabulary.uncefact.org/unlocode-functions
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UnLocodeFunctionsList = {
${entries}
} as const;

/**
 * UN/LOCODE Functions list.
 * @see https://vocabulary.uncefact.org/unlocode-functions
 */
export type UnLocodeFunctionsList = (typeof UnLocodeFunctionsList)[keyof typeof UnLocodeFunctionsList];
`;

	return exportCode;
}

/**
 * Quote a string for safe inclusion in TypeScript code
 */
function quoteString(value) {
	const text = String(value ?? '')
		.replace(/\\/g, '\\\\')
		.replace(/\r/g, '\\r')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/"/g, '\\"');
	return `"${text}"`;
}

/**
 * Generate TypeScript JSON file content
 */
function generateJsonFileContent(countries) {
	const countryLines = countries.map(
		country =>
			`\t{\n\t\turi: ${quoteString(country.uri)},\n\t\tlabel: ${quoteString(
				country.label
			)},\n\t\tvalue: ${quoteString(country.value)}\n\t}`
	);
	const countryLiteral = `[${countryLines.length > 0 ? `\n${countryLines.join(',\n')}\n` : ''}]`;
	const exportCode = `${generateSharedHeader()}
import type { IUnLocodeCountry } from "../IUnLocodeCountry.js";

/**
 * UN/LOCODE Countries as a JSON array.
 * @see https://vocabulary.uncefact.org/unlocode-countries
 */
export const UN_LOCODE_COUNTRIES: IUnLocodeCountry[] = ${countryLiteral};
`;

	return exportCode;
}

/**
 * Generate TypeScript JSON file content for functions
 */
function generateFunctionJsonFileContent(functions) {
	const functionLines = functions.map(
		func =>
			`\t{\n\t\turi: ${quoteString(func.uri)},\n\t\tlabel: ${quoteString(
				func.label
			)},\n\t\tcomment: ${quoteString(func.comment)},\n\t\tvalue: ${quoteString(func.value)}\n\t}`
	);
	const functionLiteral = `[${functionLines.length > 0 ? `\n${functionLines.join(',\n')}\n` : ''}]`;
	const exportCode = `${generateSharedHeader()}
import type { IUnLocodeFunction } from "../IUnLocodeFunction.js";

/**
 * UN/LOCODE Functions as a JSON array.
 * @see https://vocabulary.uncefact.org/unlocode-functions
 */
export const UN_LOCODE_FUNCTIONS: IUnLocodeFunction[] = ${functionLiteral};
`;

	return exportCode;
}

/**
 * Generate TypeScript model files from JSONLD
 */
async function generateTypeScriptModels() {
	try {
		// Read the JSONLD file
		const jsonldContent = await fs.readFile(countriesJsonldFile, 'utf8');
		const jsonldData = JSON.parse(jsonldContent);
		const functionsJsonldContent = await fs.readFile(functionsJsonldFile, 'utf8');
		const functionsJsonldData = JSON.parse(functionsJsonldContent);

		// Extract and transform countries
		const countries = transformCountries(jsonldData['@graph']);
		const functions = transformFunctions(functionsJsonldData['@graph']);

		// Ensure output directories exist
		const listDir = path.dirname(countriesTsListFile);
		const jsonDir2 = path.dirname(countriesTsFile);
		const functionListDir = path.dirname(functionsTsListFile);
		const functionJsonDir = path.dirname(functionsTsFile);

		await fs.mkdir(listDir, { recursive: true });
		await fs.mkdir(jsonDir2, { recursive: true });
		await fs.mkdir(functionListDir, { recursive: true });
		await fs.mkdir(functionJsonDir, { recursive: true });

		// Generate and write files
		const listContent = generateListFileContent(countries);
		await fs.writeFile(countriesTsListFile, listContent, 'utf8');

		const jsonContent = generateJsonFileContent(countries);
		await fs.writeFile(countriesTsFile, jsonContent, 'utf8');

		const functionListContent = generateFunctionListFileContent(functions);
		await fs.writeFile(functionsTsListFile, functionListContent, 'utf8');

		const functionJsonContent = generateFunctionJsonFileContent(functions);
		await fs.writeFile(functionsTsFile, functionJsonContent, 'utf8');

		process.stdout.write('\n✓ Generated TypeScript models:\n');
		process.stdout.write('  - unLocodeCountriesList.ts\n');
		process.stdout.write('  - unLocodeCountries.ts\n');
		process.stdout.write('  - unLocodeFunctionsList.ts\n');
		process.stdout.write('  - unLocodeFunctions.ts\n');
		process.stdout.write(`  Total countries: ${countries.length}\n`);
		process.stdout.write(`  Total functions: ${functions.length}\n`);
	} catch (error) {
		process.stderr.write(`Error generating TypeScript models: ${error.message}\n`);
		throw error;
	}
}

/**
 * Main function to process all country CSV files
 */
async function main() {
	try {
		// Ensure the json directory exists
		await fs.mkdir(countriesJsonDir, { recursive: true });
		await fs.mkdir(compressedDir, { recursive: true });
		await fs.mkdir(subdivisionsCompressedDir, { recursive: true });

		// Get all CSV files from countries directory
		const csvFiles = (await fs.readdir(countriesDir)).filter(file => file.endsWith('.csv')).sort();

		if (csvFiles.length === 0) {
			process.stderr.write('No CSV files found in countries directory\n');
			return;
		}

		process.stdout.write(`Converting ${csvFiles.length} country CSV files to JSON...\n`);

		let totalRows = 0;

		for (const file of csvFiles) {
			const csvFilePath = path.join(countriesDir, file);
			const result = await processCsvFile(csvFilePath);
			totalRows += result.rowCount;
			process.stdout.write(`✓ ${result.fileName}.json (${result.rowCount} locations)\n`);
		}

		process.stdout.write('\n✓ Successfully converted all files to JSON in the json/ directory\n');
		process.stdout.write(`✓ Compressed versions stored in ${compressedDir}\n`);
		process.stdout.write(`  Total locations: ${totalRows}\n`);

		// Process subdivision CSV files
		const subdivisionsDir = path.join(__dirname, '../src-data/locode/subdivisions/csv');
		const subdivisionCSVFiles = (await fs.readdir(subdivisionsDir))
			.filter(file => file.endsWith('.csv'))
			.sort();

		if (subdivisionCSVFiles.length === 0) {
			process.stdout.write('No subdivision CSV files found in subdivisions/csv directory\n');
		} else {
			process.stdout.write(
				`\nConverting ${subdivisionCSVFiles.length} subdivision CSV files to JSON...\n`
			);
			let totalSubdivisions = 0;

			for (const file of subdivisionCSVFiles) {
				const csvFilePath = path.join(subdivisionsDir, file);
				const result = await processSubdivisionCsvFile(csvFilePath);
				totalSubdivisions += result.rowCount;
				process.stdout.write(`✓ ${result.fileName}.json.gz (${result.rowCount} subdivisions)\n`);
			}

			process.stdout.write(
				`\n✓ Compressed subdivision files stored in ${subdivisionsCompressedDir}\n`
			);
			process.stdout.write(`  Total subdivisions: ${totalSubdivisions}\n`);
		}

		// Generate TypeScript models
		await generateTypeScriptModels();
	} catch (error) {
		process.stderr.write(`Error: ${error.message}\n`);
		// eslint-disable-next-line unicorn/no-process-exit
		process.exit(1);
	}
}

// Run the script
main();
