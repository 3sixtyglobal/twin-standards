// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for DCSA.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcsaTypes = {
	/**
	 * Barge.
	 */
	Barge: "Barge",
	/**
	 * Barge transport call.
	 */
	BargeTransportCall: "BargeTransportCall",
	/**
	 * Base equipment event.
	 */
	BaseEquipmentEvent: "BaseEquipmentEvent",
	/**
	 * Base event.
	 */
	BaseEvent: "BaseEvent",
	/**
	 * Base IoT event.
	 */
	BaseIoTEvent: "BaseIoTEvent",
	/**
	 * Base reefer event.
	 */
	BaseReeferEvent: "BaseReeferEvent",
	/**
	 * Base shipment event.
	 */
	BaseShipmentEvent: "BaseShipmentEvent",
	/**
	 * Base transport event.
	 */
	BaseTransportEvent: "BaseTransportEvent",
	/**
	 * Document type codes.
	 */
	DocumentTypeCodes: "DocumentTypeCodes",
	/**
	 * Equipment event.
	 */
	EquipmentEvent: "EquipmentEvent",
	/**
	 * Equipment event type codes.
	 */
	EquipmentEventTypeCodes: "EquipmentEventTypeCodes",
	/**
	 * Equipment payload.
	 */
	EquipmentPayload: "EquipmentPayload",
	/**
	 * Equipment subscription body.
	 */
	EquipmentSubscriptionBody: "EquipmentSubscriptionBody",
	/**
	 * Event.
	 */
	Event: "Event",
	/**
	 * Event classifier code.
	 */
	EventClassifierCode: "EventClassifierCode",
	/**
	 * Event classifier code excluding REQ.
	 */
	EventClassifierCodeNoReq: "EventClassifierCodeNoReq",
	/**
	 * Event metadata (active).
	 */
	EventMetadataActive: "EventMetadataActive",
	/**
	 * Event metadata (base).
	 */
	EventMetadataBase: "EventMetadataBase",
	/**
	 * Event metadata (retraction).
	 */
	EventMetadataRetraction: "EventMetadataRetraction",
	/**
	 * Event payload.
	 */
	EventPayload: "EventPayload",
	/**
	 * Event retraction.
	 */
	EventRetraction: "EventRetraction",
	/**
	 * Event with payload.
	 */
	EventWithPayload: "EventWithPayload",
	/**
	 * Event types.
	 */
	EventTypes: "EventTypes",
	/**
	 * IoT event.
	 */
	IotEvent: "IotEvent",
	/**
	 * IoT event code.
	 */
	IotEventCode: "IotEventCode",
	/**
	 * IoT event metadata (active).
	 */
	IotEventMetadataActive: "IotEventMetadataActive",
	/**
	 * IoT event metadata (retraction).
	 */
	IotEventMetadataRetraction: "IotEventMetadataRetraction",
	/**
	 * IoT event type code.
	 */
	IotEventTypeCodes: "IotEventTypeCodes",
	/**
	 * IoT payload.
	 */
	IotPayload: "IotPayload",
	/**
	 * IoT subscription body.
	 */
	IotSubscriptionBody: "IotSubscriptionBody",
	/**
	 * Mode of transport.
	 */
	ModeOfTransport: "ModeOfTransport",
	/**
	 * Operations event type codes.
	 */
	OperationsEventTypeCodes: "OperationsEventTypeCodes",
	/**
	 * Port call phase type codes.
	 */
	PortCallPhaseTypeCodes: "PortCallPhaseTypeCodes",
	/**
	 * Port call service type codes.
	 */
	PortCallServiceTypeCodes: "PortCallServiceTypeCodes",
	/**
	 * Publisher.
	 */
	Publisher: "Publisher",
	/**
	 * Publisher role.
	 */
	PublisherRole: "PublisherRole",
	/**
	 * Rail transport call.
	 */
	RailTransportCall: "RailTransportCall",
	/**
	 * Reefer event.
	 */
	ReeferEvent: "ReeferEvent",
	/**
	 * Reefer event metadata (active).
	 */
	ReeferEventMetadataActive: "ReeferEventMetadataActive",
	/**
	 * Reefer event metadata (retraction).
	 */
	ReeferEventMetadataRetraction: "ReeferEventMetadataRetraction",
	/**
	 * Reefer event type codes.
	 */
	ReeferEventTypeCodes: "ReeferEventTypeCodes",
	/**
	 * Reefer measurements.
	 */
	ReeferMeasurements: "ReeferMeasurements",
	/**
	 * Reefer payload.
	 */
	ReeferPayload: "ReeferPayload",
	/**
	 * Reefer setpoint.
	 */
	ReeferSetpoint: "ReeferSetpoint",
	/**
	 * Reefer subscription body.
	 */
	ReeferSubscriptionBody: "ReeferSubscriptionBody",
	/**
	 * Reference.
	 */
	Reference: "Reference",
	/**
	 * Related document reference.
	 */
	RelatedDocumentReference: "RelatedDocumentReference",
	/**
	 * Shipment event.
	 */
	ShipmentEvent: "ShipmentEvent",
	/**
	 * Shipment event type codes.
	 */
	ShipmentEventTypeCodes: "ShipmentEventTypeCodes",
	/**
	 * Shipment payload.
	 */
	ShipmentPayload: "ShipmentPayload",
	/**
	 * Shipment subscription body.
	 */
	ShipmentSubscriptionBody: "ShipmentSubscriptionBody",
	/**
	 * TNT publisher role.
	 */
	TntPublisherRole: "TntPublisherRole",
	/**
	 * Transport call.
	 */
	TransportCall: "TransportCall",
	/**
	 * Transport call facility type codes.
	 */
	TransportCallFacilityTypeCodes: "TransportCallFacilityTypeCodes",
	/**
	 * Transport call base.
	 */
	TransportCallBase: "TransportCallBase",
	/**
	 * Transport call subscription body.
	 */
	TransportCallSubscriptionBody: "TransportCallSubscriptionBody",
	/**
	 * Transport event.
	 */
	TransportEvent: "TransportEvent",
	/**
	 * Transport event type codes.
	 */
	TransportEventTypeCodes: "TransportEventTypeCodes",
	/**
	 * Transport payload.
	 */
	TransportPayload: "TransportPayload",
	/**
	 * Transport subscription body.
	 */
	TransportSubscriptionBody: "TransportSubscriptionBody",
	/**
	 * Truck transport call.
	 */
	TruckTransportCall: "TruckTransportCall",
	/**
	 * Vessel.
	 */
	Vessel: "Vessel",
	/**
	 * Vessel transport call.
	 */
	VesselTransportCall: "VesselTransportCall"
} as const;

/**
 * The types for DCSA.
 */
export type DcsaTypes = (typeof DcsaTypes)[keyof typeof DcsaTypes];
