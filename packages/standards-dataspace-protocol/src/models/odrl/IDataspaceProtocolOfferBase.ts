// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlOffer } from "@3sixty/standards-w3c-odrl";

/**
 * Context-free offer interface compliant with Eclipse Data Space Protocol, for embedding within parent documents.
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 */
export interface IDataspaceProtocolOfferBase extends Omit<IOdrlOffer, "uid" | "@context"> {
	/**
	 * Unique identifier for the offer.
	 */
	"@id": string;
}
