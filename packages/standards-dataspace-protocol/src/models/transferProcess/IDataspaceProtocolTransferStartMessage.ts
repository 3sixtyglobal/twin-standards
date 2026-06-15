// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { DataspaceProtocolTransferProcessTypes } from "./dataspaceProtocolTransferProcessTypes.js";
import type { IDataspaceProtocolDataAddress } from "./IDataspaceProtocolDataAddress.js";

/**
 * Interface for the Dataspace Protocol transfer start message.
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#transfer-start-message
 */
export interface IDataspaceProtocolTransferStartMessage {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * The JSON-LD type.
	 */
	"@type": typeof DataspaceProtocolTransferProcessTypes.TransferStartMessage;

	/**
	 * MUST refer to the transfer identifier of the Consumer side.
	 */
	consumerPid: string;

	/**
	 * MUST refer to the transfer identifier of the Provider side.
	 */
	providerPid: string;

	/**
	 * MUST be provided if the current transfer is a pull transfer and
	 * contains a transport-specific endpoint address for obtaining the data.
	 */
	dataAddress?: IDataspaceProtocolDataAddress;
}
