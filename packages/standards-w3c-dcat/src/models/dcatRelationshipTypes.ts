// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * DCAT relationship types for describing qualified relationships between resources.
 * These are used with the dcat:qualifiedRelation property.
 * @see https://www.w3.org/TR/vocab-dcat-3/#qualified-forms
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcatRelationshipType = {
	/**
	 * The function of an entity with respect to another resource.
	 * Used in qualified relationships to specify the role.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:relationship_had_role
	 */
	HadRole: "hadRole",

	/**
	 * A related resource that is supplanted, displaced, or superseded by the described resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_replaces
	 */
	Replaces: "replaces",

	/**
	 * A related resource that supplants, displaces, or supersedes the described resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_is_replaced_by
	 */
	IsReplacedBy: "isReplacedBy",

	/**
	 * A related resource that is a version, edition, or adaptation of the described resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_has_version
	 */
	HasVersion: "hasVersion",

	/**
	 * A related resource of which the described resource is a version, edition, or adaptation.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_is_version_of
	 */
	IsVersionOf: "isVersionOf",

	/**
	 * A related resource that references, cites, or otherwise points to the described resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_is_referenced_by
	 */
	IsReferencedBy: "isReferencedBy",

	/**
	 * A related resource that is referenced, cited, or otherwise pointed to by the described resource.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_references
	 */
	References: "references",

	/**
	 * A related resource that requires the described resource to support its function, delivery, or coherence.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_requires
	 */
	Requires: "requires",

	/**
	 * A related resource that is required by the described resource to support its function, delivery, or coherence.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:resource_is_required_by
	 */
	IsRequiredBy: "isRequiredBy"
} as const;

/**
 * The relationship types for DCAT.
 */
export type DcatRelationshipType = (typeof DcatRelationshipType)[keyof typeof DcatRelationshipType];
