// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ILaboratoryObservationAnalysisMethod } from "./ILaboratoryObservationAnalysisMethod.js";
import type { ILaboratoryObservationInstructions } from "./ILaboratoryObservationInstructions.js";
import type { ILaboratoryObservationNote } from "./ILaboratoryObservationNote.js";
import type { ILaboratoryObservationParty } from "./ILaboratoryObservationParty.js";
import type { ILaboratoryObservationReference } from "./ILaboratoryObservationReference.js";
import type { IObservationObjectiveParameter } from "./IObservationObjectiveParameter.js";
import type { IObservationResultCharacteristic } from "./IObservationResultCharacteristic.js";
import type { ISpecifiedMethod } from "./ISpecifiedMethod.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of diagnostic data, visual or technical, and processing data, performed on a sample.
 * @see https://vocabulary.uncefact.org/ObservationResult
 */
export interface IObservationResult extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ObservationResult;

	/**
	 * The date, time, date time, or other date time value for the end of the observation for this sample observation result.
	 * @see https://vocabulary.uncefact.org/actualObservationEndDateTime
	 */
	actualObservationEndDateTime?: string;

	/**
	 * The date, time, date time, or other date time value for the start of the observation for this sample observation result.
	 * @see https://vocabulary.uncefact.org/actualObservationStartDateTime
	 */
	actualObservationStartDateTime?: string;

	/**
	 * A specified method applicable to this sample observation result.
	 * @see https://vocabulary.uncefact.org/applicableMethod
	 */
	applicableMethod?: ISpecifiedMethod[];

	/**
	 * A note attached to the laboratory observation results with additional observations and or conclusions.
	 * @see https://vocabulary.uncefact.org/attachedLaboratoryObservationNote
	 */
	attachedLaboratoryObservationNote?: ILaboratoryObservationNote[];

	/**
	 * The laboratory observation party who authorized this sample observation result.
	 * @see https://vocabulary.uncefact.org/authorizationParty
	 */
	authorizationParty?: ILaboratoryObservationParty[];

	/**
	 * The indication of whether or not the observation was an emergency observation for this sample observation result.
	 * @see https://vocabulary.uncefact.org/emergencyObservationIndicator
	 */
	emergencyObservationIndicator?: boolean;

	/**
	 * An expected value for the characteristic, to be observed or measured according to the specified type of observation for
	 * this sample observation result.
	 * @see https://vocabulary.uncefact.org/expectedValueSpecifiedObservationResultCharacteristic
	 */
	expectedValueSpecifiedObservationResultCharacteristic?: IObservationResultCharacteristic[];

	/**
	 * The general characteristic, expressed as text, for this sample observation result, such as length, volume, density,
	 * titre, sensitivity, conductivity.
	 * @see https://vocabulary.uncefact.org/generalCharacteristic
	 */
	generalCharacteristic?: string;

	/**
	 * The identifier for this sample observation result.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An applicable observation objective parameter of the interpretation result for this sample observation result.
	 * @see https://vocabulary.uncefact.org/interpretationResultApplicableParameter
	 */
	interpretationResultApplicableParameter?: IObservationObjectiveParameter[];

	/**
	 * A laboratory observation analysis request reference specified for this sample observation result.
	 * @see https://vocabulary.uncefact.org/laboratoryAnalysisRequestSpecifiedReference
	 */
	laboratoryAnalysisRequestSpecifiedReference?: ILaboratoryObservationReference[];

	/**
	 * The context material type of the observed sample, expressed as text, such as animal or blood.
	 * @see https://vocabulary.uncefact.org/materialType
	 */
	materialType?: string;

	/**
	 * The code specifying a material type for this sample observation result.
	 * @see https://vocabulary.uncefact.org/materialTypeCode
	 */
	materialTypeCode?: string;

	/**
	 * A maximum standard value of the values for the characteristic observed or measured by using the specified type of
	 * observation for this sample observation result.
	 * @see https://vocabulary.uncefact.org/maximumStandardValueSpecifiedObservationResultCharacteristic
	 */
	maximumStandardValueSpecifiedObservationResultCharacteristic?: IObservationResultCharacteristic[];

	/**
	 * A minimum standard value of the values for the characteristic observed or measured by using the specified type of
	 * observation for this sample observation result.
	 * @see https://vocabulary.uncefact.org/minimumStandardValueSpecifiedObservationResultCharacteristic
	 */
	minimumStandardValueSpecifiedObservationResultCharacteristic?: IObservationResultCharacteristic[];

	/**
	 * The observation discontinuation reason, expressed as text, for this sample observation result.
	 * @see https://vocabulary.uncefact.org/observationDiscontinuationReason
	 */
	observationDiscontinuationReason?: string;

	/**
	 * The code specifying the observation discontinuation reason for this sample observation result.
	 * @see https://vocabulary.uncefact.org/observationDiscontinuationReasonCode
	 */
	observationDiscontinuationReasonCode?: string;

	/**
	 * The observation time frame, expressed as text, for this sample observation result.
	 * @see https://vocabulary.uncefact.org/observationTimeFrame
	 */
	observationTimeFrame?: string;

	/**
	 * An observed value for the characteristic, acquired by observing or measuring according to the specified type of
	 * observation for this sample observation result.
	 * @see https://vocabulary.uncefact.org/observedValueSpecifiedObservationResultCharacteristic
	 */
	observedValueSpecifiedObservationResultCharacteristic?: IObservationResultCharacteristic[];

	/**
	 * The outsourced laboratory party who performed this sample observation result.
	 * @see https://vocabulary.uncefact.org/outsourcedLaboratoryParty
	 */
	outsourcedLaboratoryParty?: ILaboratoryObservationParty[];

	/**
	 * The indication of whether or not the observation was an outsourced observation (performed by a third party).
	 * @see https://vocabulary.uncefact.org/outsourcedObservationIndicator
	 */
	outsourcedObservationIndicator?: boolean;

	/**
	 * The indication of whether or not this sample observation result is shareable.
	 * @see https://vocabulary.uncefact.org/shareableIndicator
	 */
	shareableIndicator?: boolean;

	/**
	 * A set of laboratory observation instructions specified for this sample observation result.
	 * @see https://vocabulary.uncefact.org/specifiedLaboratoryObservationInstructions
	 */
	specifiedLaboratoryObservationInstructions?: ILaboratoryObservationInstructions[];

	/**
	 * A laboratory observation reference specified for this sample observation result.
	 * @see https://vocabulary.uncefact.org/specifiedLaboratoryObservationReference
	 */
	specifiedLaboratoryObservationReference?: ILaboratoryObservationReference[];

	/**
	 * A laboratory observation analysis method used for this sample observation result.
	 * @see https://vocabulary.uncefact.org/usedMethod
	 */
	usedMethod?: ILaboratoryObservationAnalysisMethod[];
}
