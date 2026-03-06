// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsObject } from "./IActivityStreamsObject.js";

/**
 * A W3C Activity Streams Actor.
 *
 * An `Actor` is a specialised `Object` that represents the entity performing
 * an `Activity` (for example a `Person`, `Group`, `Organization`, `Application`, or `Service`).
 * @see https://www.w3.org/TR/activitystreams-core/#actors
 */
export interface IActivityStreamsActor extends IActivityStreamsObject {
	/**
	 * Actor type.
	 */
	type?:
		| (
				| typeof ActivityStreamsObjectTypes.Actor
				| typeof ActivityStreamsObjectTypes.Application
				| typeof ActivityStreamsObjectTypes.Group
				| typeof ActivityStreamsObjectTypes.Organization
				| typeof ActivityStreamsObjectTypes.Person
				| typeof ActivityStreamsObjectTypes.Service
				| string
		  )
		| (
				| typeof ActivityStreamsObjectTypes.Actor
				| typeof ActivityStreamsObjectTypes.Application
				| typeof ActivityStreamsObjectTypes.Group
				| typeof ActivityStreamsObjectTypes.Organization
				| typeof ActivityStreamsObjectTypes.Person
				| typeof ActivityStreamsObjectTypes.Service
				| string
		  )[];
}
