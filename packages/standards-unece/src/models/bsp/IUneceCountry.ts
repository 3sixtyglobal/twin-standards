// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceCountrySubDivision } from "./IUneceCountrySubDivision.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { UneceCountryId } from "../lists/uneceCountryId.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The area of land that belongs to a nation together with its properties, such as population, political organization,
 * etc., used or referenced for trade purposes.
 * @see https://vocabulary.uncefact.org/Country
 */
export interface IUneceCountry {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Country;

	/**
	 * A unique identifier for this trade country.
	 * @see https://vocabulary.uncefact.org/countryId
	 */
	countryId?: string | IJsonLdValueObject;

	/**
	 * A name, expressed as text, of this trade country.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A quantity specified for this trade country.
	 * @see https://vocabulary.uncefact.org/specifiedQuantity
	 */
	specifiedQuantity?: IUneceQuantityType[];

	/**
	 * A trade country sub-division that is subordinate to this trade country, such as a state, a county, a canton, a province.
	 * @see https://vocabulary.uncefact.org/subordinateCountrySubDivision
	 */
	subordinateCountrySubDivision?: IUneceCountrySubDivision[];
}
