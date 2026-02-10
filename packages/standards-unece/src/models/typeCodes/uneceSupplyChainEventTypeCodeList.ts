// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceSupplyChainEvent typeCode property.
 * @see https://vocabulary.uncefact.org/SupplyChainEvent
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceSupplyChainEventTypeCodeList = {
	/**
	 * An acceptance delivery event, at header level, for this trade delivery.
	 * An acceptance delivery event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/acceptanceEvent
	 */
	AcceptanceEvent: "unece:acceptanceEvent",

	/**
	 * An actual delivery event for this subordinate line trade delivery.
	 * An actual delivery event, at header level, for this trade delivery.
	 * An actual delivery event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualDeliveryEvent
	 */
	ActualDeliveryEvent: "unece:actualDeliveryEvent",

	/**
	 * An actual despatch event, at header level, for this trade delivery.
	 * An actual despatch event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualDespatchEvent
	 */
	ActualDespatchEvent: "unece:actualDespatchEvent",

	/**
	 * The actual loading event, at header level, for this trade delivery.
	 * The actual loading event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualLoadingEvent
	 */
	ActualLoadingEvent: "unece:actualLoadingEvent",

	/**
	 * The actual pick-up event, at header level, for this trade delivery.
	 * The actual pick-up event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualPickUpEvent
	 */
	ActualPickUpEvent: "unece:actualPickUpEvent",

	/**
	 * The actual receipt event, at header level, for this trade delivery.
	 * The actual receipt event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualReceiptEvent
	 */
	ActualReceiptEvent: "unece:actualReceiptEvent",

	/**
	 * The actual unloading event, at header level, for this trade delivery.
	 * The actual unloading event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualUnloadingEvent
	 */
	ActualUnloadingEvent: "unece:actualUnloadingEvent",

	/**
	 * A confirmed delivery event in this supply chain supply plan.
	 * The confirmed delivery event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/confirmedDeliveryEvent
	 */
	ConfirmedDeliveryEvent: "unece:confirmedDeliveryEvent",

	/**
	 * The despatch event, at header level, confirmed for this trade delivery.
	 * The despatch event, at line level, confirmed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/confirmedDespatchEvent
	 */
	ConfirmedDespatchEvent: "unece:confirmedDespatchEvent",

	/**
	 * The pick-up event, at header level, confirmed for this trade delivery.
	 * The pick-up event, at line level, confirmed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/confirmedPickUpEvent
	 */
	ConfirmedPickUpEvent: "unece:confirmedPickUpEvent",

	/**
	 * The confirmed release event, at header level, for this trade delivery.
	 * The release event, at line level, confirmed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/confirmedReleaseEvent
	 */
	ConfirmedReleaseEvent: "unece:confirmedReleaseEvent",

	/**
	 * A delivery event for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/deliverySupplyChainEvent
	 */
	DeliverySupplyChainEvent: "unece:deliverySupplyChainEvent",

	/**
	 * An estimated delivery event for this trade delivery header.
	 * @see https://vocabulary.uncefact.org/estimatedDeliveryEvent
	 */
	EstimatedDeliveryEvent: "unece:estimatedDeliveryEvent",

	/**
	 * A supply chain inspection event at this logistics location.
	 * The inspection event for this trade product instance.
	 * @see https://vocabulary.uncefact.org/inspectionEvent
	 */
	InspectionEvent: "unece:inspectionEvent",

	/**
	 * An occurrence of an event for this production process.
	 * @see https://vocabulary.uncefact.org/occurrenceEvent
	 */
	OccurrenceEvent: "unece:occurrenceEvent",

	/**
	 * The packaging event for this trade product instance.
	 * @see https://vocabulary.uncefact.org/packagingEvent
	 */
	PackagingEvent: "unece:packagingEvent",

	/**
	 * A delivery event, at header level, planned for this trade delivery.
	 * A delivery event, at line level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedDeliveryEvent
	 */
	PlannedDeliveryEvent: "unece:plannedDeliveryEvent",

	/**
	 * A despatch event, at header level, planned for this trade delivery.
	 * A despatch event, at line level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedDespatchEvent
	 */
	PlannedDespatchEvent: "unece:plannedDespatchEvent",

	/**
	 * The pick-up event, at header level, planned for this trade delivery.
	 * The pick-up event, at line level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedPickUpEvent
	 */
	PlannedPickUpEvent: "unece:plannedPickUpEvent",

	/**
	 * The release event, at header level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedReleaseEvent
	 */
	PlannedReleaseEvent: "unece:plannedReleaseEvent",

	/**
	 * The event of the planned ship from delivery, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedShipFromDeliveryEvent
	 */
	PlannedShipFromDeliveryEvent: "unece:plannedShipFromDeliveryEvent",

	/**
	 * The planned ship to delivery event, at header level, for this trade delivery.
	 * The planned ship to delivery event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedShipToDeliveryEvent
	 */
	PlannedShipToDeliveryEvent: "unece:plannedShipToDeliveryEvent",

	/**
	 * A previous delivery event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/previousDeliverySupplyChainEvent
	 */
	PreviousDeliverySupplyChainEvent: "unece:previousDeliverySupplyChainEvent",

	/**
	 * The processing event for this trade product instance.
	 * @see https://vocabulary.uncefact.org/processingEvent
	 */
	ProcessingEvent: "unece:processingEvent",

	/**
	 * The production event for this trade product instance.
	 * @see https://vocabulary.uncefact.org/productionEvent
	 */
	ProductionEvent: "unece:productionEvent",

	/**
	 * A reclassification supply chain event for this trade product instance.
	 * @see https://vocabulary.uncefact.org/reclassificationEvent
	 */
	ReclassificationEvent: "unece:reclassificationEvent",

	/**
	 * A supply chain event reported for this logistics status.
	 * @see https://vocabulary.uncefact.org/reportedSupplyChainEvent
	 */
	ReportedSupplyChainEvent: "unece:reportedSupplyChainEvent",

	/**
	 * An IOT (Internet of Things) device or scanning device reporting event for this production machine.
	 * An IOT (Internet of Things) or other scanning device reporting event for this specified production device.
	 * @see https://vocabulary.uncefact.org/reportingIOTDeviceSupplyChainEvent
	 */
	ReportingIOTDeviceSupplyChainEvent: "unece:reportingIOTDeviceSupplyChainEvent",

	/**
	 * A delivery event, at header level, requested for this trade delivery.
	 * A delivery event, at line level, requested for this trade delivery.
	 * @see https://vocabulary.uncefact.org/requestedDeliveryEvent
	 */
	RequestedDeliveryEvent: "unece:requestedDeliveryEvent",

	/**
	 * A despatch event, at header level, requested for this trade delivery.
	 * A despatch event, at line level, requested for this trade delivery.
	 * @see https://vocabulary.uncefact.org/requestedDespatchEvent
	 */
	RequestedDespatchEvent: "unece:requestedDespatchEvent",

	/**
	 * A scheduled delivery event in this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/scheduledDeliveryEvent
	 */
	ScheduledDeliveryEvent: "unece:scheduledDeliveryEvent",

	/**
	 * A supply chain event specified for this product batch.
	 * A supply chain event specified for this production facility.
	 * A supply chain event specified for this referenced location.
	 * A supply chain event specified for this supply chain inventory.
	 * A supply chain event specified for this sustainability characteristic.
	 * A supply chain event specified for this technical characteristic.
	 * A supply chain event specified for this trade product.
	 * A supply chain event, at header level, specified for this trade delivery.
	 * An event specified for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainEvent
	 */
	SpecifiedSupplyChainEvent: "unece:specifiedSupplyChainEvent",

	/**
	 * The ultimate ship to delivery event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/ultimateShipToDeliveryEvent
	 */
	UltimateShipToDeliveryEvent: "unece:ultimateShipToDeliveryEvent"
} as const;

/**
 * Values for UneceSupplyChainEvent typeCode property.
 * @see https://vocabulary.uncefact.org/SupplyChainEvent
 */
export type UneceSupplyChainEventTypeCodeList = (typeof UneceSupplyChainEventTypeCodeList)[keyof typeof UneceSupplyChainEventTypeCodeList];
