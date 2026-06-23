// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IDublinCorePeriodOfTime } from "@twin.org/standards-dublin-core";
import type { DcatClasses } from "./dcatClasses.js";
import type { IDcatDistributionBase } from "./IDcatDistributionBase.js";
import type { IDcatResourceBase } from "./IDcatResourceBase.js";

/**
 * Base interface for DCAT Dataset without JSON-LD context.
 * This is the context-free variant of IDcatDataset, intended for embedding
 * dataset objects inline within other objects where the context is provided by the enclosing document.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Dataset
 */
export interface IDcatDatasetBase extends IDcatResourceBase {
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
	"dcat:distribution"?: ObjectOrArray<IDcatDistributionBase>;

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
	"dcat:spatialResolutionInMeters"?: number;

	/**
	 * The temporal period that the dataset covers.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal
	 */
	"dcterms:temporal"?: IDublinCorePeriodOfTime;

	/**
	 * Minimum time period resolvable in the dataset.
	 * @json-schema format:duration
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal_resolution
	 */
	"dcat:temporalResolution"?: string;

	/**
	 * An activity that generated, or provides the business context for, the creation of the dataset.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_was_generated_by
	 */
	"prov:wasGeneratedBy"?: IJsonLdNodeObject | string;
}
