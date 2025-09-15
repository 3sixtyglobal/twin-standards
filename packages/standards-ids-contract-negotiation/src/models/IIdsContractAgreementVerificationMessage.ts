// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IdsContractNegotiationContextType } from "./idsContractNegotiationContextType";
import type { IdsContractNegotiationTypes } from "./idsContractNegotiationTypes";

/**
 * Interface for IDS Contract Agreement Verification Messages.
 * https://docs.internationaldataspaces.org/ids-knowledgebase/dataspace-protocol/contract-negotiation/contract.negotiation.protocol#id-2.4-contract-agreement-verification-message
 */
export interface IIdsContractAgreementVerificationMessage {
	/**
	 * The JSON-LD context.
	 */
	"@context": IdsContractNegotiationContextType;

	/**
	 * The type of the message.
	 */
	"@type": typeof IdsContractNegotiationTypes.ContractAgreementVerificationMessage;

	/**
	 * The provider id for the contract.
	 */
	providerPid: string;

	/**
	 * The consumer id for the contract.
	 */
	consumerPid: string;
}
