// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceConsignment } from "./IUneceConsignment.js";
import type { IUneceCountry } from "./IUneceCountry.js";
import type { IUneceDeliveryInstructions } from "./IUneceDeliveryInstructions.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceHandlingInstructions } from "./IUneceHandlingInstructions.js";
import type { IUneceLogisticsTransportEquipment } from "./IUneceLogisticsTransportEquipment.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSchedule } from "./IUneceSchedule.js";
import type { IUneceSupplyChainEvent } from "./IUneceSupplyChainEvent.js";
import type { IUneceSupplyChainPackaging } from "./IUneceSupplyChainPackaging.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceWeightUnitMeasureType } from "./IUneceWeightUnitMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Shipping arrangements and movement of products and or services including despatch and delivery at a header level.
 * @see https://vocabulary.uncefact.org/HeaderTradeDelivery
 */
export interface IUneceHeaderTradeDelivery extends IJsonLdNodeObject {
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
	acceptanceEvent?: IUneceSupplyChainEvent[];

	/**
	 * An actual delivery event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualDeliveryEvent
	 */
	actualDeliveryEvent?: IUneceSupplyChainEvent[];

	/**
	 * An actual despatch event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualDespatchEvent
	 */
	actualDespatchEvent?: IUneceSupplyChainEvent[];

	/**
	 * The actual loading event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualLoadingEvent
	 */
	actualLoadingEvent?: IUneceSupplyChainEvent[];

	/**
	 * The actual pick-up event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualPickUpEvent
	 */
	actualPickUpEvent?: IUneceSupplyChainEvent[];

	/**
	 * The actual receipt event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualReceiptEvent
	 */
	actualReceiptEvent?: IUneceSupplyChainEvent[];

	/**
	 * The actual unloading event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/actualUnloadingEvent
	 */
	actualUnloadingEvent?: IUneceSupplyChainEvent[];

	/**
	 * An additional document, at header level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/additionalDocument
	 */
	additionalDocument?: IUneceDocument[];

	/**
	 * The quantity, at header level, agreed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/agreedQuantity
	 */
	agreedQuantity?: IUneceQuantityType[];

	/**
	 * The date, time, date time, or other date time value, at header level, for the buyer order for this trade delivery.
	 * @see https://vocabulary.uncefact.org/buyerOrderDateTime
	 */
	buyerOrderDateTime?: string;

	/**
	 * The referenced classification document, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/classificationDocument
	 */
	classificationDocument?: IUneceDocument[];

	/**
	 * The despatch event, at header level, confirmed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/confirmedDespatchEvent
	 */
	confirmedDespatchEvent?: IUneceSupplyChainEvent[];

	/**
	 * The pick-up event, at header level, confirmed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/confirmedPickUpEvent
	 */
	confirmedPickUpEvent?: IUneceSupplyChainEvent[];

	/**
	 * The confirmed release event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/confirmedReleaseEvent
	 */
	confirmedReleaseEvent?: IUneceSupplyChainEvent[];

	/**
	 * The consumption report document, at header level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/consumptionReportDocument
	 */
	consumptionReportDocument?: IUneceDocument[];

	/**
	 * The delivery note document, at header level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/deliveryNoteDocument
	 */
	deliveryNoteDocument?: IUneceDocument[];

	/**
	 * The despatch advice document, at header level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/despatchAdviceDocument
	 */
	despatchAdviceDocument?: IUneceDocument[];

	/**
	 * The quantity, at header level, despatched in this trade delivery.
	 * @see https://vocabulary.uncefact.org/despatchedQuantity
	 */
	despatchedQuantity?: IUneceQuantityType[];

	/**
	 * A disposal party, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/disposalParty
	 */
	disposalParty?: IUneceTradeParty[];

	/**
	 * The due in available quantity, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/dueInAvailableQuantity
	 */
	dueInAvailableQuantity?: IUneceQuantityType[];

	/**
	 * The due in forecasted quantity, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/dueInForecastedQuantity
	 */
	dueInForecastedQuantity?: IUneceQuantityType[];

	/**
	 * The due in requested quantity, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/dueInRequestedQuantity
	 */
	dueInRequestedQuantity?: IUneceQuantityType[];

	/**
	 * An estimated delivery event for this trade delivery header.
	 * @see https://vocabulary.uncefact.org/estimatedDeliveryEvent
	 */
	estimatedDeliveryEvent?: IUneceSupplyChainEvent[];

	/**
	 * The indication, at header level, of whether or not this trade delivery is the final delivery.
	 * @see https://vocabulary.uncefact.org/finalDeliveryIndicator
	 */
	finalDeliveryIndicator?: boolean;

	/**
	 * The country of final destination, at header level, for this header trade delivery.
	 * @see https://vocabulary.uncefact.org/finalDestinationCountry
	 */
	finalDestinationCountry?: IUneceCountry;

	/**
	 * A freight forwarder party, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/freightForwarderParty
	 */
	freightForwarderParty?: IUneceTradeParty[];

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
	goodsReceiptNoteDocument?: IUneceDocument[];

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
	includedPackaging?: IUneceSupplyChainPackaging[];

	/**
	 * A note with information, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/informationNote
	 */
	informationNote?: IUneceNote[];

