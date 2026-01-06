// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A state that applies to a product characteristic.
 * @see https://vocabulary.uncefact.org/ProductCharacteristicCondition
 */
export interface IUneceProductCharacteristicCondition extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductCharacteristicCondition;

	/**
	 * A name, expressed as text, for this product characteristic condition.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The code specifying the type of product characteristic condition.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * The measure of the value for this product characteristic condition.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IUneceMeasureType[];
}
