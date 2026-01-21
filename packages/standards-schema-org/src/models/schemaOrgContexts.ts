// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The contexts of schema.org data.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SchemaOrgContexts = {
	/**
	 * The canonical RDF namespace URI.
	 */
	Namespace: "https://schema.org/",

	/**
	 * The value to use in @context.
	 * Note: Context differs from Namespace (no trailing slash) as per schema.org specification.
	 * The schema.org JSON-LD context URL format does not include a trailing slash.
	 */
	Context: "https://schema.org",

	/**
	 * The JSON-LD Context URL.
	 */
	JsonLdContext: "https://schema.org/docs/jsonldcontext.json"
} as const;

/**
 * The contexts of schema.org data.
 */
export type SchemaOrgContexts = (typeof SchemaOrgContexts)[keyof typeof SchemaOrgContexts];
