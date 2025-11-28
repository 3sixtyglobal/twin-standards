// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { TransferProcessTypes } from "./transferProcessTypes.js";

/**
 * Interface for Dataspace Protocol Transfer Messages.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#transfer-completion-message
 */
export interface ITransferCompletionMessage {
	/**
	 * LD Context
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * LD Type
	 */
	"@type": typeof TransferProcessTypes.TransferCompletionMessage;

	/**
	 * MUST refer to the transfer identifier of the Consumer side.
	 */
	consumerPid: string;

	/**
	 * MUST refer to the transfer identifier of the Provider side.
	 */
	providerPid: string;
}
