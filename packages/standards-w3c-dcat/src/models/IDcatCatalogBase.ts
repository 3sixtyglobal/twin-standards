// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { DcatClasses } from "./dcatClasses.js";
import type { IDcatCatalogRecordBase } from "./IDcatCatalogRecordBase.js";
import type { IDcatDataServiceBase } from "./IDcatDataServiceBase.js";
import type { IDcatDatasetBase } from "./IDcatDatasetBase.js";
import type { IDcatResource } from "./IDcatResource.js";

/**
 * Base interface for DCAT Catalog without JSON-LD context.
 * This is the context-free variant of IDcatCatalog, intended for embedding
 * catalogs inline within other objects where the context is provided by the enclosing document.
 * Note: dcat:Catalog is a sub-class of dcat:Dataset per the W3C spec.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog
 */
export interface IDcatCatalogBase extends IDcatDatasetBase {
	/**
	 * The type identifier, typically "Catalog".
	 */
	"@type": typeof DcatClasses.Catalog;

	/**
	 * A homepage of the catalog (a public Web document usually available in HTML).
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_homepage
	 */
	"foaf:homepage"?: string;

	/**
	 * A knowledge organization system (KOS) used to classify the resources in the catalog.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_themes
	 */
	"dcat:themeTaxonomy"?: ObjectOrArray<IDcatResource>;

	/**
	 * A resource that is listed in the catalog.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_resource
	 */
	"dcat:resource"?: ObjectOrArray<IDcatResource>;

	/**
	 * A dataset that is listed in the catalog.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_dataset
	 */
	"dcat:dataset"?: ObjectOrArray<IDcatDatasetBase>;

	/**
	 * A data service that is listed in the catalog.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_service
	 */
	"dcat:service"?: ObjectOrArray<IDcatDataServiceBase>;

	/**
	 * A catalog that is listed in the catalog.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_catalog
	 */
	"dcat:catalog"?: ObjectOrArray<IDcatCatalogBase>;

	/**
	 * A record describing the registration of a single resource in the catalog.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_catalog_record
	 */
	"dcat:record"?: ObjectOrArray<IDcatCatalogRecordBase>;
}
