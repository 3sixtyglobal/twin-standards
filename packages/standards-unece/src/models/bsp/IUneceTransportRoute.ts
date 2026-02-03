// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceTransportEvent } from "./IUneceTransportEvent.js";
import type { IUneceTransportMovement } from "./IUneceTransportMovement.js";
import type { UneceStatusCodeList } from "../lists/uneceStatusCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A way or course taken from one location to another for the purpose of transporting cargo and or passengers.
 * @see https://vocabulary.uncefact.org/TransportRoute
 */
export interface IUneceTransportRoute extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TransportRoute;

	/**
	 * A departure point, expressed as text, for this transport route.
	 * @see https://vocabulary.uncefact.org/departurePoint
	 */
	departurePoint?: string;

	/**
	 * The textual description of this transport route.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A specified period of time for which a frequency is effective for this transport route.
	 * @see https://vocabulary.uncefact.org/frequencyEffectivePeriod
	 */
	frequencyEffectivePeriod?: IUneceSpecifiedPeriod;

	/**
	 * The code specifying the type of frequency for this transport route, such as weekly, bi-monthly or daily.
	 * @see https://vocabulary.uncefact.org/frequencyTypeCode
	 */
	frequencyTypeCode?: string;

	/**
	 * The unique identifier of this transport route.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An itinerary stop event for this transport route, such as a port call in a vessel schedule.
	 * @see https://vocabulary.uncefact.org/itineraryStopEvent
	 */
	itineraryStopEvent?: IUneceTransportEvent;

	/**
	 * Binary object data that is the map of this transport route.
	 * @see https://vocabulary.uncefact.org/mapBinaryObject
	 */
	mapBinaryObject?: string;

	/**
	 * A type, expressed as text, for this transport route.
	 * @see https://vocabulary.uncefact.org/routeType
	 */
	routeType?: string;

	/**
	 * The specified period during which this transport route is scheduled.
	 * @see https://vocabulary.uncefact.org/scheduledPeriod
	 */
	scheduledPeriod?: IUneceSpecifiedPeriod;

	/**
	 * A code specifying a security level for this transport route.
	 * @see https://vocabulary.uncefact.org/securityLevelCode
	 */
	securityLevelCode?: string;

	/**
	 * The logistics transport movement specified for this transport route.
	 * @see https://vocabulary.uncefact.org/specifiedTransportMovement
	 */
	specifiedTransportMovement?: IUneceTransportMovement;

	/**
	 * A means of transport, expressed as text, for this transport route.
	 * @see https://vocabulary.uncefact.org/transportMeans
	 */
	transportMeans?: string;

	/**
	 * The code specifying a status for a transport route, such as planned or actual.
	 * @see https://vocabulary.uncefact.org/transportRouteStatusCode
	 */
	transportRouteStatusCode?: UneceStatusCodeList;
}
