// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonSchema } from "@twin.org/data-core";
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { DataspaceProtocolCatalogTypes } from "../models/catalog/dataspaceProtocolCatalogTypes.js";
import { DataspaceProtocolContexts } from "../models/dataspaceProtocolContexts.js";
import CatalogError from "../schemas/DataspaceProtocolCatalogError.json" with { type: "json" };
import CatalogRequestMessage from "../schemas/DataspaceProtocolCatalogRequestMessage.json" with { type: "json" };
import DatasetRequestMessage from "../schemas/DataspaceProtocolDatasetRequestMessage.json" with { type: "json" };

/**
 * Handle all the catalog data types for Dataspace Protocol.
 */
export class CatalogDataTypes {
	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolCatalogTypes.CatalogRequestMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolCatalogTypes.CatalogRequestMessage,
				jsonSchema: async () => CatalogRequestMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolCatalogTypes.DatasetRequestMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolCatalogTypes.DatasetRequestMessage,
				jsonSchema: async () => DatasetRequestMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolCatalogTypes.CatalogError}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolCatalogTypes.CatalogError,
				jsonSchema: async () => CatalogError as IJsonSchema
			})
		);
	}
}
