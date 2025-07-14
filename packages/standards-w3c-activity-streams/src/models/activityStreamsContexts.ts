// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The LD Contexts concerning Activity Streams.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ActivityStreamsContexts = {
	/**
	 * The Activity Streams LD Context.
	 */
	ContextRoot: "https://www.w3.org/ns/activitystreams",

	/**
	 * The Activity Streams namespace.
	 */
	ActivityStreamsNamespace: "https://www.w3.org/ns/activitystreams#",

	/**
	 * The TWIN context for Activity Streams.
	 */
	TwinContext: "https://schema.twindev.org/w3c-activity-streams"
} as const;

/**
 * The LD Contexts concerning Activity Streams.
 */
export type ActivityStreamsContexts =
	(typeof ActivityStreamsContexts)[keyof typeof ActivityStreamsContexts];
