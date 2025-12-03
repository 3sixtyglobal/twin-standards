// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of accounting account classification.
 * @see https://vocabulary.uncefact.org/AccountingAccountClassificationCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AccountingAccountClassificationCodeList = {
	/**
	 * General Chart of accounts: 1.
	 */
	GeneralChartOfAccounts: "unece:AccountingAccountClassificationCodeList#1",

	/**
	 * Cost Chart of accounts: 2.
	 */
	CostChartOfAccounts: "unece:AccountingAccountClassificationCodeList#2",

	/**
	 * Budget Chart of accounts: 3.
	 */
	BudgetChartOfAccounts: "unece:AccountingAccountClassificationCodeList#3"
} as const;

/**
 * A character string used to represent the type of accounting account classification.
 * @see https://vocabulary.uncefact.org/AccountingAccountClassificationCodeList
 */
export type AccountingAccountClassificationCodeList = (typeof AccountingAccountClassificationCodeList)[keyof typeof AccountingAccountClassificationCodeList];
