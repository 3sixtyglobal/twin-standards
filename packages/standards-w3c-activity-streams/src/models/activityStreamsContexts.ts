// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The LD Contexts concerning Activity Streams.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ActivityStreamsContexts = {
	/**
	 * The Activity Streams namespace.
	 */
	Namespace: "https://www.w3.org/ns/activitystreams"
} as const;

/**
 * The LD Contexts concerning Activity Streams.
 */
export type ActivityStreamsContexts =
	(typeof ActivityStreamsContexts)[keyof typeof ActivityStreamsContexts];
