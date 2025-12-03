// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IDocument } from "./IDocument.js";
import type { ILogisticsLocation } from "./ILogisticsLocation.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { INote } from "./INote.js";
import type { IProductBatch } from "./IProductBatch.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ISpecifiedMaterial } from "./ISpecifiedMaterial.js";
import type { ISupplyChainEvent } from "./ISupplyChainEvent.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITradeProduct } from "./ITradeProduct.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Supply chain goods and materials held in stock.
 * @see https://vocabulary.uncefact.org/SupplyChainInventory
 */
export interface ISupplyChainInventory extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SupplyChainInventory;

	/**
	 * The code specifying an asset transfer status for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/assetTransferStatusCode
	 */
	assetTransferStatusCode?: string;

	/**
	 * The indication of whether or not this supply chain inventory is available.
	 * @see https://vocabulary.uncefact.org/availabilityIndicator
	 */
	availabilityIndicator?: boolean;

	/**
	 * The average demand quantity for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/averageDemandQuantity
	 */
	averageDemandQuantity?: IQuantityType[];

	/**
	 * The date, time, date time, or other date time of the average duration for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/averageDurationDateTime
	 */
	averageDurationDateTime?: string;

	/**
	 * The date, time, date time, or other date time value of the calculation of this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/calculationDateTime
	 */
	calculationDateTime?: string;

	/**
	 * A disposition document referenced in this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/dispositionDocument
	 */
	dispositionDocument?: IDocument[];

	/**
	 * A product batch included in this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/includedBatch
	 */
	includedBatch?: IProductBatch[];

	/**
	 * Material included in this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/includedMaterial
	 */
	includedMaterial?: ISpecifiedMaterial[];

	/**
	 * A product included in this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/includedTradeProduct
	 */
	includedTradeProduct?: ITradeProduct[];

	/**
	 * The measure of the maximum stock level for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/maximumStockLevelMeasure
	 */
	maximumStockLevelMeasure?: IMeasureType[];

	/**
	 * The maximum stock quantity in this CI supply chain inventory.
	 * @see https://vocabulary.uncefact.org/maximumStockQuantity
	 */
	maximumStockQuantity?: IQuantityType[];

	/**
	 * The measure of the minimum stock level for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/minimumStockLevelMeasure
	 */
	minimumStockLevelMeasure?: IMeasureType[];

	/**
	 * The minimum stock quantity in this CI supply chain inventory.
	 * @see https://vocabulary.uncefact.org/minimumStockQuantity
	 */
	minimumStockQuantity?: IQuantityType[];

	/**
	 * The date, time, date time, or other date time value of the planned stock calculation of this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/plannedStockCalculationDateTime
	 */
	plannedStockCalculationDateTime?: string;

	/**
	 * The planned stock quantity for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/plannedStockQuantity
	 */
	plannedStockQuantity?: IQuantityType[];

	/**
	 * A note containing a remark for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/remarkNote
	 */
	remarkNote?: INote[];

	/**
	 * The location specified for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/specifiedLogisticsLocation
	 */
	specifiedLogisticsLocation?: ILogisticsLocation[];

	/**
	 * A supply chain event specified for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainEvent
	 */
	specifiedSupplyChainEvent?: ISupplyChainEvent[];

	/**
	 * A trade party specified for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/specifiedTradeParty
	 */
	specifiedTradeParty?: ITradeParty[];

	/**
	 * The code specifying a status for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * The quantity of stock in this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/stockQuantity
	 */
	stockQuantity?: IQuantityType[];
}
