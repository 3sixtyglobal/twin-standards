// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IMeasureType } from "./IMeasureType.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A row, line or series, commonly used to express the difference between lowest and highest values.
 * @see https://vocabulary.uncefact.org/Range
 */
export interface IRange extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Range;

	/**
	 * The identifier of the end of this specified range.
	 * @see https://vocabulary.uncefact.org/endId
	 */
	endId?: string;

	/**
	 * The measure of the maximum value for this specified range.
	 * @see https://vocabulary.uncefact.org/maximumValueMeasure
	 */
	maximumValueMeasure?: IMeasureType[];

	/**
	 * The measure of the minimum value for this specified range.
	 * @see https://vocabulary.uncefact.org/minimumValueMeasure
	 */
	minimumValueMeasure?: IMeasureType[];

	/**
	 * The identifier of the start of this specified range.
	 * @see https://vocabulary.uncefact.org/startId
	 */
	startId?: string;

	/**
	 * The total number of items in this specified range.
	 * @see https://vocabulary.uncefact.org/totalItemQuantity
	 */
	totalItemQuantity?: IQuantityType;

	/**
	 * The code specifying a type of this specified range.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * A value, expressed as text, for this specified range.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;

	/**
	 * The code specifying the value base system, such as Arabic numerals, for this specified range.
	 * @see https://vocabulary.uncefact.org/valueBaseSystemCode
	 */
	valueBaseSystemCode?: string;

	/**
	 * A code specifying a value for this specified range.
	 * @see https://vocabulary.uncefact.org/valueCode
	 */
	valueCode?: string;
}
