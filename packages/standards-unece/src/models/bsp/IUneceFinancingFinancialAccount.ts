// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceCurrencyCodeList } from "../lists/uneceCurrencyCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A financial account used internally by a bank to manage the line of credit granted to financing requesting party.
 * @see https://vocabulary.uncefact.org/FinancingFinancialAccount
 */
export interface IUneceFinancingFinancialAccount extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.FinancingFinancialAccount;

	/**
	 * The account name, expressed as text, of this financing financial account.
	 * @see https://vocabulary.uncefact.org/accountName
	 */
	accountName?: string;

	/**
	 * The unique Basic Bank Account Number (BBAN) identifier used as part of a National Account Numbering Scheme for this
	 * financing financial account.
	 * @see https://vocabulary.uncefact.org/bBANId
	 */
	bBANId?: string;

	/**
	 * The code specifying the type of financing financial account.
	 * @see https://vocabulary.uncefact.org/cashAccountTypeCode
	 */
	cashAccountTypeCode?: string;

	/**
	 * The code specifying the currency of this financing financial account.
	 * @see https://vocabulary.uncefact.org/financingFinancialAccountCurrencyCode
	 */
	financingFinancialAccountCurrencyCode?: UneceCurrencyCodeList[];

	/**
	 * The unique International Bank Account Number (IBAN) identifier for this financing financial account.
	 * @see https://vocabulary.uncefact.org/iBANId
	 */
	iBANId?: string;

	/**
	 * The proprietary identifier for this financing financial account.
	 * @see https://vocabulary.uncefact.org/proprietaryId
	 */
	proprietaryId?: string;

	/**
	 * The proprietary type, expressed as text, of this financing financial account, such as the nature or use.
	 * @see https://vocabulary.uncefact.org/proprietaryType
	 */
	proprietaryType?: string;

	/**
	 * The unique Universal Payment Identification Code (UPIC) identifier used by the New York Clearing House for this
	 * financing financial account.
	 * @see https://vocabulary.uncefact.org/uPICId
	 */
	uPICId?: string;
}
