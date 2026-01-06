// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlOffer } from "@twin.org/standards-w3c-odrl";
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { DataspaceProtocolContractNegotiationTypes } from "./dataspaceProtocolContractNegotiationTypes.js";

/**
 * Interface for Dataspace Protocol Contract Offer Messages.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-offer-message
 */
export interface IDataspaceProtocolContractOfferMessage {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * The type of the message.
	 */
	"@type": typeof DataspaceProtocolContractNegotiationTypes.ContractOfferMessage;

	/**
	 * The provider id for the contract.
	 */
	providerPid: string;

	/**
	 * The consumer id for the contract.
	 */
	consumerPid?: string;

	/**
	 * The offer being requested.
	 */
	offer: IOdrlOffer;

	/**
	 * The base callback address for the provider to update the consumer on the state of the negotiation.
	 */
	callbackAddress?: string;
}
