// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ISupplyChainTradeLineItem } from "./ISupplyChainTradeLineItem.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Specification of the forecasted delivery quantities and date/time values for a delivery schedule.
 * @see https://vocabulary.uncefact.org/DeliverySchedule
 */
export interface IDeliverySchedule extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.DeliverySchedule;

	/**
	 * The code indicating the scope of a forecast delivery schedule.
	 * @see https://vocabulary.uncefact.org/scopeCode
	 */
	scopeCode?: string;

	/**
	 * A ship to party for this forecast delivery schedule.
	 * @see https://vocabulary.uncefact.org/shipToParty
	 */
	shipToParty?: ITradeParty[];

	/**
	 * A trade line item specified for this forecast delivery schedule.
	 * @see https://vocabulary.uncefact.org/specifiedTradeLineItem
	 */
	specifiedTradeLineItem?: ISupplyChainTradeLineItem[];
}
