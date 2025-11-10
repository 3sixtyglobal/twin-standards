// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for Dataspace Protocol Contract Negotiation States.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-negotiation-states
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ContractNegotiationStateType = {
	/**
	 * Requested.
	 */
	REQUESTED: "REQUESTED",

	/**
	 * Offered.
	 */
	OFFERED: "OFFERED",

	/**
	 * Accepted.
	 */
	ACCEPTED: "ACCEPTED",

	/**
	 * Agreed.
	 */
	AGREED: "AGREED",

	/**
	 * Verified.
	 */
	VERIFIED: "VERIFIED",

	/**
	 * Finalized.
	 */
	FINALIZED: "FINALIZED",

	/**
	 * Terminated.
	 */
	TERMINATED: "TERMINATED"
} as const;

/**
 * The types for Dataspace Protocol Contract Negotiation States.
 */
export type ContractNegotiationStateType =
	(typeof ContractNegotiationStateType)[keyof typeof ContractNegotiationStateType];
