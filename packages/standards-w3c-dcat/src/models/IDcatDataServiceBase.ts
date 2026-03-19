// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { DcatClasses } from "./dcatClasses.js";
import type { IDcatResourceBase } from "./IDcatResourceBase.js";

/**
 * Base interface for DCAT Data Service without JSON-LD context.
 * This is the context-free variant of IDcatDataService, intended for embedding
 * data service objects inline within other objects where the context is provided by the enclosing document.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Data_Service
 */
export interface IDcatDataServiceBase extends IDcatResourceBase {
	/**
	 * The type identifier, typically "DataService".
	 */
	"@type": typeof DcatClasses.DataService;

	/**
	 * The root location or primary endpoint of the service (a Web-resolvable IRI).
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_endpoint_url
	 */
	"dcat:endpointURL"?: string;

	/**
	 * A description of the services available via the end-points, including their
	 * operations, parameters, etc.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_endpoint_description
	 */
	"dcat:endpointDescription"?: string;

	/**
	 * A collection of data that this data service can distribute.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_serves_dataset
	 */
	"dcat:servesDataset"?: ObjectOrArray<string>;
}
