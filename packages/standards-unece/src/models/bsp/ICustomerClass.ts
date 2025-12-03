// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The conditions and requirements of the type of person who may use or purchase a product or service.
 * @see https://vocabulary.uncefact.org/CustomerClass
 */
export interface ICustomerClass extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CustomerClass;

	/**
	 * The code specifying the category, such as adult or child, of this specified customer class,.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * A category name, expressed as text, of this specified customer class.
	 * @see https://vocabulary.uncefact.org/categoryName
	 */
	categoryName?: string;

	/**
	 * A textual description of this specified customer class.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the gender in this specified customer class.
	 * @see https://vocabulary.uncefact.org/genderCode
	 */
	genderCode?: string;

	/**
	 * The value, expressed as a number of years, for the lower age limit for the category of this specified customer class.
	 * @see https://vocabulary.uncefact.org/lowerAgeLimitNumeric
	 */
	lowerAgeLimitNumeric?: string;

	/**
	 * The code specifying the meal service category for this specified customer class.
	 * @see https://vocabulary.uncefact.org/mealServiceCategoryCode
	 */
	mealServiceCategoryCode?: string;

	/**
	 * The indication of whether or not special bedding service is offered for this specified customer class.
	 * @see https://vocabulary.uncefact.org/specialBeddingServiceOfferedIndicator
	 */
	specialBeddingServiceOfferedIndicator?: boolean;

	/**
	 * The value, expressed as a number of years, for the upper age limit for the category of this specified customer class.
	 * @see https://vocabulary.uncefact.org/upperAgeLimitNumeric
	 */
	upperAgeLimitNumeric?: string;
}
