// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for Dataspace Protocol Contract Negotiation Events.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-negotiation-event-message
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ContractNegotiationEventType = {
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
 * The types for Dataspace Protocol Contract Negotiation Events.
 */
export type ContractNegotiationEventType =
	(typeof ContractNegotiationEventType)[keyof typeof ContractNegotiationEventType];
