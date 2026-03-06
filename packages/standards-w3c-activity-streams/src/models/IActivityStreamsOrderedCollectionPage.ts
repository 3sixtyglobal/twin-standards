// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsCollectionPage } from "./IActivityStreamsCollectionPage.js";
import type { IActivityStreamsOrderedCollection } from "./IActivityStreamsOrderedCollection.js";

/**
 * A W3C Activity Streams OrderedCollectionPage.
 *
 * An `OrderedCollectionPage` is a page from an `OrderedCollection`. When
 * `orderedItems` are present, `startIndex` can be used as an offset for the first
 * item in the page.
 * @see https://www.w3.org/TR/activitystreams-core/#collections
 */
export interface IActivityStreamsOrderedCollectionPage
	extends IActivityStreamsCollectionPage, IActivityStreamsOrderedCollection {
	/**
	 * OrderedCollectionPage type.
	 */
	type:
		| (typeof ActivityStreamsObjectTypes.OrderedCollectionPage | string)
		| (typeof ActivityStreamsObjectTypes.OrderedCollectionPage | string)[];

	/**
	 * Relative index position of the first item in this page.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-startindex
	 */
	startIndex?: number;
}
