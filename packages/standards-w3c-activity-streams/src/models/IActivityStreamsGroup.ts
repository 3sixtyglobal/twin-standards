// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsActor } from "./IActivityStreamsActor.js";

/**
 * A W3C Activity Streams Group.
 *
 * A `Group` represents a group of individuals.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-group
 */
export interface IActivityStreamsGroup extends IActivityStreamsActor {
	/**
	 * Group type.
	 */
	type: ObjectOrArray<typeof ActivityStreamsObjectTypes.Group | string>;
}
