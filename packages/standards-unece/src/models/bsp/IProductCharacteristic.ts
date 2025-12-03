// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAmountType } from "./IAmountType.js";
import type { IBinaryFile } from "./IBinaryFile.js";
import type { ICountry } from "./ICountry.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IProductCharacteristicCondition } from "./IProductCharacteristicCondition.js";
import type { IRange } from "./IRange.js";
import type { ISpecifiedMethod } from "./ISpecifiedMethod.js";
import type { ISpecifiedParameter } from "./ISpecifiedParameter.js";
import type { IStandard } from "./IStandard.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { ITolerance } from "./ITolerance.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A prominent attribute or aspect of a product.
 * @see https://vocabulary.uncefact.org/ProductCharacteristic
 */
export interface IProductCharacteristic extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductCharacteristic;

	/**
	 * A condition applicable to this product characteristic.
	 * @see https://vocabulary.uncefact.org/applicableCondition
	 */
	applicableCondition?: IProductCharacteristicCondition[];

	/**
	 * A country applicable to this product characteristic.
	 * @see https://vocabulary.uncefact.org/applicableCountry
	 */
	applicableCountry?: ICountry[];

	/**
	 * The referenced standard that is applicable to this product characteristic.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IStandard[];

	/**
	 * A sustainability characteristic applicable to this product characteristic.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A code specifying the content type of this product characteristic.
	 * @see https://vocabulary.uncefact.org/contentTypeCode
	 */
	contentTypeCode?: string;

	/**
	 * A textual description of this product characteristic.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A unique identifier for this product characteristic.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A code specifying a measurement method for this product characteristic.
	 * @see https://vocabulary.uncefact.org/measurementMethodCode
	 */
	measurementMethodCode?: string;

	/**
	 * The code specifying the value of this product characteristic.
	 * @see https://vocabulary.uncefact.org/productCharacteristicValueCode
	 */
	productCharacteristicValueCode?: string;

	/**
	 * A textual description of a target market for this product characteristic.
	 * @see https://vocabulary.uncefact.org/targetMarketDescription
	 */
	targetMarketDescription?: string;

	/**
	 * A code specifying a type of product characteristic.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * A value, expressed as text, for this product characteristic.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;

	/**
	 * The value, expressed as an amount, for this product characteristic.
	 * @see https://vocabulary.uncefact.org/valueAmount
	 */
	valueAmount?: IAmountType[];

	/**
	 * The value for this product characteristic expressed in a binary file.
	 * @see https://vocabulary.uncefact.org/valueBinaryFile
	 */
	valueBinaryFile?: IBinaryFile[];

	/**
	 * The value for this product characteristic expressed as a date, time, date time, or other date time value.
	 * @see https://vocabulary.uncefact.org/valueDateTime
	 */
	valueDateTime?: string;

	/**
	 * The value for this product characteristic expressed as an indicator.
	 * @see https://vocabulary.uncefact.org/valueIndicator
	 */
	valueIndicator?: boolean;

	/**
	 * A measure of a value for this product characteristic.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IMeasureType[];

	/**
	 * A method specified for a value of this product characteristic.
	 * @see https://vocabulary.uncefact.org/valueMethod
	 */
	valueMethod?: ISpecifiedMethod[];

	/**
	 * The value, expressed as a number, for this product characteristic.
	 * @see https://vocabulary.uncefact.org/valueNumeric
	 */
	valueNumeric?: string;

	/**
	 * A parameter specified for a value of this product characteristic.
	 * @see https://vocabulary.uncefact.org/valueParameter
	 */
	valueParameter?: ISpecifiedParameter[];

	/**
	 * A range specified for a value of this product characteristic.
	 * @see https://vocabulary.uncefact.org/valueRange
	 */
	valueRange?: IRange[];

	/**
	 * A tolerance specified for a value of this product characteristic.
	 * @see https://vocabulary.uncefact.org/valueTolerance
	 */
	valueTolerance?: ITolerance[];
}
