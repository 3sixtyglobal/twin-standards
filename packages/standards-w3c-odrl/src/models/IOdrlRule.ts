// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IOdrlAction } from "./IOdrlAction.js";
import type { IOdrlAsset } from "./IOdrlAsset.js";
import type { IOdrlConstraint } from "./IOdrlConstraint.js";
import type { IOdrlParty } from "./IOdrlParty.js";
import type { ActionType } from "./types/actionType.js";

/**
 * Base interface for ODRL Rules.
 * https://www.w3.org/TR/odrl-model/#rule
 */
export interface IOdrlRule extends IJsonLdNodeObject {
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
	target?: string | IOdrlAsset | (string | IOdrlAsset)[];

	/**
	 * The assigner of the rule.
	 */
	assigner?: string | IOdrlParty;

	/**
	 * The assignee of the rule.
	 */
	assignee?: string | IOdrlParty;

	/**
	 * Constraints applied to the rule.
	 */
	constraint?: IOdrlConstraint[];

	/**
	 * Additional relation sub-properties as defined in ODRL profiles.
	 * For example, 'summary' in profile "http://example.com/odrl:profile:03"
	 * indicates where the output should be stored.
	 */
	summary?: string;
}
