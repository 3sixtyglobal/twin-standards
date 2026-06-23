// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the function of an accounting period.
 * @see https://vocabulary.uncefact.org/AccountingPeriodFunctionCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceAccountingPeriodFunctionCodeList = {
	/**
	 * Accounting year: 246.
	 */
	AccountingYear: "unece:AccountingPeriodFunctionCodeList#246",

	/**
	 * Invoicing period: 263.
	 */
	InvoicingPeriod: "unece:AccountingPeriodFunctionCodeList#263",

	/**
	 * Accounting period: 322.
	 */
	AccountingPeriod: "unece:AccountingPeriodFunctionCodeList#322",

	/**
	 * Tax period: 325.
	 */
	TaxPeriod: "unece:AccountingPeriodFunctionCodeList#325",

	/**
	 * Trial balance period: 452.
	 */
	TrialBalancePeriod: "unece:AccountingPeriodFunctionCodeList#452",

	/**
	 * Chart of account period: 456.
	 */
	ChartOfAccountPeriod: "unece:AccountingPeriodFunctionCodeList#456",

	/**
	 * Balance data/time/period: 492.
	 */
	BalanceDataTimePeriod: "unece:AccountingPeriodFunctionCodeList#492",

	/**
	 * Report period: 567.
	 */
	ReportPeriod: "unece:AccountingPeriodFunctionCodeList#567",

	/**
	 * Fiscal consideration period: E001.
	 */
	FiscalConsiderationPeriod: "unece:AccountingPeriodFunctionCodeList#E001"
} as const;

/**
 * A character string used to represent the function of an accounting period.
 * @see https://vocabulary.uncefact.org/AccountingPeriodFunctionCodeList
 */
export type UneceAccountingPeriodFunctionCodeList = (typeof UneceAccountingPeriodFunctionCodeList)[keyof typeof UneceAccountingPeriodFunctionCodeList];
