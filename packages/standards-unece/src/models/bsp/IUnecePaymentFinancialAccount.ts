// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceCurrencyCodeList } from "../lists/uneceCurrencyCodeList.js";
import type { UnecePaymentFinancialAccountTypeCodeList } from "../typeCodes/unecePaymentFinancialAccountTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A specific business arrangement whereby monetary values pertaining to payment, collected or paid, are recorded.
 * @see https://vocabulary.uncefact.org/PaymentFinancialAccount
 */
export interface IUnecePaymentFinancialAccount extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.PaymentFinancialAccount;

	/**
	 * An account name, expressed as text, of this payment financial account.
	 * @see https://vocabulary.uncefact.org/accountName
	 */
	accountName?: string;

	/**
	 * The unique International Bank Account Number (IBAN) identifier for this payment financial account.
	 * @see https://vocabulary.uncefact.org/iBANId
	 */
	iBANId?: string;

	/**
	 * The identifier for this payment financial account.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The code specifying the currency of this payment financial account.
	 * @see https://vocabulary.uncefact.org/paymentFinancialAccountCurrencyCode
	 */
	paymentFinancialAccountCurrencyCode?: UneceCurrencyCodeList;

	/**
	 * The code specifying the type of payment financial account.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UnecePaymentFinancialAccountTypeCodeList | string;
}
