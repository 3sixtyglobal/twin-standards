// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A feature that is fixed for the case in question but may be different in other cases for this observation objective.
 * @see https://vocabulary.uncefact.org/ObservationObjectiveParameter
 */
export interface IUneceObservationObjectiveParameter extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ObservationObjectiveParameter;

	/**
	 * The textual description of this observation objective parameter.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier for this observation objective parameter.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The name, expressed as text, for this observation objective parameter.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A type, expressed as text, for this observation objective parameter.
	 * @see https://vocabulary.uncefact.org/parameterType
	 */
	parameterType?: string;

	/**
	 * The code specifying the status of this observation objective parameter.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * The measure of the status value for this observation objective parameter.
	 * @see https://vocabulary.uncefact.org/statusValueMeasure
	 */
	statusValueMeasure?: IUneceMeasureType[];

	/**
	 * The code specifying the type of observation objective parameter, such as retailer, country, toxic standard or
	 * examination type.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * The value, expressed as text, of this observation objective parameter.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;

	/**
	 * The indication of whether or not this value is allowed for this parameter observation objective.
	 * @see https://vocabulary.uncefact.org/valueAllowedIndicator
	 */
	valueAllowedIndicator?: boolean;

	/**
	 * The measure of the value for this observation objective parameter.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IUneceMeasureType;
}
