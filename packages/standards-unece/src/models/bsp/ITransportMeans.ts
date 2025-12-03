// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { TransportMeansTypeCodeList } from "../lists/transportMeansTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Reference to a device or method used to convey people, goods, or other objects from place to place.
 * @see https://vocabulary.uncefact.org/TransportMeans
 */
export interface ITransportMeans extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TransportMeans;

	/**
	 * The indication of whether or not this referenced means of transport is accompanied by a driver.
	 * @see https://vocabulary.uncefact.org/driverAccompaniedIndicator
	 */
	driverAccompaniedIndicator?: boolean;

	/**
	 * An identifier of this referenced transport means, such as the International Maritime Organization number for a vessel.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The name, expressed as text, of this referenced transport means, such as the vessel name.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The type, expressed as text, of this referenced transport means.
	 * @see https://vocabulary.uncefact.org/transportMeansType
	 */
	transportMeansType?: string;

	/**
	 * The code specifying the type of referenced transport means [Reference UNECE Recommendation 28].
	 * @see https://vocabulary.uncefact.org/transportMeansTypeCode
	 */
	transportMeansTypeCode?: TransportMeansTypeCodeList[];
}
