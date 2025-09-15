// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for IDS Contract Negotiation Events.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const IdsContractNegotiationEventType = {
	/**
	 * Accepted.
	 */
	ACCEPTED: "ACCEPTED",

	/**
	 * Finalized.
	 */
	FINALIZED: "FINALIZED"
} as const;

/**
 * The types for IDS Contract Negotiation Events.
 */
export type IdsContractNegotiationEventType =
	(typeof IdsContractNegotiationEventType)[keyof typeof IdsContractNegotiationEventType];
