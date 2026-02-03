// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceGeographicalObjectCharacteristic } from "./IUneceGeographicalObjectCharacteristic.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A point on the surface of the Earth (reference ISO 19136).
 * @see https://vocabulary.uncefact.org/GeographicalPoint
 */
export interface IUneceGeographicalPoint extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.GeographicalPoint;

	/**
	 * The direct position list associated with this geographical point.
	 * @see https://vocabulary.uncefact.org/associatedDirectPositionList
	 */
	associatedDirectPositionList?: string;

	/**
	 * The geographical object characteristic associated with this geographical point.
	 * @see https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic
	 */
	associatedGeographicalObjectCharacteristic?: IUneceGeographicalObjectCharacteristic;

	/**
	 * A logistics location associated with this specified geographical point.
	 * @see https://vocabulary.uncefact.org/associatedLocation
	 */
	associatedLocation?: IUneceLogisticsLocation;
}
