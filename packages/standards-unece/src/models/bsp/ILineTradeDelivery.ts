// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IConsignment } from "./IConsignment.js";
import type { ICountry } from "./ICountry.js";
import type { IDangerousGoods } from "./IDangerousGoods.js";
import type { IDeliveryAdjustment } from "./IDeliveryAdjustment.js";
import type { IDeliveryInstructions } from "./IDeliveryInstructions.js";
import type { IDocument } from "./IDocument.js";
import type { IHandlingInstructions } from "./IHandlingInstructions.js";
import type { ILogisticsLabel } from "./ILogisticsLabel.js";
import type { ILogisticsTransportEquipment } from "./ILogisticsTransportEquipment.js";
import type { INote } from "./INote.js";
import type { IPackage } from "./IPackage.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ISchedule } from "./ISchedule.js";
import type { ISupplyChainEvent } from "./ISupplyChainEvent.js";
import type { ISupplyChainInventory } from "./ISupplyChainInventory.js";
import type { ISupplyChainPackaging } from "./ISupplyChainPackaging.js";
import type { ISupplyPlan } from "./ISupplyPlan.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { IVolumeUnitMeasureType } from "./IVolumeUnitMeasureType.js";
import type { IWeightUnitMeasureType } from "./IWeightUnitMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Shipping arrangements and movement of products and or services including despatch and delivery at a line level.
 * @see https://vocabulary.uncefact.org/LineTradeDelivery
 */
export interface ILineTradeDelivery extends IJsonLdNodeObject {
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
	acceptanceEvent?: ISupplyChainEvent[];

	/**
	 * An actual delivery event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualDeliveryEvent
	 */
	actualDeliveryEvent?: ISupplyChainEvent[];

	/**
	 * An actual despatch event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualDespatchEvent
	 */
	actualDespatchEvent?: ISupplyChainEvent[];

	/**
	 * The actual loading event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualLoadingEvent
	 */
	actualLoadingEvent?: ISupplyChainEvent[];

	/**
	 * The actual pick-up event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualPickUpEvent
	 */
	actualPickUpEvent?: ISupplyChainEvent[];

	/**
	 * The actual receipt event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualReceiptEvent
	 */
	actualReceiptEvent?: ISupplyChainEvent[];

	/**
	 * The actual unloading event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualUnloadingEvent
	 */
	actualUnloadingEvent?: ISupplyChainEvent[];

	/**
	 * An additional document, at line level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/additionalDocument
	 */
	additionalDocument?: IDocument[];

	/**
	 * The quantity, at line level, agreed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/agreedQuantity
	 */
	agreedQuantity?: IQuantityType[];

	/**
	 * The transport dangerous goods details, at line level, applicable to this trade delivery.
	 * @see https://vocabulary.uncefact.org/applicableDangerousGoods
	 */
	applicableDangerousGoods?: IDangerousGoods[];

	/**
	 * Inventory available, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/availableInventory
	 */
	availableInventory?: ISupplyChainInventory[];

	/**
	 * The quantity, at line level, available for this trade delivery.
	 * @see https://vocabulary.uncefact.org/availableQuantity
	 */
	availableQuantity?: IQuantityType[];

	/**
	 * The quantity, at line level, billed for in this trade delivery.
	 * @see https://vocabulary.uncefact.org/billedQuantity
	 */
	billedQuantity?: IQuantityType[];

	/**
	 * The date, time, date time, or other date time value, at line level, of the buyer order for this trade delivery.
	 * @see https://vocabulary.uncefact.org/buyerOrderDateTime
	 */
	buyerOrderDateTime?: string;

	/**
	 * The quantity, at line level, cancelled for this trade delivery.
	 * @see https://vocabulary.uncefact.org/cancelledQuantity
	 */
	cancelledQuantity?: IQuantityType[];

	/**
	 * The quantity, at line level, free of charge, in this trade delivery.
	 * @see https://vocabulary.uncefact.org/chargeFreeQuantity
	 */
	chargeFreeQuantity?: IQuantityType;

	/**
	 * The referenced classification document, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/classificationDocument
	 */
	classificationDocument?: IDocument[];

