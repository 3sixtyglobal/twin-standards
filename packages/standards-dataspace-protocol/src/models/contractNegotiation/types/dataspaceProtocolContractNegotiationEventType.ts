// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Event type identifiers for the Dataspace Protocol Contract Negotiation.
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-negotiation-event-message
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DataspaceProtocolContractNegotiationEventType = {
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
export type DataspaceProtocolContractNegotiationEventType =
	(typeof DataspaceProtocolContractNegotiationEventType)[keyof typeof DataspaceProtocolContractNegotiationEventType];
