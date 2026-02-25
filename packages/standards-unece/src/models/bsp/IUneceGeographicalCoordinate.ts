// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceCoordinateReferenceSystem } from "./IUneceCoordinateReferenceSystem.js";
import type { IUneceCoordinateSourceSystem } from "./IUneceCoordinateSourceSystem.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A set of geographical coordinates of a specific point such as the longitude, latitude and altitude.
 * @see https://vocabulary.uncefact.org/GeographicalCoordinate
 */
export interface IUneceGeographicalCoordinate {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.GeographicalCoordinate;

	/**
	 * The date, time, date time or other date time value of the acquisition of this geographical coordinate.
	 * @see https://vocabulary.uncefact.org/acquisitionDateTime
	 */
	acquisitionDateTime?: string;

	/**
	 * An alternative source system identifier for this geographical coordinate.
	 * @see https://vocabulary.uncefact.org/alternativeSourceSystemId
	 */
	alternativeSourceSystemId?: string;

	/**
	 * The unique identifier of the system used for measuring the altitude.
	 * @see https://vocabulary.uncefact.org/altimetricSystemId
	 */
	altimetricSystemId?: string;

	/**
	 * The measure of the altitude that reflects the vertical elevation of an object above a surface for this geographical
	 * coordinate (Reference ISO 6709).
	 * @see https://vocabulary.uncefact.org/altitudeMeasure
	 */
	altitudeMeasure?: IUneceMeasureType;

	/**
	 * The unique identifier for this geographical coordinate.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The indication of whether the latitude compass direction from the Equator meridian to the meridian of a specific place
	 * is North (+) or South (-) (Reference ISO 6709).
	 * @see https://vocabulary.uncefact.org/latitudeDirectionIndicator
	 */
	latitudeDirectionIndicator?: boolean;

	/**
	 * The measure of the latitude as an angular distance north or south from the Equator meridian to the meridian of a
	 * specific place for this geographical coordinate (Reference ISO 6709).
	 * @see https://vocabulary.uncefact.org/latitudeMeasure
	 */
	latitudeMeasure?: IUneceMeasureType;

	/**
	 * The indication of whether the longitude as a compass direction from the Greenwich meridian to the meridian of a specific
	 * place is East (+) or West (-) for this geographical coordinate (Reference ISO 6709).
	 * @see https://vocabulary.uncefact.org/longitudeDirectionIndicator
	 */
	longitudeDirectionIndicator?: boolean;

	/**
	 * The measure of the longitude as an angular distance east or west from the Greenwich meridian to the meridian of a
	 * specific place (Reference ISO 6709).
	 * @see https://vocabulary.uncefact.org/longitudeMeasure
	 */
	longitudeMeasure?: IUneceMeasureType;

	/**
	 * The unique identifier of the reference system used for measuring a geographical coordinate.
	 * @see https://vocabulary.uncefact.org/systemId
	 */
	systemId?: string;

	/**
	 * The time zone, expressed as text, for this geographical coordinate.
	 * @see https://vocabulary.uncefact.org/timeZone
	 */
	timeZone?: string;

	/**
	 * The code specifying the time zone of this geographical coordinate.
	 * @see https://vocabulary.uncefact.org/timeZoneCode
	 */
	timeZoneCode?: string;

	/**
	 * The date, time, date time, or other date time value for the time zone of this geographical coordinate.
	 * @see https://vocabulary.uncefact.org/timeZoneDateTime
	 */
	timeZoneDateTime?: string;

	/**
	 * The CS (Coordinate System) engineering coordinate reference system used for this geographical coordinate.
	 * @see https://vocabulary.uncefact.org/usedCoordinateReferenceSystem
	 */
	usedCoordinateReferenceSystem?: IUneceCoordinateReferenceSystem;

	/**
	 * The geographical coordinate source system used for this geographical coordinate.
	 * @see https://vocabulary.uncefact.org/usedCoordinateSourceSystem
	 */
	usedCoordinateSourceSystem?: IUneceCoordinateSourceSystem;
}
