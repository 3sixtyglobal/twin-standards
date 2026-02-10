// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceSupplyPlan typeCode property.
 * @see https://vocabulary.uncefact.org/SupplyPlan
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceSupplyPlanTypeCodeList = {
	/**
	 * A supply plan, at line level, projected for this trade delivery.
	 * @see https://vocabulary.uncefact.org/projectedSupplyPlan
	 */
	ProjectedSupplyPlan: "unece:projectedSupplyPlan",

	/**
	 * The specification of the delivery quantities and delivery date/time values in a supply plan for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyPlan
	 */
	SpecifiedSupplyPlan: "unece:specifiedSupplyPlan"
} as const;

/**
 * Values for UneceSupplyPlan typeCode property.
 * @see https://vocabulary.uncefact.org/SupplyPlan
 */
export type UneceSupplyPlanTypeCodeList = (typeof UneceSupplyPlanTypeCodeList)[keyof typeof UneceSupplyPlanTypeCodeList];
