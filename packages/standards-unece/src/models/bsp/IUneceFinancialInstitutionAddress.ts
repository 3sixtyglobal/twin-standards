// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceCountryId } from "../lists/uneceCountryId.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The location at which a financial institution may be found or reached.
 * @see https://vocabulary.uncefact.org/FinancialInstitutionAddress
 */
export interface IUneceFinancialInstitutionAddress extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.FinancialInstitutionAddress;

	/**
	 * The number, expressed as text, of the building on a street for this financial institution address.
	 * @see https://vocabulary.uncefact.org/buildingNumber
	 */
	buildingNumber?: string;

	/**
	 * The unique identifier of the city for this financial institution address, such as United Nations Location Code
	 * (UNLOCODE).
	 * @see https://vocabulary.uncefact.org/cityId
	 */
	cityId?: string;

	/**
	 * The name, expressed as text, of the city, town or village of this financial institution address.
	 * @see https://vocabulary.uncefact.org/cityName
	 */
	cityName?: string;

	/**
	 * The unique identifier of a country for this financial institution address (Reference ISO 3166 and UN/ECE Rec 3).
	 * @see https://vocabulary.uncefact.org/countryId
	 */
	countryId?: UneceCountryId;

	/**
	 * The name, expressed as text, of the country within this financial institution address.
	 * @see https://vocabulary.uncefact.org/countryName
	 */
	countryName?: string;

	/**
	 * The unique identifier of a country sub-division for this financial institution address (Reference ISO 3166 and UN/ECE
	 * Rec 3).
	 * @see https://vocabulary.uncefact.org/countrySubDivisionId
	 */
	countrySubDivisionId?: string;

	/**
	 * The name, expressed as text, of a country sub-division within this financial institution address.
	 * @see https://vocabulary.uncefact.org/countrySubDivisionName
	 */
	countrySubDivisionName?: string;

	/**
	 * The name, expressed as text, of a department within this financial institution address.
	 * @see https://vocabulary.uncefact.org/departmentName
	 */
	departmentName?: string;

	/**
	 * The code specifying the type of financial institution address.
	 * @see https://vocabulary.uncefact.org/financialInstitutionAddressTypeCode
	 */
	financialInstitutionAddressTypeCode?: string;

	/**
	 * The fifth free form line, expressed as text, of this financial institution address.
	 * @see https://vocabulary.uncefact.org/lineFive
	 */
	lineFive?: string;

	/**
	 * The fourth free form line, expressed as text, of this financial institution address.
	 * @see https://vocabulary.uncefact.org/lineFour
	 */
	lineFour?: string;

	/**
	 * The first free form line, expressed as text, of this financial institution address.
	 * @see https://vocabulary.uncefact.org/lineOne
	 */
	lineOne?: string;

	/**
	 * The third free form line, expressed as text, of this financial institution address.
	 * @see https://vocabulary.uncefact.org/lineThree
	 */
	lineThree?: string;

	/**
	 * The second free form line, expressed as text, of this financial institution address.
	 * @see https://vocabulary.uncefact.org/lineTwo
	 */
	lineTwo?: string;

	/**
	 * The post office box, expressed as text, for this financial institution address.
	 * @see https://vocabulary.uncefact.org/postOfficeBox
	 */
	postOfficeBox?: string;

	/**
	 * The code specifying the postcode for this financial institution address.
	 * @see https://vocabulary.uncefact.org/postcodeCode
	 */
	postcodeCode?: string;

	/**
	 * The name, expressed as text, of the street or thoroughfare for this financial institution address.
	 * @see https://vocabulary.uncefact.org/streetName
	 */
	streetName?: string;
}
