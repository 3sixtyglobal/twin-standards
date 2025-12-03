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
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A prominent attribute or aspect of an organization.
 * @see https://vocabulary.uncefact.org/OrganizationCharacteristic
 */
export interface IOrganizationCharacteristic extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.OrganizationCharacteristic;

	/**
	 * A referenced standard applicable to this organization characteristic.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IStandard[];

	/**
	 * A sustainability characteristic applicable to this organization characteristic.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A condition or status, expressed as text, of this organization characteristic.
	 * @see https://vocabulary.uncefact.org/condition
	 */
	condition?: string;

	/**
	 * A textual description of this organization characteristic.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An identifier of this organization characteristic.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The code specifying the value of this organization characteristic.
	 * @see https://vocabulary.uncefact.org/organizationCharacteristicValueCode
	 */
	organizationCharacteristicValueCode?: string;

	/**
	 * The code specifying the type of organization characteristic.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * A value, expressed as text, for this organization characteristic.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;

	/**
	 * The value, expressed as an amount, for this organization characteristic.
	 * @see https://vocabulary.uncefact.org/valueAmount
	 */
	valueAmount?: IAmountType[];

	/**
	 * The value for this organization characteristic expressed as a date, time, date time, or other date time value.
	 * @see https://vocabulary.uncefact.org/valueDateTime
	 */
	valueDateTime?: string;

	/**
	 * The value for this organization characteristic expressed as an indicator.
	 * @see https://vocabulary.uncefact.org/valueIndicator
	 */
	valueIndicator?: boolean;

	/**
	 * A measure of a value for this organization characteristic.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IMeasureType[];

	/**
	 * A method specified for the value of this organization characteristic.
	 * @see https://vocabulary.uncefact.org/valueMethod
	 */
	valueMethod?: ISpecifiedMethod[];

	/**
	 * The value, expressed as a number, for this organization characteristic.
	 * @see https://vocabulary.uncefact.org/valueNumeric
	 */
	valueNumeric?: string;

	/**
	 * A parameter specified for the value of this organization characteristic.
	 * @see https://vocabulary.uncefact.org/valueParameter
	 */
	valueParameter?: ISpecifiedParameter[];

	/**
	 * A range specified for the value of this organization characteristic.
	 * @see https://vocabulary.uncefact.org/valueRange
	 */
	valueRange?: IRange[];

	/**
	 * A tolerance specified for the value of this organization characteristic.
	 * @see https://vocabulary.uncefact.org/valueTolerance
	 */
	valueTolerance?: ITolerance[];
}
