// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of an alternate currency amount.
 * @see https://vocabulary.uncefact.org/AlternateCurrencyAmountTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceAlternateCurrencyAmountTypeCodeList = {
	/**
	 * Payment Amount: 1.
	 */
	PaymentAmount: "unece:AlternateCurrencyAmountTypeCodeList#1",

	/**
	 * Reporting Amount: 2.
	 */
	ReportingAmount: "unece:AlternateCurrencyAmountTypeCodeList#2",

	/**
	 * Consolidation Amount: 3.
	 */
	ConsolidationAmount: "unece:AlternateCurrencyAmountTypeCodeList#3",

	/**
	 * Euro Transition Amount: 4.
	 */
	EuroTransitionAmount: "unece:AlternateCurrencyAmountTypeCodeList#4"
} as const;

/**
 * A character string used to represent the type of an alternate currency amount.
 * @see https://vocabulary.uncefact.org/AlternateCurrencyAmountTypeCodeList
 */
export type UneceAlternateCurrencyAmountTypeCodeList = (typeof UneceAlternateCurrencyAmountTypeCodeList)[keyof typeof UneceAlternateCurrencyAmountTypeCodeList];
