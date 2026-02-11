// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A reference to a sum of money for which something is or may be bought or sold.
 * @see https://vocabulary.uncefact.org/ReferencePrice
 */
export interface IUneceReferencePrice extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ReferencePrice;

	/**
	 * A quantity on which the reference price is based.
	 * @see https://vocabulary.uncefact.org/basisQuantity
	 */
	basisQuantity?: IUneceQuantityType[];

	/**
	 * The monetary value of a charged reference price.
	 * @see https://vocabulary.uncefact.org/chargeAmount
	 */
	chargeAmount?: IUneceAmountType;

	/**
	 * The code specifying the comparison method for this reference price.
	 * @see https://vocabulary.uncefact.org/comparisonMethodCode
	 */
	comparisonMethodCode?: string;

	/**
	 * An indication of whether or not the reference price is a net price.
	 * @see https://vocabulary.uncefact.org/netPriceIndicator
	 */
	netPriceIndicator?: boolean;
}
