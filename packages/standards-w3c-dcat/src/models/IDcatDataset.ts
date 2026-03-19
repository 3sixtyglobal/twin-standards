// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcatContextType } from "./dcatContextType.js";
import type { IDcatDatasetBase } from "./IDcatDatasetBase.js";

/**
 * Interface for DCAT Dataset.
 * A collection of data, published or curated by a single agent, and available
 * for access or download in one or more representations.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Dataset
 */
export interface IDcatDataset extends IDcatDatasetBase {
	/**
	 * The JSON-LD context for the resource.
	 */
	"@context": DcatContextType;
}
