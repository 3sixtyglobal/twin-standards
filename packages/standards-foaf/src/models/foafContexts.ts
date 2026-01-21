// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The LD Contexts concerning FOAF.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const FoafContexts = {
	/**
	 * The canonical RDF namespace URI.
	 */
	Namespace: "https://xmlns.com/foaf/0.1/",

	/**
	 * The value to use in @context.
	 * Note: Context matches Namespace (both include trailing slash) as per FOAF specification.
	 * The FOAF JSON-LD context URL format includes a trailing slash.
	 */
	Context: "https://xmlns.com/foaf/0.1/",

	/**
	 * The JSON-LD Context URL.
	 */
	JsonLdContext: "https://schema.twindev.org/foaf/types.jsonld"
} as const;

/**
 * The LD Contexts concerning FOAF.
 */
export type FoafContexts = (typeof FoafContexts)[keyof typeof FoafContexts];
