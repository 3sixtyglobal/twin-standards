// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsDocument } from "./IActivityStreamsDocument.js";

/**
 * A W3C Activity Streams Audio.
 *
 * An `Audio` is an audio document of any kind.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-audio
 */
export interface IActivityStreamsAudio extends IActivityStreamsDocument {
	/**
	 * Audio type.
	 */
	type:
		| (typeof ActivityStreamsObjectTypes.Audio | string)
		| (typeof ActivityStreamsObjectTypes.Audio | string)[];
}
