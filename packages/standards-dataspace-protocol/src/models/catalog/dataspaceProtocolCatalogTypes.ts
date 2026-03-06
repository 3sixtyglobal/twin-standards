// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for Dataspace Protocol Catalog Protocol.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#catalog-protocol
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DataspaceProtocolCatalogTypes = {
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
	CatalogError: "CatalogError",

	/**
	 * Dataset.
	 */
	Dataset: "Dataset",

	/**
	 * Dataset without JSON-LD context.
	 */
	DatasetNoContext: "DatasetNoContext",

	/**
	 * Data Service.
	 */
	DataService: "DataService",

	/**
	 * Data Service without JSON-LD context.
	 */
	DataServiceNoContext: "DataServiceNoContext",

	/**
	 * Distribution.
	 */
	Distribution: "Distribution",

	/**
	 * Distribution without JSON-LD context.
	 */
	DistributionNoContext: "DistributionNoContext",

	/**
	 * Catalog.
	 */
	Catalog: "Catalog",

	/**
	 * Catalog without JSON-LD context.
	 */
	CatalogNoContext: "CatalogNoContext",

	/**
	 * Policy.
	 */
	Policy: "Policy",

	/**
	 * Policy without JSON-LD context.
	 */
	PolicyNoContext: "PolicyNoContext",

	/**
	 * Offer.
	 */
	Offer: "Offer",

	/**
	 * Offer without JSON-LD context.
	 */
	OfferNoContext: "OfferNoContext",

	/**
	 * Agreement.
	 */
	Agreement: "Agreement",

	/**
	 * Agreement without JSON-LD context.
	 */
	AgreementNoContext: "AgreementNoContext",

	/**
	 * Set.
	 */
	Set: "Set",

	/**
	 * Set without JSON-LD context.
	 */
	SetNoContext: "SetNoContext"
} as const;

/**
 * The types for Dataspace Protocol Catalog Protocol.
 */
export type DataspaceProtocolCatalogTypes =
	(typeof DataspaceProtocolCatalogTypes)[keyof typeof DataspaceProtocolCatalogTypes];
