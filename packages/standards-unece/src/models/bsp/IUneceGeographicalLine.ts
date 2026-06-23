// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceGeographicalObjectCharacteristic } from "./IUneceGeographicalObjectCharacteristic.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A connection between two points on the surface of the Earth (reference ISO 19136).
 * @see https://vocabulary.uncefact.org/GeographicalLine
 */
export interface IUneceGeographicalLine {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.GeographicalLine;

	/**
	 * The direct position list associated with this geographical line.
	 * @see https://vocabulary.uncefact.org/associatedDirectPositionList
	 */
	associatedDirectPositionList: string;

	/**
	 * The geographical object characteristic associated with this geographical line.
	 * @see https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic
	 */
	associatedGeographicalObjectCharacteristic: IUneceGeographicalObjectCharacteristic;

	/**
	 * A logistics location associated with this specified geographical line.
	 * @see https://vocabulary.uncefact.org/associatedLocation
	 */
	associatedLocation?: IUneceLogisticsLocation[];
}
