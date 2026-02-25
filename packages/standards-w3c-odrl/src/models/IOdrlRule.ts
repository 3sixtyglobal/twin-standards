// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlAction } from "./IOdrlAction.js";
import type { IOdrlAsset } from "./IOdrlAsset.js";
import type { IOdrlAssetCollection } from "./IOdrlAssetCollection.js";
import type { IOdrlConstraint } from "./IOdrlConstraint.js";
import type { IOdrlLogicalConstraint } from "./IOdrlLogicalConstraint.js";
import type { IOdrlParty } from "./IOdrlParty.js";
import type { IOdrlPartyCollection } from "./IOdrlPartyCollection.js";
import type { ActionType } from "./types/actionType.js";

/**
 * Base interface for ODRL Rules.
 * https://www.w3.org/TR/odrl-model/#rule
 */
export interface IOdrlRule {
	/**
	 * Optional unique identifier for the rule.
	 */
	uid?: string;

	/**
	 * The action associated with the rule.
	 */
	action?: ActionType | string | IOdrlAction | (ActionType | string | IOdrlAction)[];

	/**
	 * The target asset for the rule.
	 */
	target?:
		| string
		| IOdrlAsset
		| IOdrlAssetCollection
		| (string | IOdrlAsset | IOdrlAssetCollection)[];

	/**
	 * The assigner of the rule.
	 */
	assigner?:
		| string
		| IOdrlParty
		| IOdrlPartyCollection
		| (string | IOdrlParty | IOdrlPartyCollection)[];

	/**
	 * The assignee of the rule.
	 */
	assignee?:
		| string
		| IOdrlParty
		| IOdrlPartyCollection
		| (string | IOdrlParty | IOdrlPartyCollection)[];

	/**
	 * Constraints applied to the rule.
	 */
	constraint?:
		| IOdrlConstraint
		| IOdrlLogicalConstraint
		| (IOdrlConstraint | IOdrlLogicalConstraint)[];

	/**
	 * Additional relation sub-properties as defined in ODRL profiles.
	 * For example, 'summary' in profile "http://example.com/odrl:profile:03"
	 * indicates where the output should be stored.
	 */
	summary?: string;
}