	/**
	 * The confirmed delivery event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/confirmedDeliveryEvent
	 */
	confirmedDeliveryEvent?: ISupplyChainEvent[];

	/**
	 * The despatch event, at line level, confirmed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/confirmedDespatchEvent
	 */
	confirmedDespatchEvent?: ISupplyChainEvent[];

	/**
	 * The pick-up event, at line level, confirmed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/confirmedPickUpEvent
	 */
	confirmedPickUpEvent?: ISupplyChainEvent[];

	/**
	 * The release event, at line level, confirmed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/confirmedReleaseEvent
	 */
	confirmedReleaseEvent?: ISupplyChainEvent[];

	/**
	 * Supply chain consignment inventory, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/consignmentInventory
	 */
	consignmentInventory?: ISupplyChainInventory[];

	/**
	 * The consumption report document, at line level, referenced from this trade delivery.
	 * @see https://vocabulary.uncefact.org/consumptionReportDocument
	 */
	consumptionReportDocument?: IDocument[];

	/**
	 * A supply chain consumption schedule, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/consumptionSchedule
	 */
	consumptionSchedule?: ISchedule[];

	/**
	 * Supply chain customer inventory, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/customerInventory
	 */
	customerInventory?: ISupplyChainInventory[];

	/**
	 * The delivery note document, at line level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/deliveryNoteDocument
	 */
	deliveryNoteDocument?: IDocument[];

	/**
	 * A supply chain delivery schedule, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/deliverySchedule
	 */
	deliverySchedule?: ISchedule[];

	/**
	 * The despatch advice document, at line level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/despatchAdviceDocument
	 */
	despatchAdviceDocument?: IDocument[];

	/**
	 * A supply chain despatch schedule, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/despatchSchedule
	 */
	despatchSchedule?: ISchedule[];

	/**
	 * The quantity, at line level, despatched for this trade delivery.
	 * @see https://vocabulary.uncefact.org/despatchedQuantity
	 */
	despatchedQuantity?: IQuantityType[];

	/**
	 * The quantity, at line level, destroyed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/destroyedQuantity
	 */
	destroyedQuantity?: IQuantityType[];

	/**
	 * A disposal party, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/disposalParty
	 */
	disposalParty?: ITradeParty[];

	/**
	 * The due in available quantity, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/dueInAvailableQuantity
	 */
	dueInAvailableQuantity?: IQuantityType[];

	/**
	 * The due in forecasted quantity, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/dueInForecastedQuantity
	 */
	dueInForecastedQuantity?: IQuantityType[];

	/**
	 * The due in requested quantity, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/dueInRequestedQuantity
	 */
	dueInRequestedQuantity?: IQuantityType[];

	/**
	 * The due in returned quantity, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/dueInReturnedQuantity
	 */
	dueInReturnedQuantity?: IQuantityType[];

	/**
	 * The economic order quantity, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/economicOrderQuantity
	 */
	economicOrderQuantity?: IQuantityType[];

	/**
	 * The indication, at line level, of whether or not this trade delivery is the final delivery.
	 * @see https://vocabulary.uncefact.org/finalDeliveryIndicator
	 */
	finalDeliveryIndicator?: boolean;

	/**
	 * The country of final destination, at line level, for line trade delivery.
	 * @see https://vocabulary.uncefact.org/finalDestinationCountry
	 */
	finalDestinationCountry?: ICountry;

	/**
	 * The indication, at line level, of whether or not this trade delivery is fully delivered.
	 * @see https://vocabulary.uncefact.org/fullyDeliveredIndicator
	 */
	fullyDeliveredIndicator?: boolean;

	/**
	 * The Government Furnished Material (GFM) transfer rejected quantity, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/gFMTransferRejectedQuantity
	 */
	gFMTransferRejectedQuantity?: IQuantityType[];

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
	goodsReceiptNoteDocument?: IDocument[];

	/**
	 * An identifier, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * Packaging included, at line level, in this trade delivery.
	 * @see https://vocabulary.uncefact.org/includedPackaging
	 */
	includedPackaging?: ISupplyChainPackaging[];

	/**
	 * The quantity within the individual package, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/individualPackageQuantity
	 */
	individualPackageQuantity?: IQuantityType[];

	/**
	 * A note with information, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/informationNote
	 */
	informationNote?: INote[];

