// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsActor } from "./IActivityStreamsActor.js";

/**
 * A W3C Activity Streams Organization.
 *
 * An `Organization` represents an organization.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-organization
 */
export interface IActivityStreamsOrganization extends IActivityStreamsActor {
	/**
	 * Organization type.
	 */
	type:
		| (typeof ActivityStreamsObjectTypes.Organization | string)
		| (typeof ActivityStreamsObjectTypes.Organization | string)[];
}
