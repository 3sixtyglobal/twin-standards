// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { DcatClasses } from "./dcatClasses.js";
import type { DcatContextType } from "./dcatContextType.js";
import type { IRole } from "./IRole.js";

/**
 * Interface for DCAT Relationship.
 * An association class for attaching additional information to a relationship
 * between DCAT Resources.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Relationship
 */
export interface IRelationship extends IJsonLdNodeObject {
	/**
	 * The JSON-LD context for the resource.
	 */
	"@context": DcatContextType;

	/**
	 * The type identifier, typically "Relationship".
	 */
	"@type": typeof DcatClasses.Relationship;

	/**
	 * The link to a related resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:relationship_relation
	 */
	"dcterms:relation"?: string;

	/**
	 * The function of an entity or agent with respect to another resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:relationship_hadRole
	 */
	"dcat:hadRole"?: IRole;
}
