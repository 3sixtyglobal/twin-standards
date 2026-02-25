// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcatClasses } from "./dcatClasses.js";
import type { DcatContextType } from "./dcatContextType.js";
import type { DcatLiteralType } from "./types/dcatPropertyTypes.js";

/**
 * Interface for DCAT Role.
 * A role is the function of a resource or agent with respect to another resource,
 * in the context of resource attribution or resource relationships.
 * @see https://www.w3.org/TR/vocab-dcat-3/#Class:Role
 */
export interface IDcatRole {
	/**
	 * The JSON-LD context for the resource.
	 */
	"@context": DcatContextType;

	/**
	 * The type identifier, typically "Role".
	 */
	"@type": typeof DcatClasses.Role;

	/**
	 * The unique identifier for the role object.
	 */
	"@id"?: string;

	/**
	 * A name given to the role.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_title
	 */
	"dcterms:title"?: DcatLiteralType;
}
