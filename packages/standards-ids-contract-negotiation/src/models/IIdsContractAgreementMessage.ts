// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlOffer } from "@twin.org/standards-w3c-odrl";
import type { IdsContractNegotiationContextType } from "./idsContractNegotiationContextType";
import type { IdsContractNegotiationTypes } from "./idsContractNegotiationTypes";

/**
 * Interface for IDS Contract Agreement Messages.
 * https://docs.internationaldataspaces.org/ids-knowledgebase/dataspace-protocol/contract-negotiation/contract.negotiation.protocol#id-2.3-contract-agreement-message
 */
export interface IIdsContractAgreementMessage {
	/**
	 * The JSON-LD context.
	 */
	"@context": IdsContractNegotiationContextType;

	/**
	 * The type of the message.
	 */
	"@type": typeof IdsContractNegotiationTypes.ContractAgreementMessage;

	/**
	 * The provider id for the contract.
	 */
	providerPid: string;

	/**
	 * The consumer id for the contract.
	 */
	consumerPid: string;

	/**
	 * The offer being requested.
	 */
	offer: IOdrlOffer;

	/**
	 * The base callback address for the provider to update the consumer on the state of the negotiation.
	 */
	callbackAddress?: string;
}
