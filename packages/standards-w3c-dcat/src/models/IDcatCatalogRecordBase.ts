// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { DcatClasses } from "./dcatClasses.js";
import type { IDcatResource } from "./IDcatResource.js";

/**
 * Base interface for DCAT Catalog Record without JSON-LD context.
 * This is the context-free variant of IDcatCatalogRecord, intended for embedding
 * catalog record objects inline within catalogs where the context is provided by the enclosing document.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog_Record
 */
export interface IDcatCatalogRecordBase {
	/**
	 * The type identifier, typically "CatalogRecord".
	 */
	"@type": typeof DcatClasses.CatalogRecord;

	/**
	 * The unique identifier for the catalog record.
	 */
	"@id"?: string;

	/**
	 * A name given to the catalog record.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:record_title
	 */
	"dcterms:title"?: ObjectOrArray<string>;

	/**
	 * A free-text account of the catalog record.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:record_description
	 */
	"dcterms:description"?: ObjectOrArray<string>;

	/**
	 * The date of listing of the catalog record in the catalog.
	 * @json-schema format:date-time
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:record_listing_date
	 */
	"dcterms:issued"?: string;

	/**
	 * Most recent date on which the catalog record entry was changed or modified.
	 * @json-schema format:date-time
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:record_update_date
	 */
	"dcterms:modified"?: string;

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
