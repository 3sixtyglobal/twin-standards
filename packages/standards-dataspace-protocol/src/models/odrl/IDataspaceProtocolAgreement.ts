// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlAgreement } from "@3sixty/standards-w3c-odrl";

/**
 * Agreement interface compliant with Eclipse Data Space Protocol, requiring an id and omitting context.
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 */
export interface IDataspaceProtocolAgreement extends Omit<IOdrlAgreement, "uid"> {
	/**
	 * Unique identifier for the agreement.
	 */
	"@id": string;
}
