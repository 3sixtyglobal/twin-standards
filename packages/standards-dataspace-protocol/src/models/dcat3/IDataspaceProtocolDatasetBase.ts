// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDcatDatasetBase } from "@twin.org/standards-w3c-dcat";
import type { IDataspaceProtocolDistributionBase } from "./IDataspaceProtocolDistributionBase.js";
import type { DataspaceProtocolCatalogTypes } from "../catalog/dataspaceProtocolCatalogTypes.js";
import type { IDataspaceProtocolOfferBase } from "../odrl/IDataspaceProtocolOfferBase.js";

/**
 * Base dataset interface compliant with Eclipse Data Space Protocol, requiring an id, hasPolicy, and distribution.
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 */
export interface IDataspaceProtocolDatasetBase extends Omit<
	IDcatDatasetBase,
	"odrl:hasPolicy" | "dcat:distribution" | "@type"
> {
	/**
	 * The type identifier for the dataset.
	 * REQUIRED per Eclipse Data Space Protocol.
	 */
	"@type": typeof DataspaceProtocolCatalogTypes.Dataset;

	/**
	 * Unique identifier for the dataset.
	 * REQUIRED per Eclipse Data Space Protocol.
	 */
	"@id": string;

	/**
	 * Array of ODRL offers; must contain at least one entry.
	 * @json-schema minItems:1
	 */
	hasPolicy: IDataspaceProtocolOfferBase[];

	/**
	 * Distributions of this dataset; must contain at least one entry.
	 * @json-schema minItems:1
	 */
	distribution: IDataspaceProtocolDistributionBase[];
}
