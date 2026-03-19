// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import { DcatContexts } from "@twin.org/standards-w3c-dcat";
import { CatalogDataTypes } from "./catalogDataTypes.js";
import { ContractNegotiationDataTypes } from "./contractNegotiationDataTypes.js";
import { TransferProcessDataTypes } from "./transferProcessDataTypes.js";
import { DataspaceProtocolContexts } from "../models/dataspaceProtocolContexts.js";
import DsProtocolContextTypeSchema from "../schemas/DataspaceProtocolContextType.json" with { type: "json" };

/**
 * Handle all the data types for Dataspace Protocol.
 */
export class DataspaceProtocolDataTypes {
	/**
	 * Register the JSON-LD Redirects.
	 */
	public static registerRedirects(): void {
		// Escape regex special characters and anchor to match exactly the namespace URL
		// This prevents matching sub-paths like odrl-profile.jsonld or context.jsonld
		const escapedNamespace = DataspaceProtocolContexts.Namespace.replace(
			/[$()*+.?[\\\]^{|}]/g,
			"\\$&"
		);
		JsonLdProcessor.addRedirect(
			new RegExp(`^${escapedNamespace}$`),
			DataspaceProtocolContexts.JsonLdContext
		);
	}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		const typesDataspaceProtocol = [{ type: "ContextType", schema: DsProtocolContextTypeSchema }];

		DataTypeHelper.registerTypes(
			DataspaceProtocolContexts.Namespace,
			DcatContexts.JsonLdContext,
			typesDataspaceProtocol
		);

		DataTypeHelper.registerTypes(
			DataspaceProtocolContexts.JsonSchemaNamespace,
			DcatContexts.JsonLdContext,
			typesDataspaceProtocol.map(t => ({ type: `DataspaceProtocol${t.type}`, schema: t.schema }))
		);

		ContractNegotiationDataTypes.registerTypes();
		CatalogDataTypes.registerTypes();
		TransferProcessDataTypes.registerTypes();
	}
}
