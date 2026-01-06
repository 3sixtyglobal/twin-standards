// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { DataspaceProtocolContractNegotiationTypes } from "./dataspaceProtocolContractNegotiationTypes.js";

/**
 * Interface for Dataspace Protocol Contract Negotiation Termination Messages.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-negotiation-termination-message
 */
export interface IDataspaceProtocolContractNegotiationTerminationMessage {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * The type of the message.
	 */
	"@type": typeof DataspaceProtocolContractNegotiationTypes.ContractNegotiationTerminationMessage;

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
