// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsCollection } from "./IActivityStreamsCollection.js";

/**
 * A W3C Activity Streams CollectionPage.
 *
 * A `CollectionPage` represents a single page of items from a larger `Collection`.
 * Use `partOf` to reference the parent collection, and `next`/`prev` for paging links.
 * @see https://www.w3.org/TR/activitystreams-core/#collections
 */
export interface IActivityStreamsCollectionPage extends IActivityStreamsCollection {
	/**
	 * CollectionPage type.
	 */
	type: ObjectOrArray<typeof ActivityStreamsObjectTypes.CollectionPage | string>;

	/**
	 * Parent collection.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-partof
	 */
	partOf?: string | IJsonLdNodeObject;

	/**
	 * Next page.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-next
	 */
	next?: string | IJsonLdNodeObject;

	/**
	 * Previous page.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-prev
	 */
	prev?: string | IJsonLdNodeObject;
}
