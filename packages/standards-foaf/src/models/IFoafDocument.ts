// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdNodeObject, JsonLdObjectWithAliases } from "@twin.org/data-json-ld";
import type { FoafContextType } from "./foafContextType.js";
import type { FoafTypes } from "./foafTypes.js";
import type { IFoafBaseObject } from "./IFoafBaseObject.js";

/**
 * A FOAF Document
 * @see http://xmlns.com/foaf/0.1/
 */
export interface IFoafDocument extends IFoafBaseObject {
	/**
	 * The LD Context.
	 */
	"@context"?: FoafContextType;

	/**
	 * Type.
	 */
	"@type": typeof FoafTypes.Document | typeof FoafTypes.Image;

	/**
	 * A topic of some page or document.
	 * @see http://xmlns.com/foaf/spec/#term_topic
	 */
	topic?: string;

	/**
	 * The primary topic of some page or document.
	 * @see http://xmlns.com/foaf/spec/#term_primaryTopic
	 */
	primaryTopic?: ObjectOrArray<IJsonLdNodeObject>;

	/**
	 * A sha1sum hash, in hex.
	 * @see http://xmlns.com/foaf/spec/#term_sha1sum
	 */
	sha1?: string;
}

/**
 * A FOAF Document with FOAF-prefixed aliases for non-JSON-LD keys.
 * This allows using either prefixed aliases (e.g., "foaf:name") when defining a FOAF Document.
 */
export type IFoafDocumentWithAliases<T extends string = "foaf"> = JsonLdObjectWithAliases<
	IFoafDocument,
	T
>;
