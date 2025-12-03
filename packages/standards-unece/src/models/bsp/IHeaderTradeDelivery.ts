// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IConsignment } from "./IConsignment.js";
import type { ICountry } from "./ICountry.js";
import type { IDeliveryInstructions } from "./IDeliveryInstructions.js";
import type { IDocument } from "./IDocument.js";
import type { IHandlingInstructions } from "./IHandlingInstructions.js";
import type { ILogisticsTransportEquipment } from "./ILogisticsTransportEquipment.js";
import type { INote } from "./INote.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ISchedule } from "./ISchedule.js";
import type { ISupplyChainEvent } from "./ISupplyChainEvent.js";
import type { ISupplyChainPackaging } from "./ISupplyChainPackaging.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { IWeightUnitMeasureType } from "./IWeightUnitMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Shipping arrangements and movement of products and or services including despatch and delivery at a header level.
 * @see https://vocabulary.uncefact.org/HeaderTradeDelivery
 */
export interface IHeaderTradeDelivery extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.HeaderTradeDelivery;

	/**
	 * An acceptance delivery event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/acceptanceEvent
	 */
	acceptanceEvent?: ISupplyChainEvent[];

	/**
	 * An actual delivery event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualDeliveryEvent
	 */
	actualDeliveryEvent?: ISupplyChainEvent[];

	/**
	 * An actual despatch event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualDespatchEvent
	 */
	actualDespatchEvent?: ISupplyChainEvent[];

	/**
	 * The actual loading event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualLoadingEvent
	 */
	actualLoadingEvent?: ISupplyChainEvent[];

	/**
	 * The actual pick-up event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualPickUpEvent
	 */
	actualPickUpEvent?: ISupplyChainEvent[];

	/**
	 * The actual receipt event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualReceiptEvent
	 */
	actualReceiptEvent?: ISupplyChainEvent[];

	/**
	 * The actual unloading event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualUnloadingEvent
	 */
	actualUnloadingEvent?: ISupplyChainEvent[];

	/**
	 * An additional document, at header level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/additionalDocument
	 */
	additionalDocument?: IDocument[];

	/**
	 * The quantity, at header level, agreed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/agreedQuantity
	 */
	agreedQuantity?: IQuantityType[];

	/**
	 * The date, time, date time, or other date time value, at header level, for the buyer order for this trade delivery.
	 * @see https://vocabulary.uncefact.org/buyerOrderDateTime
	 */
	buyerOrderDateTime?: string;

	/**
	 * The referenced classification document, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/classificationDocument
	 */
	classificationDocument?: IDocument[];

	/**
	 * The despatch event, at header level, confirmed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/confirmedDespatchEvent
	 */
	confirmedDespatchEvent?: ISupplyChainEvent[];

	/**
	 * The pick-up event, at header level, confirmed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/confirmedPickUpEvent
	 */
	confirmedPickUpEvent?: ISupplyChainEvent[];

	/**
	 * The confirmed release event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/confirmedReleaseEvent
	 */
	confirmedReleaseEvent?: ISupplyChainEvent[];

	/**
	 * The consumption report document, at header level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/consumptionReportDocument
	 */
	consumptionReportDocument?: IDocument[];

	/**
	 * The delivery note document, at header level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/deliveryNoteDocument
	 */
	deliveryNoteDocument?: IDocument[];

	/**
	 * The despatch advice document, at header level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/despatchAdviceDocument
	 */
	despatchAdviceDocument?: IDocument[];

	/**
	 * The quantity, at header level, despatched in this trade delivery.
	 * @see https://vocabulary.uncefact.org/despatchedQuantity
	 */
	despatchedQuantity?: IQuantityType[];

	/**
	 * A disposal party, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/disposalParty
	 */
	disposalParty?: ITradeParty[];

	/**
	 * The due in available quantity, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/dueInAvailableQuantity
	 */
	dueInAvailableQuantity?: IQuantityType[];

	/**
	 * The due in forecasted quantity, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/dueInForecastedQuantity
	 */
	dueInForecastedQuantity?: IQuantityType[];

	/**
	 * The due in requested quantity, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/dueInRequestedQuantity
	 */
	dueInRequestedQuantity?: IQuantityType[];

	/**
	 * An estimated delivery event for this trade delivery header.
	 * @see https://vocabulary.uncefact.org/estimatedDeliveryEvent
	 */
	estimatedDeliveryEvent?: ISupplyChainEvent[];

	/**
	 * The indication, at header level, of whether or not this trade delivery is the final delivery.
	 * @see https://vocabulary.uncefact.org/finalDeliveryIndicator
	 */
	finalDeliveryIndicator?: boolean;

	/**
	 * The country of final destination, at header level, for this header trade delivery.
	 * @see https://vocabulary.uncefact.org/finalDestinationCountry
	 */
	finalDestinationCountry?: ICountry;

	/**
	 * A freight forwarder party, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/freightForwarderParty
	 */
	freightForwarderParty?: ITradeParty[];

	/**
	 * The indication, at header level, of whether or not this trade delivery is fully delivered.
	 * @see https://vocabulary.uncefact.org/fullyDeliveredIndicator
	 */
	fullyDeliveredIndicator?: boolean;

	/**
	 * A global identifier, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/globalId
	 */
	globalId?: string;

	/**
	 * The date, time, date time, or other date time value, at header level, when the goods ownership of this trade delivery
	 * changed.
	 * @see https://vocabulary.uncefact.org/goodsOwnershipChangeDateTime
	 */
	goodsOwnershipChangeDateTime?: string;

	/**
	 * A goods receipt note document, at header level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/goodsReceiptNoteDocument
	 */
	goodsReceiptNoteDocument?: IDocument[];

	/**
	 * A textual description for the physical state of the goods, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/headerTradeDeliveryGoodsPhysicalStateDescription
	 */
	headerTradeDeliveryGoodsPhysicalStateDescription?: string;

	/**
	 * The code specifying a description for the physical state of the goods, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/headerTradeDeliveryGoodsPhysicalStateDescriptionCode
	 */
	headerTradeDeliveryGoodsPhysicalStateDescriptionCode?: string;

	/**
	 * A type, expressed as text, for the physical state of the goods, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/headerTradeDeliveryGoodsPhysicalStateType
	 */
	headerTradeDeliveryGoodsPhysicalStateType?: string;

	/**
	 * The code specifying the type of physical state of the goods, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/headerTradeDeliveryGoodsPhysicalStateTypeCode
	 */
	headerTradeDeliveryGoodsPhysicalStateTypeCode?: string;

	/**
	 * The identifier, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * Packaging, at header level, included in this trade delivery.
	 * @see https://vocabulary.uncefact.org/includedPackaging
	 */
	includedPackaging?: ISupplyChainPackaging[];

	/**
	 * A note with information, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/informationNote
	 */
	informationNote?: INote[];

	/**
	 * An inventory manager party, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/inventoryManagerParty
	 */
	inventoryManagerParty?: ITradeParty[];

	/**
	 * The modification of a previously forecasted quantity, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/modificationForecastedQuantity
	 */
	modificationForecastedQuantity?: IQuantityType[];

	/**
	 * The indication, at header level, of whether or not over delivery is allowed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/overDeliveryAllowedIndicator
	 */
	overDeliveryAllowedIndicator?: boolean;

	/**
	 * The packing list document, at header level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/packingListDocument
	 */
	packingListDocument?: IDocument[];

	/**
	 * The indication, at header level, of whether or not this trade delivery can be partially delivered.
	 * @see https://vocabulary.uncefact.org/partialDeliveryAllowedIndicator
	 */
	partialDeliveryAllowedIndicator?: boolean;

	/**
	 * The formatted date, time, date time, or other date time value, at header level, when this trade delivery is available
	 * for pick-up.
	 * @see https://vocabulary.uncefact.org/pickUpAvailabilityDateTime
	 */
	pickUpAvailabilityDateTime?: string;

	/**
	 * A consignment, at header level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedConsignment
	 */
	plannedConsignment?: IConsignment[];

	/**
	 * A delivery event, at header level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedDeliveryEvent
	 */
	plannedDeliveryEvent?: ISupplyChainEvent[];

	/**
	 * A despatch event, at header level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedDespatchEvent
	 */
	plannedDespatchEvent?: ISupplyChainEvent[];

	/**
	 * The pick-up event, at header level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedPickUpEvent
	 */
	plannedPickUpEvent?: ISupplyChainEvent[];

	/**
	 * The release event, at header level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedReleaseEvent
	 */
	plannedReleaseEvent?: ISupplyChainEvent[];

	/**
	 * The event of the planned ship from delivery, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedShipFromDeliveryEvent
	 */
	plannedShipFromDeliveryEvent?: ISupplyChainEvent[];

	/**
	 * The planned ship to delivery event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedShipToDeliveryEvent
	 */
	plannedShipToDeliveryEvent?: ISupplyChainEvent[];

	/**
	 * A previous delivery event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/previousDeliverySupplyChainEvent
	 */
	previousDeliverySupplyChainEvent?: ISupplyChainEvent[];

	/**
	 * The code specifying the quantity calculation method of this header trade delivery.
	 * @see https://vocabulary.uncefact.org/quantityCalculationMethodCode
	 */
	quantityCalculationMethodCode?: string;

	/**
	 * A receiving advice document, at header level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/receivingAdviceDocument
	 */
	receivingAdviceDocument?: IDocument[];

	/**
	 * A consignment, at header level, related to this trade delivery.
	 * @see https://vocabulary.uncefact.org/relatedConsignment
	 */
	relatedConsignment?: IConsignment[];

	/**
	 * A trade party, at header level, related to this trade delivery.
	 * @see https://vocabulary.uncefact.org/relatedParty
	 */
	relatedParty?: ITradeParty[];

	/**
	 * The remaining quantity, at header level, requested for this trade delivery.
	 * @see https://vocabulary.uncefact.org/remainingRequestedQuantity
	 */
	remainingRequestedQuantity?: IQuantityType[];

	/**
	 * A delivery event, at header level, requested for this trade delivery.
	 * @see https://vocabulary.uncefact.org/requestedDeliveryEvent
	 */
	requestedDeliveryEvent?: ISupplyChainEvent[];

	/**
	 * A despatch event, at header level, requested for this trade delivery.
	 * @see https://vocabulary.uncefact.org/requestedDespatchEvent
	 */
	requestedDespatchEvent?: ISupplyChainEvent[];

	/**
	 * The quantity, at header level, requested for this trade delivery.
	 * @see https://vocabulary.uncefact.org/requestedQuantity
	 */
	requestedQuantity?: IQuantityType[];

	/**
	 * The ship from party, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/shipFromParty
	 */
	shipFromParty?: ITradeParty[];

	/**
	 * The ship to party, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/shipToParty
	 */
	shipToParty?: ITradeParty[];

	/**
	 * The shipment schedule document, referenced at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/shipmentScheduleDocument
	 */
	shipmentScheduleDocument?: IDocument[];

	/**
	 * Delivery instructions, at header level, specified for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedDeliveryInstructions
	 */
	specifiedDeliveryInstructions?: IDeliveryInstructions[];

	/**
	 * Handling instructions, at header level, specified for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedHandlingInstructions
	 */
	specifiedHandlingInstructions?: IHandlingInstructions[];

	/**
	 * A supply chain schedule, at header level, specified for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedSchedule
	 */
	specifiedSchedule?: ISchedule[];

	/**
	 * A supply chain event, at header level, specified for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainEvent
	 */
	specifiedSupplyChainEvent?: ISupplyChainEvent[];

	/**
	 * The code specifying the status, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * A subordinate identifier, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/subordinateId
	 */
	subordinateId?: string;

	/**
	 * The date, time, date time, or other date time value, at header level, when this trade delivery is delivered to the
	 * ultimate ship to party.
	 * @see https://vocabulary.uncefact.org/ultimateShipToDeliveryDateTime
	 */
	ultimateShipToDeliveryDateTime?: string;

	/**
	 * The ultimate ship to delivery event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/ultimateShipToDeliveryEvent
	 */
	ultimateShipToDeliveryEvent?: ISupplyChainEvent[];

	/**
	 * The ultimate ship to party, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/ultimateShipToParty
	 */
	ultimateShipToParty?: ITradeParty[];

	/**
	 * Logistics transport equipment utilized for this header trade delivery.
	 * @see https://vocabulary.uncefact.org/utilizedTransportEquipment
	 */
	utilizedTransportEquipment?: ILogisticsTransportEquipment[];

	/**
	 * The measure of the tare weight for this header trade delivery.
	 * @see https://vocabulary.uncefact.org/weightUnitTareWeightMeasure
	 */
	weightUnitTareWeightMeasure?: IWeightUnitMeasureType[];
}
