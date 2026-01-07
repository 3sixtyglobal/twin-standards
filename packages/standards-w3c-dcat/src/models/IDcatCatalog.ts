// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { DcatClasses } from "./dcatClasses.js";
import type { IDcatDataset } from "./IDcatDataset.js";
import type { IDcatResource } from "./IDcatResource.js";
import type {
	CatalogOptionalContext,
	CatalogRecordOptionalContext,
	DataServiceOptionalContext,
	DatasetOptionalContext
} from "./types/dcatContextFreeTypes.js";

/**
 * Interface for DCAT Catalog.
 * A curated collection of metadata about resources (datasets and data services).
 * Note: dcat:Catalog is a sub-class of dcat:Dataset per the W3C spec.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog
 */
export interface IDcatCatalog extends IDcatDataset {
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
	"dcat:dataset"?: ObjectOrArray<DatasetOptionalContext>;

	/**
	 * A data service that is listed in the catalog.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_service
	 */
	"dcat:service"?: ObjectOrArray<DataServiceOptionalContext>;

	/**
	 * A catalog that is listed in the catalog.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_catalog
	 */
	"dcat:catalog"?: ObjectOrArray<CatalogOptionalContext>;

	/**
	 * A record describing the registration of a single resource in the catalog.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_catalog_record
	 */
	"dcat:record"?: ObjectOrArray<CatalogRecordOptionalContext>;
}
