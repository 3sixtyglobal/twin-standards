// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IMeasureType } from "./IMeasureType.js";
import type { IRange } from "./IRange.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A set of measurable factors that specifies the conditions of its operation within a specific context.
 * @see https://vocabulary.uncefact.org/ControlSettingParameter
 */
export interface IControlSettingParameter extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ControlSettingParameter;

	/**
	 * The indication whether or not this control setting parameter is changeable.
	 * @see https://vocabulary.uncefact.org/changeableIndicator
	 */
	changeableIndicator?: boolean;

	/**
	 * A textual description of this control setting parameter.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier of this control setting parameter.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The name, expressed as text, of this control setting parameter.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A requested range specified for this control setting parameter.
	 * @see https://vocabulary.uncefact.org/requestedRange
	 */
	requestedRange?: IRange[];

	/**
	 * The code specifying the status of this control setting parameter.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * The code specifying a type of parameter for this control setting parameter.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * The value, expressed as text, of this control setting parameter.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;

	/**
	 * The indication of whether or not this control setting parameter value is allowed.
	 * @see https://vocabulary.uncefact.org/valueAllowedIndicator
	 */
	valueAllowedIndicator?: boolean;

	/**
	 * The measure value for this control setting parameter.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IMeasureType[];
}
