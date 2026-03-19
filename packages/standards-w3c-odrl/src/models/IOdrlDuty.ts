// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IOdrlRule } from "./IOdrlRule.js";

/**
 * Interface for Duty Rules.
 * A Duty is the obligation to exercise an action, with all refinements satisfied.
 * A Duty is fulfilled if all constraints are satisfied and if its action has been exercised.
 * https://www.w3.org/TR/odrl-model/#duty
 */
export interface IOdrlDuty extends IOdrlRule {
	/**
	 * The party to be attributed
	 * Used when the duty involves attribution
	 */
	attributedParty?: string;

	/**
	 * The party performing the tracking
	 * Used when the duty involves tracking
	 */
	trackingParty?: string;
	/**
	 * The consequences if the duty is not fulfilled.
	 * Only applicable when the Duty is referenced by a Rule with duty or obligation
	 * properties.
	 */
	consequence?: ObjectOrArray<IOdrlDuty>;

	/**
	 * The party to be compensated
	 * Used when the duty involves compensation
	 */
	compensatedParty?: string;
}
