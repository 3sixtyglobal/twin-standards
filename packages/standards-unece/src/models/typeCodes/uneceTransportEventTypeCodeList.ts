// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceTransportEvent typeCode property.
 * @see https://vocabulary.uncefact.org/TransportEvent
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceTransportEventTypeCodeList = {
	/**
	 * An arrival event for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/arrivalEvent
	 */
	ArrivalEvent: "unece:arrivalEvent",

	/**
	 * A transport arrival event reported for this logistics status.
	 * @see https://vocabulary.uncefact.org/arrivalReportedEvent
	 */
	ArrivalReportedEvent: "unece:arrivalReportedEvent",

	/**
	 * A bonded warehouse storage event for this supply chain consignment.
	 * A bonded warehouse storage event specifying when and where this piece of logistics transport equipment will be, or has
	 * been, stored.
	 * @see https://vocabulary.uncefact.org/bondedWarehouseStorageEvent
	 */
	BondedWarehouseStorageEvent: "unece:bondedWarehouseStorageEvent",

	/**
	 * A border crossing event for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/borderCrossingEvent
	 */
	BorderCrossingEvent: "unece:borderCrossingEvent",

	/**
	 * A call event for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/callEvent
	 */
	CallEvent: "unece:callEvent",

	/**
	 * A consolidation event specifying when and where this piece of logistics transport equipment will be, or has been,
	 * stuffed.
	 * @see https://vocabulary.uncefact.org/consolidationEvent
	 */
	ConsolidationEvent: "unece:consolidationEvent",

	/**
	 * A damage event for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/damageEvent
	 */
	DamageEvent: "unece:damageEvent",

	/**
	 * A deconsolidation event for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/deconsolidationEvent
	 */
	DeconsolidationEvent: "unece:deconsolidationEvent",

	/**
	 * A delay specified for this referenced transport event.
	 * @see https://vocabulary.uncefact.org/delaySpecifiedEvent
	 */
	DelaySpecifiedEvent: "unece:delaySpecifiedEvent",

	/**
	 * A delivery event for this piece of logistics transport equipment.
	 * The delivery event for this supply chain consignment item.
	 * The delivery event for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/deliveryTransportEvent
	 */
	DeliveryTransportEvent: "unece:deliveryTransportEvent",

	/**
	 * A departure event during this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/departureEvent
	 */
	DepartureEvent: "unece:departureEvent",

	/**
	 * A transport departure event reported for this logistics status.
	 * @see https://vocabulary.uncefact.org/departureReportedEvent
	 */
	DepartureReportedEvent: "unece:departureReportedEvent",

	/**
	 * A transport devanning event for this referenced supply chain consignment, i.e. the unloading of this consignment at the
	 * place of delivery.
	 * A transport devanning event for this supply chain consignment, i.e. the unloading of this consignment at the place of
	 * delivery.
	 * @see https://vocabulary.uncefact.org/devanningEvent
	 */
	DevanningEvent: "unece:devanningEvent",

	/**
	 * An examination event for this cross-border regulatory procedure.
	 * An examination event for this supply chain consignment item.
	 * An examination event for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/examinationEvent
	 */
	ExaminationEvent: "unece:examinationEvent",

	/**
	 * The first arrival event for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/firstArrivalEvent
	 */
	FirstArrivalEvent: "unece:firstArrivalEvent",

	/**
	 * An itinerary stop event for this transport route, such as a port call in a vessel schedule.
	 * @see https://vocabulary.uncefact.org/itineraryStopEvent
	 */
	ItineraryStopEvent: "unece:itineraryStopEvent",

	/**
	 * The loading event during which goods will be or have been loaded into or onto the means of transport used for this
	 * logistics transport movement.
	 * The loading event for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/loadingEvent
	 */
	LoadingEvent: "unece:loadingEvent",

	/**
	 * A transport loading event reported for this logistics status.
	 * @see https://vocabulary.uncefact.org/loadingReportedEvent
	 */
	LoadingReportedEvent: "unece:loadingReportedEvent",

	/**
	 * A next delivery event for this transportation waste material.
	 * @see https://vocabulary.uncefact.org/nextDeliveryEvent
	 */
	NextDeliveryEvent: "unece:nextDeliveryEvent",

	/**
	 * A pick-up event specifying when and where this piece of logistics transport equipment will be, or has been, collected,
	 * i.e. picked-up by the carrier.
	 * A pick-up transport event for this supply chain consignment item.
	 * The pick-up event for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/pickUpEvent
	 */
	PickUpEvent: "unece:pickUpEvent",

	/**
	 * A positioning event specifying when and where this piece of logistics transport equipment will be, or has been,
	 * positioned, i.e. delivered and available for pick-up.
	 * @see https://vocabulary.uncefact.org/positioningEvent
	 */
	PositioningEvent: "unece:positioningEvent",

	/**
	 * A previous delivery event for this transportation waste material.
	 * @see https://vocabulary.uncefact.org/previousDeliveryTransportEvent
	 */
	PreviousDeliveryTransportEvent: "unece:previousDeliveryTransportEvent",

	/**
	 * A registration event of this logistics transport means.
	 * @see https://vocabulary.uncefact.org/registrationEvent
	 */
	RegistrationEvent: "unece:registrationEvent",

	/**
	 * A delivery event for this remaining transportation waste material component.
	 * @see https://vocabulary.uncefact.org/remainingDeliveryEvent
	 */
	RemainingDeliveryEvent: "unece:remainingDeliveryEvent",

	/**
	 * A transport event reported by this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/reportedTransportEvent
	 */
	ReportedTransportEvent: "unece:reportedTransportEvent",

	/**
	 * An IOT device reported transport event for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/reportingIOTDeviceTransportEvent
	 */
	ReportingIOTDeviceTransportEvent: "unece:reportingIOTDeviceTransportEvent",

	/**
	 * A ship to ship event for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/shipToShipEvent
	 */
	ShipToShipEvent: "unece:shipToShipEvent",

	/**
	 * A transport event specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/specifiedTransportEvent
	 */
	SpecifiedTransportEvent: "unece:specifiedTransportEvent",

	/**
	 * A stay specified for this referenced transport event.
	 * @see https://vocabulary.uncefact.org/staySpecifiedEvent
	 */
	StaySpecifiedEvent: "unece:staySpecifiedEvent",

	/**
	 * A storage event for this supply chain consignment.
	 * A storage event specifying when and where this piece of logistics transport equipment will be, or has been, stored.
	 * @see https://vocabulary.uncefact.org/storageEvent
	 */
	StorageEvent: "unece:storageEvent",

	/**
	 * An event occurring during the transport of this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/transportEvent
	 */
	TransportEvent: "unece:transportEvent",

	/**
	 * A transshipment intermediate event during this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transshipmentIntermediateEvent
	 */
	TransshipmentIntermediateEvent: "unece:transshipmentIntermediateEvent",

	/**
	 * A treatment event for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/treatmentEvent
	 */
	TreatmentEvent: "unece:treatmentEvent",

	/**
	 * The unloading event during which goods will be or have been unloaded from the means of transport used for this logistics
	 * transport movement.
	 * The unloading event for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/unloadingEvent
	 */
	UnloadingEvent: "unece:unloadingEvent",

	/**
	 * A transport unloading event reported for this logistics status.
	 * @see https://vocabulary.uncefact.org/unloadingReportedEvent
	 */
	UnloadingReportedEvent: "unece:unloadingReportedEvent",

	/**
	 * The vanning event (the loading of this consignment at the place of its original despatch) for this referenced supply
	 * chain consignment.
	 * The vanning event for this supply chain consignment item, i.e. the loading of this consignment item at the place of
	 * original despatch.
	 * The vanning event for this supply chain consignment, i.e. the loading of this consignment at the place of original
	 * despatch.
	 * @see https://vocabulary.uncefact.org/vanningEvent
	 */
	VanningEvent: "unece:vanningEvent",

	/**
	 * A warehouse storage event for this referenced supply chain consignment.
	 * @see https://vocabulary.uncefact.org/warehouseStorageEvent
	 */
	WarehouseStorageEvent: "unece:warehouseStorageEvent"
} as const;

/**
 * Values for UneceTransportEvent typeCode property.
 * @see https://vocabulary.uncefact.org/TransportEvent
 */
export type UneceTransportEventTypeCodeList = (typeof UneceTransportEventTypeCodeList)[keyof typeof UneceTransportEventTypeCodeList];
