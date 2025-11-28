// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for Dataspace Protocol Transfer Process.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#message-types-1
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TransferProcessTypes = {
	/**
	 * Transfer Request Message.
	 */
	TransferRequestMessage: "TransferRequestMessage",

	/**
	 * Transfer Start Message.
	 */
	TransferStartMessage: "TransferStartMessage",

	/**
	 * Transfer Suspension Message.
	 */
	TransferSuspensionMessage: "TransferSuspensionMessage",

	/**
	 * Transfer Completion Message.
	 */
	TransferCompletionMessage: "TransferCompletionMessage",

	/**
	 * Transfer Termination Message.
	 */
	TransferTerminationMessage: "TransferTerminationMessage",

	/**
	 * Data Address
	 */
	DataAddress: "DataAddress",

	/**
	 * Endpoint property.
	 */
	EndpointProperty: "EndpointProperty",

	/**
	 * Transfer Process
	 */
	TransferProcess: "TransferProcess",

	/**
	 * Transfer Error.
	 */
	TransferError: "TransferError"
};

/**
 * The types for Dataspace Protocol Transfer.
 */
export type TransferProcessTypes = (typeof TransferProcessTypes)[keyof typeof TransferProcessTypes];
