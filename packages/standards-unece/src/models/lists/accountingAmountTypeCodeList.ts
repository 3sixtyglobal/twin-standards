// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of accounting amount.
 * @see https://vocabulary.uncefact.org/AccountingAmountTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AccountingAmountTypeCodeList = {
	/**
	 * Allowance Charge Amount: 1.
	 */
	AllowanceChargeAmount: "unece:AccountingAmountTypeCodeList#1",

	/**
	 * Insurance Charge Amount: 2.
	 */
	InsuranceChargeAmount: "unece:AccountingAmountTypeCodeList#2",

	/**
	 * Taxable Transport Charge Amount: 3.
	 */
	TaxableTransportChargeAmount: "unece:AccountingAmountTypeCodeList#3",

	/**
	 * Adjustment Amount: 4.
	 */
	AdjustmentAmount: "unece:AccountingAmountTypeCodeList#4",

	/**
	 * Taxable Amount: 5.
	 */
	TaxableAmount: "unece:AccountingAmountTypeCodeList#5",

	/**
	 * Tax Amount: 6.
	 */
	TaxAmount: "unece:AccountingAmountTypeCodeList#6"
} as const;

/**
 * A character string used to represent the type of accounting amount.
 * @see https://vocabulary.uncefact.org/AccountingAmountTypeCodeList
 */
export type AccountingAmountTypeCodeList = (typeof AccountingAmountTypeCodeList)[keyof typeof AccountingAmountTypeCodeList];
