// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IDcatCatalogBase } from "@twin.org/standards-w3c-dcat";
import type { IDataspaceProtocolDataServiceBase } from "./IDataspaceProtocolDataServiceBase.js";
import type { IDataspaceProtocolDatasetBase } from "./IDataspaceProtocolDatasetBase.js";
import type { IDataspaceProtocolDistributionBase } from "./IDataspaceProtocolDistributionBase.js";
import type { DataspaceProtocolCatalogTypes } from "../catalog/dataspaceProtocolCatalogTypes.js";

/**
 * Catalog interface compliant with Eclipse Data Space Protocol.
 *
 * This interface extends ICatalog  and enforces DS Protocol-specific requirements
 * by overriding properties with more specific types and constraints.
 *
 * **Requirements per DS Protocol:**
 * - `@id` MUST be present for dataset identification (REQUIRED)
 * - participantId MUST be present (REQUIRED)
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
	 * Participant Id
	 */
	participantId: string;

	/**
	 * Other concerned catalogs
	 */
	catalog?: ObjectOrArray<IDataspaceProtocolCatalogBase>;

	/**
	 * Datasets registered
	 */
	dataset?: ObjectOrArray<IDataspaceProtocolDatasetBase>;

	/**
	 * Catalog's distributions
	 */
	distribution?: ObjectOrArray<IDataspaceProtocolDistributionBase>;

	/**
	 * Data services registered-
	 */
	service?: ObjectOrArray<IDataspaceProtocolDataServiceBase>;
}
