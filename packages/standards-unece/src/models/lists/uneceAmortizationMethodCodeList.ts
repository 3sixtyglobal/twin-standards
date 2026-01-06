// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of an amortization method.
 * @see https://vocabulary.uncefact.org/AmortizationMethodCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceAmortizationMethodCodeList = {
	/**
	 * Variable amortization: 11.
	 */
	VariableAmortization: "unece:AmortizationMethodCodeList#11",

	/**
	 * Amortization at constant rate: 12.
	 */
	AmortizationAtConstantRate: "unece:AmortizationMethodCodeList#12",

	/**
	 * Amortization after basic allowance: 14.
	 */
	AmortizationAfterBasicAllowance: "unece:AmortizationMethodCodeList#14",

	/**
	 * Amortization with not budgeted constant cost: 20.
	 */
	AmortizationWithNotBudgetedConstantCost: "unece:AmortizationMethodCodeList#20",

	/**
	 * Amortization with budgeted constant cost: 21.
	 */
	AmortizationWithBudgetedConstantCost: "unece:AmortizationMethodCodeList#21",

	/**
	 * Amortization with unit budgeted constant cost: 22.
	 */
	AmortizationWithUnitBudgetedConstantCost: "unece:AmortizationMethodCodeList#22",

	/**
	 * Accelerated amortization (Acquired and made fixed asset between 4-12-2008 and 31-12-2009): 300.
	 */
	AcceleratedAmortization: "unece:AmortizationMethodCodeList#300",

	/**
	 * Accelerated amortization (Acquired and made fixed asset since 1-1-2010): 301.
	 */
	AcceleratedAmortization301: "unece:AmortizationMethodCodeList#301",

	/**
	 * Softy amortization: 31.
	 */
	SoftyAmortization: "unece:AmortizationMethodCodeList#31",

	/**
	 * Exponential amortization: 32.
	 */
	ExponentialAmortization: "unece:AmortizationMethodCodeList#32",

	/**
	 * Amortization at lessening rate: 33.
	 */
	AmortizationAtLesseningRate: "unece:AmortizationMethodCodeList#33",

	/**
	 * Normal progressive amortization: 40.
	 */
	NormalProgressiveAmortization: "unece:AmortizationMethodCodeList#40",

	/**
	 * Amortization in arithmetic progression: 41.
	 */
	AmortizationInArithmeticProgression: "unece:AmortizationMethodCodeList#41",

	/**
	 * Amortization in geometric progression: 42.
	 */
	AmortizationInGeometricProgression: "unece:AmortizationMethodCodeList#42",

	/**
	 * Financial amortization: 43.
	 */
	FinancialAmortization: "unece:AmortizationMethodCodeList#43",

	/**
	 * Amortization at increasing rate: 44.
	 */
	AmortizationAtIncreasingRate: "unece:AmortizationMethodCodeList#44",

	/**
	 * Amortization with logistic progression: 45.
	 */
	AmortizationWithLogisticProgression: "unece:AmortizationMethodCodeList#45"
} as const;

/**
 * A character string used to represent the type of an amortization method.
 * @see https://vocabulary.uncefact.org/AmortizationMethodCodeList
 */
export type UneceAmortizationMethodCodeList = (typeof UneceAmortizationMethodCodeList)[keyof typeof UneceAmortizationMethodCodeList];
