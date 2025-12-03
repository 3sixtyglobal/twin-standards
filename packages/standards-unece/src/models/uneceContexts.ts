// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types of UNECE contexts.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceContexts = {
	/**
	 * Context Root.
	 */
	ContextRoot: "https://vocabulary.uncefact.org/",

	/**
	 * The UNECE namespace.
	 */
	ContextRedirect: "https://vocabulary.uncefact.org/unece-context-D23B.jsonld"
} as const;

/**
 * The types of UNECE contexts.
 */
export type UneceContexts = (typeof UneceContexts)[keyof typeof UneceContexts];
