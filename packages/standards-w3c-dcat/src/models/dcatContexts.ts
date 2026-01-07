// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * DCAT (Data Catalog Vocabulary) namespace contexts.
 * @see https://www.w3.org/TR/vocab-dcat-3/
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcatContexts = {
	/**
	 * The context root for DCAT vocabulary.
	 */
	ContextRoot: "http://www.w3.org/ns/dcat#",

	/**
	 * The namespace for DCAT terms
	 */
	DcatNamespace: "http://www.w3.org/ns/dcat#",

	/**
	 * The redirect URL for the DCAT context, used for JSON-LD processing.
	 */
	ContextRedirect: "https://www.w3.org/ns/dcat.jsonld",

	/**
	 * The context for RDF vocabulary.
	 * @see https://www.w3.org/TR/rdf-schema/
	 */
	ContextRdf: "http://www.w3.org/2000/01/rdf-schema#",

	/**
	 * The context for RDF vocabulary Json-LD.
	 * @see https://www.w3.org/TR/rdf-schema/
	 */
	ContextRdfRedirect: "https://schema.twindev.org/w3c-rdf/types.jsonld",

	/**
	 * The context for SPDX (Software Package Data Exchange) vocabulary.
	 * @see https://spdx.org/rdf/terms
	 */
	ContextSpdx: "http://spdx.org/rdf/terms#",

	/**
	 * The context for PROV (Provenance) vocabulary.
	 * @see https://www.w3.org/ns/prov
	 */
	ContextProv: "http://www.w3.org/ns/prov#"
} as const;

/**
 * The contexts for DCAT.
 */
export type DcatContexts = (typeof DcatContexts)[keyof typeof DcatContexts];
