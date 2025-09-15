// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IdsContractNegotiationContextType } from "./idsContractNegotiationContextType";
import type { IdsContractNegotiationTypes } from "./idsContractNegotiationTypes";
import type { IdsContractNegotiationEventType } from "./types/idsContractNegotiationEventType";

/**
 * Interface for IDS Contract Negotiation Event Messages.
 * https://docs.internationaldataspaces.org/ids-knowledgebase/dataspace-protocol/contract-negotiation/contract.negotiation.protocol#id-2.5-contract-negotiation-event-message
 */
export interface IIdsContractNegotiationEventMessage {
	/**
	 * The JSON-LD context.
	 */
	"@context": IdsContractNegotiationContextType;

	/**
	 * The type of the message.
	 */
	"@type": typeof IdsContractNegotiationTypes.ContractNegotiationEventMessage;

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
	event: IdsContractNegotiationEventType;
}
