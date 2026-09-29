// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { DcatContexts } from "@twin.org/standards-w3c-dcat";
import * as CompiledValidators from "../compiled/validators.js";
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
				schema: CatalogRequestMessageSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolCatalogRequestMessage
			},
			{
				type: DataspaceProtocolCatalogTypes.DatasetRequestMessage,
				schema: DatasetRequestMessageSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolDatasetRequestMessage
			},
			{
				type: DataspaceProtocolCatalogTypes.CatalogError,
				schema: CatalogErrorSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolCatalogError
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
			types.map(t => ({
				type: `DataspaceProtocol${t.type}`,
				schema: t.schema,
				compiledValidator: t.compiledValidator
			}))
		);

		// These are the custom version of the DCAT3 classes with DS Protocol constraints
		const typesDcat3 = [
			{
				type: DataspaceProtocolCatalogTypes.Dataset,
				schema: DsProtocolDatasetSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolDataset
			},
			{
				type: DataspaceProtocolCatalogTypes.Catalog,
				schema: DsProtocolCatalogSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolCatalog
			},
			{
				type: DataspaceProtocolCatalogTypes.Distribution,
				schema: DsProtocolDistributionSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolDistribution
			},
			{
				type: DataspaceProtocolCatalogTypes.DataService,
				schema: DsProtocolDataServiceSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolDataService
			},
			{
				type: `${DataspaceProtocolCatalogTypes.Dataset}Base`,
				schema: DsProtocolDatasetBaseSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolDatasetBase
			},
			{
				type: `${DataspaceProtocolCatalogTypes.Distribution}Base`,
				schema: DsProtocolDistributionBaseSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolDistributionBase
			},
			{
				type: `${DataspaceProtocolCatalogTypes.DataService}Base`,
				schema: DsProtocolDataServiceBaseSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolDataServiceBase
			},
			{
				type: `${DataspaceProtocolCatalogTypes.Catalog}Base`,
				schema: DsProtocolCatalogBaseSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolCatalogBase
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
			typesDcat3.map(t => ({
				type: `DataspaceProtocol${t.type}`,
				schema: t.schema,
				compiledValidator: t.compiledValidator
			}))
		);

		// These are the custom version of the odrl classes with DS Protocol constraints
		const typesOdrl = [
			{
				type: DataspaceProtocolCatalogTypes.Policy,
				schema: DsProtocolPolicySchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolPolicy
			},
			{
				type: DataspaceProtocolCatalogTypes.Offer,
				schema: DsProtocolOfferSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolOffer
			},
			{
				type: `${DataspaceProtocolCatalogTypes.Offer}Base`,
				schema: DsProtocolOfferBaseSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolOfferBase
			},
			{
				type: DataspaceProtocolCatalogTypes.Agreement,
				schema: DsProtocolAgreementSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolAgreement
			},
			{
				type: DataspaceProtocolCatalogTypes.Set,
				schema: DsProtocolSetSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolSet
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
			typesOdrl.map(t => ({
				type: `DataspaceProtocol${t.type}`,
				schema: t.schema,
				compiledValidator: t.compiledValidator
			}))
		);
	}
}
