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
	 * Get the all the translations for a specific list type.
	 * @param codeList The code list to get the translations for.
	 * @param locale The locale to get the translations for. If not provided, the default locale will be used. Falls back to 'en' if the locale doesn't exist.
	 * @returns The list translations for the code list.
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
			if (key.startsWith(codeListPrefix)) {
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
	 * @returns The list translations for the code list.
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
}
