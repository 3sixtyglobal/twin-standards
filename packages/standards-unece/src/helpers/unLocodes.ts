// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import fs from "node:fs/promises";
import { Compression, CompressionType, Guards, Is, ObjectHelper } from "@3sixty/core";
import { nameof } from "@3sixty/nameof";
import type { IUnLocodeCountry } from "../models/IUnLocodeCountry.js";
import type { IUnLocodeCountrySubdivisionRecord } from "../models/IUnLocodeCountrySubdivisionRecord.js";
import type { IUnLocodeFunction } from "../models/IUnLocodeFunction.js";
import type { IUnLocodeLocation } from "../models/IUnLocodeLocation.js";
import type { IUnLocodeLocationRecord } from "../models/IUnLocodeLocationRecord.js";
import type { IUnLocodeSubdivision } from "../models/IUnLocodeSubdivision.js";
import { UN_LOCODE_COUNTRIES } from "../models/locode/unLocodeCountries.js";
import type { UnLocodeCountriesList } from "../models/locode/unLocodeCountriesList.js";
import { UN_LOCODE_FUNCTIONS } from "../models/locode/unLocodeFunctions.js";
import type { UnLocodeFunctionsList } from "../models/locode/unLocodeFunctionsList.js";

/**
 * A class handling UN/LOCODEs.
 * @see https://vocabulary.uncefact.org/unlocode-about
 */
export class UnLocodes {
	/**
	 * The class name.
	 * @internal
	 */
	public static readonly CLASS_NAME = nameof<UnLocodes>();

	/**
	 * The URI prefix for UN/LOCODE locations.
	 * @internal
	 */
	public static readonly LOCODE_COUNTRY_URI_PREFIX = "unlcdc:";

	/**
	 * The URI prefix for UN/LOCODE locations.
	 * @internal
	 */
	public static readonly LOCODE_LOCATION_URI_PREFIX = "unlcd:";

	/**
	 * The URI prefix for UN/LOCODE sub-divisions.
	 * @internal
	 */
	public static readonly LOCODE_SUBDIVISION_URI_PREFIX = "unlcds:";

	/**
	 * The URI prefix for UN/LOCODE functions.
	 * @internal
	 */
	public static readonly LOCODE_FUNCTION_URI_PREFIX = "unlcdf:";

	/**
	 * Cache for loaded locations by country code.
	 * @internal
	 */
	private static readonly _locationsByCountry: { [country: string]: IUnLocodeLocation[] } = {};

	/**
	 * Cache for loaded subdivisions by country code.
	 * @internal
	 */
	private static readonly _subdivisionsByCountry: { [country: string]: IUnLocodeSubdivision[] } =
		{};

	/**
	 * Get the list of UN/LOCODE countries.
	 * @see https://vocabulary.uncefact.org/unlocode-countries
	 * @returns The list of UN/LOCODE countries.
	 */
	public static async getCountries(): Promise<IUnLocodeCountry[]> {
		return UN_LOCODE_COUNTRIES;
	}

	/**
	 * Get the country by its uri.
	 * @param countryUri The country URI.
	 * @see https://vocabulary.uncefact.org/unlocode-countries
	 * @returns The country information or undefined if not found.
	 */
	public static async getCountryByUri(countryUri: string): Promise<IUnLocodeCountry | undefined> {
		Guards.stringValue(UnLocodes.CLASS_NAME, nameof(countryUri), countryUri);

		return UN_LOCODE_COUNTRIES.find(country => country.uri === countryUri);
	}

	/**
	 * Get the country by its value.
	 * @param countryValue The country value.
	 * @see https://vocabulary.uncefact.org/unlocode-countries
	 * @returns The country information or undefined if not found.
	 */
	public static async getCountryByValue(
		countryValue: string
	): Promise<IUnLocodeCountry | undefined> {
		Guards.stringValue(UnLocodes.CLASS_NAME, nameof(countryValue), countryValue);

		return UN_LOCODE_COUNTRIES.find(country => country.value === countryValue);
	}

	/**
	 * Get the list of UN/LOCODE functions.
	 * @see https://vocabulary.uncefact.org/unlocode-functions
	 * @returns The list of UN/LOCODE functions.
	 */
	public static async getFunctions(): Promise<IUnLocodeFunction[]> {
		return UN_LOCODE_FUNCTIONS;
	}

	/**
	 * Get the function by its uri.
	 * @param functionUri The function URI.
	 * @see https://vocabulary.uncefact.org/unlocode-functions
	 * @returns The function information or undefined if not found.
	 */
	public static async getFunctionByUri(
		functionUri: string
	): Promise<IUnLocodeFunction | undefined> {
		Guards.stringValue(UnLocodes.CLASS_NAME, nameof(functionUri), functionUri);

		return UN_LOCODE_FUNCTIONS.find(func => func.uri === functionUri);
	}

