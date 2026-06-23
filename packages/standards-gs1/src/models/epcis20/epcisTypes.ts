// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * JSON-LD type IRIs used across EPCIS 2.0 documents and events.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EpcisTypes = {
	/**
	 * EPCISDocument root type for capture payloads.
	 */
	EPCISDocument: "EPCISDocument",

	/**
	 * EPCISQueryDocument root type for query requests.
	 */
	EPCISQueryDocument: "EPCISQueryDocument",

	/**
	 * ObjectEvent type identifier.
	 */
	ObjectEvent: "ObjectEvent",

	/**
	 * AssociationEvent type identifier.
	 */
	AssociationEvent: "AssociationEvent",

	/**
	 * AggregationEvent type identifier.
	 */
	AggregationEvent: "AggregationEvent",

	/**
	 * TransactionEvent type identifier.
	 */
	TransactionEvent: "TransactionEvent",

	/**
	 * TransformationEvent type identifier.
	 */
	TransformationEvent: "TransformationEvent"
} as const;

/**
 * JSON-LD type IRIs used across EPCIS 2.0 documents and events.
 */
export type EpcisTypes = (typeof EpcisTypes)[keyof typeof EpcisTypes];
