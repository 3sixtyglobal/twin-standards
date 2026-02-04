// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceGeographicalObjectCharacteristic } from "./IUneceGeographicalObjectCharacteristic.js";
import type { IUneceGeographicalPoint } from "./IUneceGeographicalPoint.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A planar surface specified as one completely round flat shape in the mathematical sense.
 * @see https://vocabulary.uncefact.org/Circle
 */
export interface IUneceCircle extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Circle;

	/**
	 * The geographical object characteristic associated with this specified circle.
	 * @see https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic
	 */
	associatedGeographicalObjectCharacteristic: IUneceGeographicalObjectCharacteristic;

	/**
	 * A logistics location associated with this specified circle.
	 * @see https://vocabulary.uncefact.org/associatedLocation
	 */
	associatedLocation?: IUneceLogisticsLocation[];

	/**
	 * The geographical point which defines the centre of this specified circle.
	 * @see https://vocabulary.uncefact.org/centreGeographicalPoint
	 */
	centreGeographicalPoint?: IUneceGeographicalPoint;

	/**
	 * The measure of the radius for this specified circle.
	 * @see https://vocabulary.uncefact.org/radiusMeasure
	 */
	radiusMeasure?: IUneceMeasureType;
}
