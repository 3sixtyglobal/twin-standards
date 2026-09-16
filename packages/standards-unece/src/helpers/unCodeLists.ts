// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { GeneralError, Guards, I18n, Is, StringHelper } from "@twin.org/core";
import { nameof } from "@twin.org/nameof";
import type { UneceCodeLists } from "../models/uneceCodeLists.js";

/**
 * A class for handling Code Lists.
 * @see https://vocabulary.uncefact.org/code-lists
 */
export class UnCodeLists {
	/**
	 * The class name.
	 * @internal
	 */
	public static readonly CLASS_NAME = nameof<UnCodeLists>();

	/**
	 * Static cache for code list translations per locale.
	 * Key format: `${locale}:${camelCaseCodeListName}`
	 * @internal
	 */
	private static readonly _cache: { [key: string]: { [key: string]: string } } = {};

	/**
	 * Static cache for code list labels per locale.
	 * Key format: `${locale}:${camelCaseCodeListName}:labels`
	 * @internal
	 */
	private static readonly _labelsCache: { [key: string]: { [key: string]: string } } = {};

	/**
	 * Get all the translations for a specific list type.
	 * @param codeList The code list to get the translations for.
	 * @param locale The locale to get the translations for. If not provided, the default locale will be used. Falls back to 'en' if the locale doesn't exist.
	 * @returns The translations for the code list.
	 */
	public static async getDescriptions(
		codeList: UneceCodeLists,
		locale?: string
	): Promise<{
		[key: string]: string;
	}> {
		Guards.stringValue(UnCodeLists.CLASS_NAME, nameof(codeList), codeList);

		const parts = codeList.split(":");
		if (parts.length !== 2 || parts[0] !== "unece") {
			throw new GeneralError(UnCodeLists.CLASS_NAME, "invalidCodeList", { codeList });
		}

		const finalLocale = locale ?? I18n.getLocale();
		const camelCaseCodeList = StringHelper.camelCase(parts[1]);
		const cacheKey = `${finalLocale}:${camelCaseCodeList}`;

		// Check if this code list is already cached
		if (cacheKey in UnCodeLists._cache) {
			return UnCodeLists._cache[cacheKey];
		}

		let dictionary = I18n.getDictionary(finalLocale);
		let actualLocale = finalLocale;
		const codeListPrefix = `codeLists.${camelCaseCodeList}.`;

		// If the requested locale is empty or doesn't have translations for this code list, fall back to 'en'
		let hasTranslations = false;
		for (const key in dictionary) {
			if (key.startsWith(codeListPrefix)) {
				hasTranslations = true;
				break;
			}
		}

		if (!hasTranslations && finalLocale !== "en") {
			dictionary = I18n.getDictionary("en");
			actualLocale = "en";
		}

		const translations: { [key: string]: string } = {};
		for (const key in dictionary) {
			if (key.startsWith(codeListPrefix) && !key.endsWith("_label")) {
				const codeKey = key.slice(codeListPrefix.length);
				translations[codeKey] = dictionary[key];
			}
		}

		// Cache under the actual locale used (accounting for fallback)
		const actualCacheKey = `${actualLocale}:${camelCaseCodeList}`;
		UnCodeLists._cache[actualCacheKey] = translations;

		// Also cache under requested locale if it differs from actual locale (for faster fallback next time)
		if (actualLocale !== finalLocale) {
			UnCodeLists._cache[cacheKey] = translations;
		}

		return translations;
	}

	/**
	 * Get a translation for a specific list type.
	 * @param codeList The code list to get the translations for.
	 * @param key The key to get the translation for.
	 * @param locale The locale to get the translations for. If not provided, the default locale will be used.
	 * @returns The translation for the specified key in the code list.
	 */
	public static async getDescription(
		codeList: UneceCodeLists,
		key: string,
		locale?: string
	): Promise<string | undefined> {
		const descriptions = await UnCodeLists.getDescriptions(codeList, locale);

		if (Is.object(descriptions) && Is.string(descriptions[key])) {
			return descriptions[key];
		}

		return undefined;
	}

