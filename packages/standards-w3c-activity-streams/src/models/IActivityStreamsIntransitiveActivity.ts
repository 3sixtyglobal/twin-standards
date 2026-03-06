// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { ActivityStreamsTypes } from "./activityStreamsTypes.js";
import type { IActivityStreamsObject } from "./IActivityStreamsObject.js";

/**
 * A W3C Activity Streams IntransitiveActivity.
 *
 * `IntransitiveActivity` objects do not have an `object` property.
 * @see https://www.w3.org/TR/activitystreams-core/#intransitiveactivities
 */
export interface IActivityStreamsIntransitiveActivity extends IActivityStreamsObject {
	/**
	 * Intransitive activity type.
	 */
	type:
		| (typeof ActivityStreamsObjectTypes.IntransitiveActivity | ActivityStreamsTypes | string)
		| (typeof ActivityStreamsObjectTypes.IntransitiveActivity | ActivityStreamsTypes | string)[];

	/**
	 * The Actor behind the Activity.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-actor
	 */
	actor?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * The target of the Activity.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-target
	 */
	target?: ObjectOrArray<string | IJsonLdNodeObject>;

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
