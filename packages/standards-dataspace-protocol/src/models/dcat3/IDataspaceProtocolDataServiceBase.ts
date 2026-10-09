// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDcatDataServiceBase } from "@3sixty/standards-w3c-dcat";
import type { IDataspaceProtocolDatasetBase } from "./IDataspaceProtocolDatasetBase.js";
import type { DataspaceProtocolCatalogTypes } from "../catalog/dataspaceProtocolCatalogTypes.js";

/**
 * Base data service interface compliant with Eclipse Data Space Protocol, requiring an id and endpointURL.
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 */
export interface IDataspaceProtocolDataServiceBase extends Omit<
	IDcatDataServiceBase,
	"@type" | "dcat:servesDataset" | "dcat:endpointURL"
> {
	/**
	 * The type identifier for the Data Service.
	 * REQUIRED per Eclipse Data Space Protocol.
	 */
	"@type": typeof DataspaceProtocolCatalogTypes.DataService;

	/**
	 * Unique identifier for the dataset.
	 * REQUIRED per Eclipse Data Space Protocol.
	 */
	"@id": string;

	/**
	 * Endpoint URL.
	 */
	endpointURL: string;

	/**
	 * Datasets served.
	 * @json-schema minItems:1
	 */
	servesDataset?: IDataspaceProtocolDatasetBase[];
}
