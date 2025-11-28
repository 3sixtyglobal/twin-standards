// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The states for Dataspace Protocol Transfer Process.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#ack-transfer-process
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TransferProcessStateType = {
	/**
	 * Completed
	 */
	COMPLETED: "COMPLETED",

	/**
	 * Requested
	 */
	REQUESTED: "REQUESTED",

	/**
	 * Started
	 */
	STARTED: "STARTED",

	/**
	 * Suspended
	 */
	SUSPENDED: "SUSPENDED",

	/**
	 * Terminated
	 */
	TERMINATED: "TERMINATED"
};

/**
 * The types for Dataspace Protocol Transfer.
 */
export type TransferProcessStateType =
	(typeof TransferProcessStateType)[keyof typeof TransferProcessStateType];
