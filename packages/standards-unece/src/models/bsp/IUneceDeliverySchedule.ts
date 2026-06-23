// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceSupplyChainTradeLineItem } from "./IUneceSupplyChainTradeLineItem.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Specification of the forecasted delivery quantities and date/time values for a delivery schedule.
 * @see https://vocabulary.uncefact.org/DeliverySchedule
 */
export interface IUneceDeliverySchedule {
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
	shipToParty?: IUneceTradeParty[];

	/**
	 * A trade line item specified for this forecast delivery schedule.
	 * @see https://vocabulary.uncefact.org/specifiedTradeLineItem
	 */
	specifiedTradeLineItem?: IUneceSupplyChainTradeLineItem[];
}
