// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { DataspaceProtocolTransferProcessTypes } from "./dataspaceProtocolTransferProcessTypes.js";

/**
 * Interface for the Dataspace Protocol transfer completion message.
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#transfer-completion-message
 */
export interface IDataspaceProtocolTransferCompletionMessage {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * The JSON-LD type.
	 */
	"@type": typeof DataspaceProtocolTransferProcessTypes.TransferCompletionMessage;

	/**
	 * MUST refer to the transfer identifier of the Consumer side.
	 */
	consumerPid: string;

	/**
	 * MUST refer to the transfer identifier of the Provider side.
	 */
	providerPid: string;
}
