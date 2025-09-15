// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IdsContractNegotiationContextType } from "./idsContractNegotiationContextType";
import type { IdsContractNegotiationTypes } from "./idsContractNegotiationTypes";
import type { IdsContractNegotiationStateType } from "./types/idsContractNegotiationStateType";

/**
 * Interface for IDS Contract Agreement Messages.
 * https://docs.internationaldataspaces.org/ids-knowledgebase/dataspace-protocol/contract-negotiation/contract.negotiation.protocol#id-2.3-contract-agreement-message
 */
export interface IIdsContractNegotiation {
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
	state: IdsContractNegotiationStateType;
}
