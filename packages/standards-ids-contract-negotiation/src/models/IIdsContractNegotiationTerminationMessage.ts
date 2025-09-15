// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IdsContractNegotiationContextType } from "./idsContractNegotiationContextType";
import type { IdsContractNegotiationTypes } from "./idsContractNegotiationTypes";

/**
 * Interface for IDS Contract Negotiation Termination Messages.
 * https://docs.internationaldataspaces.org/ids-knowledgebase/dataspace-protocol/contract-negotiation/contract.negotiation.protocol#id-2.6-contract-negotiation-termination-message
 */
export interface IIdsContractNegotiationTerminationMessage {
	/**
	 * The JSON-LD context.
	 */
	"@context": IdsContractNegotiationContextType;

	/**
	 * The type of the message.
	 */
	"@type": typeof IdsContractNegotiationTypes.ContractNegotiationTerminationMessage;

	/**
	 * The provider id for the contract.
	 */
	providerPid: string;

	/**
	 * The consumer id for the contract.
	 */
	consumerPid: string;

	/**
	 * The termination code.
	 */
	code?: string;

	/**
	 * The termination reason(s).
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reason?: any[];
}
