// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IOdrlPolicy } from "@twin.org/standards-w3c-odrl";
import type { DcatClasses } from "./dcatClasses.js";
import type { DcatContextType } from "./dcatContextType.js";
import type {
	DcatDateTimeType,
	DcatDecimalType,
	DcatDurationType,
	DcatLiteralType,
	DcatNonNegativeIntegerType
} from "./types/dcatPropertyTypes.js";

/**
 * Interface for DCAT Distribution.
 * A specific representation of a dataset. A dataset might be available in multiple
 * serializations that may differ in various ways.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Distribution
 */
export interface IDcatDistribution extends IJsonLdNodeObject {
	/**
	 * The JSON-LD context for the resource.
	 */
	"@context"?: DcatContextType;

	/**
	 * The type identifier, typically "Distribution".
	 */
	"@type": typeof DcatClasses.Distribution;

	/**
	 * A name given to the distribution.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_title
	 */
	"dcterms:title"?: DcatLiteralType;

	/**
	 * A free-text account of the distribution.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_description
	 */
	"dcterms:description"?: DcatLiteralType;

	/**
	 * Date of formal issuance of the distribution.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_release_date
	 */
	"dcterms:issued"?: DcatDateTimeType;

	/**
	 * Most recent date on which the distribution was changed, updated or modified.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_update_date
	 */
	"dcterms:modified"?: DcatDateTimeType;

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
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_byte_size
	 */
	"dcat:byteSize"?: DcatNonNegativeIntegerType;

	/**
	 * The minimum spatial separation resolvable in a distribution, measured in meters.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_spatial_resolution
	 */
	"dcat:spatialResolutionInMeters"?: DcatDecimalType;

	/**
	 * Minimum time period resolvable in the distribution.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_temporal_resolution
	 */
	"dcat:temporalResolution"?: DcatDurationType;

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
