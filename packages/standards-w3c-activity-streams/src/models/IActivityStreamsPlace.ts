// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@3sixty/core";
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsObject } from "./IActivityStreamsObject.js";

/**
 * A W3C Activity Streams Place.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-place
 */
export interface IActivityStreamsPlace extends IActivityStreamsObject {
	/**
	 * Place type.
	 */
	type: ObjectOrArray<typeof ActivityStreamsObjectTypes.Place | string>;

	/**
	 * The latitude of the Place.
	 *
	 * The Activity Streams vocabulary defines this as an `xsd:float`.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-latitude
	 */
	latitude?: number;

	/**
	 * The longitude of the Place.
	 *
	 * The Activity Streams vocabulary defines this as an `xsd:float`.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-longitude
	 */
	longitude?: number;

	/**
	 * The altitude of the Place.
	 *
	 * Measurement units are specified using the `units` property. If `units` is not specified,
	 * the default is assumed to be "m" (meters).
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-altitude
	 */
	altitude?: number;

	/**
	 * The accuracy of the Place.
	 *
	 * Indicates the accuracy of position coordinates on a Place objects.
	 * Expressed in properties of percentage. e.g. "94.0" means "94.0% accurate".
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-accuracy
	 */
	accuracy?: number;

	/**
	 * The radius from the given `latitude` and `longitude`.
	 *
	 * Measurement units are specified using the `units` property. If `units` is not specified,
	 * the default is assumed to be "m" (meters).
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-radius
	 */
	radius?: number;

	/**
	 * Measurement units for the `radius` and `altitude` properties.
	 *
	 * If not specified, the default is assumed to be "m" (meters). The Activity Streams
	 * vocabulary allows values such as "cm", "feet", "inches", "km", "m", "miles", or any
	 * other unit expressed as a URI.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-units
	 */
	units?: string;
}
