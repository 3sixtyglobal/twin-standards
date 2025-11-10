// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IOdrlAction } from "./IOdrlAction.js";
import type { IOdrlAsset } from "./IOdrlAsset.js";
import type { IOdrlDuty } from "./IOdrlDuty.js";
import type { IOdrlParty } from "./IOdrlParty.js";
import type { IOdrlPermission } from "./IOdrlPermission.js";
import type { IOdrlProhibition } from "./IOdrlProhibition.js";
import type { OdrlContextType } from "./odrlContextType.js";
import type { ActionType } from "./types/actionType.js";
import type { ConflictStrategyType } from "./types/conflictStrategyType.js";
import type { PolicyType } from "./types/policyType.js";

/**
 * Interface representing an ODRL Policy.
 * https://www.w3.org/TR/odrl-model/#policy
 */
export interface IOdrlPolicy extends IJsonLdNodeObject {
	/**
	 * The context for the policy.
	 * Must include "https://www.w3.org/ns/odrl.jsonld"
	 */
	"@context": OdrlContextType;

	/**
	 * The type of policy.
	 * Must be one of: "Set", "Offer", "Agreement"
	 */
	"@type": PolicyType;

	/**
	 * The unique identifier for the policy.
	 * Must be an IRI.
	 */
	uid: string;

	/**
	 * The profile(s) this policy conforms to.
	 * IRIs identifying the ODRL Profile(s).
	 */
	profile?: string | string[];

	/**
	 * The assigner of the policy.
	 * Applies to all rules unless overridden at rule level.
	 */
	assigner?: string | IOdrlParty;

	/**
	 * The assignee of the policy.
	 * Applies to all rules unless overridden at rule level.
	 */
	assignee?: string | IOdrlParty;

	/**
	 * The target asset for the rule.
	 */
	target?: string | IOdrlAsset | (string | IOdrlAsset)[];

	/**
	 * The action associated with the rule.
	 */
	action?: ActionType | string | IOdrlAction | (ActionType | string | IOdrlAction)[];

	/**
	 * The parent policy(ies) this policy inherits from.
	 * IRIs identifying the parent Policy(ies).
	 */
	inheritFrom?: string | string[];

	/**
	 * The conflict resolution strategy.
	 * - perm: Permissions override Prohibitions
	 * - prohibit: Prohibitions override Permissions
	 * - invalid: Policy is void if conflicts exist (default)
	 */
	conflict?: ConflictStrategyType;

	/**
	 * The permissions in the policy.
	 * At least one of permission, prohibition, or obligation must be present.
	 */
	permission?: IOdrlPermission[];

	/**
	 * The prohibitions in the policy.
	 * At least one of permission, prohibition, or obligation must be present.
	 */
	prohibition?: IOdrlProhibition[];

	/**
	 * The obligations in the policy.
	 * At least one of permission, prohibition, or obligation must be present.
	 */
	obligation?: IOdrlDuty[];
}
