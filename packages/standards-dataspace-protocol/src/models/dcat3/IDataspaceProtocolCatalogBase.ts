// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDcatCatalogBase } from "@twin.org/standards-w3c-dcat";
import type { IDataspaceProtocolDataServiceBase } from "./IDataspaceProtocolDataServiceBase.js";
import type { IDataspaceProtocolDatasetBase } from "./IDataspaceProtocolDatasetBase.js";
import type { IDataspaceProtocolDistributionBase } from "./IDataspaceProtocolDistributionBase.js";
import type { DataspaceProtocolCatalogTypes } from "../catalog/dataspaceProtocolCatalogTypes.js";

/**
 * Base catalog interface compliant with Eclipse Data Space Protocol, requiring an id and participantId.
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 */
export interface IDataspaceProtocolCatalogBase extends Omit<
	IDcatCatalogBase,
	"@type" | "dcat:catalog" | "dcat:dataset" | "dcat:distribution" | "dcat:service"
> {
	/**
	 * The type identifier for the Catalog.
	 * REQUIRED per Eclipse Data Space Protocol.
	 */
	"@type": typeof DataspaceProtocolCatalogTypes.Catalog;

	/**
	 * Unique identifier for the dataset.
	 * REQUIRED per Eclipse Data Space Protocol.
	 */
	"@id": string;

	/**
	 * The participant identifier.
	 */
	participantId: string;

	/**
	 * Nested catalogs.
	 */
	catalog?: IDataspaceProtocolCatalogBase[];

	/**
	 * Datasets registered in this catalog.
	 */
	dataset?: IDataspaceProtocolDatasetBase[];

	/**
	 * Distributions for this catalog.
	 */
	distribution?: IDataspaceProtocolDistributionBase[];

	/**
	 * Data services registered in this catalog.
	 */
	service?: IDataspaceProtocolDataServiceBase[];
}
