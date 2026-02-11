// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { UneceMeasurementTypeCodeList } from "../typeCodes/uneceMeasurementTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An amount, size, or extent as established by measuring.
 * @see https://vocabulary.uncefact.org/Measurement
 */
export interface IUneceMeasurement extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Measurement;

	/**
	 * An actual measure for this measurement.
	 * @see https://vocabulary.uncefact.org/actualMeasure
	 */
	actualMeasure?: IUneceMeasureType[];

	/**
	 * A code specifying the operator, such as, less than, greater than or equal to, for comparing two actual measures.
	 * @see https://vocabulary.uncefact.org/comparisonOperatorCode
	 */
	comparisonOperatorCode?: string;

	/**
	 * A measure of a condition for this measurement.
	 * @see https://vocabulary.uncefact.org/conditionMeasure
	 */
	conditionMeasure?: IUneceMeasureType[];

	/**
	 * A textual description of this measurement.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A measurement method expressed as text.
	 * @see https://vocabulary.uncefact.org/method
	 */
	method?: string;

	/**
	 * A code specifying a type of measurement.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceMeasurementTypeCodeList | string;
}
