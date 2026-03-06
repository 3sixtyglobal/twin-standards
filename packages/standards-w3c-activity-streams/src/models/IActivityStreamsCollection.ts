// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsObject } from "./IActivityStreamsObject.js";

/**
 * A W3C Activity Streams Collection.
 *
 * A `Collection` represents an unordered set of items. Implementations can page
 * large collections using `first`/`last`/`current` and `CollectionPage`.
 * @see https://www.w3.org/TR/activitystreams-core/#collections
 */
export interface IActivityStreamsCollection extends IActivityStreamsObject {
	/**
	 * Collection type.
	 */
	type:
		| (typeof ActivityStreamsObjectTypes.Collection | string)
		| (typeof ActivityStreamsObjectTypes.Collection | string)[];

	/**
	 * Total number of items.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-totalitems
	 */
	totalItems?: number;

	/**
	 * The items of the collection.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-items
	 */
	items?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * First page.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-first
	 */
	first?: string | IJsonLdNodeObject;

	/**
	 * Last page.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-last
	 */
	last?: string | IJsonLdNodeObject;

	/**
	 * Current page.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-current
	 */
	current?: string | IJsonLdNodeObject;
}
