// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcatContextType } from "./dcatContextType.js";
import type { IDcatDataServiceBase } from "./IDcatDataServiceBase.js";

/**
 * Interface for DCAT Data Service.
 * A collection of operations that provides access to one or more datasets or data
 * processing functions.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Data_Service
 */
export interface IDcatDataService extends IDcatDataServiceBase {
	/**
	 * The JSON-LD context for the resource.
	 */
	"@context": DcatContextType;
}
