// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceRange } from "./IUneceRange.js";
import type { IUneceSpecifiedMethod } from "./IUneceSpecifiedMethod.js";
import type { IUneceSpecifiedParameter } from "./IUneceSpecifiedParameter.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { IUneceTolerance } from "./IUneceTolerance.js";
import type { UneceMeasuredAttributeCodeList } from "../lists/uneceMeasuredAttributeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A prominent attribute or aspect of a process.
 * @see https://vocabulary.uncefact.org/ProcessCharacteristic
 */
export interface IUneceProcessCharacteristic extends IJsonLdNodeObject {
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
	applicableStandard?: IUneceStandard;

	/**
	 * A sustainability characteristic applicable to this process characteristic.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic;

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
	maximumValueMeasure?: IUneceMeasureType;

	/**
	 * The code specifying the type of this process characteristic.
	 * @see https://vocabulary.uncefact.org/measuredAttributeTypeCode
	 */
	measuredAttributeTypeCode?: UneceMeasuredAttributeCodeList;

	/**
	 * The measure of the minimum value for this process characteristic.
	 * @see https://vocabulary.uncefact.org/minimumValueMeasure
	 */
	minimumValueMeasure?: IUneceMeasureType;

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
	valueAmount?: IUneceAmountType;

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
	valueMeasure?: IUneceMeasureType;

	/**
	 * A method specified for the value of this process characteristic.
	 * @see https://vocabulary.uncefact.org/valueMethod
	 */
	valueMethod?: IUneceSpecifiedMethod;

	/**
	 * The measure of the value, expressed as a number, for this process characteristic.
	 * @see https://vocabulary.uncefact.org/valueNumeric
	 */
	valueNumeric?: string;

	/**
	 * A parameter specified for the value of this process characteristic.
	 * @see https://vocabulary.uncefact.org/valueParameter
	 */
	valueParameter?: IUneceSpecifiedParameter;

	/**
	 * A range specified for the value of this process characteristic.
	 * @see https://vocabulary.uncefact.org/valueRange
	 */
	valueRange?: IUneceRange;

	/**
	 * A tolerance specified for the value of this process characteristic.
	 * @see https://vocabulary.uncefact.org/valueTolerance
	 */
	valueTolerance?: IUneceTolerance;
}
