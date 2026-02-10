// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceObject typeCode property.
 * @see https://vocabulary.uncefact.org/Object
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceObjectTypeCodeList = {
	/**
	 * An object assessed for this specified assessment.
	 * @see https://vocabulary.uncefact.org/assessedObject
	 */
	AssessedObject: "unece:assessedObject",

	/**
	 * An object certified by this specified certificate.
	 * @see https://vocabulary.uncefact.org/certifiedObject
	 */
	CertifiedObject: "unece:certifiedObject",

	/**
	 * An object verified for this specified declaration.
	 * An object verified for this specified licence.
	 * @see https://vocabulary.uncefact.org/verifiedObject
	 */
	VerifiedObject: "unece:verifiedObject"
} as const;

/**
 * Values for UneceObject typeCode property.
 * @see https://vocabulary.uncefact.org/Object
 */
export type UneceObjectTypeCodeList = (typeof UneceObjectTypeCodeList)[keyof typeof UneceObjectTypeCodeList];
