// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcatClasses } from "./dcatClasses.js";
import type { IDcatDataset } from "./IDcatDataset.js";
import type { DatasetOptionalContext } from "./types/dcatContextFreeTypes.js";

/**
 * Interface for DCAT Dataset Series.
 * A collection of datasets that are published separately, but share some common
 * characteristics that enable them to be grouped together.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Dataset_Series
 */
export interface IDcatDatasetSeries extends IDcatDataset {
	/**
	 * The type identifier, typically "DatasetSeries".
	 */
	"@type": typeof DcatClasses.DatasetSeries;

	/**
	 * A dataset that is part of this dataset series.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_series_first
	 */
	"dcat:first"?: string;

	/**
	 * A dataset that is part of this dataset series.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_series_last
	 */
	"dcat:last"?: string;

	/**
	 * A dataset that is part of this dataset series.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_series_member
	 */
	"dcat:seriesMember"?: string | string[];

	/**
	 * A dataset that is part of this dataset series.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_dataset
	 */
	"dcat:dataset"?: DatasetOptionalContext | DatasetOptionalContext[];
}
