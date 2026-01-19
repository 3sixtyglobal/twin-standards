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
