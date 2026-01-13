// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonSchema } from "@twin.org/data-core";
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { DcatClasses, DcatContexts } from "@twin.org/standards-w3c-dcat";
import { DataspaceProtocolCatalogTypes } from "../models/catalog/dataspaceProtocolCatalogTypes.js";
import { DataspaceProtocolContexts } from "../models/dataspaceProtocolContexts.js";
import DsProtocolCatalog from "../schemas/DataspaceProtocolCatalog.json" with { type: "json" };
import CatalogError from "../schemas/DataspaceProtocolCatalogError.json" with { type: "json" };
import CatalogRequestMessage from "../schemas/DataspaceProtocolCatalogRequestMessage.json" with { type: "json" };
import DsProtocolDataset from "../schemas/DataspaceProtocolDataset.json" with { type: "json" };
import DatasetRequestMessage from "../schemas/DataspaceProtocolDatasetRequestMessage.json" with { type: "json" };
import DsProtocolDataService from "../schemas-src/DataspaceProtocolDataService.json" with { type: "json" };
import DsProtocolDistribution from "../schemas-src/DataspaceProtocolDistribution.json" with { type: "json" };

/**
 * Handle all the catalog data types for Dataspace Protocol.
 */
export class CatalogDataTypes {
	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.Namespace}${DataspaceProtocolCatalogTypes.CatalogRequestMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolCatalogTypes.CatalogRequestMessage,
				jsonSchema: async () => CatalogRequestMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.Namespace}${DataspaceProtocolCatalogTypes.DatasetRequestMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolCatalogTypes.DatasetRequestMessage,
				jsonSchema: async () => DatasetRequestMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.Namespace}${DataspaceProtocolCatalogTypes.CatalogError}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolCatalogTypes.CatalogError,
				jsonSchema: async () => CatalogError as IJsonSchema
			})
		);

		// This is just for schema registration as Dataset is a DCAT type
		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}#${DcatClasses.Dataset}`,
			() => ({
				context: DcatContexts.ContextRoot,
				type: DcatClasses.Dataset,
				jsonSchema: async () => DsProtocolDataset as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}#${DcatClasses.Catalog}`,
			() => ({
				context: DcatContexts.ContextRoot,
				type: DcatClasses.Catalog,
				jsonSchema: async () => DsProtocolCatalog as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}#${DcatClasses.Distribution}`,
			() => ({
				context: DcatContexts.ContextRoot,
				type: DcatClasses.Distribution,
				jsonSchema: async () => DsProtocolDistribution as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}#${DcatClasses.DataService}`,
			() => ({
				context: DcatContexts.ContextRoot,
				type: DcatClasses.DataService,
				jsonSchema: async () => DsProtocolDataService as IJsonSchema
			})
		);
	}
}
