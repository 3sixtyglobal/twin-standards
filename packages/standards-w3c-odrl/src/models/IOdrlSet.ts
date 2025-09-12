// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { IOdrlPolicy } from "./IOdrlPolicy";
import type { OdrlTypes } from "./types/odrlTypes";

/**
 * Interface representing an ODRL Set.
 * A Set is a basic policy type with no specific party requirements.
 * https://www.w3.org/TR/odrl-model/#policy-set
 */
export interface IOdrlSet extends IOdrlPolicy {
	/**
	 * The type must be "Set".
	 */
	"@type": typeof OdrlTypes.Set;
}
