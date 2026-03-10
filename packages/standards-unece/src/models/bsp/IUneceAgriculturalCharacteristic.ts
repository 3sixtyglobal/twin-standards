// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceRange } from "./IUneceRange.js";
import type { IUneceSpecifiedMethod } from "./IUneceSpecifiedMethod.js";
import type { IUneceSpecifiedParameter } from "./IUneceSpecifiedParameter.js";
import type { IUneceTolerance } from "./IUneceTolerance.js";
import type { UneceAgriculturalCharacteristicTypeCodeList } from "../typeCodes/uneceAgriculturalCharacteristicTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A prominent attribute or aspect of an agricultural object.
 * @see https://vocabulary.uncefact.org/AgriculturalCharacteristic
 */
export interface IUneceAgriculturalCharacteristic {
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
	identifier?: string | IJsonLdValueObject;

	/**
	 * The code specifying the type of agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceAgriculturalCharacteristicTypeCodeList | string;

	/**
	 * The value, expressed as text, for this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;

	/**
	 * The value, expressed as an amount, for this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/valueAmount
	 */
	valueAmount?: IUneceAmountType;

	/**
	 * The value, expressed as a date, time, date time, or other date time value, of this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/valueDateTime
	 * @format date-time
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
	valueMeasure?: IUneceMeasureType;

	/**
	 * A method specified for the value of this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/valueMethod
	 */
	valueMethod?: IUneceSpecifiedMethod[];

	/**
	 * The value, expressed as a number, for this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/valueNumeric
	 */
	valueNumeric?: string;

	/**
	 * A parameter specified for the value of this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/valueParameter
	 */
	valueParameter?: IUneceSpecifiedParameter[];

	/**
	 * A range specified for the value of this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/valueRange
	 */
	valueRange?: IUneceRange[];

	/**
	 * A tolerance specified for the value of this agricultural characteristic.
	 * @see https://vocabulary.uncefact.org/valueTolerance
	 */
	valueTolerance?: IUneceTolerance[];
}
