// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for IDS Contract Negotiation States.
 * https://docs.internationaldataspaces.org/ids-knowledgebase/dataspace-protocol/contract-negotiation/contract.negotiation.protocol#id-1.1-states
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const IdsContractNegotiationStateType = {
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
 * The types for IDS Contract Negotiation States.
 */
export type IdsContractNegotiationStateType =
	(typeof IdsContractNegotiationStateType)[keyof typeof IdsContractNegotiationStateType];
