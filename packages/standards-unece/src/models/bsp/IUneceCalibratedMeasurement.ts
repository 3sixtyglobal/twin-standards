// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { UneceCalibratedMeasurementTypeCodeList } from "../typeCodes/uneceCalibratedMeasurementTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A measurement established by a device which is tested to a calibration standard of known accuracy.
 * @see https://vocabulary.uncefact.org/CalibratedMeasurement
 */
export interface IUneceCalibratedMeasurement {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CalibratedMeasurement;

	/**
	 * The identifier for this calibrated measurement.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The code specifying a quantification type for this calibrated measurement, such as measured, calculated, or estimated.
	 * @see https://vocabulary.uncefact.org/quantificationTypeCode
	 */
	quantificationTypeCode?: string;

	/**
	 * The measure of the tolerance of this calibrated measurement.
	 * @see https://vocabulary.uncefact.org/toleranceMeasure
	 */
	toleranceMeasure?: IUneceMeasureType;

	/**
	 * The percent of tolerance of this calibrated measurement.
	 * @see https://vocabulary.uncefact.org/tolerancePercent
	 */
	tolerancePercent?: string;

	/**
	 * A code specifying a type of calibrated measurement.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceCalibratedMeasurementTypeCodeList | string;

	/**
	 * The code specifying a value for this calibrated measurement.
	 * @see https://vocabulary.uncefact.org/valueCode
	 */
	valueCode?: string;

	/**
	 * The value of a measure for this calibrated measurement.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IUneceMeasureType;

	/**
	 * The identifier of a version of this calibrated measurement.
	 * @see https://vocabulary.uncefact.org/versionId
	 */
	versionId?: string;
}
