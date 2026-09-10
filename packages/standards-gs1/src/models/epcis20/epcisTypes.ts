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
	TransformationEvent: "TransformationEvent",

	/**
	 * ActionTypes type identifier.
	 */
	ActionTypes: "ActionTypes",

	/**
	 * Attribute type identifier.
	 */
	Attribute: "Attribute",

	/**
	 * BizStepTypes type identifier.
	 */
	BizStepTypes: "BizStepTypes",

	/**
	 * BizTransaction type identifier.
	 */
	BizTransaction: "BizTransaction",

	/**
	 * BizTransactionTypes type identifier.
	 */
	BizTransactionTypes: "BizTransactionTypes",

	/**
	 * ComponentTypes type identifier.
	 */
	ComponentTypes: "ComponentTypes",

	/**
	 * ContextType type identifier.
	 */
	ContextType: "ContextType",

	/**
	 * Destination type identifier.
	 */
	Destination: "Destination",

	/**
	 * DispositionTypes type identifier.
	 */
	DispositionTypes: "DispositionTypes",

	/**
	 * ErrorDeclaration type identifier.
	 */
	ErrorDeclaration: "ErrorDeclaration",

	/**
	 * ErrorReasonTypes type identifier.
	 */
	ErrorReasonTypes: "ErrorReasonTypes",

	/**
	 * Event type identifier.
	 */
	Event: "Event",

	/**
	 * Events type identifier.
	 */
	Events: "Events",

	/**
	 * EventTypes type identifier.
	 */
	EventTypes: "EventTypes",

	/**
	 * Header type identifier.
	 */
	Header: "Header",

	/**
	 * Ilmd type identifier.
	 */
	Ilmd: "Ilmd",

	/**
	 * Location type identifier.
	 */
	Location: "Location",

	/**
	 * MeasurementTypes type identifier.
	 */
	MeasurementTypes: "MeasurementTypes",

	/**
	 * PersistentDisposition type identifier.
	 */
	PersistentDisposition: "PersistentDisposition",

	/**
	 * Quantity type identifier.
	 */
	Quantity: "Quantity",

	/**
	 * Query type identifier.
	 */
	Query: "Query",

	/**
	 * QueryDocumentBody type identifier.
	 */
	QueryDocumentBody: "QueryDocumentBody",

	/**
	 * QueryResults type identifier.
	 */
	QueryResults: "QueryResults",

	/**
	 * QueryResultsBody type identifier.
	 */
	QueryResultsBody: "QueryResultsBody",

	/**
	 * SensorAlertTypes type identifier.
	 */
	SensorAlertTypes: "SensorAlertTypes",

	/**
	 * SensorElement type identifier.
	 */
	SensorElement: "SensorElement",

	/**
	 * SensorMetadata type identifier.
	 */
	SensorMetadata: "SensorMetadata",

	/**
	 * SensorReport type identifier.
	 */
	SensorReport: "SensorReport",

	/**
	 * Source type identifier.
	 */
	Source: "Source",

	/**
	 * SourceDestTypes type identifier.
	 */
	SourceDestTypes: "SourceDestTypes",

	/**
	 * Vocabulary type identifier.
	 */
	Vocabulary: "Vocabulary",

	/**
	 * VocabularyElement type identifier.
	 */
	VocabularyElement: "VocabularyElement"
} as const;

/**
 * JSON-LD type IRIs used across EPCIS 2.0 documents and events.
 */
export type EpcisTypes = (typeof EpcisTypes)[keyof typeof EpcisTypes];