	/**
	 * Get the function by its value.
	 * @param functionValue The function value.
	 * @see https://vocabulary.uncefact.org/unlocode-functions
	 * @returns The function information or undefined if not found.
	 */
	public static async getFunctionByValue(
		functionValue: string
	): Promise<IUnLocodeFunction | undefined> {
		Guards.stringValue(UnLocodes.CLASS_NAME, nameof(functionValue), functionValue);

		return UN_LOCODE_FUNCTIONS.find(func => func.value === functionValue);
	}

	/**
	 * Get the location by its UN/LOCODE.
	 * @param unLocode The UN/LOCODE value.
	 * @see https://vocabulary.uncefact.org/unlocode-about
	 * @returns The location information or undefined if not found.
	 */
	public static async getLocationByCode(unLocode: string): Promise<IUnLocodeLocation | undefined> {
		Guards.stringValue(UnLocodes.CLASS_NAME, nameof(unLocode), unLocode);

		const countryCode = unLocode.slice(0, 2);
		const locationCode = unLocode.slice(2);
		if (!Is.stringValue(countryCode) || !Is.stringValue(locationCode)) {
			return undefined;
		}

		const locations = await UnLocodes.getLocations(countryCode);
		return locations.find(location => location.locode === unLocode);
	}

	/**
	 * Get the location by its UN/LOCODE uri.
	 * @param unLocodeUri The UN/LOCODE URI.
	 * @see https://vocabulary.uncefact.org/unlocode-about
	 * @returns The location information or undefined if not found.
	 */
	public static async getLocationByUri(
		unLocodeUri: string
	): Promise<IUnLocodeLocation | undefined> {
		Guards.stringValue(UnLocodes.CLASS_NAME, nameof(unLocodeUri), unLocodeUri);

		const normalized = unLocodeUri.replace(UnLocodes.LOCODE_LOCATION_URI_PREFIX, "").trim();

		return UnLocodes.getLocationByCode(normalized);
	}

	/**
	 * Get the location by its label.
	 * @param label The location label.
	 * @see https://vocabulary.uncefact.org/unlocode-about
	 * @returns The location information or undefined if not found.
	 */
	public static async getLocationByLabel(label: string): Promise<IUnLocodeLocation | undefined> {
		Guards.stringValue(UnLocodes.CLASS_NAME, nameof(label), label);

		const normalized = label.trim().toLowerCase();
		for (const country of UN_LOCODE_COUNTRIES) {
			const locations = await UnLocodes.getLocations(country.value);
			const match = locations.find(
				location =>
					location.label.toLowerCase() === normalized ||
					location.labelWithDiacritics.toLowerCase() === normalized
			);
			if (match) {
				return match;
			}
		}

		return undefined;
	}

	/**
	 * Get the subdivision by its code.
	 * @param subdivisionCode The subdivision code (e.g., "AD04").
	 * @returns The subdivision information or undefined if not found.
	 */
	public static async getSubdivisionByCode(
		subdivisionCode: string
	): Promise<IUnLocodeSubdivision | undefined> {
		Guards.stringValue(UnLocodes.CLASS_NAME, nameof(subdivisionCode), subdivisionCode);

		const countryCode = subdivisionCode.slice(0, 2);
		const code = subdivisionCode.slice(2);
		if (!Is.stringValue(countryCode) || !Is.stringValue(code)) {
			return undefined;
		}

		const subdivisions = await UnLocodes.getSubdivisions(countryCode);
		return subdivisions.find(subdivision => subdivision.code === code);
	}

	/**
	 * Get the subdivision by its URI.
	 * @param subdivisionUri The subdivision URI (e.g., "unlcds:AD04").
	 * @returns The subdivision information or undefined if not found.
	 */
	public static async getSubdivisionByUri(
		subdivisionUri: string
	): Promise<IUnLocodeSubdivision | undefined> {
		Guards.stringValue(UnLocodes.CLASS_NAME, nameof(subdivisionUri), subdivisionUri);

		const normalized = subdivisionUri.replace(UnLocodes.LOCODE_SUBDIVISION_URI_PREFIX, "").trim();

		return UnLocodes.getSubdivisionByCode(normalized);
	}

	/**
	 * Get the locations for a given country code.
	 * @param countryCode The country code.
	 * @returns The list of locations for the country.
	 * @throws Error if the country code is invalid or if the data file cannot be loaded.
	 */
	public static async getLocations(countryCode: string): Promise<IUnLocodeLocation[]> {
		return UnLocodes.loadCompressedFile<IUnLocodeLocationRecord, IUnLocodeLocation>(
			"countries",
			countryCode,
			(normalized, record) => UnLocodes.mapCountryLocation(normalized, record),
			UnLocodes._locationsByCountry
		);
	}

