// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IOdrlAction } from "./IOdrlAction.js";
import type { IOdrlAsset } from "./IOdrlAsset.js";
import type { IOdrlAssetCollection } from "./IOdrlAssetCollection.js";
import type { IOdrlDuty } from "./IOdrlDuty.js";
import type { IOdrlParty } from "./IOdrlParty.js";
import type { IOdrlPartyCollection } from "./IOdrlPartyCollection.js";
import type { IOdrlPermission } from "./IOdrlPermission.js";
import type { IOdrlProhibition } from "./IOdrlProhibition.js";
import type { OdrlContextType } from "./odrlContextType.js";
import type { OdrlActionType } from "./types/odrlActionType.js";
import type { OdrlConflictStrategyType } from "./types/odrlConflictStrategyType.js";
import type { OdrlPolicyType } from "./types/odrlPolicyType.js";

/**
 * Interface representing an ODRL Policy.
 * https://www.w3.org/TR/odrl-model/#policy
 */
export interface IOdrlPolicy {
	/**
	 * The context for the policy.
	 * Must include "https://www.w3.org/ns/odrl.jsonld"
	 */
	"@context": OdrlContextType;

	/**
	 * The type of policy.
	 * Must be one of: "Set", "Offer", "Agreement"
	 */
	"@type": OdrlPolicyType;

	/**
	 * The unique identifier for the policy.
	 * Must be an IRI.
	 * @json-schema format:uri
	 */
	uid: string;

	/**
	 * The profile(s) this policy conforms to.
	 * IRIs identifying the ODRL Profile(s).
	 */
	profile?: ObjectOrArray<string>;

	/**
	 * The assigner of the policy.
	 * Applies to all rules unless overridden at rule level.
	 */
	assigner?: ObjectOrArray<string | IOdrlParty | IOdrlPartyCollection>;

	/**
	 * The assignee of the policy.
	 * Applies to all rules unless overridden at rule level.
	 */
	assignee?: ObjectOrArray<string | IOdrlParty | IOdrlPartyCollection>;

	/**
	 * The target asset for the rule.
	 */
	target?: ObjectOrArray<string | IOdrlAsset | IOdrlAssetCollection>;

	/**
	 * The action associated with the rule.
	 */
	action?: ObjectOrArray<OdrlActionType | string | IOdrlAction>;

	/**
	 * The parent policy(ies) this policy inherits from.
	 * IRIs identifying the parent Policy(ies).
	 */
	inheritFrom?: ObjectOrArray<string>;

	/**
	 * The conflict resolution strategy.
	 * - perm: Permissions override Prohibitions
	 * - prohibit: Prohibitions override Permissions
	 * - invalid: Policy is void if conflicts exist (default)
	 */
	conflict?: OdrlConflictStrategyType;

	/**
	 * The permissions in the policy.
	 * At least one of permission, prohibition, or obligation must be present.
	 */
	permission?: ObjectOrArray<IOdrlPermission>;

	/**
	 * The prohibitions in the policy.
	 * At least one of permission, prohibition, or obligation must be present.
	 */
	prohibition?: ObjectOrArray<IOdrlProhibition>;

	/**
	 * The obligations in the policy.
	 * At least one of permission, prohibition, or obligation must be present.
	 */
	obligation?: ObjectOrArray<IOdrlDuty>;
}