	/**
	 * An inventory manager party, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/inventoryManagerParty
	 */
	inventoryManagerParty?: ITradeParty[];

	/**
	 * The latest quantity, at line level, despatched in this trade delivery.
	 * @see https://vocabulary.uncefact.org/latestDespatchedQuantity
	 */
	latestDespatchedQuantity?: IQuantityType[];

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
	logisticsPackage?: IPackage[];

	/**
	 * A logistics service provider party, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/logisticsServiceProviderParty
	 */
	logisticsServiceProviderParty?: ITradeParty[];

	/**
	 * The modification of a forecasted quantity, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/modificationForecastedQuantity
	 */
	modificationForecastedQuantity?: IQuantityType[];

	/**
	 * The quantity, at line level, ordered for this trade delivery.
	 * @see https://vocabulary.uncefact.org/orderQuantity
	 */
	orderQuantity?: IQuantityType[];

	/**
	 * A supply chain order schedule, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/orderSchedule
	 */
	orderSchedule?: ISchedule[];

	/**
	 * The indication, at line level, of whether or not over delivery is allowed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/overDeliveryAllowedIndicator
	 */
	overDeliveryAllowedIndicator?: boolean;

	/**
	 * The number of packages, at line level, in this trade delivery.
	 * @see https://vocabulary.uncefact.org/packageQuantity
	 */
	packageQuantity?: IQuantityType[];

	/**
	 * The packing list document, at line level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/packingListDocument
	 */
	packingListDocument?: IDocument[];

	/**
	 * The indication, at line level, of whether or not this trade delivery can be partially delivered.
	 * @see https://vocabulary.uncefact.org/partialDeliveryAllowedIndicator
	 */
	partialDeliveryAllowedIndicator?: boolean;

	/**
	 * The number of units per package, at line level, in this trade delivery.
	 * @see https://vocabulary.uncefact.org/perPackageUnitQuantity
	 */
	perPackageUnitQuantity?: IQuantityType[];

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
	plannedConsignment?: IConsignment[];

	/**
	 * A delivery event, at line level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedDeliveryEvent
	 */
	plannedDeliveryEvent?: ISupplyChainEvent[];

	/**
	 * A despatch event, at line level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedDespatchEvent
	 */
	plannedDespatchEvent?: ISupplyChainEvent[];

	/**
	 * The pick-up event, at line level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedPickUpEvent
	 */
	plannedPickUpEvent?: ISupplyChainEvent[];

	/**
	 * The planned ship to delivery event, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedShipToDeliveryEvent
	 */
	plannedShipToDeliveryEvent?: ISupplyChainEvent[];

	/**
	 * The number of product units, at line level, in this trade delivery.
	 * @see https://vocabulary.uncefact.org/productUnitQuantity
	 */
	productUnitQuantity?: IQuantityType[];

	/**
	 * A supply plan, at line level, projected for this trade delivery.
	 * @see https://vocabulary.uncefact.org/projectedSupplyPlan
	 */
	projectedSupplyPlan?: ISupplyPlan[];

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
	receiptSchedule?: ISchedule[];

	/**
	 * The quantity, at line level, received for this trade delivery.
	 * @see https://vocabulary.uncefact.org/receivedQuantity
	 */
	receivedQuantity?: IQuantityType[];

	/**
	 * A receiving advice document, at line level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/receivingAdviceDocument
	 */
	receivingAdviceDocument?: IDocument[];

	/**
	 * The quantity, at line level, rejected for this trade delivery.
	 * @see https://vocabulary.uncefact.org/rejectedQuantity
	 */
	rejectedQuantity?: IQuantityType[];

	/**
	 * A consignment, at line level, related to this line trade delivery.
	 * @see https://vocabulary.uncefact.org/relatedConsignment
	 */
	relatedConsignment?: IConsignment[];

	/**
	 * The remaining quantity, at line level, requested for this trade delivery.
	 * @see https://vocabulary.uncefact.org/remainingRequestedQuantity
	 */
	remainingRequestedQuantity?: IQuantityType[];

	/**
	 * A delivery event, at line level, requested for this trade delivery.
	 * @see https://vocabulary.uncefact.org/requestedDeliveryEvent
	 */
	requestedDeliveryEvent?: ISupplyChainEvent[];

