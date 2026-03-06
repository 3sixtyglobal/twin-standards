// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsActor } from "./IActivityStreamsActor.js";

/**
 * A W3C Activity Streams Person.
 *
 * A `Person` represents an individual person.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-person
 */
export interface IActivityStreamsPerson extends IActivityStreamsActor {
	/**
	 * Person type.
	 */
	type:
		| (typeof ActivityStreamsObjectTypes.Person | string)
		| (typeof ActivityStreamsObjectTypes.Person | string)[];
}
