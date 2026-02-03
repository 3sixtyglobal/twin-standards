// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceConsignment } from "./IUneceConsignment.js";
import type { IUneceCountry } from "./IUneceCountry.js";
import type { IUneceDangerousGoods } from "./IUneceDangerousGoods.js";
import type { IUneceDeliveryAdjustment } from "./IUneceDeliveryAdjustment.js";
import type { IUneceDeliveryInstructions } from "./IUneceDeliveryInstructions.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceHandlingInstructions } from "./IUneceHandlingInstructions.js";
import type { IUneceLogisticsLabel } from "./IUneceLogisticsLabel.js";
import type { IUneceLogisticsTransportEquipment } from "./IUneceLogisticsTransportEquipment.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUnecePackage } from "./IUnecePackage.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSchedule } from "./IUneceSchedule.js";
import type { IUneceSupplyChainEvent } from "./IUneceSupplyChainEvent.js";
import type { IUneceSupplyChainInventory } from "./IUneceSupplyChainInventory.js";
import type { IUneceSupplyChainPackaging } from "./IUneceSupplyChainPackaging.js";
import type { IUneceSupplyPlan } from "./IUneceSupplyPlan.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceVolumeUnitMeasureType } from "./IUneceVolumeUnitMeasureType.js";
import type { IUneceWeightUnitMeasureType } from "./IUneceWeightUnitMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Shipping arrangements and movement of products and or services including despatch and delivery at a line level.
 * @see https://vocabulary.uncefact.org/LineTradeDelivery
 */
