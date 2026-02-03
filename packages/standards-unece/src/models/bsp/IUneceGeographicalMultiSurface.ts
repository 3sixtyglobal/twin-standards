// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceGeographicalObjectCharacteristic } from "./IUneceGeographicalObjectCharacteristic.js";
import type { IUnecePolygon } from "./IUnecePolygon.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of surfaces on the Earth (reference ISO 19136).
 * @see https://vocabulary.uncefact.org/GeographicalMultiSurface
 */
export interface IUneceGeographicalMultiSurface extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.GeographicalMultiSurface;

	/**
	 * The geographical object characteristic associated with this geographical multi-surface.
	 * @see https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic
	 */
	associatedGeographicalObjectCharacteristic?: IUneceGeographicalObjectCharacteristic;

	/**
	 * A polygon included in this geographical multi-surface.
	 * @see https://vocabulary.uncefact.org/includedPolygon
	 */
	includedPolygon?: IUnecePolygon;
}
