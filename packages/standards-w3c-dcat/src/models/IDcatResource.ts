// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IFoafAgent } from "@twin.org/standards-foaf";
import type { IOdrlPolicy } from "@twin.org/standards-w3c-odrl";
import type { DcatClasses } from "./dcatClasses.js";
import type { DcatContextType } from "./dcatContextType.js";
import type { IDcatRelationship } from "./IDcatRelationship.js";
import type { DcatDateTimeType, DcatLiteralType } from "./types/dcatPropertyTypes.js";

/**
 * Base interface for DCAT catalogued resources.
 * This is the parent class of dcat:Dataset, dcat:DataService, and dcat:Catalog.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Resource
 */
export interface IDcatResource extends IJsonLdNodeObject {
	/**
	 * The JSON-LD context for the resource.
	 */
	"@context"?: DcatContextType;

	/**
	 * The type of the resource.
	 * Typically "Catalog", "Dataset", "DataService", "DatasetSeries", or the base "Resource".
	 */
	"@type":
		| typeof DcatClasses.Resource
		| typeof DcatClasses.Dataset
		| typeof DcatClasses.DataService
		| typeof DcatClasses.Catalog
		| typeof DcatClasses.DatasetSeries;

	/**
	 * A name given to the resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title
	 */
	"dcterms:title"?: DcatLiteralType;

	/**
	 * A free-text account of the resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description
	 */
	"dcterms:description"?: DcatLiteralType;

	/**
	 * A unique identifier of the resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_identifier
	 */
	"dcterms:identifier"?: DcatLiteralType;

	/**
	 * Date of formal issuance (publication) of the resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date
	 */
	"dcterms:issued"?: DcatDateTimeType;

	/**
	 * Most recent date on which the resource was changed, updated or modified.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date
	 */
	"dcterms:modified"?: DcatDateTimeType;

	/**
	 * A language of the resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language
	 */
	"dcterms:language"?: ObjectOrArray<string>;

	/**
	 * An entity responsible for making the resource available.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher
	 */
	"dcterms:publisher"?: IFoafAgent | string;

	/**
	 * An entity responsible for producing the resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator
	 */
	"dcterms:creator"?: IFoafAgent;

	/**
	 * Information about who can access the resource or an indication of its security status.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights
	 */
	"dcterms:accessRights"?: IJsonLdNodeObject | string;

	/**
	 * A legal document under which the resource is made available.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license
	 */
	"dcterms:license"?: IJsonLdNodeObject | string;

	/**
	 * Information about rights held in and over the resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_rights
	 */
	"dcterms:rights"?: IJsonLdNodeObject | string;

	/**
	 * An established standard to which the resource conforms.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_conforms_to
	 */
	"dcterms:conformsTo"?: ObjectOrArray<string>;

	/**
	 * The nature or genre of the resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_type
	 */
	"dcterms:type"?: string;

	/**
	 * Relevant contact information for the catalogued resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point
	 */
	"dcat:contactPoint"?: IJsonLdNodeObject | string;

	/**
	 * A keyword or tag describing the resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword
	 */
	"dcat:keyword"?: DcatLiteralType;

	/**
	 * A main category of the resource. A resource can have multiple themes.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme
	 */
	"dcat:theme"?: ObjectOrArray<string>;

	/**
	 * A Web page that can be navigated to gain access to the resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page
	 */
	"dcat:landingPage"?: ObjectOrArray<string>;

	/**
	 * Link to a description of a relationship with another resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_relation
	 */
	"dcat:qualifiedRelation"?: IDcatRelationship | string;

	/**
	 * An ODRL conformant policy expressing the rights associated with the resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_has_policy
	 */
	"odrl:hasPolicy"?: IOdrlPolicy;
}
