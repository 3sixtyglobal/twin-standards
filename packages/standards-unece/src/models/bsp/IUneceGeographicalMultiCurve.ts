// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceGeographicalLine } from "./IUneceGeographicalLine.js";
import type { IUneceGeographicalObjectCharacteristic } from "./IUneceGeographicalObjectCharacteristic.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of curves on the surface of the Earth (reference ISO 19136).
 * @see https://vocabulary.uncefact.org/GeographicalMultiCurve
 */
export interface IUneceGeographicalMultiCurve extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.GeographicalMultiCurve;

	/**
	 * The direct position list associated with this geographical multi-curve.
	 * @see https://vocabulary.uncefact.org/associatedDirectPositionList
	 */
	associatedDirectPositionList?: string;

	/**
	 * The geographical object characteristic associated with this geographical multi-curve.
	 * @see https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic
	 */
	associatedGeographicalObjectCharacteristic: IUneceGeographicalObjectCharacteristic;

	/**
	 * A geographical line member of this geographical multi-curve.
	 * @see https://vocabulary.uncefact.org/memberGeographicalLine
	 */
	memberGeographicalLine?: IUneceGeographicalLine[];
}
