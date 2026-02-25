// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { JsonLdObjectWithAliases } from "@twin.org/data-json-ld";
import type { FoafContextType } from "./foafContextType.js";
import type { FoafTypes } from "./foafTypes.js";
import type { IFoafAgent } from "./IFoafAgent.js";
import type { IFoafImage } from "./IFoafImage.js";

/**
 * A FOAF Person.
 * @see http://xmlns.com/foaf/0.1/
 */
export interface IFoafPerson extends IFoafAgent {
	/**
	 * The LD Context.
	 */
	"@context"?: FoafContextType;

	/**
	 * Type.
	 */
	"@type": typeof FoafTypes.Person;

	/**
	 * The family name of some person.
	 * @see http://xmlns.com/foaf/spec/#term_familyName
	 */
	familyName?: string;

	/**
	 * The given name of some person.
	 * @see http://xmlns.com/foaf/spec/#term_givenName
	 */
	givenName?: string;

	/**
	 * A person known by this person (indicating some level of reciprocated interaction between the parties).
	 * @see http://xmlns.com/foaf/spec/#term_knows
	 */
	knows?: ObjectOrArray<IFoafAgent>;

	/**
	 * An image that can be used to represent some thing.
	 * @see http://xmlns.com/foaf/spec/#term_img
	 */
	img?: IFoafImage;

	/**
	 * A short informal nickname characterizing an agent (includes login identifiers, IRC and other chat nicknames).
	 * @see http://xmlns.com/foaf/spec/#term_nick
	 */
	nick?: string;
}

/**
 * A FOAF Person with FOAF-prefixed aliases for non-JSON-LD keys.
 * This allows using either prefixed aliases (e.g., "foaf:name") when defining a FOAF Person.
 */
export type IFoafPersonWithAliases<T extends string = "foaf"> = JsonLdObjectWithAliases<
	IFoafPerson,
	T
>;
