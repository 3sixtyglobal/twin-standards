// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { DcatClasses } from "./dcatClasses.js";
import type { DcatContextType } from "./dcatContextType.js";
import type { IDcatResource } from "./IDcatResource.js";
import type { DcatDateTimeType, DcatLiteralType } from "./types/dcatPropertyTypes.js";

/**
 * Interface for DCAT Catalog Record.
 * A record in a catalog, describing the registration of a single dataset or data
 * service.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog_Record
 */
export interface IDcatCatalogRecord extends IJsonLdNodeObject {
	/**
	 * The JSON-LD context for the resource.
	 */
	"@context"?: DcatContextType;

	/**
	 * The type identifier, typically "CatalogRecord".
	 */
	"@type": typeof DcatClasses.CatalogRecord;

	/**
	 * A name given to the catalog record.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:record_title
	 */
	"dcterms:title"?: DcatLiteralType;

	/**
	 * A free-text account of the catalog record.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:record_description
	 */
	"dcterms:description"?: DcatLiteralType;

	/**
	 * The date of listing of the catalog record in the catalog.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:record_listing_date
	 */
	"dcterms:issued"?: DcatDateTimeType;

	/**
	 * Most recent date on which the catalog record entry was changed or modified.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:record_update_date
	 */
	"dcterms:modified"?: DcatDateTimeType;

	/**
	 * An established standard to which the catalog record conforms.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:record_conforms_to
	 */
	"dcterms:conformsTo"?: ObjectOrArray<string>;

	/**
	 * The dataset or data service described in the catalog record.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:record_primary_topic
	 */
	"foaf:primaryTopic"?: IDcatResource;
}
