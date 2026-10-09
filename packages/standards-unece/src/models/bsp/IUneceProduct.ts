// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A reference to a product or service produced by human or mechanical effort or by a natural process for trading purposes.
 * @see https://vocabulary.uncefact.org/Product
 */
export interface IUneceProduct {
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
	buyerAssignedId?: string | IJsonLdValueObject;

	/**
	 * A textual description for this referenced product.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A unique global identifier for this referenced product.
	 * @see https://vocabulary.uncefact.org/globalId
	 */
	globalId?: string | IJsonLdValueObject;

	/**
	 * A unique identifier for this referenced product.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * A unique industry assigned identifier for this referenced product.
	 * @see https://vocabulary.uncefact.org/industryAssignedId
	 */
	industryAssignedId?: string | IJsonLdValueObject;

	/**
	 * A unique manufacturer assigned identifier for this referenced product.
	 * @see https://vocabulary.uncefact.org/manufacturerAssignedId
	 */
	manufacturerAssignedId?: string | IJsonLdValueObject;

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
	sellerAssignedId?: string | IJsonLdValueObject;

	/**
	 * A unit quantity of this referenced product.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IUneceQuantityType[];
}
