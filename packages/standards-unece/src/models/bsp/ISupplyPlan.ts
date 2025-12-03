// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IDocument } from "./IDocument.js";
import type { ILogisticsLocation } from "./ILogisticsLocation.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { ISupplyChainEvent } from "./ISupplyChainEvent.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { CommitmentLevelCodeList } from "../lists/commitmentLevelCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Specification of the delivery quantities and date/time values in a supply schedule.
 * @see https://vocabulary.uncefact.org/SupplyPlan
 */
export interface ISupplyPlan extends IJsonLdNodeObject {
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
	actualQuantity?: IQuantityType;

	/**
	 * The period applicable for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/applicablePeriod
	 */
	applicablePeriod?: ISpecifiedPeriod[];

	/**
	 * A quantity available for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/availableQuantity
	 */
	availableQuantity?: IQuantityType[];

	/**
	 * A confirmed delivery event in this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/confirmedDeliveryEvent
	 */
	confirmedDeliveryEvent?: ISupplyChainEvent[];

	/**
	 * A referenced contract document for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/contractDocument
	 */
	contractDocument?: IDocument[];

	/**
	 * A delivery note document referenced by this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/deliveryNoteDocument
	 */
	deliveryNoteDocument?: IDocument[];

	/**
	 * A delivery event for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/deliverySupplyChainEvent
	 */
	deliverySupplyChainEvent?: ISupplyChainEvent[];

	/**
	 * A date, time, date time, or other date time value of the latest synchronization of the supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/latestSynchronizationDateTime
	 */
	latestSynchronizationDateTime?: string;

	/**
	 * The minus tolerance quantity from the planned or requested quantity in this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/minusToleranceQuantity
	 */
	minusToleranceQuantity?: IQuantityType[];

	/**
	 * The planned quantity in this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/plannedQuantity
	 */
	plannedQuantity?: IQuantityType[];

	/**
	 * The plus tolerance quantity from the planned or requested quantity in this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/plusToleranceQuantity
	 */
	plusToleranceQuantity?: IQuantityType[];

	/**
	 * A specified period projected for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/projectedSpecifiedPeriod
	 */
	projectedSpecifiedPeriod?: ISpecifiedPeriod[];

	/**
	 * A quantity required for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/requiredQuantity
	 */
	requiredQuantity?: IQuantityType[];

	/**
	 * A scheduled delivery event in this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/scheduledDeliveryEvent
	 */
	scheduledDeliveryEvent?: ISupplyChainEvent[];

	/**
	 * The ship to trade party for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/shipToParty
	 */
	shipToParty?: ITradeParty[];

	/**
	 * A location specified for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/specifiedLogisticsLocation
	 */
	specifiedLogisticsLocation?: ILogisticsLocation[];

	/**
	 * The period specified for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/specifiedSpecifiedPeriod
	 */
	specifiedSpecifiedPeriod?: ISpecifiedPeriod[];

	/**
	 * An event specified for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainEvent
	 */
	specifiedSupplyChainEvent?: ISupplyChainEvent[];

	/**
	 * The code specifying the commitment level for this supply chain supply plan, such as fabrication or raw material.
	 * @see https://vocabulary.uncefact.org/supplyChainSupplyPlanCommitmentLevelCode
	 */
	supplyChainSupplyPlanCommitmentLevelCode?: CommitmentLevelCodeList[];

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
	synchronizationQuantity?: IQuantityType[];

	/**
	 * The quantity of tolerance from the planned quantity in this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/toleranceQuantity
	 */
	toleranceQuantity?: IQuantityType[];

	/**
	 * A code specifying a type for this supply chain supply plan.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
