// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlPolicy } from "@3sixty/standards-w3c-odrl";

/**
 * Policy interface compliant with Eclipse Data Space Protocol, requiring an id and omitting context.
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 */
export interface IDataspaceProtocolPolicy extends Omit<IOdrlPolicy, "uid"> {
	/**
	 * Unique identifier for the policy.
	 */
	"@id": string;
}
