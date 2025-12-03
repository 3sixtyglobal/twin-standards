// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of an accounting account.
 * @see https://vocabulary.uncefact.org/AccountingAccountTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AccountingAccountTypeCodeList = {
	/**
	 * Financial: 1.
	 */
	Financial: "unece:AccountingAccountTypeCodeList#1",

	/**
	 * Subsidiary: 2.
	 */
	Subsidiary: "unece:AccountingAccountTypeCodeList#2",

	/**
	 * Budget: 3.
	 */
	Budget: "unece:AccountingAccountTypeCodeList#3",

	/**
	 * Cost Accounting: 4.
	 */
	CostAccounting: "unece:AccountingAccountTypeCodeList#4",

	/**
	 * Receivable: 5.
	 */
	Receivable: "unece:AccountingAccountTypeCodeList#5",

	/**
	 * Payable: 6.
	 */
	Payable: "unece:AccountingAccountTypeCodeList#6",

	/**
	 * Job Cost Accounting: 7.
	 */
	JobCostAccounting: "unece:AccountingAccountTypeCodeList#7"
} as const;

/**
 * A character string used to represent the type of an accounting account.
 * @see https://vocabulary.uncefact.org/AccountingAccountTypeCodeList
 */
export type AccountingAccountTypeCodeList = (typeof AccountingAccountTypeCodeList)[keyof typeof AccountingAccountTypeCodeList];
