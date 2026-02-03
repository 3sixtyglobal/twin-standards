// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceObservationObjectiveParameter } from "./IUneceObservationObjectiveParameter.js";
import type { IUneceSpecifiedMethod } from "./IUneceSpecifiedMethod.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A property of a collection of diagnostic data, visual or technical data, obtained by a performed inspection.
 * @see https://vocabulary.uncefact.org/InspectionResultCharacteristic
 */
export interface IUneceInspectionResultCharacteristic extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.InspectionResultCharacteristic;

	/**
	 * A specified method applicable to this inspection result characteristic.
	 * @see https://vocabulary.uncefact.org/applicableMethod
	 */
	applicableMethod?: IUneceSpecifiedMethod;

	/**
	 * The code specifying the operator, such as less than, for comparing this inspection result characteristic with one or
	 * more other characteristics.
	 * @see https://vocabulary.uncefact.org/comparisonOperatorCode
	 */
	comparisonOperatorCode?: string;

	/**
	 * An applicable objective observation parameter of the interpretation result for this inspection result characteristic.
	 * @see https://vocabulary.uncefact.org/interpretationResultApplicableParameter
	 */
	interpretationResultApplicableParameter?: IUneceObservationObjectiveParameter;

	/**
	 * Accuracy, expressed as a measure, of the measurement for this inspection result characteristic.
	 * @see https://vocabulary.uncefact.org/measuredAccuracyMeasure
	 */
	measuredAccuracyMeasure?: IUneceMeasureType;

	/**
	 * The measured value, expressed as text, for this inspection result characteristic.
	 * @see https://vocabulary.uncefact.org/measuredValue
	 */
	measuredValue?: string;

	/**
	 * A measured value for this inspection result characteristic.
	 * @see https://vocabulary.uncefact.org/measuredValueMeasure
	 */
	measuredValueMeasure?: IUneceMeasureType;

	/**
	 * The code specifying the quality of the result for this inspection result characteristic.
	 * @see https://vocabulary.uncefact.org/qualityResultCode
	 */
	qualityResultCode?: string;

	/**
	 * A textual description of the quality of the result for this inspection result characteristic.
	 * @see https://vocabulary.uncefact.org/qualityResultDescription
	 */
	qualityResultDescription?: string;

	/**
	 * A textual description of the reference level for the quality of the result for this inspection result characteristic.
	 * @see https://vocabulary.uncefact.org/qualityResultReferenceLevelDescription
	 */
	qualityResultReferenceLevelDescription?: string;

	/**
	 * The range, expressed as text, of the values of the measurements performed for this inspection result characteristic.
	 * @see https://vocabulary.uncefact.org/range
	 */
	range?: string;
}
