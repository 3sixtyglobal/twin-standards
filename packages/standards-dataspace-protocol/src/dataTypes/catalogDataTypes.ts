// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { DcatContexts } from "@twin.org/standards-w3c-dcat";
import { DataspaceProtocolCatalogTypes } from "../models/catalog/dataspaceProtocolCatalogTypes.js";
import { DataspaceProtocolContexts } from "../models/dataspaceProtocolContexts.js";
import DsProtocolAgreementSchema from "../schemas/DataspaceProtocolAgreement.json" with { type: "json" };
import DsProtocolCatalogSchema from "../schemas/DataspaceProtocolCatalog.json" with { type: "json" };
import CatalogErrorSchema from "../schemas/DataspaceProtocolCatalogError.json" with { type: "json" };
import CatalogRequestMessageSchema from "../schemas/DataspaceProtocolCatalogRequestMessage.json" with { type: "json" };
import DsProtocolDatasetSchema from "../schemas/DataspaceProtocolDataset.json" with { type: "json" };
import DatasetRequestMessageSchema from "../schemas/DataspaceProtocolDatasetRequestMessage.json" with { type: "json" };
import DsProtocolOfferSchema from "../schemas/DataspaceProtocolOffer.json" with { type: "json" };
import DsProtocolDataServiceSchema from "../schemas-src/DataspaceProtocolDataService.json" with { type: "json" };
import DsProtocolDistributionSchema from "../schemas-src/DataspaceProtocolDistribution.json" with { type: "json" };

/**
 * Handle all the catalog data types for Dataspace Protocol.
 */
export class CatalogDataTypes {
	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		const types = [
			{
				type: DataspaceProtocolCatalogTypes.CatalogRequestMessage,
				schema: CatalogRequestMessageSchema
			},
			{
				type: DataspaceProtocolCatalogTypes.DatasetRequestMessage,
				schema: DatasetRequestMessageSchema
			},
			{
				type: DataspaceProtocolCatalogTypes.CatalogError,
				schema: CatalogErrorSchema
			}
		];

		DataTypeHelper.registerTypes(
			DataspaceProtocolContexts.Namespace,
			DataspaceProtocolContexts.JsonLdContext,
			types
		);

		DataTypeHelper.registerTypes(
			DataspaceProtocolContexts.JsonSchemaNamespace,
			DataspaceProtocolContexts.JsonLdContext,
			types
		);

		// These are the custom version of the DCAT3 classes with DS Protocol constraints
		const typesDcat3 = [
			{
				type: DataspaceProtocolCatalogTypes.Dataset,
				schema: DsProtocolDatasetSchema
			},
			{
				type: DataspaceProtocolCatalogTypes.Catalog,
				schema: DsProtocolCatalogSchema
			},
			{
				type: DataspaceProtocolCatalogTypes.Distribution,
				schema: DsProtocolDistributionSchema
			},
			{
				type: DataspaceProtocolCatalogTypes.DataService,
				schema: DsProtocolDataServiceSchema
			}
		];

		DataTypeHelper.registerTypes(
			DataspaceProtocolContexts.Namespace,
			DcatContexts.JsonLdContext,
			typesDcat3
		);

		DataTypeHelper.registerTypes(
			DataspaceProtocolContexts.JsonSchemaNamespace,
			DcatContexts.JsonLdContext,
			typesDcat3
		);

		// These are the custom version of the odrl classes with DS Protocol constraints
		const typesOdrl = [
			{
				type: DataspaceProtocolCatalogTypes.Offer,
				schema: DsProtocolOfferSchema
			},
			{
				type: DataspaceProtocolCatalogTypes.Agreement,
				schema: DsProtocolAgreementSchema
			}
		];

		DataTypeHelper.registerTypes(
			DataspaceProtocolContexts.Namespace,
			DcatContexts.JsonLdContext,
			typesOdrl
		);

		DataTypeHelper.registerTypes(
			DataspaceProtocolContexts.JsonSchemaNamespace,
			DcatContexts.JsonLdContext,
			typesOdrl
		);
	}
}
