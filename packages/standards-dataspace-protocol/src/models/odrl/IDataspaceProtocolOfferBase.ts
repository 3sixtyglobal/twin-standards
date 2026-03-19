// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlOffer } from "@twin.org/standards-w3c-odrl";

/**
 * Offer interface compliant with Eclipse Data Space Protocol without JSON-LD context.
 * This is the context-free variant of IDataspaceProtocolOffer, intended for embedding
 * offers inline within other objects where the context is provided by the enclosing document.
 *
 * Extends IOdrlOffer with DS Protocol-specific constraints:
 * - '@id' is REQUIRED (used as the primary offer identifier in DS Protocol)
 * - '@context' is omitted (context is inherited from the parent object)
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 */
export interface IDataspaceProtocolOfferBase extends Omit<IOdrlOffer, "uid" | "@context"> {
	/**
	 * Unique identifier for the offer.
	 */
	"@id": string;
}
