// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the freight charge tariff class.
 * @see https://vocabulary.uncefact.org/FreightChargeTariffClassCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const FreightChargeTariffClassCodeList = {
	/**
	 * Senior person rate: A.
	 */
	SeniorPersonRate: "unece:FreightChargeTariffClassCodeList#A",

	/**
	 * Basic: B.
	 */
	Basic: "unece:FreightChargeTariffClassCodeList#B",

	/**
	 * Specific commodity rate: C.
	 */
	SpecificCommodityRate: "unece:FreightChargeTariffClassCodeList#C",

	/**
	 * Teenager rate: D.
	 */
	TeenagerRate: "unece:FreightChargeTariffClassCodeList#D",

	/**
	 * Child rate: E.
	 */
	ChildRate: "unece:FreightChargeTariffClassCodeList#E",

	/**
	 * Adult rate: F.
	 */
	AdultRate: "unece:FreightChargeTariffClassCodeList#F",

	/**
	 * Export Subsidy Rate: G.
	 */
	ExportSubsidyRate: "unece:FreightChargeTariffClassCodeList#G",

	/**
	 * Subsidy Rate: H.
	 */
	SubsidyRate: "unece:FreightChargeTariffClassCodeList#H",

	/**
	 * Rate per kilogram: K.
	 */
	RatePerKilogram: "unece:FreightChargeTariffClassCodeList#K",

	/**
	 * Minimum charge rate: M.
	 */
	MinimumChargeRate: "unece:FreightChargeTariffClassCodeList#M",

	/**
	 * Normal rate: N.
	 */
	NormalRate: "unece:FreightChargeTariffClassCodeList#N",

	/**
	 * Quantity rate: Q.
	 */
	QuantityRate: "unece:FreightChargeTariffClassCodeList#Q",

	/**
	 * Class rate (Reduction on normal rate): R.
	 */
	ClassRate: "unece:FreightChargeTariffClassCodeList#R",

	/**
	 * Class rate (Surcharge on normal rate): S.
	 */
	ClassRateS: "unece:FreightChargeTariffClassCodeList#S"
} as const;

/**
 * A character string used to represent the freight charge tariff class.
 * @see https://vocabulary.uncefact.org/FreightChargeTariffClassCodeList
 */
export type FreightChargeTariffClassCodeList = (typeof FreightChargeTariffClassCodeList)[keyof typeof FreightChargeTariffClassCodeList];
