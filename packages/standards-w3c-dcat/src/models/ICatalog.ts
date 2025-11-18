// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { DcatClasses } from "./dcatClasses.js";
import type { ICatalogRecord } from "./ICatalogRecord.js";
import type { IDataService } from "./IDataService.js";
import type { IDataset } from "./IDataset.js";
import type { IResource } from "./IResource.js";

/**
 * Interface for DCAT Catalog.
 * A curated collection of metadata about resources (datasets and data services).
 * Note: dcat:Catalog is a sub-class of dcat:Dataset per the W3C spec.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog
 */
export interface ICatalog extends IDataset {
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
	"dcat:themeTaxonomy"?: ObjectOrArray<IResource>;

	/**
	 * A resource that is listed in the catalog.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_resource
	 */
	"dcat:resource"?: ObjectOrArray<IResource>;

	/**
	 * A dataset that is listed in the catalog.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_dataset
	 */
	"dcat:dataset"?: ObjectOrArray<IDataset>;

	/**
	 * A data service that is listed in the catalog.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_service
	 */
	"dcat:service"?: ObjectOrArray<IDataService>;

	/**
	 * A catalog that is listed in the catalog.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_catalog
	 */
	"dcat:catalog"?: ObjectOrArray<ICatalog>;

	/**
	 * A record describing the registration of a single resource in the catalog.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_catalog_record
	 */
	"dcat:record"?: ObjectOrArray<ICatalogRecord>;
}
