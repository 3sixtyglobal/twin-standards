// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceSecurityTag typeCode property.
 * @see https://vocabulary.uncefact.org/SecurityTag
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceSecurityTagTypeCodeList = {
	/**
	 * A tag device attached to this trade product to provide protection from a peril such as theft.
	 * @see https://vocabulary.uncefact.org/attachedSecurityTag
	 */
	AttachedSecurityTag: "unece:attachedSecurityTag"
} as const;

/**
 * Values for UneceSecurityTag typeCode property.
 * @see https://vocabulary.uncefact.org/SecurityTag
 */
export type UneceSecurityTagTypeCodeList = (typeof UneceSecurityTagTypeCodeList)[keyof typeof UneceSecurityTagTypeCodeList];
