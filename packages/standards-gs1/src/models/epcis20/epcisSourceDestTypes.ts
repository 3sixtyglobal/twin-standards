// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * Supported EPCIS 2.0 `source-dest-type` values describing the role of a party
 * or location in a transfer.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EpcisSourceDestTypes = {
	/**
	 * Identifier denotes the party who owns (or will own) the objects at the
	 * business transfer endpoint.
	 */
	OwningParty: "owning_party",

	/**
	 * Identifier denotes the party who has (or will have) physical possession of
	 * the objects at the endpoint.
	 */
	PossessingParty: "possessing_party",

	/**
	 * Identifier denotes the physical location of the originating or terminating
	 * endpoint of the business transfer.
	 */
	Location: "location"
} as const;

/**
 * Supported EPCIS 2.0 `source-dest-type` values describing the role of a party
 * or location in a transfer.
 */
export type EpcisSourceDestTypes = (typeof EpcisSourceDestTypes)[keyof typeof EpcisSourceDestTypes];
