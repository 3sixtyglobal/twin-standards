// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@3sixty/core";
import type { IJsonLdLanguageMap, IJsonLdNodeObject } from "@3sixty/data-json-ld";
import type { ActivityStreamsContextType } from "./activityStreamsContextType.js";
import type { ActivityStreamsTypes } from "./activityStreamsTypes.js";
import type { IActivityStreamsObject } from "./IActivityStreamsObject.js";

/**
 * A W3C Activity from Activity Streams.
 *
 * An `Activity` describes an action performed by an `actor` on an `object`, and
 * can optionally include a `target`, `result`, `origin`, or `instrument`.
 * @see https://www.w3.org/TR/activitystreams-core/#activities
 */
export interface IActivityStreamsActivity extends IActivityStreamsObject {
	/**
	 * The LD Context.
	 */
	"@context": ActivityStreamsContextType;

	/**
	 * Activity Type.
	 */
	type: ObjectOrArray<ActivityStreamsTypes | string>;

	/**
	 * The generator of the Activity.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-generator
	 */
	generator?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * The Actor behind the Activity.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-actor
	 */
	actor?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * The object affected by the Activity.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object
	 */
	object?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * The target of the Activity.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-target
	 */
	target?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * Summary of the Activity.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-summary
	 */
	summary?: string | IJsonLdLanguageMap;

	/**
	 * Result of the Activity.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-result
	 */
	result?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * Activity's origin.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-origin
	 */
	origin?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * Instrument used in the Activity.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-instrument
	 */
	instrument?: ObjectOrArray<string | IJsonLdNodeObject>;
}
