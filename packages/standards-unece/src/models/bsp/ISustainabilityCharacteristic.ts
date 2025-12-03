// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAmountType } from "./IAmountType.js";
import type { IBinaryFile } from "./IBinaryFile.js";
import type { IInspectionResult } from "./IInspectionResult.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IRange } from "./IRange.js";
import type { ISpecifiedParameter } from "./ISpecifiedParameter.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { IStandard } from "./IStandard.js";
import type { ISupplyChainEvent } from "./ISupplyChainEvent.js";
import type { ITolerance } from "./ITolerance.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A prominent attribute or aspect of an object, such as recyclability of a product, which can meet customer needs without
 * compromising the ability of future generations to meet their own needs.
 * @see https://vocabulary.uncefact.org/SustainabilityCharacteristic
 */
export interface ISustainabilityCharacteristic extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SustainabilityCharacteristic;

	/**
	 * A specified inspection result applicable to this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/applicableInspectionResult
	 */
	applicableInspectionResult?: IInspectionResult[];

	/**
	 * A referenced standard applicable to this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IStandard[];

	/**
	 * The code specifying the category of this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * The code specifying the content type of this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/contentTypeCode
	 */
	contentTypeCode?: string;

	/**
	 * A textual description of this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An identifier of this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A measure of a maximum value for this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/maximumValueMeasure
	 */
	maximumValueMeasure?: IMeasureType[];

	/**
	 * The code specifying the measurement method for this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/measurementMethodCode
	 */
	measurementMethodCode?: string;

	/**
	 * A measure of a minimum value for this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/minimumValueMeasure
	 */
	minimumValueMeasure?: IMeasureType[];

	/**
	 * The indication of whether or not this sustainability characteristic is shareable.
	 * @see https://vocabulary.uncefact.org/shareableIndicator
	 */
	shareableIndicator?: boolean;

	/**
	 * A supply chain event specified for this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainEvent
	 */
	specifiedSupplyChainEvent?: ISupplyChainEvent[];

	/**
	 * The subordinate category for this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/subordinateCategoryCode
	 */
	subordinateCategoryCode?: string;

	/**
	 * The code specifying the subordinate type of sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/subordinateTypeCode
	 */
	subordinateTypeCode?: string;

	/**
	 * The code specifying the value of this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/sustainabilityCharacteristicValueCode
	 */
	sustainabilityCharacteristicValueCode?: string;

	/**
	 * The code specifying the type of sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * A value, expressed as text, for this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;

	/**
	 * The value, expressed as an amount, for this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/valueAmount
	 */
	valueAmount?: IAmountType[];

	/**
	 * A value, expressed in a binary file, for this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/valueBinaryFile
	 */
	valueBinaryFile?: IBinaryFile[];

	/**
	 * The value, expressed as a date, time, date time, or other date time value, for this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/valueDateTime
	 */
	valueDateTime?: string;

	/**
	 * The value, expressed as an indicator, for this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/valueIndicator
	 */
	valueIndicator?: boolean;

	/**
	 * A measure of a value for this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IMeasureType[];

	/**
	 * The value, expressed as a number, for this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/valueNumeric
	 */
	valueNumeric?: string;

	/**
	 * A parameter specified for the value of this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/valueParameter
	 */
	valueParameter?: ISpecifiedParameter[];

	/**
	 * A period specified for the value of this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/valuePeriod
	 */
	valuePeriod?: ISpecifiedPeriod[];

	/**
	 * A range specified for the value of this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/valueRange
	 */
	valueRange?: IRange[];

	/**
	 * A tolerance specified for the value of this sustainability characteristic.
	 * @see https://vocabulary.uncefact.org/valueTolerance
	 */
	valueTolerance?: ITolerance[];
}
