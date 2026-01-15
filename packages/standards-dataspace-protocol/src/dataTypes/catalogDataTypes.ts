// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { DcatContexts } from "@twin.org/standards-w3c-dcat";
import { DataspaceProtocolCatalogTypes } from "../models/catalog/dataspaceProtocolCatalogTypes.js";
import { DataspaceProtocolContexts } from "../models/dataspaceProtocolContexts.js";
import DsProtocolCatalogSchema from "../schemas/DataspaceProtocolCatalog.json" with { type: "json" };
import CatalogErrorSchema from "../schemas/DataspaceProtocolCatalogError.json" with { type: "json" };
import CatalogRequestMessageSchema from "../schemas/DataspaceProtocolCatalogRequestMessage.json" with { type: "json" };
import DsProtocolDatasetSchema from "../schemas/DataspaceProtocolDataset.json" with { type: "json" };
import DatasetRequestMessageSchema from "../schemas/DataspaceProtocolDatasetRequestMessage.json" with { type: "json" };
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

		// These are the custom version of the DCAT3 classes with DS Protocol constraints
		DataTypeHelper.registerType(
			DataspaceProtocolContexts.Namespace,
			DataspaceProtocolCatalogTypes.Dataset,
			DcatContexts.JsonLdContext,
			DsProtocolDatasetSchema
		);

		DataTypeHelper.registerType(
			DataspaceProtocolContexts.Namespace,
			DataspaceProtocolCatalogTypes.Catalog,
			DcatContexts.JsonLdContext,
			DsProtocolCatalogSchema
		);

		DataTypeHelper.registerType(
			DataspaceProtocolContexts.Namespace,
			DataspaceProtocolCatalogTypes.Distribution,
			DcatContexts.JsonLdContext,
			DsProtocolDistributionSchema
		);

		DataTypeHelper.registerType(
			DataspaceProtocolContexts.Namespace,
			DataspaceProtocolCatalogTypes.DataService,
			DcatContexts.JsonLdContext,
			DsProtocolDataServiceSchema
		);
	}
}
