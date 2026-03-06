// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsActor } from "./IActivityStreamsActor.js";

/**
 * A W3C Activity Streams Service.
 *
 * A `Service` represents a service of any kind.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-service
 */
export interface IActivityStreamsService extends IActivityStreamsActor {
	/**
	 * Service type.
	 */
	type:
		| (typeof ActivityStreamsObjectTypes.Service | string)
		| (typeof ActivityStreamsObjectTypes.Service | string)[];
}
