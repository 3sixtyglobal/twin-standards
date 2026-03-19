// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IOdrlConstraint } from "./IOdrlConstraint.js";
import type { IOdrlLogicalConstraint } from "./IOdrlLogicalConstraint.js";
import type { ActionType } from "./types/actionType.js";

/**
 * Interface for ODRL Actions.
 * https://www.w3.org/TR/odrl-model/#action
 */
export interface IOdrlAction {
	/**
	 * The value/identifier of the action.
	 * Used in complex action definitions.
	 */
	"rdf:value"?: { "@id": string };

	/**
	 * Direct action identifier.
	 * Used in simple action references.
	 */
	"@id"?: string;

	/**
	 * Refinements applied to the action.
	 */
	refinement?: ObjectOrArray<IOdrlConstraint | IOdrlLogicalConstraint>;

	/**
	 * Reference to the action this action is included in.
	 */
	includedIn?: ActionType | string;

	/**
	 * References to actions this action implies.
	 */
	implies?: (ActionType | string)[];
}
