// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceQuantityAnalysis typeCode property.
 * @see https://vocabulary.uncefact.org/QuantityAnalysis
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceQuantityAnalysisTypeCodeList = {
	/**
	 * A quantity analysis breakdown of this work item quantity analysis.
	 * @see https://vocabulary.uncefact.org/breakdownQuantityAnalysis
	 */
	BreakdownQuantityAnalysis: "unece:breakdownQuantityAnalysis",

	/**
	 * An analysis of the total quantity for this basic work item.
	 * @see https://vocabulary.uncefact.org/totalQuantityAnalysis
	 */
	TotalQuantityAnalysis: "unece:totalQuantityAnalysis"
} as const;

/**
 * Values for UneceQuantityAnalysis typeCode property.
 * @see https://vocabulary.uncefact.org/QuantityAnalysis
 */
export type UneceQuantityAnalysisTypeCodeList = (typeof UneceQuantityAnalysisTypeCodeList)[keyof typeof UneceQuantityAnalysisTypeCodeList];
