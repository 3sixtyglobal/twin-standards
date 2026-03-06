// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlAgreement } from "@twin.org/standards-w3c-odrl";

/**
 * Agreement interface compliant with Eclipse Data Space Protocol.
 *
 * Extends IOdrlAgreement with DS Protocol-specific constraints:
 * - `@id` is REQUIRED (used as the primary agreement identifier in DS Protocol)
 * - `@context` is omitted (inherited from the parent Dataset/Distribution)
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 * @see IOdrlAgreement from @twin.org/standards-w3c-odrl
 */
export interface IDataspaceProtocolAgreement extends Omit<IOdrlAgreement, "uid"> {
	/**
	 * Unique identifier for the agreement.
	 */
	"@id": string;
}
