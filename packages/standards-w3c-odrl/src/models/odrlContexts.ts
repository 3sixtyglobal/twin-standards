// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The contexts for ODRL.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const OdrlContexts = {
	/**
	 * The JSON-LD Context URL.
	 */
	JsonLdContext: "http://www.w3.org/ns/odrl.jsonld",

	/**
	 * The namespace prefix for all terms in ODRL.
	 */
	Namespace: "http://www.w3.org/ns/odrl/2/"
} as const;

/**
 * The contexts for ODRL.
 */
export type OdrlContexts = (typeof OdrlContexts)[keyof typeof OdrlContexts];
