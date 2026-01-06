// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { DataspaceProtocolContractNegotiationTypes } from "./dataspaceProtocolContractNegotiationTypes.js";
import type { DataspaceProtocolContractNegotiationStateType } from "./types/dataspaceProtocolContractNegotiationStateType.js";

/**
 * Interface for Dataspace Protocol Contract Agreement Messages.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#ack-contract-negotiation
 */
export interface IDataspaceProtocolContractNegotiation {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * The type of the message.
	 */
	"@type": typeof DataspaceProtocolContractNegotiationTypes.ContractNegotiation;

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
	state: DataspaceProtocolContractNegotiationStateType;
}
