// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceSpecifiedFault typeCode property.
 * @see https://vocabulary.uncefact.org/SpecifiedFault
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceSpecifiedFaultTypeCodeList = {
	/**
	 * A fault applicable to this trade product.
	 * A specified fault applicable to this product batch.
	 * A specified fault applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableFault
	 */
	ApplicableFault: "unece:applicableFault"
} as const;

/**
 * Values for UneceSpecifiedFault typeCode property.
 * @see https://vocabulary.uncefact.org/SpecifiedFault
 */
export type UneceSpecifiedFaultTypeCodeList = (typeof UneceSpecifiedFaultTypeCodeList)[keyof typeof UneceSpecifiedFaultTypeCodeList];
