// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@3sixty/core";
import type { IOdrlPolicy } from "@3sixty/standards-w3c-odrl";
import type { DcatClasses } from "./dcatClasses.js";

/**
 * Base interface for DCAT Distribution without JSON-LD context.
 * This is the context-free variant of IDcatDistribution, intended for embedding
 * distribution objects inline within datasets where the context is provided by the enclosing document.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Distribution
 */
export interface IDcatDistributionBase {
	/**
	 * The type identifier, typically "Distribution".
	 */
	"@type": typeof DcatClasses.Distribution;

	/**
	 * The unique identifier for the distribution object.
	 */
	"@id"?: string;

	/**
	 * A name given to the distribution.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_title
	 */
	"dcterms:title"?: ObjectOrArray<string>;

	/**
	 * A free-text account of the distribution.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_description
	 */
	"dcterms:description"?: ObjectOrArray<string>;

	/**
	 * Date of formal issuance of the distribution.
	 * @json-schema format:date-time
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_release_date
	 */
	"dcterms:issued"?: string;

	/**
	 * Most recent date on which the distribution was changed, updated or modified.
	 * @json-schema format:date-time
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_update_date
	 */
	"dcterms:modified"?: string;

	/**
	 * A legal document under which the distribution is made available.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_license
	 */
	"dcterms:license"?: string;

	/**
	 * Information about who can access the distribution.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_access_rights
	 */
	"dcterms:accessRights"?: string;

	/**
	 * Information about rights held in and over the distribution.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_rights
	 */
	"dcterms:rights"?: string;

	/**
	 * A URL of the resource that gives access to a distribution of the dataset.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_access_url
	 */
	"dcat:accessURL"?: string;

	/**
	 * A data service that gives access to the distribution.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_access_service
	 */
	"dcat:accessService"?: string;

	/**
	 * The URL of the downloadable file in a given format.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_download_url
	 */
	"dcat:downloadURL"?: string;

	/**
	 * The size of the distribution in bytes.
	 * @json-schema minimum:0
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_byte_size
	 */
	"dcat:byteSize"?: number;

	/**
	 * The minimum spatial separation resolvable in a distribution, measured in meters.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_spatial_resolution
	 */
	"dcat:spatialResolutionInMeters"?: number;

	/**
	 * Minimum time period resolvable in the distribution.
	 * @json-schema format:duration
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_temporal_resolution
	 */
	"dcat:temporalResolution"?: string;

	/**
	 * An established standard to which the distribution conforms.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_conforms_to
	 */
	"dcterms:conformsTo"?: ObjectOrArray<string>;

	/**
	 * The media type of the distribution as defined by IANA.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_media_type
	 */
	"dcat:mediaType"?: string;

	/**
	 * The file format of the distribution.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_format
	 */
	"dcterms:format"?: string;

	/**
	 * The compression format of the distribution.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_compression_format
	 */
	"dcat:compressFormat"?: string;

	/**
	 * The package format of the distribution.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_packaging_format
	 */
	"dcat:packageFormat"?: string;

	/**
	 * The checksum property provides a mechanism to verify the data integrity.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_checksum
	 */
	"spdx:checksum"?: string;

	/**
	 * An ODRL conformant policy expressing the rights associated with the distribution.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_has_policy
	 */
	"odrl:hasPolicy"?: IOdrlPolicy;
}
