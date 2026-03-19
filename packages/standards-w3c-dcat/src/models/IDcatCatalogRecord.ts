// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcatContextType } from "./dcatContextType.js";
import type { IDcatCatalogRecordBase } from "./IDcatCatalogRecordBase.js";

/**
 * Interface for DCAT Catalog Record.
 * A record in a catalog, describing the registration of a single dataset or data
 * service.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog_Record
 */
export interface IDcatCatalogRecord extends IDcatCatalogRecordBase {
	/**
	 * The JSON-LD context for the resource.
	 */
	"@context": DcatContextType;
}
