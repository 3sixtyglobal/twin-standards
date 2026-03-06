// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlPolicy } from "@twin.org/standards-w3c-odrl";

/**
 * Policy interface compliant with Eclipse Data Space Protocol.
 *
 * Extends IOdrlPolicy with DS Protocol-specific constraints:
 * - `@id` is REQUIRED (used as the primary policy identifier in DS Protocol)
 * - `@context` is omitted (inherited from the parent Dataset/Distribution)
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 * @see IOdrlPolicy from @twin.org/standards-w3c-odrl
 */
export interface IDataspaceProtocolPolicy extends Omit<IOdrlPolicy, "uid"> {
	/**
	 * Unique identifier for the policy.
	 */
	"@id": string;
}
