// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of accounting account balance reopening.
 * @see https://vocabulary.uncefact.org/AccountingAccountBalanceReopeningTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AccountingAccountBalanceReopeningTypeCodeList = {
	/**
	 * Balance carried over: 1.
	 */
	BalanceCarriedOver: "unece:AccountingAccountBalanceReopeningTypeCodeList#1",

	/**
	 * Reopening debit and credit total amounts of not matched entries only: 2.
	 */
	ReopeningDebitAndCreditTotalAmountsOfNotMatchedEntriesOnly: "unece:AccountingAccountBalanceReopeningTypeCodeList#2",

	/**
	 * Reopening detailed of not matched entries only: 3.
	 */
	ReopeningDetailedOfNotMatchedEntriesOnly: "unece:AccountingAccountBalanceReopeningTypeCodeList#3",

	/**
	 * Reopening debit and credit total amounts: 4.
	 */
	ReopeningDebitAndCreditTotalAmounts: "unece:AccountingAccountBalanceReopeningTypeCodeList#4",

	/**
	 * No balance reopening: 5.
	 */
	NoBalanceReopening: "unece:AccountingAccountBalanceReopeningTypeCodeList#5"
} as const;

/**
 * A character string used to represent the type of accounting account balance reopening.
 * @see https://vocabulary.uncefact.org/AccountingAccountBalanceReopeningTypeCodeList
 */
export type AccountingAccountBalanceReopeningTypeCodeList = (typeof AccountingAccountBalanceReopeningTypeCodeList)[keyof typeof AccountingAccountBalanceReopeningTypeCodeList];
