// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The LD Contexts concerning Activity Streams.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ActivityStreamsContexts = {
	/**
	 * The canonical RDF namespace URI.
	 */
	Namespace: "https://www.w3.org/ns/activitystreams#",

	/**
	 * The value to use in @context.
	 * Note: Context differs from Namespace (no trailing #) as per Activity Streams 2.0 specification.
	 * The Activity Streams JSON-LD context URL format does not include a trailing hash.
	 */
	Context: "https://www.w3.org/ns/activitystreams",

	/**
	 * The JSON-LD Context URL.
	 */
	JsonLdContext: "https://www.w3.org/ns/activitystreams.jsonld"
} as const;

/**
 * The LD Contexts concerning Activity Streams.
 */
export type ActivityStreamsContexts =
	(typeof ActivityStreamsContexts)[keyof typeof ActivityStreamsContexts];
