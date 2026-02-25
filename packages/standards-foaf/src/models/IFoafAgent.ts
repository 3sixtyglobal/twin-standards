// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdNodeObject, JsonLdObjectWithAliases } from "@twin.org/data-json-ld";
import type { FoafContextType } from "./foafContextType.js";
import type { FoafTypes } from "./foafTypes.js";
import type { IFoafBaseObject } from "./IFoafBaseObject.js";
import type { IFoafDocument } from "./IFoafDocument.js";

/**
 * A FOAF Agent.
 * @see http://xmlns.com/foaf/0.1/
 */
export interface IFoafAgent extends IFoafBaseObject {
	/**
	 * The LD Context.
	 */
	"@context"?: FoafContextType;

	/**
	 * Type.
	 */
	"@type":
		| typeof FoafTypes.Agent
		| typeof FoafTypes.Person
		| typeof FoafTypes.Organization
		| typeof FoafTypes.Group
		| string;

	/**
	 * The age in years of some agent.
	 * @see http://xmlns.com/foaf/spec/#term_age
	 */
	age?: number;

	/**
	 * Something that was made by this agent.
	 * @see http://xmlns.com/foaf/spec/#term_made
	 */
	made?: ObjectOrArray<IJsonLdNodeObject>;

	/**
	 * A weblog of some thing (whether person, group, company etc.).
	 * @see http://xmlns.com/foaf/spec/#term_weblog
	 */
	weblog?: IFoafDocument;

	/**
	 * An OpenID for an agent.
	 * @see http://xmlns.com/foaf/spec/#term_openid
	 */
	openid?: IFoafDocument;

	/**
	 * A page about a topic of interest to this person.
	 * @see http://xmlns.com/foaf/spec/#term_interest
	 */
	interest?: IFoafDocument;

	/**
	 * A thing of interest to this person.
	 * @see http://xmlns.com/foaf/spec/#term_topic_interest
	 */
	topic_interest?: IJsonLdNodeObject;
}

/**
 * A FOAF Agent with FOAF-prefixed aliases for non-JSON-LD keys.
 * This allows using either prefixed aliases (e.g., "foaf:name") when defining a FOAF Agent.
 */
export type IFoafAgentWithAliases<T extends string = "foaf"> = JsonLdObjectWithAliases<
	IFoafAgent,
	T
>;
