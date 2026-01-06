// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A measurement of the variation limits of an ingredient.
 * @see https://vocabulary.uncefact.org/IngredientRangeMeasurement
 */
export interface IUneceIngredientRangeMeasurement extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.IngredientRangeMeasurement;

	/**
	 * The textual description of this ingredient range measurement.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The actual lower limit measure of this ingredient range measurement.
	 * @see https://vocabulary.uncefact.org/lowerLimitActualMeasure
	 */
	lowerLimitActualMeasure?: IUneceMeasureType[];

	/**
	 * The code specifying the comparison operator for the lower limit of this ingredient range measurement.
	 * @see https://vocabulary.uncefact.org/lowerLimitComparisonOperatorCode
	 */
	lowerLimitComparisonOperatorCode?: string;

	/**
	 * The measure of the pressure condition at which this lower limit ingredient range measurement is taken.
	 * @see https://vocabulary.uncefact.org/lowerLimitPressureConditionMeasure
	 */
	lowerLimitPressureConditionMeasure?: IUneceMeasureType[];

	/**
	 * The actual upper limit measure of this ingredient range measurement.
	 * @see https://vocabulary.uncefact.org/upperLimitActualMeasure
	 */
	upperLimitActualMeasure?: IUneceMeasureType[];

	/**
	 * The code specifying the comparison operator for the upper limit of this ingredient range measurement.
	 * @see https://vocabulary.uncefact.org/upperLimitComparisonOperatorCode
	 */
	upperLimitComparisonOperatorCode?: string;

	/**
	 * The measure of the pressure condition at which this upper limit ingredient range measurement is taken.
	 * @see https://vocabulary.uncefact.org/upperLimitPressureConditionMeasure
	 */
	upperLimitPressureConditionMeasure?: IUneceMeasureType[];
}
