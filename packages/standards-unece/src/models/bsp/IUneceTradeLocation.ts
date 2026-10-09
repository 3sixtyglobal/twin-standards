// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { UneceCountryId } from "../lists/uneceCountryId.js";
import type { UneceLocationFunctionCodeList } from "../lists/uneceLocationFunctionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A physical location or place used or referenced for trade purposes.
 * @see https://vocabulary.uncefact.org/TradeLocation
 */
export interface IUneceTradeLocation {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TradeLocation;

	/**
	 * The name, expressed as text, of a country location used or referenced in trade.
	 * @see https://vocabulary.uncefact.org/countryName
	 */
	countryName?: string;

	/**
	 * The unique identifier of the country sub-division for this trade location.
	 * @see https://vocabulary.uncefact.org/countrySubDivisionId
	 */
	countrySubDivisionId?: string | IJsonLdValueObject;

	/**
	 * The name, expressed as text, of a sub-division of a country location used or referenced in trade.
	 * @see https://vocabulary.uncefact.org/countrySubDivisionName
	 */
	countrySubDivisionName?: string;

	/**
	 * The unique identifier for this location used or referenced in trade.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * A code specifying the type of trade location.
	 * @see https://vocabulary.uncefact.org/locationFunctionTypeCode
	 */
	locationFunctionTypeCode?: (UneceLocationFunctionCodeList | string)[];

	/**
	 * The name, expressed as text, of this location used or referenced in trade.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The unique identifier of a country location used or referenced in trade.
	 * @see https://vocabulary.uncefact.org/tradeLocationCountryId
	 */
	tradeLocationCountryId?: UneceCountryId | string | IJsonLdValueObject;
}
