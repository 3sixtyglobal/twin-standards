// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceDelimitedPeriod } from "./IUneceDelimitedPeriod.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A coordinate reference system that is used in a contextually local sense to describe the relative locations of objects
 * in which coordinates of points are recorded in a Coordinate System (CS) (reference ISO 19111).
 * @see https://vocabulary.uncefact.org/CoordinateReferenceSystem
 */
export interface IUneceCoordinateReferenceSystem extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CoordinateReferenceSystem;

	/**
	 * The identifier for this CS engineering coordinate reference system.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The level, expressed as text, of this CS engineering coordinate reference system.
	 * @see https://vocabulary.uncefact.org/level
	 */
	level: string;

	/**
	 * The name, expressed as text, for this CS engineering coordinate reference system.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A delimited period specified for this CS engineering coordinate reference system.
	 * @see https://vocabulary.uncefact.org/specifiedDelimitedPeriod
	 */
	specifiedDelimitedPeriod?: IUneceDelimitedPeriod[];

	/**
	 * A delimited period specified for this CS engineering coordinate reference system.
	 * @see https://vocabulary.uncefact.org/specifiedPeriod
	 */
	specifiedPeriod?: IUneceDelimitedPeriod[];

	/**
	 * A CS engineering coordinate reference system subordinate to this CS engineering coordinate reference system.
	 * @see https://vocabulary.uncefact.org/subordinateCoordinateReferenceSystem
	 */
	subordinateCoordinateReferenceSystem?: IUneceCoordinateReferenceSystem[];
}
