// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The contexts for VCard.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const VCardContexts = {
	/**
	 * The canonical RDF namespace URI.
	 */
	Namespace: "http://www.w3.org/2006/vcard/ns#",

	/**
	 * The value to use in @context.
	 * Note: Context matches Namespace (both include trailing hash) as per vCard specification.
	 * The vCard JSON-LD context URL format includes a trailing hash.
	 */
	Context: "http://www.w3.org/2006/vcard/ns#",

	/**
	 * The JSON-LD Context URL.
	 */
	JsonLdContext: "http://www.w3.org/2006/vcard/ns#"
} as const;

/**
 * The contexts for VCard.
 */
export type VCardContexts = (typeof VCardContexts)[keyof typeof VCardContexts];
