// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of access rights.
 * @see https://vocabulary.uncefact.org/AccessRightsTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AccessRightsTypeCodeList = {
	/**
	 * Prohibited: P.
	 */
	Prohibited: "unece:AccessRightsTypeCodeList#P",

	/**
	 * Restricted: R.
	 */
	Restricted: "unece:AccessRightsTypeCodeList#R",

	/**
	 * Unlimited: U.
	 */
	Unlimited: "unece:AccessRightsTypeCodeList#U"
} as const;

/**
 * A character string used to represent the type of access rights.
 * @see https://vocabulary.uncefact.org/AccessRightsTypeCodeList
 */
export type AccessRightsTypeCodeList = (typeof AccessRightsTypeCodeList)[keyof typeof AccessRightsTypeCodeList];
