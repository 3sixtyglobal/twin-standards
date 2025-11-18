// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for Dataspace Protocol Catalog Protocol.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#catalog-protocol
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const CatalogTypes = {
	/**
	 * Catalog Request Message.
	 */
	CatalogRequestMessage: "CatalogRequestMessage",

	/**
	 * Dataset Request Message.
	 */
	DatasetRequestMessage: "DatasetRequestMessage",

	/**
	 * Catalog Error.
	 */
	CatalogError: "CatalogError"
} as const;

/**
 * The types for Dataspace Protocol Catalog Protocol.
 */
export type CatalogTypes = (typeof CatalogTypes)[keyof typeof CatalogTypes];
