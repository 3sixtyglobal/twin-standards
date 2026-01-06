// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceSupplyChainEvent } from "./IUneceSupplyChainEvent.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceCommitmentLevelCodeList } from "../lists/uneceCommitmentLevelCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Specification of the delivery quantities and date/time values in a supply schedule.
 * @see https://vocabulary.uncefact.org/SupplyPlan
 */
export interface IUneceSupplyPlan extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SupplyPlan;

	/**
	 * The actual quantity in this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/actualQuantity
	 */
	actualQuantity?: IUneceQuantityType;

	/**
	 * The period applicable for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/applicablePeriod
	 */
	applicablePeriod?: IUneceSpecifiedPeriod[];

	/**
	 * A quantity available for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/availableQuantity
	 */
	availableQuantity?: IUneceQuantityType[];

	/**
	 * A confirmed delivery event in this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/confirmedDeliveryEvent
	 */
	confirmedDeliveryEvent?: IUneceSupplyChainEvent[];

	/**
	 * A referenced contract document for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/contractDocument
	 */
	contractDocument?: IUneceDocument[];

	/**
	 * A delivery note document referenced by this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/deliveryNoteDocument
	 */
	deliveryNoteDocument?: IUneceDocument[];

	/**
	 * A delivery event for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/deliverySupplyChainEvent
	 */
	deliverySupplyChainEvent?: IUneceSupplyChainEvent[];

	/**
	 * A date, time, date time, or other date time value of the latest synchronization of the supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/latestSynchronizationDateTime
	 */
	latestSynchronizationDateTime?: string;

	/**
	 * The minus tolerance quantity from the planned or requested quantity in this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/minusToleranceQuantity
	 */
	minusToleranceQuantity?: IUneceQuantityType[];

	/**
	 * The planned quantity in this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/plannedQuantity
	 */
	plannedQuantity?: IUneceQuantityType[];

	/**
	 * The plus tolerance quantity from the planned or requested quantity in this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/plusToleranceQuantity
	 */
	plusToleranceQuantity?: IUneceQuantityType[];

	/**
	 * A specified period projected for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/projectedSpecifiedPeriod
	 */
	projectedSpecifiedPeriod?: IUneceSpecifiedPeriod[];

	/**
	 * A quantity required for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/requiredQuantity
	 */
	requiredQuantity?: IUneceQuantityType[];

	/**
	 * A scheduled delivery event in this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/scheduledDeliveryEvent
	 */
	scheduledDeliveryEvent?: IUneceSupplyChainEvent[];

	/**
	 * The ship to trade party for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/shipToParty
	 */
	shipToParty?: IUneceTradeParty[];

	/**
	 * A location specified for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/specifiedLogisticsLocation
	 */
	specifiedLogisticsLocation?: IUneceLogisticsLocation[];

	/**
	 * The period specified for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/specifiedSpecifiedPeriod
	 */
	specifiedSpecifiedPeriod?: IUneceSpecifiedPeriod[];

	/**
	 * An event specified for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainEvent
	 */
	specifiedSupplyChainEvent?: IUneceSupplyChainEvent[];

	/**
	 * The code specifying the commitment level for this supply chain supply plan, such as fabrication or raw material.
	 * @see https://vocabulary.uncefact.org/supplyChainSupplyPlanCommitmentLevelCode
	 */
	supplyChainSupplyPlanCommitmentLevelCode?: UneceCommitmentLevelCodeList[];

	/**
	 * A code specifying the release frequency of this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/supplyChainSupplyPlanReleaseFrequencyCode
	 */
	supplyChainSupplyPlanReleaseFrequencyCode?: string;

	/**
	 * A code specifying the review frequency of this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/supplyChainSupplyPlanReviewFrequencyCode
	 */
	supplyChainSupplyPlanReviewFrequencyCode?: string;

	/**
	 * A date, time, date time, or other date time value of a synchronization of the supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/synchronizationDateTime
	 */
	synchronizationDateTime?: string;

	/**
	 * The value specifying the quantity for a synchronization of this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/synchronizationQuantity
	 */
	synchronizationQuantity?: IUneceQuantityType[];

	/**
	 * The quantity of tolerance from the planned quantity in this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/toleranceQuantity
	 */
	toleranceQuantity?: IUneceQuantityType[];

	/**
	 * A code specifying a type for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
