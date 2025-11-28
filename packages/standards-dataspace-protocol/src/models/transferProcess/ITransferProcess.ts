// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { TransferProcessTypes } from "./transferProcessTypes.js";
import type { TransferProcessStateType } from "./types/transferProcessStateType.js";

/**
 * Interface for Dataspace Protocol Transfer Messages.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#ack-transfer-process
 */
export interface ITransferProcess {
	/**
	 * LD Context
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * LD Type
	 */
	"@type": typeof TransferProcessTypes.TransferProcess;

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
	state: typeof TransferProcessStateType;
}
