// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { DcatContexts } from "@twin.org/standards-w3c-dcat";
import { DataspaceProtocolCatalogTypes } from "../models/catalog/dataspaceProtocolCatalogTypes.js";
import { DataspaceProtocolContexts } from "../models/dataspaceProtocolContexts.js";
import DsProtocolAgreementSchema from "../schemas/DataspaceProtocolAgreement.json" with { type: "json" };
import DsProtocolCatalogSchema from "../schemas/DataspaceProtocolCatalog.json" with { type: "json" };
import DsProtocolCatalogBaseSchema from "../schemas/DataspaceProtocolCatalogBase.json" with { type: "json" };
import CatalogErrorSchema from "../schemas/DataspaceProtocolCatalogError.json" with { type: "json" };
import CatalogRequestMessageSchema from "../schemas/DataspaceProtocolCatalogRequestMessage.json" with { type: "json" };
import DsProtocolDataServiceSchema from "../schemas/DataspaceProtocolDataService.json" with { type: "json" };
import DsProtocolDataServiceBaseSchema from "../schemas/DataspaceProtocolDataServiceBase.json" with { type: "json" };
import DsProtocolDatasetSchema from "../schemas/DataspaceProtocolDataset.json" with { type: "json" };
import DsProtocolDatasetBaseSchema from "../schemas/DataspaceProtocolDatasetBase.json" with { type: "json" };
import DatasetRequestMessageSchema from "../schemas/DataspaceProtocolDatasetRequestMessage.json" with { type: "json" };
import DsProtocolDistributionSchema from "../schemas/DataspaceProtocolDistribution.json" with { type: "json" };
import DsProtocolDistributionBaseSchema from "../schemas/DataspaceProtocolDistributionBase.json" with { type: "json" };
import DsProtocolOfferSchema from "../schemas/DataspaceProtocolOffer.json" with { type: "json" };
import DsProtocolOfferBaseSchema from "../schemas/DataspaceProtocolOfferBase.json" with { type: "json" };
import DsProtocolPolicySchema from "../schemas/DataspaceProtocolPolicy.json" with { type: "json" };
import DsProtocolSetSchema from "../schemas/DataspaceProtocolSet.json" with { type: "json" };

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
			types.map(t => ({ type: `DataspaceProtocol${t.type}`, schema: t.schema }))
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
			},
			{ type: `${DataspaceProtocolCatalogTypes.Dataset}Base`, schema: DsProtocolDatasetBaseSchema },
			{
				type: `${DataspaceProtocolCatalogTypes.Distribution}Base`,
				schema: DsProtocolDistributionBaseSchema
			},
			{
				type: `${DataspaceProtocolCatalogTypes.DataService}Base`,
				schema: DsProtocolDataServiceBaseSchema
			},
			{ type: `${DataspaceProtocolCatalogTypes.Catalog}Base`, schema: DsProtocolCatalogBaseSchema }
		];

		DataTypeHelper.registerTypes(
			DataspaceProtocolContexts.Namespace,
			DcatContexts.JsonLdContext,
			typesDcat3
		);

		DataTypeHelper.registerTypes(
			DataspaceProtocolContexts.JsonSchemaNamespace,
			DcatContexts.JsonLdContext,
			typesDcat3.map(t => ({ type: `DataspaceProtocol${t.type}`, schema: t.schema }))
		);

		// These are the custom version of the odrl classes with DS Protocol constraints
		const typesOdrl = [
			{
				type: DataspaceProtocolCatalogTypes.Policy,
				schema: DsProtocolPolicySchema
			},
			{
				type: DataspaceProtocolCatalogTypes.Offer,
				schema: DsProtocolOfferSchema
			},
			{
				type: `${DataspaceProtocolCatalogTypes.Offer}Base`,
				schema: DsProtocolOfferBaseSchema
			},
			{
				type: DataspaceProtocolCatalogTypes.Agreement,
				schema: DsProtocolAgreementSchema
			},
			{
				type: DataspaceProtocolCatalogTypes.Set,
				schema: DsProtocolSetSchema
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
			typesOdrl.map(t => ({ type: `DataspaceProtocol${t.type}`, schema: t.schema }))
		);
	}
}
