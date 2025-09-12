// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { IOdrlDuty } from "./IOdrlDuty";
import type { IOdrlRule } from "./IOdrlRule";

/**
 * Interface for Prohibition Rules.
 * https://www.w3.org/TR/odrl-model/#prohibition
 */
export interface IOdrlProhibition extends IOdrlRule {
	/**
	 * The remedies that must be fulfilled if prohibition is violated.
	 */
	remedy?: IOdrlDuty[];
}
