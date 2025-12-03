// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ICircle } from "./ICircle.js";
import type { ICoordinateReferenceSystem } from "./ICoordinateReferenceSystem.js";
import type { ICoordinateSourceSystem } from "./ICoordinateSourceSystem.js";
import type { IGeographicalGrid } from "./IGeographicalGrid.js";
import type { IGeographicalLine } from "./IGeographicalLine.js";
import type { IGeographicalMultiCurve } from "./IGeographicalMultiCurve.js";
import type { IGeographicalMultiPoint } from "./IGeographicalMultiPoint.js";
import type { IGeographicalMultiSurface } from "./IGeographicalMultiSurface.js";
import type { IGeographicalPoint } from "./IGeographicalPoint.js";
import type { IGeographicalSurface } from "./IGeographicalSurface.js";
import type { IPolygon } from "./IPolygon.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Representation of real world phenomenon associated with a location relative to the Earth, such as cities, buildings,
 * roads, rivers, forests and lakes.
 * @see https://vocabulary.uncefact.org/GeographicalFeature
 */
export interface IGeographicalFeature extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.GeographicalFeature;

	/**
	 * The indication of whether or not this specified geographical feature is a collection of features.
	 * @see https://vocabulary.uncefact.org/collectionIndicator
	 */
	collectionIndicator?: boolean;

	/**
	 * The identifier of the coordinate reference system for this geographical feature.
	 * @see https://vocabulary.uncefact.org/coordinateReferenceSystemId
	 */
	coordinateReferenceSystemId?: string;

	/**
	 * The textual description of this specified geographical feature.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier for this specified geographical feature.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A circle included in this specified geographical feature.
	 * @see https://vocabulary.uncefact.org/includedCircle
	 */
	includedCircle?: ICircle[];

	/**
	 * The geographical grid included in this geographical feature.
	 * @see https://vocabulary.uncefact.org/includedGeographicalGrid
	 */
	includedGeographicalGrid?: IGeographicalGrid[];

	/**
	 * The geographical line included in this geographical feature.
	 * @see https://vocabulary.uncefact.org/includedGeographicalLine
	 */
	includedGeographicalLine?: IGeographicalLine[];

	/**
	 * The geographical multi-curve included in this geographical feature.
	 * @see https://vocabulary.uncefact.org/includedGeographicalMultiCurve
	 */
	includedGeographicalMultiCurve?: IGeographicalMultiCurve[];

	/**
	 * The geographical multi-point included in this geographical feature.
	 * @see https://vocabulary.uncefact.org/includedGeographicalMultiPoint
	 */
	includedGeographicalMultiPoint?: IGeographicalMultiPoint[];

	/**
	 * The geographical multi-surface included in this geographical feature.
	 * @see https://vocabulary.uncefact.org/includedGeographicalMultiSurface
	 */
	includedGeographicalMultiSurface?: IGeographicalMultiSurface[];

	/**
	 * The geographical point included in this geographical feature.
	 * @see https://vocabulary.uncefact.org/includedGeographicalPoint
	 */
	includedGeographicalPoint?: IGeographicalPoint[];

	/**
	 * The geographical surface included in this geographical feature.
	 * @see https://vocabulary.uncefact.org/includedGeographicalSurface
	 */
	includedGeographicalSurface?: IGeographicalSurface[];

	/**
	 * The polygon included in this geographical feature.
	 * @see https://vocabulary.uncefact.org/includedPolygon
	 */
	includedPolygon?: IPolygon;

	/**
	 * The name, expressed as text, of this specified geographical feature.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The CS (Coordinate System) engineering coordinate reference system used for this specified geographical feature.
	 * @see https://vocabulary.uncefact.org/usedCoordinateReferenceSystem
	 */
	usedCoordinateReferenceSystem?: ICoordinateReferenceSystem[];

	/**
	 * The geographical coordinate source system used for this specified geographical feature.
	 * @see https://vocabulary.uncefact.org/usedCoordinateSourceSystem
	 */
	usedCoordinateSourceSystem?: ICoordinateSourceSystem[];
}
