// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlSet } from "@twin.org/standards-w3c-odrl";

/**
 * Set interface compliant with Eclipse Data Space Protocol.
 *
 * Extends IOdrlSet with DS Protocol-specific constraints:
 * - `@id` is REQUIRED (used as the primary set identifier in DS Protocol)
 * - `@context` is omitted (inherited from the parent Dataset/Distribution)
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 * @see IOdrlSet from @twin.org/standards-w3c-odrl
 */
export interface IDataspaceProtocolSet extends Omit<IOdrlSet, "uid"> {
	/**
	 * Unique identifier for the set.
	 */
	"@id": string;
}
