// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcatContextType } from "./dcatContextType.js";
import type { IDcatCatalogBase } from "./IDcatCatalogBase.js";

/**
 * Interface for DCAT Catalog.
 * A curated collection of metadata about resources (datasets and data services).
 * Note: dcat:Catalog is a sub-class of dcat:Dataset per the W3C spec.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog
 */
export interface IDcatCatalog extends IDcatCatalogBase {
	/**
	 * The JSON-LD context for the resource.
	 */
	"@context": DcatContextType;
}
