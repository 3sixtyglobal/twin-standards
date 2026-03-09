// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsObject } from "./IActivityStreamsObject.js";

/**
 * A W3C Activity Streams Tombstone.
 *
 * A `Tombstone` represents an object that has been deleted. Implementations can
 * include `formerType` and `deleted` to provide additional context.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tombstone
 */
export interface IActivityStreamsTombstone extends IActivityStreamsObject {
	/**
	 * Tombstone type.
	 */
	type:
		| (typeof ActivityStreamsObjectTypes.Tombstone | string)
		| (typeof ActivityStreamsObjectTypes.Tombstone | string)[];

	/**
	 * The date and time at which the object was deleted.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-deleted
	 * @format date-time
	 */
	deleted?: string;

	/**
	 * The former type of the deleted object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-formertype
	 */
	formerType?: ObjectOrArray<string>;
}
