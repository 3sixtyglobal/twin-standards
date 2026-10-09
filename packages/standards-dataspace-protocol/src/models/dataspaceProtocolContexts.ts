// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Context URLs and namespace identifiers for the Dataspace Protocol.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DataspaceProtocolContexts = {
	/**
	 * The canonical RDF namespace URI.
	 */
	Namespace: "https://w3id.org/dspace/2025/1/",

	/**
	 * The value to use in @context.
	 */
	Context: "https://w3id.org/dspace/2025/1/context.jsonld",

	/**
	 * The JSON-LD Context URL.
	 */
	JsonLdContext: "https://w3id.org/dspace/2025/1/context.jsonld",

	/**
	 * The namespace location of the hosted version of the JSON Schema.
	 */
	JsonSchemaNamespace: "https://schema.3sixty.global/dataspace-protocol/"
} as const;

/**
 * The contexts for Dataspace Protocol Protocol.
 */
export type DataspaceProtocolContexts =
	(typeof DataspaceProtocolContexts)[keyof typeof DataspaceProtocolContexts];
