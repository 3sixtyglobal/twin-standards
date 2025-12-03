// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IGeographicalObjectCharacteristic } from "./IGeographicalObjectCharacteristic.js";
import type { IPolygon } from "./IPolygon.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A figure on the Earth having only two dimensions (reference ISO 19136).
 * @see https://vocabulary.uncefact.org/GeographicalSurface
 */
export interface IGeographicalSurface extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.GeographicalSurface;

	/**
	 * The geographical object characteristic associated with this geographical surface.
	 * @see https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic
	 */
	associatedGeographicalObjectCharacteristic?: IGeographicalObjectCharacteristic[];

	/**
	 * The polygon included in this geographical surface.
	 * @see https://vocabulary.uncefact.org/includedPolygon
	 */
	includedPolygon?: IPolygon;
}
