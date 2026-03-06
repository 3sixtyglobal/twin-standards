// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { DataspaceProtocolContractNegotiationTypes } from "./dataspaceProtocolContractNegotiationTypes.js";
import type { IDataspaceProtocolOfferNoContext } from "../odrl/IDataspaceProtocolOfferNoContext.js";

/**
 * Interface for Dataspace Protocol Contract Request Messages.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-request-message
 */
export interface IDataspaceProtocolContractRequestMessage {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * The type of the message.
	 */
	"@type": typeof DataspaceProtocolContractNegotiationTypes.ContractRequestMessage;

	/**
	 * The provider id for the contract.
	 */
	providerPid?: string;

	/**
	 * The consumer id for the contract.
	 */
	consumerPid: string;

	/**
	 * The offer being requested.
	 */
	offer: IDataspaceProtocolOfferNoContext;

	/**
	 * The base callback address for the provider to update the consumer on the state of the negotiation.
	 */
	callbackAddress?: string;
}
