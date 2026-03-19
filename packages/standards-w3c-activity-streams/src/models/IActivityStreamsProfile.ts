// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsObject } from "./IActivityStreamsObject.js";

/**
 * A W3C Activity Streams Profile.
 *
 * A `Profile` is a content object that describes another `Object`.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-profile
 */
export interface IActivityStreamsProfile extends IActivityStreamsObject {
	/**
	 * Profile type.
	 */
	type: ObjectOrArray<typeof ActivityStreamsObjectTypes.Profile | string>;

	/**
	 * The object being described.
	 *
	 * This is the target entity that the `Profile` is about.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-describes
	 */
	describes?: string | IJsonLdNodeObject;
}
