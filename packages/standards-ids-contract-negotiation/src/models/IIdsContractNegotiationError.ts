// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IdsContractNegotiationContextType } from "./idsContractNegotiationContextType";
import type { IdsContractNegotiationTypes } from "./idsContractNegotiationTypes";

/**
 * Interface for IDS Contract Negotiation Error Messages.
 * https://docs.internationaldataspaces.org/ids-knowledgebase/dataspace-protocol/contract-negotiation/contract.negotiation.protocol#id-3.2-error-contract-negotiation-error
 */
export interface IIdsContractNegotiationError {
	/**
	 * The JSON-LD context.
	 */
	"@context": IdsContractNegotiationContextType;

	/**
	 * The type of the message.
	 */
	"@type": typeof IdsContractNegotiationTypes.ContractNegotiationError;

	/**
	 * The provider id for the contract.
	 */
	providerPid: string;

	/**
	 * The consumer id for the contract.
	 */
	consumerPid: string;

	/**
	 * The error code.
	 */
	code?: string;

	/**
	 * The error reason(s).
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reason?: any[];
}
