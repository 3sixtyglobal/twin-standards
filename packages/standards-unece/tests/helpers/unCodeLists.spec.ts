// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { I18n } from "@3sixty/core";
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

	test("Can get descriptions for type code lists (SupplyChainEventTypeCodeList, TransportEventTypeCodeList)", async () => {
		const supplyChainDesc = await UnCodeLists.getDescription(
			UneceCodeLists.SupplyChainEventTypeCodeList,
			"unece:acceptanceEvent"
		);
		expect(supplyChainDesc).toBe(
			"An acceptance delivery event, at header level, for this trade delivery."
		);

		const transportDesc = await UnCodeLists.getDescription(
			UneceCodeLists.TransportEventTypeCodeList,
			"unece:arrivalEvent"
		);
		expect(transportDesc).toBe("An arrival event for this logistics transport movement.");

		const transportAll = await UnCodeLists.getDescriptions(
			UneceCodeLists.TransportEventTypeCodeList
		);
		expect(transportAll["unece:arrivalEvent"]).toBeDefined();
		expect(transportAll["unece:deliveryTransportEvent"]).toBeDefined();
	});

	test("Can get all labels for a type code list", async () => {
		const labels = await UnCodeLists.getLabels(UneceCodeLists.SupplyChainEventTypeCodeList);

		expect(labels["unece:acceptanceEvent"]).toBe("Acceptance Event");
		expect(labels["unece:actualDeliveryEvent"]).toBe("Actual Delivery Event");
	});

	test("Can get a single label for a specific code", async () => {
		const label = await UnCodeLists.getLabel(
			UneceCodeLists.TransportEventTypeCodeList,
			"unece:arrivalEvent"
		);

		expect(label).toBe("Arrival Event");
	});

	test("Returns undefined when label key does not exist", async () => {
		const label = await UnCodeLists.getLabel(
			UneceCodeLists.SupplyChainEventTypeCodeList,
			"unece:nonExistentEvent"
		);

		expect(label).toBeUndefined();
	});

	test("Returns empty object when no labels exist for a non-type code list", async () => {
		const labels = await UnCodeLists.getLabels(UneceCodeLists.AccessRightsTypeCodeList);

		expect(labels).toEqual({});
	});

	test("Falls back to en when requested locale does not have labels", async () => {
		const labels = await UnCodeLists.getLabels(UneceCodeLists.TransportEventTypeCodeList, "fr");

		expect(labels["unece:arrivalEvent"]).toBe("Arrival Event");
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

	test("Can get a code by an exact description match", async () => {
		const codes = await UnCodeLists.getCodeByDescription(
			UneceCodeLists.AccessRightsTypeCodeList,
			"Prohibited"
		);

		expect(codes).toEqual(["unece:AccessRightsTypeCodeList#P"]);
	});

	test("Can get a code by a case-insensitive description match", async () => {
		const codes = await UnCodeLists.getCodeByDescription(
			UneceCodeLists.AccessRightsTypeCodeList,
			"restricted"
		);

		expect(codes).toEqual(["unece:AccessRightsTypeCodeList#R"]);
	});

	test("Can get a code by a partial description match", async () => {
		const codes = await UnCodeLists.getCodeByDescription(
			UneceCodeLists.AccessRightsTypeCodeList,
			"limit"
		);

		expect(codes).toEqual(["unece:AccessRightsTypeCodeList#U"]);
	});

	test("Returns an empty array when no description matches, exactly or partially", async () => {
		const codes = await UnCodeLists.getCodeByDescription(
			UneceCodeLists.AccessRightsTypeCodeList,
			"non-existent-value"
		);

		expect(codes).toEqual([]);
	});

	test("Prefers an exact match over an overlapping partial match in a code list with similar descriptions", async () => {
		// "Reopening debit and credit total amounts" is an exact description for code #4,
		// but is also a substring of the description for code #2, so the exact match must win
		// and only that single code must be returned.
		const codes = await UnCodeLists.getCodeByDescription(
			UneceCodeLists.AccountingAccountBalanceReopeningTypeCodeList,
			"Reopening debit and credit total amounts"
		);

		expect(codes).toEqual(["unece:AccountingAccountBalanceReopeningTypeCodeList#4"]);
	});

	test("Returns all partial matches when a value only appears as a substring across multiple descriptions", async () => {
		// "not matched entries only" appears in the descriptions for both code #2 and code #3,
		// and neither is an exact match, so both codes should be returned.
		const codes = await UnCodeLists.getCodeByDescription(
			UneceCodeLists.AccountingAccountBalanceReopeningTypeCodeList,
			"not matched entries only"
		);

		expect(codes).toEqual([
			"unece:AccountingAccountBalanceReopeningTypeCodeList#2",
			"unece:AccountingAccountBalanceReopeningTypeCodeList#3"
		]);
	});

	test("Can get a code by a case-insensitive partial match in a code list with similar descriptions", async () => {
		const codes = await UnCodeLists.getCodeByDescription(
			UneceCodeLists.AccountingAccountBalanceReopeningTypeCodeList,
			"BALANCE CARRIED"
		);

		expect(codes).toEqual(["unece:AccountingAccountBalanceReopeningTypeCodeList#1"]);
	});

	test("Can get a code by an exact label match", async () => {
		const codes = await UnCodeLists.getCodeByLabel(
			UneceCodeLists.TransportEventTypeCodeList,
			"Arrival Event"
		);

		expect(codes).toEqual(["unece:arrivalEvent"]);
	});

	test("Can get a code by a case-insensitive label match", async () => {
		const codes = await UnCodeLists.getCodeByLabel(
			UneceCodeLists.TransportEventTypeCodeList,
			"arrival event"
		);

		expect(codes).toEqual(["unece:arrivalEvent"]);
	});

	test("Can get a code by a partial label match", async () => {
		const codes = await UnCodeLists.getCodeByLabel(
			UneceCodeLists.TransportEventTypeCodeList,
			"Arrival"
		);

		expect(codes).toEqual([
			"unece:arrivalEvent",
			"unece:arrivalReportedEvent",
			"unece:firstArrivalEvent"
		]);
	});

	test("Returns an empty array when no label matches, exactly or partially", async () => {
		const codes = await UnCodeLists.getCodeByLabel(
			UneceCodeLists.TransportEventTypeCodeList,
			"non-existent-value"
		);

		expect(codes).toEqual([]);
	});

	test("Respects explicit locale and falls back to en for getCodeByDescription", async () => {
		const codes = await UnCodeLists.getCodeByDescription(
			UneceCodeLists.AccessRightsTypeCodeList,
			"Prohibited",
			"fr"
		);

		expect(codes).toEqual(["unece:AccessRightsTypeCodeList#P"]);
	});

	test("Can get a code by an exact description match in a large code list with complex character set names", async () => {
		const codes = await UnCodeLists.getCodeByDescription(
			UneceCodeLists.BinaryObjectCharacterSetCodeList,
			"UTF-8"
		);

		expect(codes).toEqual(["unece:BinaryObjectCharacterSetCodeList#106"]);
	});

	test("Can get a code by a case-insensitive description match in a large code list with complex character set names", async () => {
		const codes = await UnCodeLists.getCodeByDescription(
			UneceCodeLists.BinaryObjectCharacterSetCodeList,
			"utf-8"
		);

		expect(codes).toEqual(["unece:BinaryObjectCharacterSetCodeList#106"]);
	});

	test("Safely matches a description containing regex special characters such as parentheses", async () => {
		// "NF_Z_62-010_(1973)" contains parentheses, which must be escaped so the search
		// text is matched literally rather than as a regex capture group.
		const codes = await UnCodeLists.getCodeByDescription(
			UneceCodeLists.BinaryObjectCharacterSetCodeList,
			"(1973)"
		);

		expect(codes).toEqual(["unece:BinaryObjectCharacterSetCodeList#46"]);
	});

	test("Returns all partial matches across a large code list with many similarly named descriptions", async () => {
		// "windows-125" is a substring shared by nine descriptions (windows-1250 to windows-1258).
		const codes = await UnCodeLists.getCodeByDescription(
			UneceCodeLists.BinaryObjectCharacterSetCodeList,
			"windows-125"
		);

		expect(codes).toEqual([
			"unece:BinaryObjectCharacterSetCodeList#2250",
			"unece:BinaryObjectCharacterSetCodeList#2251",
			"unece:BinaryObjectCharacterSetCodeList#2252",
			"unece:BinaryObjectCharacterSetCodeList#2253",
			"unece:BinaryObjectCharacterSetCodeList#2254",
			"unece:BinaryObjectCharacterSetCodeList#2255",
			"unece:BinaryObjectCharacterSetCodeList#2256",
			"unece:BinaryObjectCharacterSetCodeList#2257",
			"unece:BinaryObjectCharacterSetCodeList#2258"
		]);
	});

	test("Returns an empty array when no description matches in a large code list", async () => {
		const codes = await UnCodeLists.getCodeByDescription(
			UneceCodeLists.BinaryObjectCharacterSetCodeList,
			"non-existent-character-set"
		);

		expect(codes).toEqual([]);
	});

	test("Can get a code by an exact description match when the description contains a literal quote", async () => {
		const codes = await UnCodeLists.getCodeByDescription(
			UneceCodeLists.AccountingVoucherMediumCodeList,
			'FDD 3.5"'
		);

		expect(codes).toEqual(["unece:AccountingVoucherMediumCodeList#6"]);
	});

	test("Can get a code by a case-insensitive exact match when the description contains a literal quote", async () => {
		const codes = await UnCodeLists.getCodeByDescription(
			UneceCodeLists.AccountingVoucherMediumCodeList,
			'fdd 8"'
		);

		expect(codes).toEqual(["unece:AccountingVoucherMediumCodeList#9"]);
	});

	test("Can get a code by a partial match when the search text contains a literal quote", async () => {
		const codes = await UnCodeLists.getCodeByDescription(
			UneceCodeLists.AccountingVoucherMediumCodeList,
			'5.25"'
		);

		expect(codes).toEqual(["unece:AccountingVoucherMediumCodeList#7"]);
	});

	test("Returns all partial matches sharing a common substring across quoted descriptions", async () => {
		// "FDD" is a substring of three descriptions: FDD 3.5", FDD 5.25", and FDD 8".
		const codes = await UnCodeLists.getCodeByDescription(
			UneceCodeLists.AccountingVoucherMediumCodeList,
			"FDD"
		);

		expect(codes).toEqual([
			"unece:AccountingVoucherMediumCodeList#6",
			"unece:AccountingVoucherMediumCodeList#7",
			"unece:AccountingVoucherMediumCodeList#9"
		]);
	});
});
