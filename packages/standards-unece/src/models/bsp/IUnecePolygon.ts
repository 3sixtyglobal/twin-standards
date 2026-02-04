// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceGeographicalObjectCharacteristic } from "./IUneceGeographicalObjectCharacteristic.js";
import type { IUneceLinearRing } from "./IUneceLinearRing.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A planar surface, defined by one exterior boundary and zero or more interior boundaries. Each interior boundary defines
 * a hole in the polygon.
 * @see https://vocabulary.uncefact.org/Polygon
 */
export interface IUnecePolygon extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Polygon;

	/**
	 * The geographical object characteristic associated with this specified polygon.
	 * @see https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic
	 */
	associatedGeographicalObjectCharacteristic: IUneceGeographicalObjectCharacteristic;

	/**
	 * A logistics location associated with this specified polygon.
	 * @see https://vocabulary.uncefact.org/associatedLocation
	 */
	associatedLocation?: IUneceLogisticsLocation[];

	/**
	 * The exterior linear specified ring for this polygon.
	 * @see https://vocabulary.uncefact.org/exteriorLinearRing
	 */
	exteriorLinearRing: IUneceLinearRing;

	/**
	 * An interior linear ring specified for this polygon.
	 * @see https://vocabulary.uncefact.org/interiorLinearRing
	 */
	interiorLinearRing?: IUneceLinearRing[];
}
