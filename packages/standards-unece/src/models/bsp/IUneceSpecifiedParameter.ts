// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceTolerance } from "./IUneceTolerance.js";
import type { UneceSpecifiedParameterTypeCodeList } from "../typeCodes/uneceSpecifiedParameterTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A specified feature that is fixed for the case in question but may be different in other cases.
 * @see https://vocabulary.uncefact.org/SpecifiedParameter
 */
export interface IUneceSpecifiedParameter {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecifiedParameter;

	/**
	 * A textual description for this specified parameter.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier of this specified parameter.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The name, expressed as text, for this specified parameter.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A type, expressed as text, for this specified parameter.
	 * @see https://vocabulary.uncefact.org/parameterType
	 */
	parameterType?: string;

	/**
	 * The code specifying the status of this specified parameter.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * A measure of a value of the status for this specified parameter.
	 * @see https://vocabulary.uncefact.org/statusValueMeasure
	 */
	statusValueMeasure?: IUneceMeasureType[];

	/**
	 * The code specifying the type of parameter.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceSpecifiedParameterTypeCodeList | string;

	/**
	 * The value, expressed as text, for this specified parameter.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;

	/**
	 * The indication of whether or not the value for this specified parameter is allowed.
	 * @see https://vocabulary.uncefact.org/valueAllowedIndicator
	 */
	valueAllowedIndicator?: boolean;

	/**
	 * A measure of a value for this specified parameter.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IUneceMeasureType[];

	/**
	 * A tolerance specified for the value of this parameter.
	 * @see https://vocabulary.uncefact.org/valueTolerance
	 */
	valueTolerance?: IUneceTolerance[];
}
