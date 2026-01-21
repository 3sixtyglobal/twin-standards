// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The Contexts concerning Gaia-X.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const GaiaXContexts = {
	/**
	 * The canonical RDF namespace URI.
	 */
	Namespace: "https://schema.twindev.org/gaia-x-loire/",

	/**
	 * The value to use in @context.
	 * Note: Context matches Namespace (both include trailing slash) as per Gaia-X specification.
	 * The Gaia-X JSON-LD context URL format includes a trailing slash.
	 */
	Context: "https://schema.twindev.org/gaia-x-loire/",

	/**
	 * The JSON-LD Context URL.
	 */
	JsonLdContext: "https://schema.twindev.org/gaia-x-loire/types.jsonld"
} as const;

/**
 * The Contexts concerning Gaia-X.
 */
export type GaiaXContexts = (typeof GaiaXContexts)[keyof typeof GaiaXContexts];
