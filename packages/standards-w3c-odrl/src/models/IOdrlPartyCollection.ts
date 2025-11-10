// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlConstraint } from "./IOdrlConstraint.js";
import type { IOdrlParty } from "./IOdrlParty.js";

/**
 * Interface for ODRL Party Collections.
 * A PartyCollection identifies a collection of entities and is a subclass of Party.
 * https://www.w3.org/TR/odrl-model/#party
 */
export interface IOdrlPartyCollection extends IOdrlParty {
	/**
	 * Reference to the source of the party collection.
	 * Used to identify the origin or location of the collection.
	 */
	source: string;

	/**
	 * Refinements applied to the party collection.
	 * Used to specify constraints that apply to all members of the collection.
	 */
	refinement?: IOdrlConstraint[];
}
