// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcatClasses } from "./dcatClasses.js";
import type { IDcatResource } from "./IDcatResource.js";

/**
 * Interface for DCAT Data Service.
 * A collection of operations that provides access to one or more datasets or data
 * processing functions.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Data_Service
 */
export interface IDcatDataService extends IDcatResource {
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
	"dcat:servesDataset"?: string | string[];
}
