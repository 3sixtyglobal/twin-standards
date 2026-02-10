// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceSpecifiedInspection typeCode property.
 * @see https://vocabulary.uncefact.org/SpecifiedInspection
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceSpecifiedInspectionTypeCodeList = {
	/**
	 * A specified inspection applicable to this logistics transport movement.
	 * A specified inspection applicable to this product batch.
	 * A specified inspection applicable to this production facility.
	 * A specified inspection applicable to this production process.
	 * A specified inspection applicable to this referenced location.
	 * A specified inspection applicable to this trade party.
	 * An inspection applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedInspection
	 */
	ApplicableSpecifiedInspection: "unece:applicableSpecifiedInspection"
} as const;

/**
 * Values for UneceSpecifiedInspection typeCode property.
 * @see https://vocabulary.uncefact.org/SpecifiedInspection
 */
export type UneceSpecifiedInspectionTypeCodeList = (typeof UneceSpecifiedInspectionTypeCodeList)[keyof typeof UneceSpecifiedInspectionTypeCodeList];
