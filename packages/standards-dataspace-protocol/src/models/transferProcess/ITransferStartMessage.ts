// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { IDataAddress } from "./IDataAddress.js";
import type { TransferProcessTypes } from "./transferProcessTypes.js";

/**
 * Interface for Dataspace Protocol Transfer Messages.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#transfer-start-message
 */
export interface ITransferStartMessage {
	/**
	 * LD Context
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * LD Type
	 */
	"@type": typeof TransferProcessTypes.TransferStartMessage;

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
	dataAddress?: IDataAddress;
}
