// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceLicence typeCode property.
 * @see https://vocabulary.uncefact.org/Licence
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceLicenceTypeCodeList = {
	/**
	 * A specified licence applicable to this production process.
	 * A specified licence applicable to this referenced standard.
	 * A specified licence applicable to this trade party.
	 * A specified licence applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableLicence
	 */
	ApplicableLicence: "unece:applicableLicence"
} as const;

/**
 * Values for UneceLicence typeCode property.
 * @see https://vocabulary.uncefact.org/Licence
 */
export type UneceLicenceTypeCodeList = (typeof UneceLicenceTypeCodeList)[keyof typeof UneceLicenceTypeCodeList];
