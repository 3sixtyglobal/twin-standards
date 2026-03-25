// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceGeographicalCoordinate } from "./IUneceGeographicalCoordinate.js";
import type { IUneceSubordinateSubordinateLocation } from "./IUneceSubordinateSubordinateLocation.js";
import type { UneceLocationFunctionCodeList } from "../lists/uneceLocationFunctionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A physical location or place which is a subordinate location of a location.
 * @see https://vocabulary.uncefact.org/SubordinateLocation
 */
export interface IUneceSubordinateLocation {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SubordinateLocation;

	/**
	 * The unique identifier for this subordinate location, such as a United Nations Location Code (UNLOCODE) or GS1 Global
	 * Location Number (GLN).
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The code specifying the type of subordinate location.
	 * @see https://vocabulary.uncefact.org/locationFunctionTypeCode
	 */
	locationFunctionTypeCode?: UneceLocationFunctionCodeList | string;

	/**
	 * The name, expressed as text, of this subordinate location.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * Physical geographical coordinate information for this subordinate location.
	 * @see https://vocabulary.uncefact.org/physicalGeographicalCoordinate
	 */
	physicalGeographicalCoordinate?: IUneceGeographicalCoordinate;

	/**
	 * The location subordinate to this subordinate location.
	 * @see https://vocabulary.uncefact.org/subordinateSubordinateSubordinateLocation
	 */
	subordinateSubordinateSubordinateLocation?: IUneceSubordinateSubordinateLocation;
}
