// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IOdrlPartyCollection } from "./IOdrlPartyCollection.js";

/**
 * Interface for ODRL Parties.
 * https://www.w3.org/TR/odrl-model/#party
 */
export interface IOdrlParty {
	/**
	 * The unique identifier for the party.
	 * Must be an IRI.
	 * @json-schema format:uri
	 */
	uid?: string;

	/**
	 * The type of the party.
	 * Can be used to specify additional type information (e.g., "Party",
	 * "vcard:Organization", "vcard:Individual").
	 */
	"@type"?: ObjectOrArray<string>;

	/**
	 * Reference to the party collection this party is part of.
	 * Used to identify a PartyCollection that a Party entity is a member of.
	 */
	partOf?: ObjectOrArray<string | IOdrlPartyCollection>;

	/**
	 * Reference to a policy where this party is an assignee.
	 * When assigneeOf is asserted, the Party MUST be inferred to undertake
	 * the assignee functional role of all the Rules of that Policy.
	 */
	assigneeOf?: ObjectOrArray<string>;

	/**
	 * Reference to a policy where this party is an assigner.
	 * When assignerOf is asserted, the Party MUST be inferred to undertake
	 * the assigner functional role of all the Rules of that Policy.
	 */
	assignerOf?: ObjectOrArray<string>;
}
