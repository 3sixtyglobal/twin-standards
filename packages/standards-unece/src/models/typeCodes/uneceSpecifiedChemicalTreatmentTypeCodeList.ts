// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceSpecifiedChemicalTreatment typeCode property.
 * @see https://vocabulary.uncefact.org/SpecifiedChemicalTreatment
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceSpecifiedChemicalTreatmentTypeCodeList = {
	/**
	 * A chemical treatment applied during this production process.
	 * A chemical treatment applied to this product batch.
	 * A chemical treatment applied to this trade product.
	 * A specified chemical treatment applied to this agricultural application.
	 * @see https://vocabulary.uncefact.org/appliedChemicalTreatment
	 */
	AppliedChemicalTreatment: "unece:appliedChemicalTreatment"
} as const;

/**
 * Values for UneceSpecifiedChemicalTreatment typeCode property.
 * @see https://vocabulary.uncefact.org/SpecifiedChemicalTreatment
 */
export type UneceSpecifiedChemicalTreatmentTypeCodeList = (typeof UneceSpecifiedChemicalTreatmentTypeCodeList)[keyof typeof UneceSpecifiedChemicalTreatmentTypeCodeList];
