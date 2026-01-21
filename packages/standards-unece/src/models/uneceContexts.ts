// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types of UNECE contexts.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceContexts = {
	/**
	 * The canonical RDF namespace URI.
	 */
	Namespace: "https://vocabulary.uncefact.org/",

	/**
	 * The value to use in @context.
	 * Note: Context differs from Namespace (no trailing slash) as per UNECE standard specification.
	 * The UNECE JSON-LD context URL format does not include a trailing slash.
	 */
	Context: "https://vocabulary.uncefact.org",

	/**
	 * The JSON-LD Context URL.
	 */
	JsonLdContext: "https://vocabulary.uncefact.org/unece-context-D23B.jsonld"
} as const;

/**
 * The types of UNECE contexts.
 */
export type UneceContexts = (typeof UneceContexts)[keyof typeof UneceContexts];
