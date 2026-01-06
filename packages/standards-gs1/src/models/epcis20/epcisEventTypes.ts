// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * EPCIS 2.0 event types.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EpcisEventTypes = {
	/**
	 * ObjectEvent.
	 */
	ObjectEvent: "ObjectEvent",

	/**
	 * Aggregation Event.
	 */
	AggregationEvent: "AggregationEvent",

	/**
	 * Association Event.
	 */
	AssociationEvent: "AssociationEvent",

	/**
	 * Transformation Event.
	 */
	TransformationEvent: "TransformationEvent",

	/**
	 * Transaction Event.
	 */
	TransactionEvent: "TransactionEvent"
} as const;

/**
 * EPCIS 2.0 event types.
 */
export type EpcisEventTypes = (typeof EpcisEventTypes)[keyof typeof EpcisEventTypes];