	/**
	 * Get the subdivisions for a given country code.
	 * @param countryCode The country code.
	 * @returns The list of subdivisions for the country.
	 * @throws Error if the country code is invalid or if the data file cannot be loaded.
	 */
	public static async getSubdivisions(countryCode: string): Promise<IUnLocodeSubdivision[]> {
		return UnLocodes.loadCompressedFile<IUnLocodeCountrySubdivisionRecord, IUnLocodeSubdivision>(
			"subdivisions",
			countryCode,
			(normalized, record) => UnLocodes.mapCountrySubdivision(normalized, record),
			UnLocodes._subdivisionsByCountry
		);
	}

	/**
	 * Map a country location record to a location object.
	 * @param countryCode	The country code.
	 * @param record The country location record.
	 * @returns The mapped location object.
	 * @internal
	 */
	private static mapCountryLocation(
		countryCode: string,
		record: IUnLocodeLocationRecord
	): IUnLocodeLocation {
		const locode = `${countryCode}${record.locationCode}`;
		const countryCodeUri = UN_LOCODE_COUNTRIES.find(country => country.value === countryCode)?.uri;
		const countrySubdivisionUri = Is.stringValue(record.subdivisionCode)
			? `${UnLocodes.LOCODE_SUBDIVISION_URI_PREFIX}${countryCode}${record.subdivisionCode}`
			: "";
		const functions = record.function
			? record.function.split("").map(code => `${UnLocodes.LOCODE_FUNCTION_URI_PREFIX}${code}`)
			: [];
		const location: IUnLocodeLocation = {
			locode,
			locodeUri: `${UnLocodes.LOCODE_LOCATION_URI_PREFIX}${locode}`,
			label: record.label,
			// If the label with diacritics is not provided, use the regular label as fallback
			// as we don't store them if they are the same
			labelWithDiacritics: record.labelWithDiacritics ?? record.label,
			countryCodeUri: countryCodeUri as UnLocodeCountriesList,
			countrySubdivisionUri,
			functions: functions as UnLocodeFunctionsList[]
		};
		if (Is.number(record.lat) && Is.number(record.lng)) {
			location.geoCoordinates = {
				latitude: record.lat,
				longitude: record.lng
			};
		}
		return location;
	}

	/**
	 * Map a country subdivision record to a subdivision object.
	 * @param countryCode The country code.
	 * @param record The country subdivision record.
	 * @returns The mapped subdivision object.
	 * @internal
	 */
	private static mapCountrySubdivision(
		countryCode: string,
		record: IUnLocodeCountrySubdivisionRecord
	): IUnLocodeSubdivision {
		const countryCodeUri = UN_LOCODE_COUNTRIES.find(country => country.value === countryCode)?.uri;
		const subdivision: IUnLocodeSubdivision = {
			code: record.code,
			subdivisionUri: `${UnLocodes.LOCODE_SUBDIVISION_URI_PREFIX}${countryCode}${record.code}`,
			label: record.label,
			countryCodeUri,
			type: record.type
		};
		return subdivision;
	}

	/**
	 * Load a compressed file.
	 * @param folder The folder to load (e.g., "countries" or "subdivisions").
	 * @param countryCode The country code.
	 * @param mapMethod The method to map a raw record to the target type.
	 * @returns The loaded data as an array of records.
	 * @throws Error if the file cannot be loaded or decompressed.
	 * @internal
	 */
	private static async loadCompressedFile<R, M>(
		folder: string,
		countryCode: string,
		mapMethod: (countryCode: string, record: R) => M,
		cache: { [country: string]: M[] }
	): Promise<M[]> {
		Guards.stringValue(UnLocodes.CLASS_NAME, nameof(countryCode), countryCode);

		const normalized = countryCode.replace(UnLocodes.LOCODE_COUNTRY_URI_PREFIX, "").toUpperCase();
		const cached = cache[normalized];
		if (cached) {
			return cached;
		}

		try {
			const fileUrl = new URL(`../data/${folder}/${normalized}.json.gz`, import.meta.url);
			const compressed = await fs.readFile(fileUrl);
			const jsonBuffer = await Compression.decompress(compressed, CompressionType.Gzip);
			const records = ObjectHelper.fromBytes<R[]>(jsonBuffer);
			cache[normalized] = records.map(record => mapMethod(normalized, record));
		} catch {}

		return cache[normalized] ?? [];
	}
}
