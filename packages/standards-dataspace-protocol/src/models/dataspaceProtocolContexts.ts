// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The contexts for Dataspace Protocol Protocol.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DataspaceProtocolContexts = {
	/**
	 * The context root for Dataspace Protocol Protocol.
	 */
	ContextRoot: "https://w3id.org/dspace/2025/1/context.jsonld",

	/**
	 * The namespace.
	 */
	Namespace: "https://w3id.org/dspace/2025/1/",

	/**
	 * The context redirect for Dataspace Protocol Protocol.
	 */
	ContextRedirect: "https://w3id.org/dspace/2025/1/context.jsonld"
} as const;

/**
 * The contexts for Dataspace Protocol Protocol.
 */
export type DataspaceProtocolContexts =
	(typeof DataspaceProtocolContexts)[keyof typeof DataspaceProtocolContexts];
