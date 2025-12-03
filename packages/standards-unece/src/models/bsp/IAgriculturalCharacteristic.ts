// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAmountType } from "./IAmountType.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IRange } from "./IRange.js";
import type { ISpecifiedMethod } from "./ISpecifiedMethod.js";
import type { ISpecifiedParameter } from "./ISpecifiedParameter.js";
import type { ITolerance } from "./ITolerance.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A prominent attribute or aspect of an agricultural object.
 * @see https://vocabulary.uncefact.org/AgriculturalCharacteristic
 */
export interface IAgriculturalCharacteristic extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AgriculturalCharacteristic;

	/**
	 * The code specifying the value of this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/agriculturalCharacteristicValueCode
	 */
	agriculturalCharacteristicValueCode?: string;

	/**
	 * The textual description of this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier for this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The code specifying the type of agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * The value, expressed as text, for this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;

	/**
	 * The value, expressed as an amount, for this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/valueAmount
	 */
	valueAmount?: IAmountType[];

	/**
	 * The value, expressed as a date, time, date time, or other date time value, of this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/valueDateTime
	 */
	valueDateTime?: string;

	/**
	 * The value, expressed as an indicator, for this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/valueIndicator
	 */
	valueIndicator?: boolean;

	/**
	 * The measure of a value for this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IMeasureType[];

	/**
	 * A method specified for the value of this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/valueMethod
	 */
	valueMethod?: ISpecifiedMethod[];

	/**
	 * The value, expressed as a number, for this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/valueNumeric
	 */
	valueNumeric?: string;

	/**
	 * A parameter specified for the value of this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/valueParameter
	 */
	valueParameter?: ISpecifiedParameter[];

	/**
	 * A range specified for the value of this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/valueRange
	 */
	valueRange?: IRange[];

	/**
	 * A tolerance specified for the value of this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/valueTolerance
	 */
	valueTolerance?: ITolerance[];
}
