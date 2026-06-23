// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { DataspaceProtocolTransferProcessTypes } from "./dataspaceProtocolTransferProcessTypes.js";

/**
 * Interface for the Dataspace Protocol transfer suspension message.
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#transfer-suspension-message
 */
export interface IDataspaceProtocolTransferSuspensionMessage {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * The JSON-LD type.
	 */
	"@type": typeof DataspaceProtocolTransferProcessTypes.TransferSuspensionMessage;

	/**
	 * MUST refer to the transfer identifier of the Consumer side.
	 */
	consumerPid: string;

	/**
	 * MUST refer to the transfer identifier of the Provider side.
	 */
	providerPid: string;

	/**
	 * The suspension code.
	 */
	code?: string;

	/**
	 * The suspension reason(s).
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reason?: any[];
}
