// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of amount weight.
 * @see https://vocabulary.uncefact.org/AmountWeightTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceAmountWeightTypeCodeList = {
	/**
	 * Decimalized amount: D.
	 */
	DecimalizedAmount: "unece:AmountWeightTypeCodeList#D",

	/**
	 * Milliard currency amount: MDC.
	 */
	MilliardCurrencyAmount: "unece:AmountWeightTypeCodeList#MDC",

	/**
	 * Million currency amount: MNC.
	 */
	MillionCurrencyAmount: "unece:AmountWeightTypeCodeList#MNC",

	/**
	 * Rounded amount: R.
	 */
	RoundedAmount: "unece:AmountWeightTypeCodeList#R",

	/**
	 * Truncated amount: T.
	 */
	TruncatedAmount: "unece:AmountWeightTypeCodeList#T",

	/**
	 * Thousand currency amount: TC.
	 */
	ThousandCurrencyAmount: "unece:AmountWeightTypeCodeList#TC"
} as const;

/**
 * A character string used to represent the type of amount weight.
 * @see https://vocabulary.uncefact.org/AmountWeightTypeCodeList
 */
export type UneceAmountWeightTypeCodeList = (typeof UneceAmountWeightTypeCodeList)[keyof typeof UneceAmountWeightTypeCodeList];
