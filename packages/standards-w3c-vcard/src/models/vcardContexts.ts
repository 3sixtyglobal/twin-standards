// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The contexts for VCard.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const VCardContexts = {
	/**
	 * The namespace for VCard.
	 * Based on W3C VCard Ontology.
	 * @see http://www.w3.org/2006/vcard/ns#
	 */
	Namespace: "http://www.w3.org/2006/vcard/ns#"
} as const;

/**
 * The contexts for VCard.
 */
export type VCardContexts = (typeof VCardContexts)[keyof typeof VCardContexts];
