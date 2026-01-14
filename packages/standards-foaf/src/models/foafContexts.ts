// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The LD Contexts concerning FOAF.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const FoafContexts = {
	/**
	 * The FOAF Namespace.
	 */
	Namespace: "https://xmlns.com/foaf/0.1/",

	/**
	 * The JSON-LD Context URL.
	 */
	JsonLdContext: "https://schema.twindev.org/foaf/types.jsonld"
} as const;

/**
 * The LD Contexts concerning FOAF.
 */
export type FoafContexts = (typeof FoafContexts)[keyof typeof FoafContexts];