	/**
	 * An inventory manager party, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/inventoryManagerParty
	 */
	inventoryManagerParty?: IUneceTradeParty[];

	/**
	 * The modification of a previously forecasted quantity, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/modificationForecastedQuantity
	 */
	modificationForecastedQuantity?: IUneceQuantityType[];

	/**
	 * The indication, at header level, of whether or not over delivery is allowed for this trade delivery.
	 * @see https://vocabulary.uncefact.org/overDeliveryAllowedIndicator
	 */
	overDeliveryAllowedIndicator?: boolean;

	/**
	 * The packing list document, at header level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/packingListDocument
	 */
	packingListDocument?: IUneceDocument[];

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
	plannedConsignment?: IUneceConsignment[];

	/**
	 * A delivery event, at header level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedDeliveryEvent
	 */
	plannedDeliveryEvent?: IUneceSupplyChainEvent[];

	/**
	 * A despatch event, at header level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedDespatchEvent
	 */
	plannedDespatchEvent?: IUneceSupplyChainEvent[];

	/**
	 * The pick-up event, at header level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedPickUpEvent
	 */
	plannedPickUpEvent?: IUneceSupplyChainEvent[];

	/**
	 * The release event, at header level, planned for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedReleaseEvent
	 */
	plannedReleaseEvent?: IUneceSupplyChainEvent[];

	/**
	 * The event of the planned ship from delivery, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedShipFromDeliveryEvent
	 */
	plannedShipFromDeliveryEvent?: IUneceSupplyChainEvent[];

	/**
	 * The planned ship to delivery event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/plannedShipToDeliveryEvent
	 */
	plannedShipToDeliveryEvent?: IUneceSupplyChainEvent[];

	/**
	 * A previous delivery event, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/previousDeliverySupplyChainEvent
	 */
	previousDeliverySupplyChainEvent?: IUneceSupplyChainEvent[];

	/**
	 * The code specifying the quantity calculation method of this header trade delivery.
	 * @see https://vocabulary.uncefact.org/quantityCalculationMethodCode
	 */
	quantityCalculationMethodCode?: string;

	/**
	 * A receiving advice document, at header level, referenced for this trade delivery.
	 * @see https://vocabulary.uncefact.org/receivingAdviceDocument
	 */
	receivingAdviceDocument?: IUneceDocument[];

	/**
	 * A consignment, at header level, related to this trade delivery.
	 * @see https://vocabulary.uncefact.org/relatedConsignment
	 */
	relatedConsignment?: IUneceConsignment[];

	/**
	 * A trade party, at header level, related to this trade delivery.
	 * @see https://vocabulary.uncefact.org/relatedParty
	 */
	relatedParty?: IUneceTradeParty[];

	/**
	 * The remaining quantity, at header level, requested for this trade delivery.
	 * @see https://vocabulary.uncefact.org/remainingRequestedQuantity
	 */
	remainingRequestedQuantity?: IUneceQuantityType[];

	/**
	 * A delivery event, at header level, requested for this trade delivery.
	 * @see https://vocabulary.uncefact.org/requestedDeliveryEvent
	 */
	requestedDeliveryEvent?: IUneceSupplyChainEvent[];

	/**
	 * A despatch event, at header level, requested for this trade delivery.
	 * @see https://vocabulary.uncefact.org/requestedDespatchEvent
	 */
	requestedDespatchEvent?: IUneceSupplyChainEvent[];

	/**
	 * The quantity, at header level, requested for this trade delivery.
	 * @see https://vocabulary.uncefact.org/requestedQuantity
	 */
	requestedQuantity?: IUneceQuantityType[];

	/**
	 * The ship from party, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/shipFromParty
	 */
	shipFromParty?: IUneceTradeParty[];

	/**
	 * The ship to party, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/shipToParty
	 */
	shipToParty?: IUneceTradeParty[];

	/**
	 * The shipment schedule document, referenced at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/shipmentScheduleDocument
	 */
	shipmentScheduleDocument?: IUneceDocument[];

	/**
	 * Delivery instructions, at header level, specified for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedDeliveryInstructions
	 */
	specifiedDeliveryInstructions?: IUneceDeliveryInstructions[];

	/**
	 * Handling instructions, at header level, specified for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedHandlingInstructions
	 */
	specifiedHandlingInstructions?: IUneceHandlingInstructions[];

	/**
	 * A supply chain schedule, at header level, specified for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedSchedule
	 */
	specifiedSchedule?: IUneceSchedule[];

	/**
	 * A supply chain event, at header level, specified for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainEvent
	 */
	specifiedSupplyChainEvent?: IUneceSupplyChainEvent[];

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
	ultimateShipToDeliveryEvent?: IUneceSupplyChainEvent[];

	/**
	 * The ultimate ship to party, at header level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/ultimateShipToParty
	 */
	ultimateShipToParty?: IUneceTradeParty[];

	/**
	 * Logistics transport equipment utilized for this header trade delivery.
	 * @see https://vocabulary.uncefact.org/utilizedTransportEquipment
	 */
	utilizedTransportEquipment?: IUneceLogisticsTransportEquipment[];

	/**
	 * The measure of the tare weight for this header trade delivery.
	 * @see https://vocabulary.uncefact.org/weightUnitTareWeightMeasure
	 */
	weightUnitTareWeightMeasure?: IUneceWeightUnitMeasureType[];
}
