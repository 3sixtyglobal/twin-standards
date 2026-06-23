// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IOdrlDuty } from "./IOdrlDuty.js";
import type { IOdrlRule } from "./IOdrlRule.js";

/**
 * Interface for Prohibition Rules.
 * https://www.w3.org/TR/odrl-model/#prohibition
 */
export interface IOdrlProhibition extends IOdrlRule {
	/**
	 * The remedies that must be fulfilled if prohibition is violated.
	 */
	remedy?: ObjectOrArray<IOdrlDuty>;
}
