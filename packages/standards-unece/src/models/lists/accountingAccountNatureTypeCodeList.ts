// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of accounting account nature.
 * @see https://vocabulary.uncefact.org/AccountingAccountNatureTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AccountingAccountNatureTypeCodeList = {
	/**
	 * Receivable Third: 1.
	 */
	ReceivableThird: "unece:AccountingAccountNatureTypeCodeList#1",

	/**
	 * Payable Third: 2.
	 */
	PayableThird: "unece:AccountingAccountNatureTypeCodeList#2",

	/**
	 * Expense: 3.
	 */
	Expense: "unece:AccountingAccountNatureTypeCodeList#3",

	/**
	 * Income: 4.
	 */
	Income: "unece:AccountingAccountNatureTypeCodeList#4",

	/**
	 * Assets: 5.
	 */
	Assets: "unece:AccountingAccountNatureTypeCodeList#5"
} as const;

/**
 * A character string used to represent the type of accounting account nature.
 * @see https://vocabulary.uncefact.org/AccountingAccountNatureTypeCodeList
 */
export type AccountingAccountNatureTypeCodeList = (typeof AccountingAccountNatureTypeCodeList)[keyof typeof AccountingAccountNatureTypeCodeList];
