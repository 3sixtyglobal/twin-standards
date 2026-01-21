// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The contexts for ODRL.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const OdrlContexts = {
	/**
	 * The canonical RDF namespace URI.
	 */
	Namespace: "http://www.w3.org/ns/odrl/2/",

	/**
	 * The value to use in @context.
	 * Note: Context points to the JSON-LD url as per ODRL 2.2 specification.
	 */
	Context: "http://www.w3.org/ns/odrl.jsonld",

	/**
	 * The JSON-LD Context URL.
	 */
	JsonLdContext: "http://www.w3.org/ns/odrl.jsonld"
} as const;

/**
 * The contexts for ODRL.
 */
export type OdrlContexts = (typeof OdrlContexts)[keyof typeof OdrlContexts];
