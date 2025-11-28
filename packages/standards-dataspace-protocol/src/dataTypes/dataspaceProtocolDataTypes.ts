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
		JsonLdProcessor.addRedirect(
			new RegExp(DataspaceProtocolContexts.ContextRoot),
			DataspaceProtocolContexts.ContextRedirect
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
