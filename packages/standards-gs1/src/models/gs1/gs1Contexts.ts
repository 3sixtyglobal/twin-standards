// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The contexts of GS1.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const GS1Contexts = {
	/**
	 * The canonical RDF namespace URI.
	 */
	Namespace: "https://gs1.org/voc/",

	/**
	 * The value to use in JSON-LD context.
	 * Note: Context differs from Namespace (no trailing slash) as per GS1 standard specification.
	 * The GS1 JSON-LD context URL format does not include a trailing slash.
	 */
	Context: "https://gs1.org/voc"
} as const;

/**
 * The contexts of GS1.
 */
export type GS1Contexts = (typeof GS1Contexts)[keyof typeof GS1Contexts];
