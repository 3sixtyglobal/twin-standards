// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceDirectPosition } from "./IUneceDirectPosition.js";
import type { IUneceGeographicalObjectCharacteristic } from "./IUneceGeographicalObjectCharacteristic.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A specified array of points which define a closed loop which is not self intersecting.
 * @see https://vocabulary.uncefact.org/LinearRing
 */
export interface IUneceLinearRing extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LinearRing;

	/**
	 * The geographical object characteristic associated with this linear ring.
	 * @see https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic
	 */
	associatedGeographicalObjectCharacteristic: IUneceGeographicalObjectCharacteristic;

	/**
	 * A coordinate, expressed as text, for this specified linear ring.
	 * @see https://vocabulary.uncefact.org/coordinate
	 */
	coordinate?: string;

	/**
	 * The specified direct position of a coordinate for this linear ring.
	 * @see https://vocabulary.uncefact.org/coordinateDirectPosition
	 */
	coordinateDirectPosition?: IUneceDirectPosition;
}
