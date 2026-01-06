// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceCircle } from "./IUneceCircle.js";
import type { IUneceCoordinateReferenceSystem } from "./IUneceCoordinateReferenceSystem.js";
import type { IUneceCoordinateSourceSystem } from "./IUneceCoordinateSourceSystem.js";
import type { IUneceGeographicalGrid } from "./IUneceGeographicalGrid.js";
import type { IUneceGeographicalLine } from "./IUneceGeographicalLine.js";
import type { IUneceGeographicalMultiCurve } from "./IUneceGeographicalMultiCurve.js";
import type { IUneceGeographicalMultiPoint } from "./IUneceGeographicalMultiPoint.js";
import type { IUneceGeographicalMultiSurface } from "./IUneceGeographicalMultiSurface.js";
import type { IUneceGeographicalPoint } from "./IUneceGeographicalPoint.js";
import type { IUneceGeographicalSurface } from "./IUneceGeographicalSurface.js";
import type { IUnecePolygon } from "./IUnecePolygon.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Representation of real world phenomenon associated with a location relative to the Earth, such as cities, buildings,
 * roads, rivers, forests and lakes.
 * @see https://vocabulary.uncefact.org/GeographicalFeature
 */
export interface IUneceGeographicalFeature extends IJsonLdNodeObject {
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
	includedCircle?: IUneceCircle[];

	/**
	 * The geographical grid included in this geographical feature.
	 * @see https://vocabulary.uncefact.org/includedGeographicalGrid
	 */
	includedGeographicalGrid?: IUneceGeographicalGrid[];

	/**
	 * The geographical line included in this geographical feature.
	 * @see https://vocabulary.uncefact.org/includedGeographicalLine
	 */
	includedGeographicalLine?: IUneceGeographicalLine[];

	/**
	 * The geographical multi-curve included in this geographical feature.
	 * @see https://vocabulary.uncefact.org/includedGeographicalMultiCurve
	 */
	includedGeographicalMultiCurve?: IUneceGeographicalMultiCurve[];

	/**
	 * The geographical multi-point included in this geographical feature.
	 * @see https://vocabulary.uncefact.org/includedGeographicalMultiPoint
	 */
	includedGeographicalMultiPoint?: IUneceGeographicalMultiPoint[];

	/**
	 * The geographical multi-surface included in this geographical feature.
	 * @see https://vocabulary.uncefact.org/includedGeographicalMultiSurface
	 */
	includedGeographicalMultiSurface?: IUneceGeographicalMultiSurface[];

	/**
	 * The geographical point included in this geographical feature.
	 * @see https://vocabulary.uncefact.org/includedGeographicalPoint
	 */
	includedGeographicalPoint?: IUneceGeographicalPoint[];

	/**
	 * The geographical surface included in this geographical feature.
	 * @see https://vocabulary.uncefact.org/includedGeographicalSurface
	 */
	includedGeographicalSurface?: IUneceGeographicalSurface[];

	/**
	 * The polygon included in this geographical feature.
	 * @see https://vocabulary.uncefact.org/includedPolygon
	 */
	includedPolygon?: IUnecePolygon;

	/**
	 * The name, expressed as text, of this specified geographical feature.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The CS (Coordinate System) engineering coordinate reference system used for this specified geographical feature.
	 * @see https://vocabulary.uncefact.org/usedCoordinateReferenceSystem
	 */
	usedCoordinateReferenceSystem?: IUneceCoordinateReferenceSystem[];

	/**
	 * The geographical coordinate source system used for this specified geographical feature.
	 * @see https://vocabulary.uncefact.org/usedCoordinateSourceSystem
	 */
	usedCoordinateSourceSystem?: IUneceCoordinateSourceSystem[];
}
