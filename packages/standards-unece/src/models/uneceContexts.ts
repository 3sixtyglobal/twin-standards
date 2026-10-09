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
	 */
	Context: "https://vocabulary.uncefact.org/unece-context-D23B.jsonld",

	/**
	 * The JSON-LD Context URL.
	 */
	JsonLdContext: "https://vocabulary.uncefact.org/unece-context-D23B.jsonld",

	/**
	 * The namespace location of the hosted version of the JSON Schema.
	 */
	JsonSchemaNamespace: "https://schema.3sixty.global/unece/"
} as const;

/**
 * The types of UNECE contexts.
 */
export type UneceContexts = (typeof UneceContexts)[keyof typeof UneceContexts];
