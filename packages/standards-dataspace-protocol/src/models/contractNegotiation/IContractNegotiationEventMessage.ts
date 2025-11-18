// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { ContractNegotiationTypes } from "./contractNegotiationTypes.js";
import type { ContractNegotiationEventType } from "./types/contractNegotiationEventType.js";

/**
 * Interface for Dataspace Protocol Contract Negotiation Event Messages.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-negotiation-event-message
 */
export interface IContractNegotiationEventMessage {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * The type of the message.
	 */
	"@type": typeof ContractNegotiationTypes.ContractNegotiationEventMessage;

	/**
	 * The provider id for the contract.
	 */
	providerPid: string;

	/**
	 * The consumer id for the contract.
	 */
	consumerPid: string;

	/**
	 * The event type.
	 */
	event: ContractNegotiationEventType;
}
