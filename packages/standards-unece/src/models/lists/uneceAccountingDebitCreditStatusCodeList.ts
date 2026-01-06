// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the accounting debit or credit sign.
 * @see https://vocabulary.uncefact.org/AccountingDebitCreditStatusCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceAccountingDebitCreditStatusCodeList = {
	/**
	 * Debit: 29.
	 */
	Debit: "unece:AccountingDebitCreditStatusCodeList#29",

	/**
	 * Credit: 30.
	 */
	Credit: "unece:AccountingDebitCreditStatusCodeList#30",

	/**
	 * Positive debit: 31.
	 */
	PositiveDebit: "unece:AccountingDebitCreditStatusCodeList#31",

	/**
	 * Negative debit: 32.
	 */
	NegativeDebit: "unece:AccountingDebitCreditStatusCodeList#32",

	/**
	 * Positive credit: 33.
	 */
	PositiveCredit: "unece:AccountingDebitCreditStatusCodeList#33",

	/**
	 * Negative credit: 34.
	 */
	NegativeCredit: "unece:AccountingDebitCreditStatusCodeList#34",

	/**
	 * Unsigned amount: 66.
	 */
	UnsignedAmount: "unece:AccountingDebitCreditStatusCodeList#66"
} as const;

/**
 * A character string used to represent the accounting debit or credit sign.
 * @see https://vocabulary.uncefact.org/AccountingDebitCreditStatusCodeList
 */
export type UneceAccountingDebitCreditStatusCodeList = (typeof UneceAccountingDebitCreditStatusCodeList)[keyof typeof UneceAccountingDebitCreditStatusCodeList];
