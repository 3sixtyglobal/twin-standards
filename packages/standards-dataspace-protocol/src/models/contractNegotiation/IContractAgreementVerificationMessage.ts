// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ContractNegotiationContextType } from "./contractNegotiationContextType.js";
import type { ContractNegotiationTypes } from "./contractNegotiationTypes.js";

/**
 * Interface for Dataspace Protocol Contract Agreement Verification Messages.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-agreement-verification-message
 */
export interface IContractAgreementVerificationMessage {
	/**
	 * The JSON-LD context.
	 */
	"@context": ContractNegotiationContextType;

	/**
	 * The type of the message.
	 */
	"@type": typeof ContractNegotiationTypes.ContractAgreementVerificationMessage;

	/**
	 * The provider id for the contract.
	 */
	providerPid: string;

	/**
	 * The consumer id for the contract.
	 */
	consumerPid: string;
}
