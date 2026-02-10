// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceLocationFunctionCodeList } from "../lists/uneceLocationFunctionCodeList.js";
import type { UneceCountrySubDivisionTypeCodeList } from "../typeCodes/uneceCountrySubDivisionTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A political or physical area or region within the political boundaries of a country used or referenced for trade
 * purposes.
 * @see https://vocabulary.uncefact.org/CountrySubDivision
 */
export interface IUneceCountrySubDivision extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CountrySubDivision;

	/**
	 * A party that is authorized to perform an activity in this trade country sub-division.
	 * @see https://vocabulary.uncefact.org/activityAuthorizedParty
	 */
	activityAuthorizedParty?: IUneceTradeParty[];

	/**
	 * The code specifying the hierarchical level of this trade country sub-division.
	 * @see https://vocabulary.uncefact.org/hierarchicalLevelCode
	 */
	hierarchicalLevelCode?: string;

	/**
	 * The unique identifier for this trade country sub-division.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The code specifying the function type of this trade country sub-division.
	 * @see https://vocabulary.uncefact.org/locationFunctionTypeCode
	 */
	locationFunctionTypeCode?: UneceLocationFunctionCodeList;

	/**
	 * A name, expressed as text, of this trade country sub-division.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A subordinate country sub-division within this trade country sub-division.
	 * @see https://vocabulary.uncefact.org/subordinateCountrySubDivision
	 */
	subordinateCountrySubDivision?: IUneceCountrySubDivision[];

	/**
	 * A superordinate country sub-division for this trade country sub-division.
	 * @see https://vocabulary.uncefact.org/superordinateCountrySubDivision
	 */
	superordinateCountrySubDivision?: IUneceCountrySubDivision[];

	/**
	 * A code specifying a type of country sub-division for trade purposes.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceCountrySubDivisionTypeCodeList | string;
}
