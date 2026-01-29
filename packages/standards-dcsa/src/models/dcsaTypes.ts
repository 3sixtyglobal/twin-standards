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
	 * Equipment event.
	 */
	EquipmentEvent: "EquipmentEvent",
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
	 * IoT event.
	 */
	IotEvent: "IotEvent",
	/**
	 * IoT event metadata (active).
	 */
	IotEventMetadataActive: "IotEventMetadataActive",
	/**
	 * IoT event metadata (retraction).
	 */
	IotEventMetadataRetraction: "IotEventMetadataRetraction",
	/**
	 * IoT payload.
	 */
	IotPayload: "IotPayload",
	/**
	 * IoT subscription body.
	 */
	IotSubscriptionBody: "IotSubscriptionBody",
	/**
	 * Publisher.
	 */
	Publisher: "Publisher",
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
	 * Shipment payload.
	 */
	ShipmentPayload: "ShipmentPayload",
	/**
	 * Shipment subscription body.
	 */
	ShipmentSubscriptionBody: "ShipmentSubscriptionBody",
	/**
	 * Transport call.
	 */
	TransportCall: "TransportCall",
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
