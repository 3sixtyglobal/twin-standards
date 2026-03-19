// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { OdrlContextType } from "@twin.org/standards-w3c-odrl";
import type { IDataspaceProtocolOfferBase } from "./IDataspaceProtocolOfferBase.js";

/**
 * Offer interface compliant with Eclipse Data Space Protocol.
 *
 * Extends IOdrlOffer with DS Protocol-specific constraints:
 * - `@id` is REQUIRED (used as the primary offer identifier in DS Protocol)
 * - `@context` is omitted (inherited from the parent Dataset/Distribution)
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 * @see IOdrlOffer from @twin.org/standards-w3c-odrl
 */
export interface IDataspaceProtocolOffer extends IDataspaceProtocolOfferBase {
	/**
	 * Unique identifier for the offer.
	 */
	"@id": string;

	/**
	 * LD Context.
	 */
	"@context": OdrlContextType;
}
