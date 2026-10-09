// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@3sixty/data-core";
import { JsonLdDataTypes, JsonLdProcessor } from "@3sixty/data-json-ld";
import { DublinCoreDataTypes } from "@3sixty/standards-dublin-core";
import { FoafDataTypes } from "@3sixty/standards-foaf";
import { DcatContexts, DcatDataTypes } from "@3sixty/standards-w3c-dcat";
import { OdrlDataTypes } from "@3sixty/standards-w3c-odrl";
import { CatalogDataTypes } from "./catalogDataTypes.js";
import { ContractNegotiationDataTypes } from "./contractNegotiationDataTypes.js";
import { TransferProcessDataTypes } from "./transferProcessDataTypes.js";
import { VersionDataTypes } from "./versionDataTypes.js";
import * as CompiledValidators from "../compiled/validators.js";
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
		// Register the types referenced by the schemas, which are only registered once.
		JsonLdDataTypes.registerTypes();
		DublinCoreDataTypes.registerTypes();
		FoafDataTypes.registerTypes();
		DcatDataTypes.registerTypes();
		OdrlDataTypes.registerTypes();

		const typesDataspaceProtocol = [
			{
				type: "ContextType",
				schema: DsProtocolContextTypeSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolContextType
			}
		];

		DataTypeHelper.registerTypes(
			DataspaceProtocolContexts.Namespace,
			DcatContexts.JsonLdContext,
			typesDataspaceProtocol
		);

		DataTypeHelper.registerTypes(
			DataspaceProtocolContexts.JsonSchemaNamespace,
			DcatContexts.JsonLdContext,
			typesDataspaceProtocol.map(t => ({
				type: `DataspaceProtocol${t.type}`,
				schema: t.schema,
				compiledValidator: t.compiledValidator
			}))
		);

		ContractNegotiationDataTypes.registerTypes();
		CatalogDataTypes.registerTypes();
		TransferProcessDataTypes.registerTypes();
		VersionDataTypes.registerTypes();
	}
}
