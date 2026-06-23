// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for FOAF.
 * @see http://xmlns.com/foaf/0.1/
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const FoafTypes = {
	/**
	 * Document.
	 */
	Document: "Document",

	/**
	 * Image.
	 */
	Image: "Image",

	/**
	 * Agent.
	 */
	Agent: "Agent",

	/**
	 * Person.
	 */
	Person: "Person",

	/**
	 * Organization.
	 */
	Organization: "Organization",

	/**
	 * Group.
	 */
	Group: "Group"
} as const;

/**
 * The types for FOAF.
 * @see http://xmlns.com/foaf/0.1/
 */
export type FoafTypes = (typeof FoafTypes)[keyof typeof FoafTypes];
