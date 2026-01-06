// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { DataspaceProtocolContractNegotiationTypes } from "./dataspaceProtocolContractNegotiationTypes.js";
import type { DataspaceProtocolContractNegotiationEventType } from "./types/dataspaceProtocolContractNegotiationEventType.js";

/**
 * Interface for Dataspace Protocol Contract Negotiation Event Messages.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-negotiation-event-message
 */
export interface IDataspaceProtocolContractNegotiationEventMessage {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * The type of the message.
	 */
	"@type": typeof DataspaceProtocolContractNegotiationTypes.ContractNegotiationEventMessage;

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
	event: DataspaceProtocolContractNegotiationEventType;
}
