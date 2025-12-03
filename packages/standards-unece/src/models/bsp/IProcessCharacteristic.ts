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
import type { IStandard } from "./IStandard.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { ITolerance } from "./ITolerance.js";
import type { MeasuredAttributeCodeList } from "../lists/measuredAttributeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A prominent attribute or aspect of a process.
 * @see https://vocabulary.uncefact.org/ProcessCharacteristic
 */
export interface IProcessCharacteristic extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProcessCharacteristic;

	/**
	 * A referenced standard applicable to this process characteristic.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IStandard[];

	/**
	 * A sustainability characteristic applicable to this process characteristic.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A condition or status, expressed as text, for this process characteristic.
	 * @see https://vocabulary.uncefact.org/condition
	 */
	condition?: string;

	/**
	 * A textual description of this process characteristic.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An identifier of this process characteristic.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The measure of the maximum value for this process characteristic.
	 * @see https://vocabulary.uncefact.org/maximumValueMeasure
	 */
	maximumValueMeasure?: IMeasureType[];

	/**
	 * The code specifying the type of this process characteristic.
	 * @see https://vocabulary.uncefact.org/measuredAttributeTypeCode
	 */
	measuredAttributeTypeCode?: MeasuredAttributeCodeList[];

	/**
	 * The measure of the minimum value for this process characteristic.
	 * @see https://vocabulary.uncefact.org/minimumValueMeasure
	 */
	minimumValueMeasure?: IMeasureType[];

	/**
	 * The code specifying the value of this process characteristic.
	 * @see https://vocabulary.uncefact.org/processCharacteristicValueCode
	 */
	processCharacteristicValueCode?: string;

	/**
	 * A value, expressed as text, for this process characteristic.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;

	/**
	 * The value, expressed as an amount, for this process characteristic.
	 * @see https://vocabulary.uncefact.org/valueAmount
	 */
	valueAmount?: IAmountType[];

	/**
	 * The value, expressed as a date, time, date time, or other date time value, for this process characteristic.
	 * @see https://vocabulary.uncefact.org/valueDateTime
	 */
	valueDateTime?: string;

	/**
	 * The value, expressed as an indicator, for this process characteristic.
	 * @see https://vocabulary.uncefact.org/valueIndicator
	 */
	valueIndicator?: boolean;

	/**
	 * The measure of the value for this process characteristic.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IMeasureType[];

	/**
	 * A method specified for the value of this process characteristic.
	 * @see https://vocabulary.uncefact.org/valueMethod
	 */
	valueMethod?: ISpecifiedMethod[];

	/**
	 * The measure of the value, expressed as a number, for this process characteristic.
	 * @see https://vocabulary.uncefact.org/valueNumeric
	 */
	valueNumeric?: string;

	/**
	 * A parameter specified for the value of this process characteristic.
	 * @see https://vocabulary.uncefact.org/valueParameter
	 */
	valueParameter?: ISpecifiedParameter[];

	/**
	 * A range specified for the value of this process characteristic.
	 * @see https://vocabulary.uncefact.org/valueRange
	 */
	valueRange?: IRange[];

	/**
	 * A tolerance specified for the value of this process characteristic.
	 * @see https://vocabulary.uncefact.org/valueTolerance
	 */
	valueTolerance?: ITolerance[];
}
