// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlAgreement } from "@twin.org/standards-w3c-odrl";
import type { DataspaceProtocolContractNegotiationTypes } from "./dataspaceProtocolContractNegotiationTypes.js";
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";

/**
 * Interface for Dataspace Protocol Contract Agreement Messages.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-agreement-message
 */
export interface IDataspaceProtocolContractAgreementMessage {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * The type of the message.
	 */
	"@type": typeof DataspaceProtocolContractNegotiationTypes.ContractAgreementMessage;

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
