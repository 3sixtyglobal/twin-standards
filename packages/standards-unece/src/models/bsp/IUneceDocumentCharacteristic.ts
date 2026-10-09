// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { UneceDocumentCharacteristicTypeCodeList } from "../typeCodes/uneceDocumentCharacteristicTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A prominent attribute or aspect of a document.
 * @see https://vocabulary.uncefact.org/DocumentCharacteristic
 */
export interface IUneceDocumentCharacteristic {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.DocumentCharacteristic;

	/**
	 * A textual description of this document characteristic.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A code specifying a value of this document characteristic.
	 * @see https://vocabulary.uncefact.org/documentCharacteristicValueCode
	 */
	documentCharacteristicValueCode?: string;

	/**
	 * An identifier for this document characteristic.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * A location, expressed as text, for this document characteristic.
	 * @see https://vocabulary.uncefact.org/location
	 */
	location?: string;

	/**
	 * A name, expressed as text, for this document characteristic.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A code specifying a type of document characteristic.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceDocumentCharacteristicTypeCodeList | string;

	/**
	 * A value, expressed as text, for this document characteristic.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;

	/**
	 * The code specifying the adjustment direction for value of this document characteristic.
	 * @see https://vocabulary.uncefact.org/valueAdjustmentDirectionCode
	 */
	valueAdjustmentDirectionCode?: string;

	/**
	 * A value, expressed as a monetary value, for this document characteristic.
	 * @see https://vocabulary.uncefact.org/valueAmount
	 */
	valueAmount?: IUneceAmountType[];

	/**
	 * The indication of whether or not the value of this document characteristic is changed.
	 * @see https://vocabulary.uncefact.org/valueChangedIndicator
	 */
	valueChangedIndicator?: boolean;

	/**
	 * A date, time, date time or other date time value for this document characteristic.
	 * @see https://vocabulary.uncefact.org/valueDateTime
	 * @json-schema format:date-time
	 */
	valueDateTime?: string;

	/**
	 * A measure of a value for this document characteristic.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IUneceMeasureType[];

	/**
	 * A value, expressed as a number, for this document characteristic.
	 * @see https://vocabulary.uncefact.org/valueNumeric
	 */
	valueNumeric?: string;

	/**
	 * A value, expressed as a percentage, for this document characteristic.
	 * @see https://vocabulary.uncefact.org/valuePercent
	 */
	valuePercent?: string;

	/**
	 * A value, expressed as a quantity, for this document characteristic.
	 * @see https://vocabulary.uncefact.org/valueQuantity
	 */
	valueQuantity?: IUneceQuantityType[];
}
