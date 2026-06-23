// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceAllergy typeCode property.
 * @see https://vocabulary.uncefact.org/Allergy
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceAllergyTypeCodeList = {
	/**
	 * An allergy notified for this guest person.
	 * @see https://vocabulary.uncefact.org/notifiedAllergy
	 */
	NotifiedAllergy: "unece:notifiedAllergy"
} as const;

/**
 * Values for UneceAllergy typeCode property.
 * @see https://vocabulary.uncefact.org/Allergy
 */
export type UneceAllergyTypeCodeList = (typeof UneceAllergyTypeCodeList)[keyof typeof UneceAllergyTypeCodeList];
