// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceObservationObjectiveParameter } from "./IUneceObservationObjectiveParameter.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Specifies the type of the performed observation and the acquired values of this observation on the sample.
 * @see https://vocabulary.uncefact.org/ObservationResultCharacteristic
 */
export interface IUneceObservationResultCharacteristic {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ObservationResultCharacteristic;

	/**
	 * The rate of the applied dilution for this sample observation result characteristic.
	 * @see https://vocabulary.uncefact.org/appliedDilutionNumeric
	 */
	appliedDilutionNumeric?: string;

	/**
	 * The code specifying the operator, such as less than, greater than or equal to, for comparing the measured value for this
	 * sample observation result characteristic.
	 * @see https://vocabulary.uncefact.org/comparisonOperatorCode
	 */
	comparisonOperatorCode?: string;

	/**
	 * An applicable observation objective parameter of the interpretation result for this sample observation result
	 * characteristic.
	 * @see https://vocabulary.uncefact.org/interpretationResultApplicableParameter
	 */
	interpretationResultApplicableParameter?: IUneceObservationObjectiveParameter[];

	/**
	 * Accuracy, expressed as a measure, of the measurement for this sample observation result characteristic.
	 * @see https://vocabulary.uncefact.org/measuredAccuracyMeasure
	 */
	measuredAccuracyMeasure?: IUneceMeasureType;

	/**
	 * The measured value, expressed as text, for this sample observation result characteristic.
	 * @see https://vocabulary.uncefact.org/measuredValue
	 */
	measuredValue?: string;

	/**
	 * The measured value, expressed as a measure, for this sample observation result characteristic.
	 * @see https://vocabulary.uncefact.org/measuredValueMeasure
	 */
	measuredValueMeasure?: IUneceMeasureType;

	/**
	 * The identifier of the method parameter for this sample observation result characteristic.
	 * @see https://vocabulary.uncefact.org/methodParameterId
	 */
	methodParameterId?: string;

	/**
	 * The parameter value, expressed as text, for this sample observation result characteristic.
	 * @see https://vocabulary.uncefact.org/parameterValue
	 */
	parameterValue?: string;

	/**
	 * The code specifying the quality of the result for this sample observation result characteristic.
	 * @see https://vocabulary.uncefact.org/qualityResultCode
	 */
	qualityResultCode?: string;

	/**
	 * The textual description of the quality of the result for this sample observation result characteristic.
	 * @see https://vocabulary.uncefact.org/qualityResultDescription
	 */
	qualityResultDescription?: string;

	/**
	 * The range, expressed as text, of the values of the measurements performed for this observation result characteristic
	 * sample.
	 * @see https://vocabulary.uncefact.org/range
	 */
	range?: string;

	/**
	 * The textual description of the reference level for the quality of the result for this sample observation result
	 * characteristic.
	 * @see https://vocabulary.uncefact.org/referenceLevelQualityResultDescription
	 */
	referenceLevelQualityResultDescription?: string;

	/**
	 * The indication of whether or not this sample observation result characteristic is shareable.
	 * @see https://vocabulary.uncefact.org/shareableIndicator
	 */
	shareableIndicator?: boolean;
}
