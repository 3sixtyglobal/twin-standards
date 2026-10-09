// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { IUneceCountry } from "./IUneceCountry.js";
import type { IUneceGeographicalCoordinate } from "./IUneceGeographicalCoordinate.js";
import type { UneceAddressTypeCodeList } from "../lists/uneceAddressTypeCodeList.js";
import type { UneceCountryId } from "../lists/uneceCountryId.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The location at which a particular trade related organization or person may be found or reached.
 * @see https://vocabulary.uncefact.org/TradeAddress
 */
export interface IUneceTradeAddress {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TradeAddress;

	/**
	 * The additional name of a street, expressed as text, for this trade address.
	 * @see https://vocabulary.uncefact.org/additionalStreetName
	 */
	additionalStreetName?: string;

	/**
	 * A code specifying the type of this trade address, such as business address or home address.
	 * @see https://vocabulary.uncefact.org/addressTypeCode
	 */
	addressTypeCode?: UneceAddressTypeCodeList[];

	/**
	 * The name, expressed as text, of a person or department in the organization to whom incoming mail is marked with words
	 * such as 'for the attention of' or 'FAO' or 'ATTN' for this trade address.
	 * @see https://vocabulary.uncefact.org/attentionOf
	 */
	attentionOf?: string;

	/**
	 * The name, expressed as text, of a building, a house or other structure on a street at this trade address.
	 * @see https://vocabulary.uncefact.org/buildingName
	 */
	buildingName?: string;

	/**
	 * The building number, expressed as text, in this trade address.
	 * @see https://vocabulary.uncefact.org/buildingNumber
	 */
	buildingNumber?: string;

	/**
	 * The name, expressed as text, of a person or organization at this trade address to whom incoming mail is marked with
	 * words such as 'care of' or 'C/O'.
	 * @see https://vocabulary.uncefact.org/careOf
	 */
	careOf?: string;

	/**
	 * The identifier of the city for this trade address, such as United Nations Location Code (UNLOCODE).
	 * @see https://vocabulary.uncefact.org/cityId
	 */
	cityId?: string | IJsonLdValueObject;

	/**
	 * A name, expressed as text, of the city, town or village of this trade address.
	 * @see https://vocabulary.uncefact.org/cityName
	 */
	cityName?: string;

	/**
	 * A name, expressed as text, of a sub-division of a city for this trade address, for example a district or borough.
	 * @see https://vocabulary.uncefact.org/citySubDivisionName
	 */
	citySubDivisionName?: string;

	/**
	 * The unique identifier of the country for this trade address.
	 * @see https://vocabulary.uncefact.org/countryIdentificationCountry
	 */
	countryIdentificationCountry?: IUneceCountry;

	/**
	 * A name, expressed as text, of the country for this trade address.
	 * @see https://vocabulary.uncefact.org/countryName
	 */
	countryName?: string;

	/**
	 * A unique identifier of the country sub-division for this trade address.
	 * @see https://vocabulary.uncefact.org/countrySubDivisionId
	 */
	countrySubDivisionId?: string | IJsonLdValueObject;

	/**
	 * A name, expressed as text, of the sub-division of a country for this trade address.
	 * @see https://vocabulary.uncefact.org/countrySubDivisionName
	 */
	countrySubDivisionName?: string;

	/**
	 * The name, expressed as text, of a department for this trade address.
	 * @see https://vocabulary.uncefact.org/departmentName
	 */
	departmentName?: string;

	/**
	 * A textual description of this trade address.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A free form representation, expressed as text, of this trade address.
	 * @see https://vocabulary.uncefact.org/freeForm
	 */
	freeForm?: string;

	/**
	 * An identification of a set of geographical coordinates for this trade address.
	 * @see https://vocabulary.uncefact.org/geoCoordinateIdentificationGeographicalCoordinate
	 */
	geoCoordinateIdentificationGeographicalCoordinate?: IUneceGeographicalCoordinate[];

	/**
	 * A unique identifier for this trade address.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The indication of whether or not this trade address is invalid.
	 * @see https://vocabulary.uncefact.org/invalidIndicator
	 */
	invalidIndicator?: boolean;

	/**
	 * The fifth free form line, expressed as text, of this trade address.
	 * @see https://vocabulary.uncefact.org/lineFive
	 */
	lineFive?: string;

	/**
	 * The fourth free form line, expressed as text, of this trade address.
	 * @see https://vocabulary.uncefact.org/lineFour
	 */
	lineFour?: string;

	/**
	 * The first free form line, expressed as text, of this trade address.
	 * @see https://vocabulary.uncefact.org/lineOne
	 */
	lineOne?: string;

	/**
	 * The third free form line, expressed as text, of this trade address.
	 * @see https://vocabulary.uncefact.org/lineThree
	 */
	lineThree?: string;

	/**
	 * The second free form line, expressed as text, of this trade address.
	 * @see https://vocabulary.uncefact.org/lineTwo
	 */
	lineTwo?: string;

	/**
	 * The unique identifier, expressed as text, of a container commonly referred to as a box, in a post office or other postal
	 * service location, assigned to a person or organization, where postal items may be kept for this trade address.
	 * @see https://vocabulary.uncefact.org/postOfficeBox
	 */
	postOfficeBox?: string;

	/**
	 * A code specifying the postcode of this trade address.
	 * @see https://vocabulary.uncefact.org/postcodeCode
	 */
	postcodeCode?: string;

	/**
	 * A code specifying a secondary postcode of this trade address.
	 * @see https://vocabulary.uncefact.org/secondaryPostcodeCode
	 */
	secondaryPostcodeCode?: string;

	/**
	 * A name, expressed as text, of a street or thoroughfare for this trade address.
	 * @see https://vocabulary.uncefact.org/streetName
	 */
	streetName?: string;

	/**
	 * The unique identifier of a country for this trade address.
	 * @see https://vocabulary.uncefact.org/tradeAddressCountryId
	 */
	tradeAddressCountryId?: UneceCountryId | string | IJsonLdValueObject;
}
