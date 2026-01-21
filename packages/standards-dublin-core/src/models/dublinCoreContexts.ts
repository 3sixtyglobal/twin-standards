// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The contexts for Dublin Core.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DublinCoreContexts = {
	/**
	 * The canonical RDF namespace URI for Dublin Core Terms.
	 */
	NamespaceTerms: "http://purl.org/dc/terms/",

	/**
	 * The value to use in JSON-LD context for Dublin Core Terms.
	 * Note: ContextTerms matches NamespaceTerms (both include trailing slash) as per Dublin Core specification.
	 * The Dublin Core Terms JSON-LD context URL format includes a trailing slash.
	 */
	ContextTerms: "http://purl.org/dc/terms/",

	/**
	 * JSON-LD Context URL for terms
	 */
	JsonLdContextTerms: "https://schema.twindev.org/dublin-core/terms.jsonld",

	/**
	 * The canonical RDF namespace URI for Dublin Core DCMI Types.
	 */
	NamespaceDcmiType: "http://purl.org/dc/dcmitype/",

	/**
	 * The value to use in JSON-LD context for Dublin Core DCMI Types.
	 * Note: ContextDcmiType matches NamespaceDcmiType (both include trailing slash) as per Dublin Core specification.
	 * The Dublin Core DCMI Types JSON-LD context URL format includes a trailing slash.
	 */
	ContextDcmiType: "http://purl.org/dc/dcmitype/",

	/**
	 * JSON-LD Context URL for DCMI Types
	 */
	JsonLdContextDcmiType: "https://schema.twindev.org/dublin-core/dcmitype.jsonld"
} as const;

/**
 * The contexts for Dublin Core.
 */
export type DublinCoreContexts = (typeof DublinCoreContexts)[keyof typeof DublinCoreContexts];
