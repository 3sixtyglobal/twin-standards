// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { I18n } from "@twin.org/core";
import locales from "../../locales/en.json" with { type: "json" };
import { UnCodeLists } from "../../src/helpers/unCodeLists.js";
import { UneceCodeLists } from "../../src/models/uneceCodeLists.js";

describe("UnCodeLists", () => {
	beforeAll(async () => {
		I18n.addDictionary("en", locales);
	});
	test("Can get the translations for a specific code list", async () => {
		const codes = await UnCodeLists.getDescriptions(UneceCodeLists.AccessRightsTypeCodeList);

		expect(codes).toEqual({
			"unece:AccessRightsTypeCodeList#P": "Prohibited",
			"unece:AccessRightsTypeCodeList#R": "Restricted",
			"unece:AccessRightsTypeCodeList#U": "Unlimited"
		});
	});

	test("Can get a single translation for a specific code list and key", async () => {
		const description = await UnCodeLists.getDescription(
			UneceCodeLists.AccessRightsTypeCodeList,
			"unece:AccessRightsTypeCodeList#P"
		);

		expect(description).toEqual("Prohibited");
	});

	test("Returns undefined when code list key does not exist", async () => {
		const description = await UnCodeLists.getDescription(
			UneceCodeLists.AccessRightsTypeCodeList,
			"unece:AccessRightsTypeCodeList#UNKNOWN"
		);

		expect(description).toBeUndefined();
	});

	test("Throws error when code list format is invalid", async () => {
		await expect(
			UnCodeLists.getDescriptions("invalid-format" as unknown as UneceCodeLists)
		).rejects.toThrow();
	});

	test("Throws error when code list does not start with unece: prefix", async () => {
		await expect(
			UnCodeLists.getDescriptions("other:AccessRightsTypeCodeList" as unknown as UneceCodeLists)
		).rejects.toThrow();
	});

	test("Returns empty object when no translations exist for code list", async () => {
		// Using a code list that doesn't have any translations in the current locale
		const codes = await UnCodeLists.getDescriptions(
			"unece:NonExistentCodeList" as unknown as UneceCodeLists
		);

		expect(codes).toEqual({});
	});

	test("Respects explicit locale parameter in getDescriptions", async () => {
		const codes = await UnCodeLists.getDescriptions(UneceCodeLists.AccessRightsTypeCodeList, "en");

		expect(codes).toEqual({
			"unece:AccessRightsTypeCodeList#P": "Prohibited",
			"unece:AccessRightsTypeCodeList#R": "Restricted",
			"unece:AccessRightsTypeCodeList#U": "Unlimited"
		});
	});

	test("Respects explicit locale parameter in getDescription", async () => {
		const description = await UnCodeLists.getDescription(
			UneceCodeLists.AccessRightsTypeCodeList,
			"unece:AccessRightsTypeCodeList#U",
			"en"
		);

		expect(description).toEqual("Unlimited");
	});

	test("Falls back to en when requested locale does not have translations", async () => {
		const codes = await UnCodeLists.getDescriptions(UneceCodeLists.AccessRightsTypeCodeList, "fr");

		// Should fall back to 'en' translations since 'fr' doesn't have them
		expect(codes).toEqual({
			"unece:AccessRightsTypeCodeList#P": "Prohibited",
			"unece:AccessRightsTypeCodeList#R": "Restricted",
			"unece:AccessRightsTypeCodeList#U": "Unlimited"
		});
	});

	test("Caches fallback translations under the actual locale used, not the requested locale", async () => {
		// First request with a locale that doesn't have translations (falls back to 'en')
		const codesFromFr = await UnCodeLists.getDescriptions(
			UneceCodeLists.AccessRightsTypeCodeList,
			"fr"
		);

		expect(codesFromFr).toEqual({
			"unece:AccessRightsTypeCodeList#P": "Prohibited",
			"unece:AccessRightsTypeCodeList#R": "Restricted",
			"unece:AccessRightsTypeCodeList#U": "Unlimited"
		});

		// Second request with 'en' should use the cached result from the first fallback
		const codesFromEn = await UnCodeLists.getDescriptions(
			UneceCodeLists.AccessRightsTypeCodeList,
			"en"
		);

		expect(codesFromEn).toEqual({
			"unece:AccessRightsTypeCodeList#P": "Prohibited",
			"unece:AccessRightsTypeCodeList#R": "Restricted",
			"unece:AccessRightsTypeCodeList#U": "Unlimited"
		});
	});
});
