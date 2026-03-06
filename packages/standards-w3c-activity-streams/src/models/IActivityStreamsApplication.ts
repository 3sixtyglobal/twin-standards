// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsActor } from "./IActivityStreamsActor.js";

/**
 * A W3C Activity Streams Application.
 *
 * An `Application` represents a software application.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-application
 */
export interface IActivityStreamsApplication extends IActivityStreamsActor {
	/**
	 * Application type.
	 */
	type:
		| (typeof ActivityStreamsObjectTypes.Application | string)
		| (typeof ActivityStreamsObjectTypes.Application | string)[];
}
