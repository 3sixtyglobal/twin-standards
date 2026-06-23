// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of financial account.
 * @see https://vocabulary.uncefact.org/FinancialAccountTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceFinancialAccountTypeCodeList = {
	/**
	 * Saving: 1.
	 */
	Saving: "unece:FinancialAccountTypeCodeList#1",

	/**
	 * Checking: 2.
	 */
	Checking: "unece:FinancialAccountTypeCodeList#2"
} as const;

/**
 * A character string used to represent the type of financial account.
 * @see https://vocabulary.uncefact.org/FinancialAccountTypeCodeList
 */
export type UneceFinancialAccountTypeCodeList = (typeof UneceFinancialAccountTypeCodeList)[keyof typeof UneceFinancialAccountTypeCodeList];
