// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A specific business arrangement whereby credits arising from transactions are recorded.
 * @see https://vocabulary.uncefact.org/CreditorFinancialAccount
 */
export interface IUneceCreditorFinancialAccount extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CreditorFinancialAccount;

	/**
	 * The account name, expressed as text, of this creditor financial account.
	 * @see https://vocabulary.uncefact.org/accountName
	 */
	accountName?: string;

	/**
	 * The unique Basic Bank Account Number (BBAN) identifier used as part of a National Account Numbering Scheme(s) for this
	 * creditor financial account.
	 * @see https://vocabulary.uncefact.org/bBANId
	 */
	bBANId?: string;

	/**
	 * The code specifying the type of creditor financial account.
	 * @see https://vocabulary.uncefact.org/creditorFinancialAccountTypeCode
	 */
	creditorFinancialAccountTypeCode?: string;

	/**
	 * The code specifying the currency of this creditor financial account (Reference ISO 4217 codes).
	 * @see https://vocabulary.uncefact.org/currencyCode
	 */
	currencyCode?: string;

	/**
	 * The unique International Bank Account Number (IBAN) identifier for this creditor financial account.
	 * @see https://vocabulary.uncefact.org/iBANId
	 */
	iBANId?: string;

	/**
	 * The unique proprietary identifier for this creditor financial account.
	 * @see https://vocabulary.uncefact.org/proprietaryId
	 */
	proprietaryId?: string;

	/**
	 * The proprietary type, expressed as text, of this creditor financial account, such as the nature or use of the creditor
	 * account.
	 * @see https://vocabulary.uncefact.org/proprietaryType
	 */
	proprietaryType?: string;

	/**
	 * The unique Universal Payment Identification Code (UPIC) identifier used by the New York Clearing House for this creditor
	 * financial account.
	 * @see https://vocabulary.uncefact.org/uPICId
	 */
	uPICId?: string;
}
