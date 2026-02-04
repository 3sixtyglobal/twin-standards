// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceLaboratoryObservationAnalysisMethod } from "./IUneceLaboratoryObservationAnalysisMethod.js";
import type { IUneceLaboratoryObservationInstructions } from "./IUneceLaboratoryObservationInstructions.js";
import type { IUneceLaboratoryObservationNote } from "./IUneceLaboratoryObservationNote.js";
import type { IUneceLaboratoryObservationParty } from "./IUneceLaboratoryObservationParty.js";
import type { IUneceLaboratoryObservationReference } from "./IUneceLaboratoryObservationReference.js";
import type { IUneceObservationObjectiveParameter } from "./IUneceObservationObjectiveParameter.js";
import type { IUneceObservationResultCharacteristic } from "./IUneceObservationResultCharacteristic.js";
import type { IUneceSpecifiedMethod } from "./IUneceSpecifiedMethod.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of diagnostic data, visual or technical, and processing data, performed on a sample.
 * @see https://vocabulary.uncefact.org/ObservationResult
 */
export interface IUneceObservationResult extends IJsonLdNodeObject {
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
	applicableMethod?: IUneceSpecifiedMethod[];

	/**
	 * A note attached to the laboratory observation results with additional observations and or conclusions.
	 * @see https://vocabulary.uncefact.org/attachedLaboratoryObservationNote
	 */
	attachedLaboratoryObservationNote?: IUneceLaboratoryObservationNote[];

	/**
	 * The laboratory observation party who authorized this sample observation result.
	 * @see https://vocabulary.uncefact.org/authorizationParty
	 */
	authorizationParty?: IUneceLaboratoryObservationParty;

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
	expectedValueSpecifiedObservationResultCharacteristic?: IUneceObservationResultCharacteristic[];

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
	interpretationResultApplicableParameter?: IUneceObservationObjectiveParameter[];

	/**
	 * A laboratory observation analysis request reference specified for this sample observation result.
	 * @see https://vocabulary.uncefact.org/laboratoryAnalysisRequestSpecifiedReference
	 */
	laboratoryAnalysisRequestSpecifiedReference?: IUneceLaboratoryObservationReference[];

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
	maximumStandardValueSpecifiedObservationResultCharacteristic?: IUneceObservationResultCharacteristic[];

	/**
	 * A minimum standard value of the values for the characteristic observed or measured by using the specified type of
	 * observation for this sample observation result.
	 * @see https://vocabulary.uncefact.org/minimumStandardValueSpecifiedObservationResultCharacteristic
	 */
	minimumStandardValueSpecifiedObservationResultCharacteristic?: IUneceObservationResultCharacteristic[];

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
	observedValueSpecifiedObservationResultCharacteristic?: IUneceObservationResultCharacteristic[];

	/**
	 * The outsourced laboratory party who performed this sample observation result.
	 * @see https://vocabulary.uncefact.org/outsourcedLaboratoryParty
	 */
	outsourcedLaboratoryParty?: IUneceLaboratoryObservationParty;

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
	specifiedLaboratoryObservationInstructions?: IUneceLaboratoryObservationInstructions[];

	/**
	 * A laboratory observation reference specified for this sample observation result.
	 * @see https://vocabulary.uncefact.org/specifiedLaboratoryObservationReference
	 */
	specifiedLaboratoryObservationReference?: IUneceLaboratoryObservationReference[];

	/**
	 * A laboratory observation analysis method used for this sample observation result.
	 * @see https://vocabulary.uncefact.org/usedMethod
	 */
	usedMethod?: IUneceLaboratoryObservationAnalysisMethod[];
}
