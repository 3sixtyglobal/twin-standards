// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of software user.
 * @see https://vocabulary.uncefact.org/SoftwareUserTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceSoftwareUserTypeCodeList = {
	/**
	 * Intermediate: I.
	 */
	Intermediate: "unece:SoftwareUserTypeCodeList#I",

	/**
	 * Recipient: R.
	 */
	Recipient: "unece:SoftwareUserTypeCodeList#R",

	/**
	 * Sender: S.
	 */
	Sender: "unece:SoftwareUserTypeCodeList#S"
} as const;

/**
 * A character string used to represent the type of software user.
 * @see https://vocabulary.uncefact.org/SoftwareUserTypeCodeList
 */
export type UneceSoftwareUserTypeCodeList = (typeof UneceSoftwareUserTypeCodeList)[keyof typeof UneceSoftwareUserTypeCodeList];
