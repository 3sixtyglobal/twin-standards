// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlParty } from "./IOdrlParty.js";
import type { IOdrlPolicy } from "./IOdrlPolicy.js";
import type { OdrlTypes } from "./types/odrlTypes.js";

/**
 * Interface representing an ODRL Agreement.
 * An Agreement requires both an assigner and assignee (both agreeing parties).
 * https://www.w3.org/TR/odrl-model/#policy-agreement
 */
export interface IOdrlAgreement extends IOdrlPolicy {
	/**
	 * The type must be "Agreement".
	 */
	"@type": typeof OdrlTypes.Agreement;

	/**
	 * The assigner of the agreement.
	 * Required for Agreement policies.
	 */
	assigner: string | IOdrlParty;

	/**
	 * The assignee of the agreement.
	 * Required for Agreement policies.
	 */
	assignee: string | IOdrlParty;
}
