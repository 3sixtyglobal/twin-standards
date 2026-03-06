// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsObject } from "./IActivityStreamsObject.js";

/**
 * A W3C Activity Streams Event.
 *
 * An `Event` is an object that represents something that occurs at a certain time and location.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-event
 */
export interface IActivityStreamsEvent extends IActivityStreamsObject {
	/**
	 * Event type.
	 */
	type:
		| (typeof ActivityStreamsObjectTypes.Event | string)
		| (typeof ActivityStreamsObjectTypes.Event | string)[];
}
