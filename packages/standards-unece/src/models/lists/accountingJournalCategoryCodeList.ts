// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of an accounting journal category.
 * @see https://vocabulary.uncefact.org/AccountingJournalCategoryCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AccountingJournalCategoryCodeList = {
	/**
	 * Bank: 1.
	 */
	Bank: "unece:AccountingJournalCategoryCodeList#1",

	/**
	 * Amortization: 10.
	 */
	Amortization: "unece:AccountingJournalCategoryCodeList#10",

	/**
	 * Depreciation: 11.
	 */
	Depreciation: "unece:AccountingJournalCategoryCodeList#11",

	/**
	 * Cash: 2.
	 */
	Cash: "unece:AccountingJournalCategoryCodeList#2",

	/**
	 * Others: 3.
	 */
	Others: "unece:AccountingJournalCategoryCodeList#3",

	/**
	 * Purchase: 4.
	 */
	Purchase: "unece:AccountingJournalCategoryCodeList#4",

	/**
	 * Sales: 5.
	 */
	Sales: "unece:AccountingJournalCategoryCodeList#5",

	/**
	 * Bank cheques remit: 6.
	 */
	BankChequesRemit: "unece:AccountingJournalCategoryCodeList#6",

	/**
	 * Miscellaneous: 7.
	 */
	Miscellaneous: "unece:AccountingJournalCategoryCodeList#7",

	/**
	 * Payroll: 8.
	 */
	Payroll: "unece:AccountingJournalCategoryCodeList#8",

	/**
	 * Investments: 9.
	 */
	Investments: "unece:AccountingJournalCategoryCodeList#9"
} as const;

/**
 * A character string used to represent the type of an accounting journal category.
 * @see https://vocabulary.uncefact.org/AccountingJournalCategoryCodeList
 */
export type AccountingJournalCategoryCodeList = (typeof AccountingJournalCategoryCodeList)[keyof typeof AccountingJournalCategoryCodeList];
