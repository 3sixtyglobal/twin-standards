// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceSustainabilityInspection typeCode property.
 * @see https://vocabulary.uncefact.org/SustainabilityInspection
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceSustainabilityInspectionTypeCodeList = {
	/**
	 * A sustainability inspection applicable to this logistics transport movement.
	 * A sustainability inspection applicable to this product batch.
	 * A sustainability inspection applicable to this production facility.
	 * A sustainability inspection applicable to this production process.
	 * A sustainability inspection applicable to this referenced location.
	 * A sustainability inspection applicable to this trade party.
	 * A sustainability inspection applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityInspection
	 */
	ApplicableSustainabilityInspection: "unece:applicableSustainabilityInspection"
} as const;

/**
 * Values for UneceSustainabilityInspection typeCode property.
 * @see https://vocabulary.uncefact.org/SustainabilityInspection
 */
export type UneceSustainabilityInspectionTypeCodeList = (typeof UneceSustainabilityInspectionTypeCodeList)[keyof typeof UneceSustainabilityInspectionTypeCodeList];
