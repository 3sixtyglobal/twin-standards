// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IDublinCorePeriodOfTime } from "@twin.org/standards-dublin-core";
import type { DcatClasses } from "./dcatClasses.js";
import type { IDcatResource } from "./IDcatResource.js";
import type { DistributionOptionalContext } from "./types/dcatContextFreeTypes.js";
import type { DcatDecimalType, DcatDurationType } from "./types/dcatPropertyTypes.js";

/**
 * Interface for DCAT Dataset.
 * A collection of data, published or curated by a single agent, and available
 * for access or download in one or more representations.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Dataset
 */
export interface IDcatDataset extends IDcatResource {
	/**
	 * The type identifier, typically "Dataset".
	 * Can also be "Catalog" or "DatasetSeries" for subclasses.
	 */
	"@type":
		| typeof DcatClasses.Dataset
		| typeof DcatClasses.Catalog
		| typeof DcatClasses.DatasetSeries;

	/**
	 * An available distribution of the dataset.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_distribution
	 */
	"dcat:distribution"?: DistributionOptionalContext | DistributionOptionalContext[];

	/**
	 * The frequency at which the dataset is published.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_frequency
	 */
	"dcterms:accrualPeriodicity"?: string;

	/**
	 * A dataset series of which the dataset is part.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_in_series
	 */
	"dcat:inSeries"?: string;

	/**
	 * The geographical area covered by the dataset.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial
	 */
	"dcterms:spatial"?: IJsonLdNodeObject | string | string[];

	/**
	 * Minimum spatial separation resolvable in a dataset, measured in meters.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial_resolution
	 */
	"dcat:spatialResolutionInMeters"?: DcatDecimalType;

	/**
	 * The temporal period that the dataset covers.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal
	 */
	"dcterms:temporal"?: IDublinCorePeriodOfTime;

	/**
	 * Minimum time period resolvable in the dataset.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal_resolution
	 */
	"dcat:temporalResolution"?: DcatDurationType;

	/**
	 * An activity that generated, or provides the business context for, the creation of the dataset.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_was_generated_by
	 */
	"prov:wasGeneratedBy"?: IJsonLdNodeObject | string;
}
