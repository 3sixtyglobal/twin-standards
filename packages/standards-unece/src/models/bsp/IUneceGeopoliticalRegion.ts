// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceCountry } from "./IUneceCountry.js";
import type { UneceGeopoliticalRegionTypeCodeList } from "../typeCodes/uneceGeopoliticalRegionTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of countries and/or economies united for trade purposes.
 * @see https://vocabulary.uncefact.org/GeopoliticalRegion
 */
export interface IUneceGeopoliticalRegion extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.GeopoliticalRegion;

	/**
	 * The unique identifier for this trade geopolitical region.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A country included in this trade geopolitical region.
	 * @see https://vocabulary.uncefact.org/includedCountry
	 */
	includedCountry?: IUneceCountry[];

	/**
	 * The name, expressed as text, of this trade geopolitical region.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The code specifying the type of trade geopolitical region.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceGeopoliticalRegionTypeCodeList | string;
}
