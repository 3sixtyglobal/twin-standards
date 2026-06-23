// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlParty } from "./IOdrlParty.js";
import type { IOdrlPolicy } from "./IOdrlPolicy.js";
import type { OdrlTypes } from "./types/odrlTypes.js";

/**
 * Interface representing an ODRL Offer.
 * An Offer requires an assigner (the party making the offer).
 * https://www.w3.org/TR/odrl-model/#policy-offer
 */
export interface IOdrlOffer extends IOdrlPolicy {
	/**
	 * The type must be "Offer".
	 */
	"@type": typeof OdrlTypes.Offer;

	/**
	 * The assigner of the offer.
	 * Required for Offer policies.
	 */
	assigner: string | IOdrlParty;
}
