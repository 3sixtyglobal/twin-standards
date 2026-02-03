// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceGeographicalObjectCharacteristic } from "./IUneceGeographicalObjectCharacteristic.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUnecePlot } from "./IUnecePlot.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The combination of the latitude and longitude forming a graticule, used for specifying the position of any location on
 * the surface of the Earth, without consideration of altitude or depth (reference ISO 19136).
 * @see https://vocabulary.uncefact.org/GeographicalGrid
 */
export interface IUneceGeographicalGrid extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.GeographicalGrid;

	/**
	 * The geographical object characteristic associated with this geographical grid.
	 * @see https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic
	 */
	associatedGeographicalObjectCharacteristic?: IUneceGeographicalObjectCharacteristic;

	/**
	 * A logistics location associated with this specified geographical grid.
	 * @see https://vocabulary.uncefact.org/associatedLocation
	 */
	associatedLocation?: IUneceLogisticsLocation;

	/**
	 * An axis name, expressed as text, for this geographical grid.
	 * @see https://vocabulary.uncefact.org/axisName
	 */
	axisName?: string;

	/**
	 * The cell value, expressed as text, for this geographical grid.
	 * @see https://vocabulary.uncefact.org/cell
	 */
	cell?: string;

	/**
	 * The dimension, expressed as a number, of this geographical grid.
	 * @see https://vocabulary.uncefact.org/dimensionNumeric
	 */
	dimensionNumeric?: string;

	/**
	 * The tuple of elements, expressed as text, indicating the high limit of this geographical grid specifying the diagonally
	 * opposing corner of each axis.
	 * @see https://vocabulary.uncefact.org/highLimit
	 */
	highLimit?: string;

	/**
	 * An identifier for this geographical grid.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The tuple of elements, expressed as text, indicating the low limit of this geographical grid specifying the offset of
	 * each axis.
	 * @see https://vocabulary.uncefact.org/lowLimit
	 */
	lowLimit?: string;

	/**
	 * The offset vector, expressed as a number, which indicates the offset of cells along each axis for this geographical
	 * grid.
	 * @see https://vocabulary.uncefact.org/offsetVectorNumeric
	 */
	offsetVectorNumeric?: string;

	/**
	 * The direct position list associated with the origin of this geographical grid.
	 * @see https://vocabulary.uncefact.org/originAssociatedDirectPositionList
	 */
	originAssociatedDirectPositionList?: string;

	/**
	 * A crop plot specified for this geographical grid.
	 * @see https://vocabulary.uncefact.org/specifiedPlot
	 */
	specifiedPlot?: IUnecePlot;
}
