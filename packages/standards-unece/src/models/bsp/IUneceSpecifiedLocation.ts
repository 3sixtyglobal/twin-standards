// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceTradeAddress } from "./IUneceTradeAddress.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A specified physical location or place.
 * @see https://vocabulary.uncefact.org/SpecifiedLocation
 */
export interface IUneceSpecifiedLocation extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecifiedLocation;

	/**
	 * A textual description for this specified location.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * Directions, expressed as text, for this specified location.
	 * @see https://vocabulary.uncefact.org/directions
	 */
	directions?: string;

	/**
	 * The code specifying the geopolitical region for this specified location.
	 * @see https://vocabulary.uncefact.org/geopoliticalRegionCode
	 */
	geopoliticalRegionCode?: string;

	/**
	 * The name, expressed as text, of the geopolitical region for this specified location.
	 * @see https://vocabulary.uncefact.org/geopoliticalRegionName
	 */
	geopoliticalRegionName?: string;

	/**
	 * The identifier of a URI (Uniform Resource Identifier) for a map of this specified location.
	 * @see https://vocabulary.uncefact.org/mapURIId
	 */
	mapURIId?: string;

	/**
	 * A name, expressed as text, for this specified location.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The code specifying the type of this specified location.
	 * @see https://vocabulary.uncefact.org/specifiedLocationTypeCode
	 */
	specifiedLocationTypeCode?: string;

	/**
	 * A address specified for this location.
	 * @see https://vocabulary.uncefact.org/specifiedTradeAddress
	 */
	specifiedTradeAddress?: IUneceTradeAddress;
}
