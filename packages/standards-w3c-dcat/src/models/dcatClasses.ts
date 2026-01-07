// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * DCAT core classes representing the main entities in the Data Catalog Vocabulary.
 * @see https://www.w3.org/TR/vocab-dcat-3/#classes
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcatClasses = {
	/**
	 * A curated collection of metadata about resources (e.g., datasets and data services in the context of a data catalog).
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog
	 */
	Catalog: "dcat:Catalog",

	/**
	 * Resource published or curated by a single agent.
	 * This is an abstract class and should not be used directly.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Resource
	 */
	Resource: "dcat:Resource",

	/**
	 * A collection of data, published or curated by a single agent, and available for access or download in one or more representations.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Dataset
	 */
	Dataset: "dcat:Dataset",

	/**
	 * A specific representation of a dataset. A dataset might be available in multiple serializations that may differ in various ways.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Distribution
	 */
	Distribution: "dcat:Distribution",

	/**
	 * A collection of operations that provides access to one or more datasets or data processing functions.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Data_Service
	 */
	DataService: "dcat:DataService",

	/**
	 * A collection of datasets that are published separately, but share some common characteristics.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Dataset_Series
	 */
	DatasetSeries: "dcat:DatasetSeries",

	/**
	 * A record in a data catalog, describing the registration of a single dataset or data service.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog_Record
	 */
	CatalogRecord: "dcat:CatalogRecord",

	/**
	 * An association class for attaching additional information to a relationship between DCAT Resources.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Relationship
	 */
	Relationship: "dcat:Relationship",

	/**
	 * A role is the function of a resource or agent with respect to another resource, in the context of resource attribution or resource relationships..
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Role
	 */
	Role: "dcat:Role"
} as const;

/**
 * The classes for DCAT.
 */
export type DcatClasses = (typeof DcatClasses)[keyof typeof DcatClasses];
