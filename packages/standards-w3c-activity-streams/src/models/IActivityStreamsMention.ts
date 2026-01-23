// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { ActivityStreamsLinkTypes } from "./activityStreamsLinkTypes.js";
import type { IActivityStreamsLink } from "./IActivityStreamsLink.js";

/**
 * A W3C Activity Streams Mention.
 *
 * A `Mention` is a specialised `Link` typically used to identify users or
 * objects being mentioned within content.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-mention
 */
export interface IActivityStreamsMention extends IActivityStreamsLink {
	/**
	 * Mention type.
	 */
	type: ObjectOrArray<typeof ActivityStreamsLinkTypes.Mention | string>;
}
