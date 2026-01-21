// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Canonical EPCIS JSON-LD context IRIs as defined by GS1.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EpcisContexts = {
	/**
	 * The canonical RDF namespace URI.
	 */
	Namespace: "https://ref.gs1.org/epcis/",

	/**
	 * The value to use in JSON-LD context.
	 * Note: Context differs from Namespace (no trailing slash) as per GS1 EPCIS standard specification.
	 * The EPCIS JSON-LD context URL format does not include a trailing slash.
	 */
	Context: "https://ref.gs1.org/epcis",

	/**
	 * The JSON-LD Context URL.
	 */
	JsonLdContext: "https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld"
} as const;

/**
 * Canonical EPCIS JSON-LD context IRIs as defined by GS1.
 */
export type EpcisContexts = (typeof EpcisContexts)[keyof typeof EpcisContexts];
