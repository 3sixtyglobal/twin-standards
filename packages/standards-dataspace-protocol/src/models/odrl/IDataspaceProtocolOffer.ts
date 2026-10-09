// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { OdrlContextType } from "@3sixty/standards-w3c-odrl";
import type { IDataspaceProtocolOfferBase } from "./IDataspaceProtocolOfferBase.js";

/**
 * Offer interface compliant with Eclipse Data Space Protocol, requiring an id and context.
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 */
export interface IDataspaceProtocolOffer extends IDataspaceProtocolOfferBase {
	/**
	 * Unique identifier for the offer.
	 */
	"@id": string;

	/**
	 * The JSON-LD context.
	 */
	"@context": OdrlContextType;
}
