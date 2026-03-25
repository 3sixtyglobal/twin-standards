// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceGeographicalCoordinate } from "./IUneceGeographicalCoordinate.js";
import type { UneceLocationFunctionCodeList } from "../lists/uneceLocationFunctionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A location where a transport service takes place.
 * @see https://vocabulary.uncefact.org/TransportServiceLocation
 */
export interface IUneceTransportServiceLocation {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TransportServiceLocation;

	/**
	 * An identifier for this transport service location, such as a United Nations Location Code (UNLOCODE) or GS1 Global
	 * Location Number (GLN).
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * A code specifying the type of transport service location.
	 * @see https://vocabulary.uncefact.org/locationFunctionTypeCode
	 */
	locationFunctionTypeCode?: (UneceLocationFunctionCodeList | string)[];

	/**
	 * A name, expressed as text, of this transport service location.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * Geographical coordinate information for this physical transport service location.
	 * @see https://vocabulary.uncefact.org/physicalGeographicalCoordinate
	 */
	physicalGeographicalCoordinate?: IUneceGeographicalCoordinate[];
}
