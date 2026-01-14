// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types of UNECE contexts.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceContexts = {
	/**
	 * Namespace.
	 */
	Namespace: "https://vocabulary.uncefact.org/",

	/**
	 * The JSON-LD Context URL.
	 */
	JsonLdContext: "https://vocabulary.uncefact.org/unece-context-D23B.jsonld"
} as const;

/**
 * The types of UNECE contexts.
 */
export type UneceContexts = (typeof UneceContexts)[keyof typeof UneceContexts];
