// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsDocument } from "./IActivityStreamsDocument.js";

/**
 * A W3C Activity Streams Video.
 *
 * A `Video` is a video document of any kind.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-video
 */
export interface IActivityStreamsVideo extends IActivityStreamsDocument {
	/**
	 * Video type.
	 */
	type:
		| (typeof ActivityStreamsObjectTypes.Video | string)
		| (typeof ActivityStreamsObjectTypes.Video | string)[];
}
