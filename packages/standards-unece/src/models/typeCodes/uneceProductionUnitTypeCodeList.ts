// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceProductionUnit typeCode property.
 * @see https://vocabulary.uncefact.org/ProductionUnit
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceProductionUnitTypeCodeList = {
	/**
	 * A facility production unit related to this referenced location.
	 * A production unit related to this production facility.
	 * @see https://vocabulary.uncefact.org/relatedProductionUnit
	 */
	RelatedProductionUnit: "unece:relatedProductionUnit",

	/**
	 * A facility production unit for this specified production device.
	 * A facility production unit specified for this production machine.
	 * @see https://vocabulary.uncefact.org/specifiedProductionUnit
	 */
	SpecifiedProductionUnit: "unece:specifiedProductionUnit",

	/**
	 * A production unit subordinate to this facility production unit.
	 * @see https://vocabulary.uncefact.org/subordinateProductionUnit
	 */
	SubordinateProductionUnit: "unece:subordinateProductionUnit"
} as const;

/**
 * Values for UneceProductionUnit typeCode property.
 * @see https://vocabulary.uncefact.org/ProductionUnit
 */
export type UneceProductionUnitTypeCodeList = (typeof UneceProductionUnitTypeCodeList)[keyof typeof UneceProductionUnitTypeCodeList];
