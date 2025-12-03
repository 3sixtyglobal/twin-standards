// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IGeographicalCoordinate } from "./IGeographicalCoordinate.js";
import type { LocationFunctionCodeList } from "../lists/locationFunctionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A physical location or place which is a subordinate location of a subordinate location.
 * @see https://vocabulary.uncefact.org/SubordinateSubordinateLocation
 */
export interface ISubordinateSubordinateLocation extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SubordinateSubordinateLocation;

	/**
	 * The unique identifier for this subordinate of a subordinate location, such as a United Nations Location Code (UNLOCODE)
	 * or GS1 Global Location Number (GLN).
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The code specifying the type of subordinate of a subordinate location.
	 * @see https://vocabulary.uncefact.org/locationFunctionTypeCode
	 */
	locationFunctionTypeCode?: LocationFunctionCodeList[];

	/**
	 * The name, expressed as text, of this subordinate of a subordinate location.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * Physical geographical coordinate information for this subordinate of a subordinate location.
	 * @see https://vocabulary.uncefact.org/physicalGeographicalCoordinate
	 */
	physicalGeographicalCoordinate?: IGeographicalCoordinate[];
}
