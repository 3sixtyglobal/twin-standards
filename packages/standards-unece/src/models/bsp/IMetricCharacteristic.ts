// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAmountType } from "./IAmountType.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { IRange } from "./IRange.js";
import type { ISpecifiedMethod } from "./ISpecifiedMethod.js";
import type { ISpecifiedParameter } from "./ISpecifiedParameter.js";
import type { ITolerance } from "./ITolerance.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A prominent attribute or aspect of a metric (a standard of measurement).
 * @see https://vocabulary.uncefact.org/MetricCharacteristic
 */
export interface IMetricCharacteristic extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.MetricCharacteristic;

	/**
	 * The code specifying the content type of this metric characteristic.
	 * @see https://vocabulary.uncefact.org/contentTypeCode
	 */
	contentTypeCode?: string;

	/**
	 * A textual description of this metric characteristic.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An identifier of this metric characteristic.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The code specifying the value of this metric characteristic.
	 * @see https://vocabulary.uncefact.org/metricCharacteristicValueCode
	 */
	metricCharacteristicValueCode?: string;

	/**
	 * The code specifying the type of metric characteristic.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * A value, expressed as text, for this metric characteristic.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;

	/**
	 * The monetary value for this metric characteristic.
	 * @see https://vocabulary.uncefact.org/valueAmount
	 */
	valueAmount?: IAmountType[];

	/**
	 * The value for this metric characteristic, expressed as a date, time, date time, or other date time value.
	 * @see https://vocabulary.uncefact.org/valueDateTime
	 */
	valueDateTime?: string;

	/**
	 * The value for this metric characteristic expressed as an indicator.
	 * @see https://vocabulary.uncefact.org/valueIndicator
	 */
	valueIndicator?: boolean;

	/**
	 * A measure of a value for this metric characteristic.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IMeasureType[];

	/**
	 * A method specified for a value of this metric characteristic.
	 * @see https://vocabulary.uncefact.org/valueMethod
	 */
	valueMethod?: ISpecifiedMethod[];

	/**
	 * The value, expressed as a number, for this metric characteristic.
	 * @see https://vocabulary.uncefact.org/valueNumeric
	 */
	valueNumeric?: string;

	/**
	 * A parameter specified for a value for this metric characteristic.
	 * @see https://vocabulary.uncefact.org/valueParameter
	 */
	valueParameter?: ISpecifiedParameter[];

	/**
	 * The value, expressed as a quantity, for this metric characteristic.
	 * @see https://vocabulary.uncefact.org/valueQuantity
	 */
	valueQuantity?: IQuantityType[];

	/**
	 * A range specified for a value of this metric characteristic.
	 * @see https://vocabulary.uncefact.org/valueRange
	 */
	valueRange?: IRange[];

	/**
	 * A tolerance specified for a value of this metric characteristic.
	 * @see https://vocabulary.uncefact.org/valueTolerance
	 */
	valueTolerance?: ITolerance[];
}
