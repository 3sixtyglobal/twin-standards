// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceCountry } from "./IUneceCountry.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceRange } from "./IUneceRange.js";
import type { IUneceSpecifiedMethod } from "./IUneceSpecifiedMethod.js";
import type { IUneceSpecifiedParameter } from "./IUneceSpecifiedParameter.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { IUneceTolerance } from "./IUneceTolerance.js";
import type { UneceProductBatchCharacteristicTypeCodeList } from "../typeCodes/uneceProductBatchCharacteristicTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A prominent attribute or aspect of a group of products considered or dealt with together.
 * @see https://vocabulary.uncefact.org/ProductBatchCharacteristic
 */
export interface IUneceProductBatchCharacteristic extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductBatchCharacteristic;

	/**
	 * A country applicable to this product batch characteristic.
	 * @see https://vocabulary.uncefact.org/applicableCountry
	 */
	applicableCountry?: IUneceCountry[];

	/**
	 * A referenced standard applicable to this product batch characteristic.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IUneceStandard[];

	/**
	 * A textual description of this product batch characteristic.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An identifier of this product batch characteristic.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The code specifying the value of this product batch characteristic.
	 * @see https://vocabulary.uncefact.org/productBatchCharacteristicValueCode
	 */
	productBatchCharacteristicValueCode?: string;

	/**
	 * A textual description of a target market for this product characteristic.
	 * @see https://vocabulary.uncefact.org/targetMarketDescription
	 */
	targetMarketDescription?: string;

	/**
	 * The code specifying the type of product batch characteristic.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceProductBatchCharacteristicTypeCodeList | string;

	/**
	 * A value, expressed as text, for this product batch characteristic.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;

	/**
	 * The value, expressed as an amount, for this product batch characteristic.
	 * @see https://vocabulary.uncefact.org/valueAmount
	 */
	valueAmount?: IUneceAmountType;

	/**
	 * The value, expressed as a date, time, date time, or other date time value, for this product batch characteristic.
	 * @see https://vocabulary.uncefact.org/valueDateTime
	 */
	valueDateTime?: string;

	/**
	 * The value, expressed as an indicator, for this product batch characteristic.
	 * @see https://vocabulary.uncefact.org/valueIndicator
	 */
	valueIndicator?: boolean;

	/**
	 * A measure of a value for this product batch characteristic.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IUneceMeasureType[];

	/**
	 * A method specified for a value of this product batch characteristic.
	 * @see https://vocabulary.uncefact.org/valueMethod
	 */
	valueMethod?: IUneceSpecifiedMethod[];

	/**
	 * The value, expressed as a number, for this product batch characteristic.
	 * @see https://vocabulary.uncefact.org/valueNumeric
	 */
	valueNumeric?: string;

	/**
	 * A parameter specified for a value of this product batch characteristic.
	 * @see https://vocabulary.uncefact.org/valueParameter
	 */
	valueParameter?: IUneceSpecifiedParameter[];

	/**
	 * A range specified for a value of this product batch characteristic.
	 * @see https://vocabulary.uncefact.org/valueRange
	 */
	valueRange?: IUneceRange[];

	/**
	 * A tolerance specified for a value of this product batch characteristic.
	 * @see https://vocabulary.uncefact.org/valueTolerance
	 */
	valueTolerance?: IUneceTolerance[];
}
