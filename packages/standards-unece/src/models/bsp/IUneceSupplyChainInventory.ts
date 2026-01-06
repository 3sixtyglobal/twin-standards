// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUneceProductBatch } from "./IUneceProductBatch.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSpecifiedMaterial } from "./IUneceSpecifiedMaterial.js";
import type { IUneceSupplyChainEvent } from "./IUneceSupplyChainEvent.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTradeProduct } from "./IUneceTradeProduct.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Supply chain goods and materials held in stock.
 * @see https://vocabulary.uncefact.org/SupplyChainInventory
 */
export interface IUneceSupplyChainInventory extends IJsonLdNodeObject {
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
	averageDemandQuantity?: IUneceQuantityType[];

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
	dispositionDocument?: IUneceDocument[];

	/**
	 * A product batch included in this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/includedBatch
	 */
	includedBatch?: IUneceProductBatch[];

	/**
	 * Material included in this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/includedMaterial
	 */
	includedMaterial?: IUneceSpecifiedMaterial[];

	/**
	 * A product included in this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/includedTradeProduct
	 */
	includedTradeProduct?: IUneceTradeProduct[];

	/**
	 * The measure of the maximum stock level for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/maximumStockLevelMeasure
	 */
	maximumStockLevelMeasure?: IUneceMeasureType[];

	/**
	 * The maximum stock quantity in this CI supply chain inventory.
	 * @see https://vocabulary.uncefact.org/maximumStockQuantity
	 */
	maximumStockQuantity?: IUneceQuantityType[];

	/**
	 * The measure of the minimum stock level for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/minimumStockLevelMeasure
	 */
	minimumStockLevelMeasure?: IUneceMeasureType[];

	/**
	 * The minimum stock quantity in this CI supply chain inventory.
	 * @see https://vocabulary.uncefact.org/minimumStockQuantity
	 */
	minimumStockQuantity?: IUneceQuantityType[];

	/**
	 * The date, time, date time, or other date time value of the planned stock calculation of this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/plannedStockCalculationDateTime
	 */
	plannedStockCalculationDateTime?: string;

	/**
	 * The planned stock quantity for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/plannedStockQuantity
	 */
	plannedStockQuantity?: IUneceQuantityType[];

	/**
	 * A note containing a remark for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/remarkNote
	 */
	remarkNote?: IUneceNote[];

	/**
	 * The location specified for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/specifiedLogisticsLocation
	 */
	specifiedLogisticsLocation?: IUneceLogisticsLocation[];

	/**
	 * A supply chain event specified for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainEvent
	 */
	specifiedSupplyChainEvent?: IUneceSupplyChainEvent[];

	/**
	 * A trade party specified for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/specifiedTradeParty
	 */
	specifiedTradeParty?: IUneceTradeParty[];

	/**
	 * The code specifying a status for this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * The quantity of stock in this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/stockQuantity
	 */
	stockQuantity?: IUneceQuantityType[];
}
