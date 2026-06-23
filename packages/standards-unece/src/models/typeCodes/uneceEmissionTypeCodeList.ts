// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceEmission typeCode property.
 * @see https://vocabulary.uncefact.org/Emission
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceEmissionTypeCodeList = {
	/**
	 * A certified level of pollution calculated for an emission from this logistics transport means.
	 * @see https://vocabulary.uncefact.org/certifiedEmission
	 */
	CertifiedEmission: "unece:certifiedEmission",

	/**
	 * A calculated emission specified for this logistics transport means.
	 * A calculated emission specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/specifiedEmission
	 */
	SpecifiedEmission: "unece:specifiedEmission"
} as const;

/**
 * Values for UneceEmission typeCode property.
 * @see https://vocabulary.uncefact.org/Emission
 */
export type UneceEmissionTypeCodeList = (typeof UneceEmissionTypeCodeList)[keyof typeof UneceEmissionTypeCodeList];
