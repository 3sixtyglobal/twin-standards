// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to qualify an accounting amount.
 * @see https://vocabulary.uncefact.org/AccountingAmountQualifierCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceAccountingAmountQualifierCodeList = {
	/**
	 * Entries: EN.
	 */
	Entries: "unece:AccountingAmountQualifierCodeList#EN",

	/**
	 * Open balance: SB.
	 */
	OpenBalance: "unece:AccountingAmountQualifierCodeList#SB",

	/**
	 * End balance: SE.
	 */
	EndBalance: "unece:AccountingAmountQualifierCodeList#SE"
} as const;

/**
 * A character string used to qualify an accounting amount.
 * @see https://vocabulary.uncefact.org/AccountingAmountQualifierCodeList
 */
export type UneceAccountingAmountQualifierCodeList = (typeof UneceAccountingAmountQualifierCodeList)[keyof typeof UneceAccountingAmountQualifierCodeList];
