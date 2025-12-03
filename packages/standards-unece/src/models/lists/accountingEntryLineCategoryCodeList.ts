// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the category of a line of an accounting entry.
 * @see https://vocabulary.uncefact.org/AccountingEntryLineCategoryCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AccountingEntryLineCategoryCodeList = {
	/**
	 * Normal: 1.
	 */
	Normal: "unece:AccountingEntryLineCategoryCodeList#1",

	/**
	 * Opening Balance: 2.
	 */
	OpeningBalance: "unece:AccountingEntryLineCategoryCodeList#2",

	/**
	 * Simulation: 3.
	 */
	Simulation: "unece:AccountingEntryLineCategoryCodeList#3",

	/**
	 * Paid Commercial Paper Not Yet Due From a Prior Period: 4.
	 */
	PaidCommercialPaperNotYetDueFromAPriorPeriod: "unece:AccountingEntryLineCategoryCodeList#4",

	/**
	 * Not Matched Line in a Prior Year: 5.
	 */
	NotMatchedLineInAPriorYear: "unece:AccountingEntryLineCategoryCodeList#5",

	/**
	 * Not Reconcilied Line in a Prior Period: 6.
	 */
	NotReconciliedLineInAPriorPeriod: "unece:AccountingEntryLineCategoryCodeList#6",

	/**
	 * Closing Balance: 7.
	 */
	ClosingBalance: "unece:AccountingEntryLineCategoryCodeList#7"
} as const;

/**
 * A character string used to represent the category of a line of an accounting entry.
 * @see https://vocabulary.uncefact.org/AccountingEntryLineCategoryCodeList
 */
export type AccountingEntryLineCategoryCodeList = (typeof AccountingEntryLineCategoryCodeList)[keyof typeof AccountingEntryLineCategoryCodeList];
