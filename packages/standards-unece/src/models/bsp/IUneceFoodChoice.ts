// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceFoodChoiceTypeCodeList } from "../typeCodes/uneceFoodChoiceTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A guest's decision which food to buy or eat.
 * @see https://vocabulary.uncefact.org/FoodChoice
 */
export interface IUneceFoodChoice extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.FoodChoice;

	/**
	 * A textual description of this guest food choice.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A name, expressed as text, for this guest food choice.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A restriction, expressed as text, for this guest food choice.
	 * @see https://vocabulary.uncefact.org/restriction
	 */
	restriction?: string;

	/**
	 * The code specifying the type of guest food choice.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceFoodChoiceTypeCodeList | string;
}
