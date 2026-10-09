// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@3sixty/core";
import type { IJsonLdNodeObject } from "@3sixty/data-json-ld";
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsCollection } from "./IActivityStreamsCollection.js";

/**
 * A W3C Activity Streams OrderedCollection.
 *
 * An `OrderedCollection` is a `Collection` whose items are explicitly ordered.
 * @see https://www.w3.org/TR/activitystreams-core/#collections
 */
export interface IActivityStreamsOrderedCollection extends IActivityStreamsCollection {
	/**
	 * OrderedCollection type.
	 */
	type: ObjectOrArray<typeof ActivityStreamsObjectTypes.OrderedCollection | string>;

	/**
	 * The ordered items of the collection.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-ordereditems
	 */
	orderedItems?: ObjectOrArray<string | IJsonLdNodeObject>;
}
