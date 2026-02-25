// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject, JsonLdObjectWithAliases } from "@twin.org/data-json-ld";
import type { FoafContextType } from "./foafContextType.js";
import type { FoafTypes } from "./foafTypes.js";
import type { IFoafDocument } from "./IFoafDocument.js";

/**
 * A FOAF image.
 * @see http://xmlns.com/foaf/0.1/
 */
export interface IFoafImage extends IFoafDocument {
	/**
	 * The LD Context.
	 *
	 */
	"@context"?: FoafContextType;

	/**
	 * Type.
	 */
	"@type": typeof FoafTypes.Image;

	/**
	 * A thing depicted in this representation.
	 * @see http://xmlns.com/foaf/spec/#term_depicts
	 */
	depicts?: IJsonLdNodeObject;

	/**
	 * A derived thumbnail image.
	 * @see http://xmlns.com/foaf/spec/#term_thumbnail
	 */
	thumbnail?: IFoafImage;
}

/**
 * A FOAF Image with FOAF-prefixed aliases for non-JSON-LD keys.
 * This allows using either prefixed aliases (e.g., "foaf:name") when defining a FOAF Image.
 */
export type IFoafImageWithAliases<T extends string = "foaf"> = JsonLdObjectWithAliases<
	IFoafImage,
	T
>;
