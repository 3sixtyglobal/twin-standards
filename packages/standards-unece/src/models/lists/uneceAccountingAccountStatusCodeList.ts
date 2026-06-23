// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of accounting account status.
 * @see https://vocabulary.uncefact.org/AccountingAccountStatusCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceAccountingAccountStatusCodeList = {
	/**
	 * Open: 1.
	 */
	Open: "unece:AccountingAccountStatusCodeList#1",

	/**
	 * Closed: 2.
	 */
	Closed: "unece:AccountingAccountStatusCodeList#2",

	/**
	 * Temporarily unusable: 3.
	 */
	TemporarilyUnusable: "unece:AccountingAccountStatusCodeList#3",

	/**
	 * Pending: 4.
	 */
	Pending: "unece:AccountingAccountStatusCodeList#4"
} as const;

/**
 * A character string used to represent the type of accounting account status.
 * @see https://vocabulary.uncefact.org/AccountingAccountStatusCodeList
 */
export type UneceAccountingAccountStatusCodeList = (typeof UneceAccountingAccountStatusCodeList)[keyof typeof UneceAccountingAccountStatusCodeList];
