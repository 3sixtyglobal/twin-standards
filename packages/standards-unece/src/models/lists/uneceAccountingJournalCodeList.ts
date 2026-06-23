// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of an accounting journal.
 * @see https://vocabulary.uncefact.org/AccountingJournalCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceAccountingJournalCodeList = {
	/**
	 * Subsidiary journal: 1.
	 */
	SubsidiaryJournal: "unece:AccountingJournalCodeList#1",

	/**
	 * Budget journal: 2.
	 */
	BudgetJournal: "unece:AccountingJournalCodeList#2",

	/**
	 * Cost journal: 3.
	 */
	CostJournal: "unece:AccountingJournalCodeList#3",

	/**
	 * Journal: 4.
	 */
	Journal: "unece:AccountingJournalCodeList#4"
} as const;

/**
 * A character string used to represent the type of an accounting journal.
 * @see https://vocabulary.uncefact.org/AccountingJournalCodeList
 */
export type UneceAccountingJournalCodeList = (typeof UneceAccountingJournalCodeList)[keyof typeof UneceAccountingJournalCodeList];
