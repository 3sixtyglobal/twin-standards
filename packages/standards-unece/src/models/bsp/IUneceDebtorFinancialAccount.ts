// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A specific business arrangement whereby debits arising from transactions are recorded.
 * @see https://vocabulary.uncefact.org/DebtorFinancialAccount
 */
export interface IUneceDebtorFinancialAccount {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.DebtorFinancialAccount;

	/**
	 * The account name, expressed as text, of this debtor financial account.
	 * @see https://vocabulary.uncefact.org/accountName
	 */
	accountName?: string;

	/**
	 * The unique Basic Bank Account Number (BBAN) identifier used as part of a National Account Numbering Scheme(s) for this
	 * debtor financial account.
	 * @see https://vocabulary.uncefact.org/bBANId
	 */
	bBANId?: string | IJsonLdValueObject;

	/**
	 * The code specifying the currency of this debtor financial account (Reference ISO 4217 codes).
	 * @see https://vocabulary.uncefact.org/currencyCode
	 */
	currencyCode?: string;

	/**
	 * The code specifying the type of debtor financial account.
	 * @see https://vocabulary.uncefact.org/debtorFinancialAccountTypeCode
	 */
	debtorFinancialAccountTypeCode?: string;

	/**
	 * The unique International Bank Account Number (IBAN) identifier for this debtor financial account.
	 * @see https://vocabulary.uncefact.org/iBANId
	 */
	iBANId?: string | IJsonLdValueObject;

	/**
	 * The unique proprietary identifier for this debtor financial account.
	 * @see https://vocabulary.uncefact.org/proprietaryId
	 */
	proprietaryId?: string | IJsonLdValueObject;

	/**
	 * The proprietary type, expressed as text, of this debtor financial account, such as the nature or use of the debtor
	 * account.
	 * @see https://vocabulary.uncefact.org/proprietaryType
	 */
	proprietaryType?: string;

	/**
	 * The unique Universal Payment Identification Code (UPIC) identifier used by the New York Clearing House for this debtor
	 * financial account.
	 * @see https://vocabulary.uncefact.org/uPICId
	 */
	uPICId?: string | IJsonLdValueObject;
}
