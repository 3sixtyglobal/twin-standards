// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDcatDataServiceBase } from "@twin.org/standards-w3c-dcat";
import type { IDataspaceProtocolDatasetBase } from "./IDataspaceProtocolDatasetBase.js";
import type { DataspaceProtocolCatalogTypes } from "../catalog/dataspaceProtocolCatalogTypes.js";

/**
 * Data Service interface compliant with Eclipse Data Space Protocol.
 *
 * This interface extends IDataService  and enforces DS Protocol-specific requirements
 * by overriding properties with more specific types and constraints.
 *
 * **Requirements per DS Protocol:**
 * - `@id` MUST be present for dataset identification (REQUIRED)
 * - endpointURL MUST be present (REQUIRED)
 *
 * **Type System Design:**
 * - Interface extension allows TypeScript to override inherited property types
 * - Standards packages (@twin.org/standards-w3c-*) follow W3C specs exactly
 * - DS Protocol-specific constraints are defined here
 *
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 * @see https://www.w3.org/TR/vocab-dcat-3/ - W3C DCAT v3 spec
 *
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
