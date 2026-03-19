// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcatContextType } from "./dcatContextType.js";
import type { IDcatResourceBase } from "./IDcatResourceBase.js";

/**
 * Interface for DCAT catalogued resources.
 * This is the parent class of dcat:Dataset, dcat:DataService, and dcat:Catalog.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Resource
 */
export interface IDcatResource extends IDcatResourceBase {
	/**
	 * The JSON-LD context for the resource.
	 */
	"@context": DcatContextType;
}
