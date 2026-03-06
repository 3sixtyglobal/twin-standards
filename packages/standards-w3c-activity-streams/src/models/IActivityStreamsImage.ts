// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsObject } from "./IActivityStreamsObject.js";

/**
 * A W3C Activity Streams Image.
 *
 * An `Image` is an image document of any kind.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-image
 */
export interface IActivityStreamsImage extends IActivityStreamsObject {
	/**
	 * Image type.
	 */
	type:
		| (typeof ActivityStreamsObjectTypes.Image | string)
		| (typeof ActivityStreamsObjectTypes.Image | string)[];
}
