// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsObject } from "./IActivityStreamsObject.js";

/**
 * A W3C Activity Streams Note.
 *
 * A `Note` is a short written work.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-note
 */
export interface IActivityStreamsNote extends IActivityStreamsObject {
	/**
	 * Note type.
	 */
	type: ObjectOrArray<typeof ActivityStreamsObjectTypes.Note | string>;
}
