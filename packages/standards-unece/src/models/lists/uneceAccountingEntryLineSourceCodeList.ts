// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the source of an accounting entry line.
 * @see https://vocabulary.uncefact.org/AccountingEntryLineSourceCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceAccountingEntryLineSourceCodeList = {
	/**
	 * Manual Input: 1.
	 */
	ManualInput: "unece:AccountingEntryLineSourceCodeList#1",

	/**
	 * Import: 2.
	 */
	Import: "unece:AccountingEntryLineSourceCodeList#2",

	/**
	 * Exchange Profit or Loss: 3.
	 */
	ExchangeProfitOrLoss: "unece:AccountingEntryLineSourceCodeList#3",

	/**
	 * Settlement Difference: 4.
	 */
	SettlementDifference: "unece:AccountingEntryLineSourceCodeList#4"
} as const;

/**
 * A character string used to represent the source of an accounting entry line.
 * @see https://vocabulary.uncefact.org/AccountingEntryLineSourceCodeList
 */
export type UneceAccountingEntryLineSourceCodeList = (typeof UneceAccountingEntryLineSourceCodeList)[keyof typeof UneceAccountingEntryLineSourceCodeList];
