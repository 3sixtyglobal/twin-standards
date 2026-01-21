// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import { CatalogDataTypes } from "./catalogDataTypes.js";
import { ContractNegotiationDataTypes } from "./contractNegotiationDataTypes.js";
import { TransferProcessDataTypes } from "./transferProcessDataTypes.js";
import { DataspaceProtocolContexts } from "../models/dataspaceProtocolContexts.js";

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
		// Redirect Context to JsonLdContext for JSON-LD processing
		const escapedContext = DataspaceProtocolContexts.Context.replace(/[$()*+.?[\\\]^{|}]/g, "\\$&");
		JsonLdProcessor.addRedirect(
			new RegExp(`^${escapedContext}$`),
			DataspaceProtocolContexts.JsonLdContext
		);
	}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		ContractNegotiationDataTypes.registerTypes();
		CatalogDataTypes.registerTypes();
		TransferProcessDataTypes.registerTypes();
	}
}
