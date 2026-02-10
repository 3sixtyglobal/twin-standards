// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceChemical typeCode property.
 * @see https://vocabulary.uncefact.org/Chemical
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceChemicalTypeCodeList = {
	/**
	 * A chemical used during this applied chemical treatment.
	 * A distinct chemical used for this specified chemical treatment.
	 * A distinct chemical used for this specified material.
	 * @see https://vocabulary.uncefact.org/usedChemical
	 */
	UsedChemical: "unece:usedChemical"
} as const;

/**
 * Values for UneceChemical typeCode property.
 * @see https://vocabulary.uncefact.org/Chemical
 */
export type UneceChemicalTypeCodeList = (typeof UneceChemicalTypeCodeList)[keyof typeof UneceChemicalTypeCodeList];