	/**
	 * Get all the short description labels for a specific list type.
	 * Labels are stored in locale files with a `_label` suffix (e.g. `unece:arrivalEvent_label`).
	 * @param codeList The code list to get the labels for.
	 * @param locale The locale to get the labels for. If not provided, the default locale will be used. Falls back to 'en' if the locale doesn't exist.
	 * @returns The labels for the code list, keyed by the original code (without `_label` suffix).
	 */
	public static async getLabels(
		codeList: UneceCodeLists,
		locale?: string
	): Promise<{
		[key: string]: string;
	}> {
		Guards.stringValue(UnCodeLists.CLASS_NAME, nameof(codeList), codeList);

		const parts = codeList.split(":");
		if (parts.length !== 2 || parts[0] !== "unece") {
			throw new GeneralError(UnCodeLists.CLASS_NAME, "invalidCodeList", { codeList });
		}

		const finalLocale = locale ?? I18n.getLocale();
		const camelCaseCodeList = StringHelper.camelCase(parts[1]);
		const cacheKey = `${finalLocale}:${camelCaseCodeList}:labels`;

		if (cacheKey in UnCodeLists._labelsCache) {
			return UnCodeLists._labelsCache[cacheKey];
		}

		let dictionary = I18n.getDictionary(finalLocale);
		let actualLocale = finalLocale;
		const labelSuffix = "_label";
		const codeListPrefix = `codeLists.${camelCaseCodeList}.`;

		let hasTranslations = false;
		for (const key in dictionary) {
			if (key.startsWith(codeListPrefix) && key.endsWith(labelSuffix)) {
				hasTranslations = true;
				break;
			}
		}

		if (!hasTranslations && finalLocale !== "en") {
			dictionary = I18n.getDictionary("en");
			actualLocale = "en";
		}

		const labels: { [key: string]: string } = {};
		for (const key in dictionary) {
			if (key.startsWith(codeListPrefix) && key.endsWith(labelSuffix)) {
				const codeKey = key.slice(codeListPrefix.length, -labelSuffix.length);
				labels[codeKey] = dictionary[key];
			}
		}

		const actualCacheKey = `${actualLocale}:${camelCaseCodeList}:labels`;
		UnCodeLists._labelsCache[actualCacheKey] = labels;

		if (actualLocale !== finalLocale) {
			UnCodeLists._labelsCache[cacheKey] = labels;
		}

		return labels;
	}

	/**
	 * Get a short description label for a specific code in a list type.
	 * @param codeList The code list to get the label for.
	 * @param key The key to get the label for.
	 * @param locale The locale to get the label for. If not provided, the default locale will be used.
	 * @returns The label for the specified key in the code list.
	 */
	public static async getLabel(
		codeList: UneceCodeLists,
		key: string,
		locale?: string
	): Promise<string | undefined> {
		const labels = await UnCodeLists.getLabels(codeList, locale);

		if (Is.object(labels) && Is.string(labels[key])) {
			return labels[key];
		}

		return undefined;
	}

	/**
	 * Get the codes whose descriptions match the supplied value.
	 * If an exact match (case-sensitive or case-insensitive) is found, only that single code is returned.
	 * Otherwise, all codes whose description partially matches the value are returned.
	 * @param codeList The code list to search.
	 * @param description The description to search for.
	 * @param locale The locale to search in. If not provided, the default locale will be used.
	 * @returns The codes whose description matches, or an empty array if there is no match.
	 */
	public static async getCodeByDescription(
		codeList: UneceCodeLists,
		description: string,
		locale?: string
	): Promise<string[]> {
		Guards.stringValue(UnCodeLists.CLASS_NAME, nameof(description), description);

		const descriptions = await UnCodeLists.getDescriptions(codeList, locale);

		return UnCodeLists.findCodesByValue(descriptions, description);
	}

	/**
	 * Get the codes whose labels match the supplied value.
	 * If an exact match (case-sensitive or case-insensitive) is found, only that single code is returned.
	 * Otherwise, all codes whose label partially matches the value are returned.
	 * @param codeList The code list to search.
	 * @param label The label to search for.
	 * @param locale The locale to search in. If not provided, the default locale will be used.
	 * @returns The codes whose label matches, or an empty array if there is no match.
	 */
	public static async getCodeByLabel(
		codeList: UneceCodeLists,
		label: string,
		locale?: string
	): Promise<string[]> {
		Guards.stringValue(UnCodeLists.CLASS_NAME, nameof(label), label);

		const labels = await UnCodeLists.getLabels(codeList, locale);

		return UnCodeLists.findCodesByValue(labels, label);
	}

	/**
	 * Find the codes whose value matches the search text. If an exact case-sensitive or case-insensitive
	 * match is found, only that single code is returned. Otherwise, all codes matching a partial
	 * (substring) match using a RegExp heuristic are returned.
	 * @param dictionary The dictionary of codes to values to search.
	 * @param searchText The text to search for.
	 * @returns The matching codes, or an empty array if no exact or partial match is found.
	 * @internal
	 */
	private static findCodesByValue(
		dictionary: { [key: string]: string },
		searchText: string
	): string[] {
		for (const code in dictionary) {
			if (dictionary[code] === searchText) {
				return [code];
			}
		}

		const searchTextLower = searchText.toLowerCase();

		for (const code in dictionary) {
			if (dictionary[code].toLowerCase() === searchTextLower) {
				return [code];
			}
		}

		// Escape regex special characters so the search text is matched literally.
		const escapedSearchText = searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		const searchRegExp = new RegExp(escapedSearchText, "i");

		const partialMatches: string[] = [];
		for (const code in dictionary) {
			if (searchRegExp.test(dictionary[code])) {
				partialMatches.push(code);
			}
		}

		return partialMatches;
	}
}
