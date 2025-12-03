// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the processing of an accounting entry.
 * @see https://vocabulary.uncefact.org/AccountingEntryProcessingCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AccountingEntryProcessingCodeList = {
	/**
	 * Validated: 1.
	 */
	Validated: "unece:AccountingEntryProcessingCodeList#1",

	/**
	 * Non Validated: 2.
	 */
	NonValidated: "unece:AccountingEntryProcessingCodeList#2",

	/**
	 * Proposed: 3.
	 */
	Proposed: "unece:AccountingEntryProcessingCodeList#3",

	/**
	 * Simulated: 4.
	 */
	Simulated: "unece:AccountingEntryProcessingCodeList#4",

	/**
	 * Postponed: 5.
	 */
	Postponed: "unece:AccountingEntryProcessingCodeList#5",

	/**
	 * Removed: 6.
	 */
	Removed: "unece:AccountingEntryProcessingCodeList#6"
} as const;

/**
 * A character string used to represent the processing of an accounting entry.
 * @see https://vocabulary.uncefact.org/AccountingEntryProcessingCodeList
 */
export type AccountingEntryProcessingCodeList = (typeof AccountingEntryProcessingCodeList)[keyof typeof AccountingEntryProcessingCodeList];
