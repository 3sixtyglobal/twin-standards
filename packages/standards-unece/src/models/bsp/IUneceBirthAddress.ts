// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { UneceCountryId } from "../lists/uneceCountryId.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The place of birth.
 * @see https://vocabulary.uncefact.org/BirthAddress
 */
export interface IUneceBirthAddress {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.BirthAddress;

	/**
	 * The identifier of a country for this birth address.
	 * @see https://vocabulary.uncefact.org/birthAddressCountryId
	 */
	birthAddressCountryId?: string | IJsonLdValueObject;

	/**
	 * The name, expressed as text, of the city, town or village of this birth address.
	 * @see https://vocabulary.uncefact.org/cityName
	 */
	cityName?: string;

	/**
	 * The name, expressed as text, of the sub-division of a country for this birth address.
	 * @see https://vocabulary.uncefact.org/countrySubDivisionName
	 */
	countrySubDivisionName?: string;
}
