// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceGeographicalObjectCharacteristic } from "./IUneceGeographicalObjectCharacteristic.js";
import type { IUneceGeographicalPoint } from "./IUneceGeographicalPoint.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of points, on the surface of the Earth (reference ISO 19136).
 * @see https://vocabulary.uncefact.org/GeographicalMultiPoint
 */
export interface IUneceGeographicalMultiPoint extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.GeographicalMultiPoint;

	/**
	 * The direct position list associated with this geographical multi-point.
	 * @see https://vocabulary.uncefact.org/associatedDirectPositionList
	 */
	associatedDirectPositionList?: string;

	/**
	 * The geographical object characteristic associated with this geographical multi-point.
	 * @see https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic
	 */
	associatedGeographicalObjectCharacteristic: IUneceGeographicalObjectCharacteristic;

	/**
	 * A geographical point member of this geographical multi-point feature.
	 * @see https://vocabulary.uncefact.org/memberGeographicalPoint
	 */
	memberGeographicalPoint?: IUneceGeographicalPoint[];
}
