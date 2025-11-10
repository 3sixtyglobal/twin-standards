// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlAgreement } from "@twin.org/standards-w3c-odrl";
import type { ContractNegotiationContextType } from "./contractNegotiationContextType.js";
import type { ContractNegotiationTypes } from "./contractNegotiationTypes.js";

/**
 * Interface for Dataspace Protocol Contract Agreement Messages.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-agreement-message
 */
export interface IContractAgreementMessage {
	/**
	 * The JSON-LD context.
	 */
	"@context": ContractNegotiationContextType;

	/**
	 * The type of the message.
	 */
	"@type": typeof ContractNegotiationTypes.ContractAgreementMessage;

	/**
	 * The provider id for the contract.
	 */
	providerPid: string;

	/**
	 * The consumer id for the contract.
	 */
	consumerPid: string;

	/**
	 * The agreement being sent.
	 */
	agreement: IOdrlAgreement;

	/**
	 * The base callback address for the provider to update the consumer on the state of the negotiation.
	 */
	callbackAddress?: string;
}
