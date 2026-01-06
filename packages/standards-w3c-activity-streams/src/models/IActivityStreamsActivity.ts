// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdLanguageMap, IJsonLdNodeObject, IJsonLdObject } from "@twin.org/data-json-ld";
import type { ActivityStreamsContextType } from "./activityStreamsContextType.js";
import type { ActivityStreamsTypes } from "./activityStreamsTypes.js";

/**
 * A W3C Activity from Activity Streams
 * @see https://www.w3.org/TR/activitystreams-core/#activities
 */
export interface IActivityStreamsActivity extends IJsonLdNodeObject {
	/**
	 * The LD Context.
	 *
	 */
	"@context": ActivityStreamsContextType;

	/**
	 * Activity Type.
	 */
	type: ObjectOrArray<ActivityStreamsTypes | string>;

	/**
	 * The generator of the Activity.
	 */
	generator?: IJsonLdObject["@id"] | IJsonLdNodeObject;

	/**
	 * The Actor behind the Activity.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-actor
	 */
	actor: IJsonLdObject["@id"] | IJsonLdNodeObject;

	/**
	 * The object affected by the Activity.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object
	 */
	object: IJsonLdNodeObject;

	/**
	 * The target of the Activity.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-target
	 */
	target?: IJsonLdNodeObject;

	/**
	 * Summary of the Activity.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-summary
	 */
	summary?: string | IJsonLdLanguageMap;

	/**
	 * Result of the Activity.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-result
	 */
	result?: IJsonLdNodeObject;

	/**
	 * Activity's origin.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-origin
	 */
	origin?: IJsonLdObject["@id"] | IJsonLdNodeObject;

	/**
	 * The date and time at which the object was updated.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-updated
	 */
	updated: string;
}
