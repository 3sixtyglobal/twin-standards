// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the category of an accounting entry.
 * @see https://vocabulary.uncefact.org/AccountingEntryCategoryCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AccountingEntryCategoryCodeList = {
	/**
	 * Financial: 1.
	 */
	Financial: "unece:AccountingEntryCategoryCodeList#1",

	/**
	 * Budget: 2.
	 */
	Budget: "unece:AccountingEntryCategoryCodeList#2",

	/**
	 * Comparison: 3.
	 */
	Comparison: "unece:AccountingEntryCategoryCodeList#3",

	/**
	 * Standard: 4.
	 */
	Standard: "unece:AccountingEntryCategoryCodeList#4",

	/**
	 * Recurrent: 5.
	 */
	Recurrent: "unece:AccountingEntryCategoryCodeList#5",

	/**
	 * Reordered: 6.
	 */
	Reordered: "unece:AccountingEntryCategoryCodeList#6",

	/**
	 * Defined by user: 7.
	 */
	DefinedByUser: "unece:AccountingEntryCategoryCodeList#7"
} as const;

/**
 * A character string used to represent the category of an accounting entry.
 * @see https://vocabulary.uncefact.org/AccountingEntryCategoryCodeList
 */
export type AccountingEntryCategoryCodeList = (typeof AccountingEntryCategoryCodeList)[keyof typeof AccountingEntryCategoryCodeList];
