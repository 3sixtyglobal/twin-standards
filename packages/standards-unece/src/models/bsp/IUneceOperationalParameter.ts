// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceRange } from "./IUneceRange.js";
import type { UneceOperationalParameterTypeCodeList } from "../typeCodes/uneceOperationalParameterTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A set of measurable factors that specifies the conditions within which an entity operates correctly.
 * @see https://vocabulary.uncefact.org/OperationalParameter
 */
export interface IUneceOperationalParameter extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.OperationalParameter;

	/**
	 * The indication whether or not this operational parameter is changeable.
	 * @see https://vocabulary.uncefact.org/changeableIndicator
	 */
	changeableIndicator?: boolean;

	/**
	 * A defined range specified for this operational parameter.
	 * @see https://vocabulary.uncefact.org/definedRange
	 */
	definedRange?: IUneceRange[];

	/**
	 * A textual description of this operational parameter.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier of this operational parameter.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The name, expressed as text, of this operational parameter.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The code specifying the status of this operational parameter.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * The code specifying the type of this operational parameter.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceOperationalParameterTypeCodeList | string;

	/**
	 * The value, expressed as text, of this operational parameter.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;

	/**
	 * The indication of whether or not this operational parameter value is allowed.
	 * @see https://vocabulary.uncefact.org/valueAllowedIndicator
	 */
	valueAllowedIndicator?: boolean;

	/**
	 * The measure value for this operational parameter.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IUneceMeasureType;
}
