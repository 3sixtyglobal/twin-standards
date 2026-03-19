// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsDocument } from "./IActivityStreamsDocument.js";

/**
 * A W3C Activity Streams Page.
 *
 * A `Page` is a `Document` that represents a Web Page.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-page
 */
export interface IActivityStreamsPage extends IActivityStreamsDocument {
	/**
	 * Page type.
	 */
	type: ObjectOrArray<typeof ActivityStreamsObjectTypes.Page | string>;
}