export interface IUneceLineTradeDelivery extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LineTradeDelivery;

	/**
	 * An acceptance delivery event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/acceptanceEvent
	 */
	acceptanceEvent?: IUneceSupplyChainEvent;

	/**
	 * An actual delivery event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualDeliveryEvent
	 */
	actualDeliveryEvent?: IUneceSupplyChainEvent;

	/**
	 * An actual despatch event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualDespatchEvent
	 */
	actualDespatchEvent?: IUneceSupplyChainEvent;

	/**
	 * The actual loading event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualLoadingEvent
	 */
	actualLoadingEvent?: IUneceSupplyChainEvent;

	/**
	 * The actual pick-up event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualPickUpEvent
	 */
	actualPickUpEvent?: IUneceSupplyChainEvent;

	/**
	 * The actual receipt event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualReceiptEvent
	 */
	actualReceiptEvent?: IUneceSupplyChainEvent;

	/**
	 * The actual unloading event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualUnloadingEvent
	 */
	actualUnloadingEvent?: IUneceSupplyChainEvent;

	/**
	 * An additional document, at line level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/additionalDocument
	 */
	additionalDocument?: IUneceDocument;

	/**
	 * The quantity, at line level, agreed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/agreedQuantity
	 */
	agreedQuantity?: IUneceQuantityType;

	/**
	 * The transport dangerous goods details, at line level, applicable to this trade delivery.
	 * @see https://vocabulary.uncefact.org/applicableDangerousGoods
	 */
	applicableDangerousGoods?: IUneceDangerousGoods;

	/**
	 * Inventory available, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/availableInventory
	 */
	availableInventory?: IUneceSupplyChainInventory;

	/**
	 * The quantity, at line level, available for this trade delivery.
	 * @see https://vocabulary.uncefact.org/availableQuantity
	 */
	availableQuantity?: IUneceQuantityType;

	/**
	 * The quantity, at line level, billed for in this trade delivery.
	 * @see https://vocabulary.uncefact.org/billedQuantity
	 */
	billedQuantity?: IUneceQuantityType;

	/**
	 * The date, time, date time, or other date time value, at line level, of the buyer order for this trade delivery.
	 * @see https://vocabulary.uncefact.org/buyerOrderDateTime
	 */
	buyerOrderDateTime?: string;

	/**
	 * The quantity, at line level, cancelled for this trade delivery.
	 * @see https://vocabulary.uncefact.org/cancelledQuantity
	 */
	cancelledQuantity?: IUneceQuantityType;

	/**
	 * The quantity, at line level, free of charge, in this trade delivery.
	 * @see https://vocabulary.uncefact.org/chargeFreeQuantity
	 */
	chargeFreeQuantity?: IUneceQuantityType;

	/**
	 * The referenced classification document, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/classificationDocument
	 */
	classificationDocument?: IUneceDocument;

	/**
	 * The confirmed delivery event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/confirmedDeliveryEvent
	 */
	confirmedDeliveryEvent?: IUneceSupplyChainEvent;

	/**
	 * The despatch event, at line level, confirmed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/confirmedDespatchEvent
	 */
	confirmedDespatchEvent?: IUneceSupplyChainEvent;

	/**
	 * The pick-up event, at line level, confirmed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/confirmedPickUpEvent
	 */
	confirmedPickUpEvent?: IUneceSupplyChainEvent;

	/**
	 * The release event, at line level, confirmed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/confirmedReleaseEvent
	 */
	confirmedReleaseEvent?: IUneceSupplyChainEvent;

	/**
	 * Supply chain consignment inventory, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/consignmentInventory
	 */
	consignmentInventory?: IUneceSupplyChainInventory;

	/**
	 * The consumption report document, at line level, referenced from this trade delivery.
	 * @see https://vocabulary.uncefact.org/consumptionReportDocument
	 */
	consumptionReportDocument?: IUneceDocument;

	/**
	 * A supply chain consumption schedule, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/consumptionSchedule
	 */
	consumptionSchedule?: IUneceSchedule;

	/**
	 * Supply chain customer inventory, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/customerInventory
	 */
	customerInventory?: IUneceSupplyChainInventory;

	/**
	 * The delivery note document, at line level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/deliveryNoteDocument
	 */
	deliveryNoteDocument?: IUneceDocument;

	/**
	 * A supply chain delivery schedule, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/deliverySchedule
	 */
	deliverySchedule?: IUneceSchedule;

	/**
	 * The despatch advice document, at line level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/despatchAdviceDocument
	 */
	despatchAdviceDocument?: IUneceDocument;

	/**
	 * A supply chain despatch schedule, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/despatchSchedule
	 */
	despatchSchedule?: IUneceSchedule;

	/**
	 * The quantity, at line level, despatched for this trade delivery.
	 * @see https://vocabulary.uncefact.org/despatchedQuantity
	 */
	despatchedQuantity?: IUneceQuantityType;

	/**
	 * The quantity, at line level, destroyed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/destroyedQuantity
	 */
	destroyedQuantity?: IUneceQuantityType;

	/**
	 * A disposal party, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/disposalParty
	 */
	disposalParty?: IUneceTradeParty;

	/**
	 * The due in available quantity, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/dueInAvailableQuantity
	 */
	dueInAvailableQuantity?: IUneceQuantityType;

	/**
	 * The due in forecasted quantity, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/dueInForecastedQuantity
	 */
	dueInForecastedQuantity?: IUneceQuantityType;

	/**
	 * The due in requested quantity, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/dueInRequestedQuantity
	 */
	dueInRequestedQuantity?: IUneceQuantityType;

	/**
	 * The due in returned quantity, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/dueInReturnedQuantity
	 */
	dueInReturnedQuantity?: IUneceQuantityType;

	/**
	 * The economic order quantity, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/economicOrderQuantity
	 */
	economicOrderQuantity?: IUneceQuantityType;

	/**
	 * The indication, at line level, of whether or not this trade delivery is the final delivery.
	 * @see https://vocabulary.uncefact.org/finalDeliveryIndicator
	 */
	finalDeliveryIndicator?: boolean;

	/**
	 * The country of final destination, at line level, for line trade delivery.
	 * @see https://vocabulary.uncefact.org/finalDestinationCountry
	 */
	finalDestinationCountry?: IUneceCountry;

	/**
	 * The indication, at line level, of whether or not this trade delivery is fully delivered.
	 * @see https://vocabulary.uncefact.org/fullyDeliveredIndicator
	 */
	fullyDeliveredIndicator?: boolean;

	/**
	 * The Government Furnished Material (GFM) transfer rejected quantity, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/gFMTransferRejectedQuantity
	 */
	gFMTransferRejectedQuantity?: IUneceQuantityType;

	/**
	 * The date, time, date time, or other date time value for the goods ownership change, at line level, for this trade
	 * delivery.
	 * @see https://vocabulary.uncefact.org/goodsOwnershipChangeDateTime
	 */
	goodsOwnershipChangeDateTime?: string;

	/**
	 * The goods receipt note document, at line level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/goodsReceiptNoteDocument
	 */
	goodsReceiptNoteDocument?: IUneceDocument;

	/**
	 * An identifier, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * Packaging included, at line level, in this trade delivery.
	 * @see https://vocabulary.uncefact.org/includedPackaging
	 */
	includedPackaging?: IUneceSupplyChainPackaging;

	/**
	 * The quantity within the individual package, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/individualPackageQuantity
	 */
	individualPackageQuantity?: IUneceQuantityType;

	/**
	 * A note with information, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/informationNote
	 */
	informationNote?: IUneceNote;

	/**
	 * An inventory manager party, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/inventoryManagerParty
	 */
	inventoryManagerParty?: IUneceTradeParty;

	/**
	 * The latest quantity, at line level, despatched in this trade delivery.
	 * @see https://vocabulary.uncefact.org/latestDespatchedQuantity
	 */
	latestDespatchedQuantity?: IUneceQuantityType;

	/**
	 * The code specifying the nature of the discrepancy of the quantity, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/lineTradeDeliveryQuantityDiscrepancyNatureCode
	 */
	lineTradeDeliveryQuantityDiscrepancyNatureCode?: string;

	/**
	 * The code specifying the type of quantity variation, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/lineTradeDeliveryQuantityVariationTypeCode
	 */
	lineTradeDeliveryQuantityVariationTypeCode?: string;

	/**
	 * A referenced logistics package, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/logisticsPackage
	 */
	logisticsPackage?: IUnecePackage;

	/**
	 * A logistics service provider party, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/logisticsServiceProviderParty
	 */
	logisticsServiceProviderParty?: IUneceTradeParty;

	/**
	 * The modification of a forecasted quantity, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/modificationForecastedQuantity
	 */
	modificationForecastedQuantity?: IUneceQuantityType;

	/**
	 * The quantity, at line level, ordered for this trade delivery.
	 * @see https://vocabulary.uncefact.org/orderQuantity
	 */
	orderQuantity?: IUneceQuantityType;

	/**
	 * A supply chain order schedule, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/orderSchedule
	 */
	orderSchedule?: IUneceSchedule;

	/**
	 * The indication, at line level, of whether or not over delivery is allowed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/overDeliveryAllowedIndicator
	 */
	overDeliveryAllowedIndicator?: boolean;

	/**
	 * The number of packages, at line level, in this trade delivery.
	 * @see https://vocabulary.uncefact.org/packageQuantity
	 */
	packageQuantity?: IUneceQuantityType;

	/**
	 * The packing list document, at line level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/packingListDocument
	 */
	packingListDocument?: IUneceDocument;

	/**
	 * The indication, at line level, of whether or not this trade delivery can be partially delivered.
	 * @see https://vocabulary.uncefact.org/partialDeliveryAllowedIndicator
	 */
	partialDeliveryAllowedIndicator?: boolean;

	/**
	 * The number of units per package, at line level, in this trade delivery.
	 * @see https://vocabulary.uncefact.org/perPackageUnitQuantity
	 */
	perPackageUnitQuantity?: IUneceQuantityType;

	/**
	 * The formatted date, time, date time, or other date time value, at line level, when this delivery is available for
	 * pick-up.
	 * @see https://vocabulary.uncefact.org/pickUpAvailabilityDateTime
	 */
	pickUpAvailabilityDateTime?: string;

	/**
	 * A consignment, at line level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedConsignment
	 */
	plannedConsignment?: IUneceConsignment;

	/**
	 * A delivery event, at line level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedDeliveryEvent
	 */
	plannedDeliveryEvent?: IUneceSupplyChainEvent;

	/**
	 * A despatch event, at line level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedDespatchEvent
	 */
	plannedDespatchEvent?: IUneceSupplyChainEvent;

	/**
	 * The pick-up event, at line level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedPickUpEvent
	 */
	plannedPickUpEvent?: IUneceSupplyChainEvent;

	/**
	 * The planned ship to delivery event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedShipToDeliveryEvent
	 */
	plannedShipToDeliveryEvent?: IUneceSupplyChainEvent;

	/**
	 * The number of product units, at line level, in this trade delivery.
	 * @see https://vocabulary.uncefact.org/productUnitQuantity
	 */
	productUnitQuantity?: IUneceQuantityType;

	/**
	 * A supply plan, at line level, projected for this trade delivery.
	 * @see https://vocabulary.uncefact.org/projectedSupplyPlan
	 */
	projectedSupplyPlan?: IUneceSupplyPlan;

	/**
	 * The code specifying the quantity calculation method of this line trade delivery.
	 * @see https://vocabulary.uncefact.org/quantityCalculationMethodCode
	 */
	quantityCalculationMethodCode?: string;

	/**
	 * A reason, expressed as text, for a quantity variation, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/quantityVariationReason
	 */
	quantityVariationReason?: string;

	/**
	 * The code specifying the reason for the quantity variation, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/quantityVariationReasonCode
	 */
	quantityVariationReasonCode?: string;

	/**
	 * A supply chain receipt schedule, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/receiptSchedule
	 */
	receiptSchedule?: IUneceSchedule;

	/**
	 * The quantity, at line level, received for this trade delivery.
	 * @see https://vocabulary.uncefact.org/receivedQuantity
	 */
	receivedQuantity?: IUneceQuantityType;

	/**
	 * A receiving advice document, at line level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/receivingAdviceDocument
	 */
	receivingAdviceDocument?: IUneceDocument;

	/**
	 * The quantity, at line level, rejected for this trade delivery.
	 * @see https://vocabulary.uncefact.org/rejectedQuantity
	 */
	rejectedQuantity?: IUneceQuantityType;

	/**
	 * A consignment, at line level, related to this line trade delivery.
	 * @see https://vocabulary.uncefact.org/relatedConsignment
	 */
	relatedConsignment?: IUneceConsignment;

	/**
	 * The remaining quantity, at line level, requested for this trade delivery.
	 * @see https://vocabulary.uncefact.org/remainingRequestedQuantity
	 */
	remainingRequestedQuantity?: IUneceQuantityType;

	/**
	 * A delivery event, at line level, requested for this trade delivery.
	 * @see https://vocabulary.uncefact.org/requestedDeliveryEvent
	 */
	requestedDeliveryEvent?: IUneceSupplyChainEvent;

	/**
	 * A despatch event, at line level, requested for this trade delivery.
	 * @see https://vocabulary.uncefact.org/requestedDespatchEvent
	 */
	requestedDespatchEvent?: IUneceSupplyChainEvent;

	/**
	 * The quantity, at line level, requested for this trade delivery.
	 * @see https://vocabulary.uncefact.org/requestedQuantity
	 */
	requestedQuantity?: IUneceQuantityType;

	/**
	 * The quantity, at line level, returned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/returnedQuantity
	 */
	returnedQuantity?: IUneceQuantityType;

	/**
	 * The reverse billed quantity, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/reverseBilledQuantity
	 */
	reverseBilledQuantity?: IUneceQuantityType;

	/**
	 * The ship from party, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/shipFromParty
	 */
	shipFromParty?: IUneceTradeParty;

	/**
	 * The ship to party, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/shipToParty
	 */
	shipToParty?: IUneceTradeParty;

	/**
	 * The shipment schedule document referenced, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/shipmentScheduleDocument
	 */
	shipmentScheduleDocument?: IUneceDocument;

	/**
	 * A delivery adjustment, at line level, specified for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedDeliveryAdjustment
	 */
	specifiedDeliveryAdjustment?: IUneceDeliveryAdjustment;

	/**
	 * Delivery instructions, at line level, specified for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedDeliveryInstructions
	 */
	specifiedDeliveryInstructions?: IUneceDeliveryInstructions;

	/**
	 * Handling instructions, at line level, specified for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedHandlingInstructions
	 */
	specifiedHandlingInstructions?: IUneceHandlingInstructions;

	/**
	 * A logistics package, at line level, specified for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedPackage
	 */
	specifiedPackage?: IUnecePackage;

	/**
	 * A supply chain schedule, specified at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedSchedule
	 */
	specifiedSchedule?: IUneceSchedule;

	/**
	 * A split quantity for this line trade delivery.
	 * @see https://vocabulary.uncefact.org/splitQuantity
	 */
	splitQuantity?: IUneceQuantityType;

	/**
	 * The code specifying the status, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * A subordinate identifier, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/subordinateId
	 */
	subordinateId?: string;

	/**
	 * A supply (replenishment) schedule, specified at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/supplySpecifiedSchedule
	 */
	supplySpecifiedSchedule?: IUneceSchedule;

	/**
	 * The turn in quantity, at line level, received for this trade delivery.
	 * @see https://vocabulary.uncefact.org/turnInReceivedQuantity
	 */
	turnInReceivedQuantity?: IUneceQuantityType;

	/**
	 * The formatted date, time, date time, or other date time value, at line level, when this trade delivery is delivered to
	 * the ultimate ship to party.
	 * @see https://vocabulary.uncefact.org/ultimateShipToDeliveryDateTime
	 */
	ultimateShipToDeliveryDateTime?: string;

	/**
	 * The ultimate ship to party, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/ultimateShipToParty
	 */
	ultimateShipToParty?: IUneceTradeParty;

	/**
	 * The quantity, at line level, unavailable for this trade delivery.
	 * @see https://vocabulary.uncefact.org/unavailableQuantity
	 */
	unavailableQuantity?: IUneceQuantityType;

	/**
	 * A logistics label, at line level, used for this trade delivery.
	 * @see https://vocabulary.uncefact.org/usedLabel
	 */
	usedLabel?: IUneceLogisticsLabel;

	/**
	 * A piece of logistics transport equipment, at line level, utilized for this trade delivery.
	 * @see https://vocabulary.uncefact.org/utilizedTransportEquipment
	 */
	utilizedTransportEquipment?: IUneceLogisticsTransportEquipment;

	/**
	 * The measure, at line level, of the gross volume of this trade delivery.
	 * @see https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure
	 */
	volumeUnitGrossVolumeMeasure?: IUneceVolumeUnitMeasureType;

	/**
	 * The measure, at line level, of the net volume of this line trade delivery.
	 * @see https://vocabulary.uncefact.org/volumeUnitNetVolumeMeasure
	 */
	volumeUnitNetVolumeMeasure?: IUneceVolumeUnitMeasureType;

	/**
	 * The measure of the chargeable weight, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/weightUnitChargeableWeightMeasure
	 */
	weightUnitChargeableWeightMeasure?: IUneceWeightUnitMeasureType;

	/**
	 * The measure, at line level, of the gross weight (mass) of this line trade delivery.
	 * @see https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure
	 */
	weightUnitGrossWeightMeasure?: IUneceWeightUnitMeasureType;

	/**
	 * The measure, at line level, of the net weight (mass) of this trade delivery.
	 * @see https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
	 */
	weightUnitNetWeightMeasure?: IUneceWeightUnitMeasureType;

	/**
	 * The measure, at line level, of the theoretical weight of this trade delivery.
	 * @see https://vocabulary.uncefact.org/weightUnitTheoreticalWeightMeasure
	 */
	weightUnitTheoreticalWeightMeasure?: IUneceWeightUnitMeasureType;
}
