// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * EPCIS 2.0 event type identifiers used in EPCIS JSON and XML documents.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EpcisEventTypes = {
	/**
	 * Event that observes one or more instance- or class-level objects.
	 */
	ObjectEvent: "ObjectEvent",

	/**
	 * Event recording child objects aggregated under a parent identifier.
	 */
	AggregationEvent: "AggregationEvent",

	/**
	 * Event recording parent/child associations without implying containment.
	 */
	AssociationEvent: "AssociationEvent",

	/**
	 * Event recording how inputs are transformed into outputs.
	 */
	TransformationEvent: "TransformationEvent",

	/**
	 * Event linking objects or quantities to business transactions.
	 */
	TransactionEvent: "TransactionEvent"
} as const;

/**
 * EPCIS 2.0 event type identifiers used in EPCIS JSON and XML documents.
 */
export type EpcisEventTypes = (typeof EpcisEventTypes)[keyof typeof EpcisEventTypes];
