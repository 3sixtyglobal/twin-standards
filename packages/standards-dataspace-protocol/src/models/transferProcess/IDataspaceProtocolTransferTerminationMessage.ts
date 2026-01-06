// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { DataspaceProtocolTransferProcessTypes } from "./dataspaceProtocolTransferProcessTypes.js";

/**
 * Interface for Dataspace Protocol Transfer Messages.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#transfer-termination-message
 */
export interface IDataspaceProtocolTransferTerminationMessage {
	/**
	 * LD Context
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * LD Type
	 */
	"@type": typeof DataspaceProtocolTransferProcessTypes.TransferTerminationMessage;

	/**
	 * MUST refer to the transfer identifier of the Consumer side.
	 */
	consumerPid: string;

	/**
	 * MUST refer to the transfer identifier of the Provider side.
	 */
	providerPid: string;

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
