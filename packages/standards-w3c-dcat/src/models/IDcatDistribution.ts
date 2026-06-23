// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcatContextType } from "./dcatContextType.js";
import type { IDcatDistributionBase } from "./IDcatDistributionBase.js";

/**
 * Interface for DCAT Distribution.
 * A specific representation of a dataset. A dataset might be available in multiple
 * serializations that may differ in various ways.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Distribution
 */
export interface IDcatDistribution extends IDcatDistributionBase {
	/**
	 * The JSON-LD context for the resource.
	 */
	"@context": DcatContextType;
}