	/**
	 * A despatch event, at line level, requested for this trade delivery.
	 * @see https://vocabulary.uncefact.org/requestedDespatchEvent
	 */
	requestedDespatchEvent?: ISupplyChainEvent[];

	/**
	 * The quantity, at line level, requested for this trade delivery.
	 * @see https://vocabulary.uncefact.org/requestedQuantity
	 */
	requestedQuantity?: IQuantityType[];

	/**
	 * The quantity, at line level, returned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/returnedQuantity
	 */
	returnedQuantity?: IQuantityType[];

	/**
	 * The reverse billed quantity, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/reverseBilledQuantity
	 */
	reverseBilledQuantity?: IQuantityType[];

	/**
	 * The ship from party, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/shipFromParty
	 */
	shipFromParty?: ITradeParty[];

	/**
	 * The ship to party, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/shipToParty
	 */
	shipToParty?: ITradeParty[];

	/**
	 * The shipment schedule document referenced, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/shipmentScheduleDocument
	 */
	shipmentScheduleDocument?: IDocument[];

	/**
	 * A delivery adjustment, at line level, specified for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedDeliveryAdjustment
	 */
	specifiedDeliveryAdjustment?: IDeliveryAdjustment[];

	/**
	 * Delivery instructions, at line level, specified for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedDeliveryInstructions
	 */
	specifiedDeliveryInstructions?: IDeliveryInstructions[];

	/**
	 * Handling instructions, at line level, specified for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedHandlingInstructions
	 */
	specifiedHandlingInstructions?: IHandlingInstructions[];

	/**
	 * A logistics package, at line level, specified for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedPackage
	 */
	specifiedPackage?: IPackage[];

	/**
	 * A supply chain schedule, specified at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedSchedule
	 */
	specifiedSchedule?: ISchedule[];

	/**
	 * A split quantity for this line trade delivery.
	 * @see https://vocabulary.uncefact.org/splitQuantity
	 */
	splitQuantity?: IQuantityType[];

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
	supplySpecifiedSchedule?: ISchedule[];

	/**
	 * The turn in quantity, at line level, received for this trade delivery.
	 * @see https://vocabulary.uncefact.org/turnInReceivedQuantity
	 */
	turnInReceivedQuantity?: IQuantityType[];

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
	ultimateShipToParty?: ITradeParty[];

	/**
	 * The quantity, at line level, unavailable for this trade delivery.
	 * @see https://vocabulary.uncefact.org/unavailableQuantity
	 */
	unavailableQuantity?: IQuantityType[];

	/**
	 * A logistics label, at line level, used for this trade delivery.
	 * @see https://vocabulary.uncefact.org/usedLabel
	 */
	usedLabel?: ILogisticsLabel[];

	/**
	 * A piece of logistics transport equipment, at line level, utilized for this trade delivery.
	 * @see https://vocabulary.uncefact.org/utilizedTransportEquipment
	 */
	utilizedTransportEquipment?: ILogisticsTransportEquipment[];

	/**
	 * The measure, at line level, of the gross volume of this trade delivery.
	 * @see https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure
	 */
	volumeUnitGrossVolumeMeasure?: IVolumeUnitMeasureType[];

	/**
	 * The measure, at line level, of the net volume of this line trade delivery.
	 * @see https://vocabulary.uncefact.org/volumeUnitNetVolumeMeasure
	 */
	volumeUnitNetVolumeMeasure?: IVolumeUnitMeasureType[];

	/**
	 * The measure of the chargeable weight, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/weightUnitChargeableWeightMeasure
	 */
	weightUnitChargeableWeightMeasure?: IWeightUnitMeasureType;

	/**
	 * The measure, at line level, of the gross weight (mass) of this line trade delivery.
	 * @see https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure
	 */
	weightUnitGrossWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * The measure, at line level, of the net weight (mass) of this trade delivery.
	 * @see https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
	 */
	weightUnitNetWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * The measure, at line level, of the theoretical weight of this trade delivery.
	 * @see https://vocabulary.uncefact.org/weightUnitTheoreticalWeightMeasure
	 */
	weightUnitTheoreticalWeightMeasure?: IWeightUnitMeasureType;
}
