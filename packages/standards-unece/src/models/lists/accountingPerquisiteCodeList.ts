// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of an accounting perquisite.
 * @see https://vocabulary.uncefact.org/AccountingPerquisiteCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AccountingPerquisiteCodeList = {
	/**
	 * Food: 1.
	 */
	Food: "unece:AccountingPerquisiteCodeList#1",

	/**
	 * Accommodation: 2.
	 */
	Accommodation: "unece:AccountingPerquisiteCodeList#2",

	/**
	 * Car: 3.
	 */
	Car: "unece:AccountingPerquisiteCodeList#3",

	/**
	 * Other perquisite: 4.
	 */
	OtherPerquisite: "unece:AccountingPerquisiteCodeList#4"
} as const;

/**
 * A character string used to represent the type of an accounting perquisite.
 * @see https://vocabulary.uncefact.org/AccountingPerquisiteCodeList
 */
export type AccountingPerquisiteCodeList = (typeof AccountingPerquisiteCodeList)[keyof typeof AccountingPerquisiteCodeList];
