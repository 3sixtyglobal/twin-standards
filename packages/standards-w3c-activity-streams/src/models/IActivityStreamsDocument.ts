// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsObject } from "./IActivityStreamsObject.js";

/**
 * A W3C Activity Streams Document.
 *
 * A `Document` is a document of any kind.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-document
 */
export interface IActivityStreamsDocument extends IActivityStreamsObject {
	/**
	 * Document type.
	 */
	type:
		| (typeof ActivityStreamsObjectTypes.Document | string)
		| (typeof ActivityStreamsObjectTypes.Document | string)[];
}
