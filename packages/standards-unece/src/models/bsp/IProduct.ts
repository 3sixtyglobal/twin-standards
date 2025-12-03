// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IQuantityType } from "./IQuantityType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A reference to a product or service produced by human or mechanical effort or by a natural process for trading purposes.
 * @see https://vocabulary.uncefact.org/Product
 */
export interface IProduct extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Product;

	/**
	 * The unique buyer assigned identifier for this referenced product.
	 * @see https://vocabulary.uncefact.org/buyerAssignedId
	 */
	buyerAssignedId?: string;

	/**
	 * A textual description for this referenced product.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A unique global identifier for this referenced product.
	 * @see https://vocabulary.uncefact.org/globalId
	 */
	globalId?: string;

	/**
	 * A unique identifier for this referenced product.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A unique industry assigned identifier for this referenced product.
	 * @see https://vocabulary.uncefact.org/industryAssignedId
	 */
	industryAssignedId?: string;

	/**
	 * A unique manufacturer assigned identifier for this referenced product.
	 * @see https://vocabulary.uncefact.org/manufacturerAssignedId
	 */
	manufacturerAssignedId?: string;

	/**
	 * A name, expressed as text, for this referenced product.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A code specifying a type of relationship for this referenced product.
	 * @see https://vocabulary.uncefact.org/relationshipTypeCode
	 */
	relationshipTypeCode?: string;

	/**
	 * The unique seller assigned identifier for this referenced product.
	 * @see https://vocabulary.uncefact.org/sellerAssignedId
	 */
	sellerAssignedId?: string;

	/**
	 * A unit quantity of this referenced product.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IQuantityType[];
}
