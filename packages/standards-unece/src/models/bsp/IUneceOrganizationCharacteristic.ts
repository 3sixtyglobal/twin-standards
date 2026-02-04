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
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A prominent attribute or aspect of an organization.
 * @see https://vocabulary.uncefact.org/OrganizationCharacteristic
 */
export interface IUneceOrganizationCharacteristic extends IJsonLdNodeObject {
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
	applicableStandard?: IUneceStandard[];

	/**
	 * A sustainability characteristic applicable to this organization characteristic.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

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
	valueAmount?: IUneceAmountType;

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
	valueMeasure?: IUneceMeasureType;

	/**
	 * A method specified for the value of this organization characteristic.
	 * @see https://vocabulary.uncefact.org/valueMethod
	 */
	valueMethod?: IUneceSpecifiedMethod[];

	/**
	 * The value, expressed as a number, for this organization characteristic.
	 * @see https://vocabulary.uncefact.org/valueNumeric
	 */
	valueNumeric?: string;

	/**
	 * A parameter specified for the value of this organization characteristic.
	 * @see https://vocabulary.uncefact.org/valueParameter
	 */
	valueParameter?: IUneceSpecifiedParameter[];

	/**
	 * A range specified for the value of this organization characteristic.
	 * @see https://vocabulary.uncefact.org/valueRange
	 */
	valueRange?: IUneceRange[];

	/**
	 * A tolerance specified for the value of this organization characteristic.
	 * @see https://vocabulary.uncefact.org/valueTolerance
	 */
	valueTolerance?: IUneceTolerance[];
}
