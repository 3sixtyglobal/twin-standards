// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of a party.
 * @see https://vocabulary.uncefact.org/PartyTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UnecePartyTypeCodeList = {
	/**
	 * Branch: BRA.
	 */
	Branch: "unece:PartyTypeCodeList#BRA",

	/**
	 * Department: DEP.
	 */
	Department: "unece:PartyTypeCodeList#DEP",

	/**
	 * Direction: DIR.
	 */
	Direction: "unece:PartyTypeCodeList#DIR",

	/**
	 * Section: SEC.
	 */
	Section: "unece:PartyTypeCodeList#SEC",

	/**
	 * Service: SER.
	 */
	Service: "unece:PartyTypeCodeList#SER"
} as const;

/**
 * A character string used to represent the type of a party.
 * @see https://vocabulary.uncefact.org/PartyTypeCodeList
 */
export type UnecePartyTypeCodeList = (typeof UnecePartyTypeCodeList)[keyof typeof UnecePartyTypeCodeList];
