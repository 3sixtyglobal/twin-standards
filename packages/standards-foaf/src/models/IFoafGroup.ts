// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@3sixty/core";
import type { FoafContextType } from "./foafContextType.js";
import type { FoafTypes } from "./foafTypes.js";
import type { IFoafAgent } from "./IFoafAgent.js";

/**
 * A FOAF Group.
 * @see http://xmlns.com/foaf/0.1/
 */
export interface IFoafGroup extends IFoafAgent {
	/**
	 * The LD Context.
	 */
	"@context"?: FoafContextType;

	/**
	 * Type.
	 */
	"@type": typeof FoafTypes.Group;

	/**
	 * Indicates a member of a Group
	 * @see http://xmlns.com/foaf/spec/#term_member
	 */
	member?: ObjectOrArray<IFoafAgent>;
}
