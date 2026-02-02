// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * DCAT (Data Catalog Vocabulary) namespace contexts.
 * @see https://www.w3.org/TR/vocab-dcat-3/
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcatContexts = {
	/**
	 * The canonical RDF namespace URI.
	 */
	Namespace: "http://www.w3.org/ns/dcat#",

	/**
	 * The value to use in @context.
	 * Note: Context matches Namespace (both include trailing hash) as per DCAT 3.0 specification.
	 * The DCAT JSON-LD context URL format includes a trailing hash.
	 */
	Context: "http://www.w3.org/ns/dcat#",

	/**
	 * The JSON-LD Context URL.
	 */
	JsonLdContext: "https://www.w3.org/ns/dcat.jsonld",

	/**
	 * The namespace location of the hosted version of the JSON Schema.
	 */
	JsonSchemaNamespace: "https://schema.twindev.org/w3c-dcat/",

	/**
	 * The namespace for RDF vocabulary.
	 * @see https://www.w3.org/TR/rdf-schema/
	 */
	NamespaceRdf: "http://www.w3.org/2000/01/rdf-schema#",

	/**
	 * The context for RDF vocabulary Json-LD.
	 * @see https://www.w3.org/TR/rdf-schema/
	 */
	JsonLdContextRdf: "https://schema.twindev.org/w3c-rdf/types.jsonld"
} as const;

/**
 * The contexts for DCAT.
 */
export type DcatContexts = (typeof DcatContexts)[keyof typeof DcatContexts];
