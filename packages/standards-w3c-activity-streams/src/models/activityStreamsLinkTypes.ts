// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The link types concerning Activity Streams.
 * @see https://www.w3.org/TR/activitystreams-core/#link
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#link
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ActivityStreamsLinkTypes = {
	/**
	 * Link
	 * @see https://www.w3.org/TR/activitystreams-core/#link
	 */
	Link: "Link",

	/**
	 * Mention
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-mention
	 */
	Mention: "Mention"
} as const;

/**
 * The link types concerning Activity Streams.
 */
export type ActivityStreamsLinkTypes =
	(typeof ActivityStreamsLinkTypes)[keyof typeof ActivityStreamsLinkTypes];
