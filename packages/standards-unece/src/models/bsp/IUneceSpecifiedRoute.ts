// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceLinearUnitMeasureType } from "./IUneceLinearUnitMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A specified way or course taken from one location to another.
 * @see https://vocabulary.uncefact.org/SpecifiedRoute
 */
export interface IUneceSpecifiedRoute extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecifiedRoute;

	/**
	 * A departure point, expressed as text, for this specified route.
	 * @see https://vocabulary.uncefact.org/departurePoint
	 */
	departurePoint?: string;

	/**
	 * A textual description of this specified route.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The measure of the distance of this specified route.
	 * @see https://vocabulary.uncefact.org/linearUnitDistanceMeasure
	 */
	linearUnitDistanceMeasure?: IUneceLinearUnitMeasureType;

	/**
	 * The Uniform Resource Identifier (URI) of the map of this specified route.
	 * @see https://vocabulary.uncefact.org/mapURIId
	 */
	mapURIId?: string;

	/**
	 * A type, expressed as text, for this specified route.
	 * @see https://vocabulary.uncefact.org/routeType
	 */
	routeType?: string;

	/**
	 * The code specifying the security level of this specified route.
	 * @see https://vocabulary.uncefact.org/securityLevelCode
	 */
	securityLevelCode?: string;

	/**
	 * The code specifying the status of this specified route.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * A transport means, expressed as text, for this specified route.
	 * @see https://vocabulary.uncefact.org/transportMeans
	 */
	transportMeans?: string;
}
