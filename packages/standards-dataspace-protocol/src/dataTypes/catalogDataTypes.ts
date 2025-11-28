// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonSchema } from "@twin.org/data-core";
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { CatalogTypes } from "../models/catalog/catalogTypes.js";
import { DataspaceProtocolContexts } from "../models/dataspaceProtocolContexts.js";
import CatalogError from "../schemas/CatalogError.json" with { type: "json" };
import CatalogRequestMessage from "../schemas/CatalogRequestMessage.json" with { type: "json" };
import DatasetRequestMessage from "../schemas/DatasetRequestMessage.json" with { type: "json" };

/**
 * Handle all the catalog data types for Dataspace Protocol.
 */
export class CatalogDataTypes {
	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${CatalogTypes.CatalogRequestMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: CatalogTypes.CatalogRequestMessage,
				jsonSchema: async () => CatalogRequestMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${CatalogTypes.DatasetRequestMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: CatalogTypes.DatasetRequestMessage,
				jsonSchema: async () => DatasetRequestMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${CatalogTypes.CatalogError}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: CatalogTypes.CatalogError,
				jsonSchema: async () => CatalogError as IJsonSchema
			})
		);
	}
}
