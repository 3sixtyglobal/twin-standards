// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { DataspaceProtocolTransferProcessTypes } from "./dataspaceProtocolTransferProcessTypes.js";
import type { DataspaceProtocolTransferProcessStateType } from "./types/dataspaceProtocolTransferProcessStateType.js";

/**
 * Interface for the Dataspace Protocol transfer process acknowledgment.
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#ack-transfer-process
 */
export interface IDataspaceProtocolTransferProcess {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * The JSON-LD type.
	 */
	"@type": typeof DataspaceProtocolTransferProcessTypes.TransferProcess;

	/**
	 * MUST refer to the transfer identifier of the Consumer side.
	 */
	consumerPid: string;

	/**
	 * MUST refer to the transfer identifier of the Provider side.
	 */
	providerPid: string;

	/**
	 * The transfer process state.
	 */
	state: DataspaceProtocolTransferProcessStateType;
}
