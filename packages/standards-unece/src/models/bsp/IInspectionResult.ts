// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAssertion } from "./IAssertion.js";
import type { IAssessment } from "./IAssessment.js";
import type { IBinaryFile } from "./IBinaryFile.js";
import type { IConformanceCertificate } from "./IConformanceCertificate.js";
import type { ICorrectiveAction } from "./ICorrectiveAction.js";
import type { IInspectionInstructions } from "./IInspectionInstructions.js";
import type { IInspectionNote } from "./IInspectionNote.js";
import type { IInspectionReference } from "./IInspectionReference.js";
import type { IInspectionResultCharacteristic } from "./IInspectionResultCharacteristic.js";
import type { IObservationResult } from "./IObservationResult.js";
import type { IOrganizationalCertificate } from "./IOrganizationalCertificate.js";
import type { IPreventiveAction } from "./IPreventiveAction.js";
import type { IProcessCertificate } from "./IProcessCertificate.js";
import type { IProductCertificate } from "./IProductCertificate.js";
import type { ISpecifiedAction } from "./ISpecifiedAction.js";
import type { ISpecifiedCertificate } from "./ISpecifiedCertificate.js";
import type { ISpecifiedMethod } from "./ISpecifiedMethod.js";
import type { IStandard } from "./IStandard.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Results obtained by performing an inspection.
 * @see https://vocabulary.uncefact.org/InspectionResult
 */
export interface IInspectionResult extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.InspectionResult;

	/**
	 * A corrective action applicable to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/applicableCorrectiveAction
	 */
	applicableCorrectiveAction?: ICorrectiveAction[];

	/**
	 * A characteristic applicable to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/applicableInspectionResultCharacteristic
	 */
	applicableInspectionResultCharacteristic?: IInspectionResultCharacteristic[];

	/**
	 * A method applicable to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/applicableMethod
	 */
	applicableMethod?: ISpecifiedMethod[];

	/**
	 * A preventive action applicable to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/applicablePreventiveAction
	 */
	applicablePreventiveAction?: IPreventiveAction[];

	/**
	 * An action applicable to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedAction
	 */
	applicableSpecifiedAction?: ISpecifiedAction[];

	/**
	 * The date, time, date time, or other date time value for the approval of this specified inspection result.
	 * @see https://vocabulary.uncefact.org/approvalDateTime
	 */
	approvalDateTime?: string;

	/**
	 * A binary file attached to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/attachedBinaryFile
	 */
	attachedBinaryFile?: IBinaryFile[];

	/**
	 * A note with additional information and or conclusions attached to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/attachedInspectionNote
	 */
	attachedInspectionNote?: IInspectionNote[];

	/**
	 * An expected value for the inspection characteristic to be acquired by using the type of inspection applicable to this
	 * specified inspection result.
	 * @see https://vocabulary.uncefact.org/expectedValueApplicableCharacteristic
	 */
	expectedValueApplicableCharacteristic?: IInspectionResultCharacteristic[];

	/**
	 * A general characteristic, such as length, volume, density, sensitivity, conductivity, expressed as text, of this
	 * specified inspection result.
	 * @see https://vocabulary.uncefact.org/generalCharacteristic
	 */
	generalCharacteristic?: string;

	/**
	 * An identifier of this specified inspection result.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The date, time, date time, or other date time value of the inspection for this specified inspection result.
	 * @see https://vocabulary.uncefact.org/inspectionDateTime
	 */
	inspectionDateTime?: string;

	/**
	 * An inspection party specified for this inspection result.
	 * @see https://vocabulary.uncefact.org/inspectionParty
	 */
	inspectionParty?: ITradeParty[];

	/**
	 * A referenced inspection standard for this specified inspection result.
	 * @see https://vocabulary.uncefact.org/inspectionStandard
	 */
	inspectionStandard?: IStandard[];

	/**
	 * A laboratory sample observation result for this specified inspection result.
	 * @see https://vocabulary.uncefact.org/laboratoryObservationResult
	 */
	laboratoryObservationResult?: IObservationResult[];

	/**
	 * A maximum standard value for the inspection characteristic observed or measured by using the type of inspection
	 * applicable to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/maximumStandardValueApplicableCharacteristic
	 */
	maximumStandardValueApplicableCharacteristic?: IInspectionResultCharacteristic[];

	/**
	 * A minimum standard value for the inspection characteristic observed or measured by using the type of inspection
	 * applicable to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/minimumStandardValueApplicableCharacteristic
	 */
	minimumStandardValueApplicableCharacteristic?: IInspectionResultCharacteristic[];

	/**
	 * An observed value for the inspection characteristic acquired by using the type of inspection applicable to this
	 * specified inspection result.
	 * @see https://vocabulary.uncefact.org/observedValueApplicableCharacteristic
	 */
	observedValueApplicableCharacteristic?: IInspectionResultCharacteristic[];

	/**
	 * A sustainability assertion obtained by means of this specified inspection result.
	 * @see https://vocabulary.uncefact.org/obtainedAssertion
	 */
	obtainedAssertion?: IAssertion[];

	/**
	 * A conformance certificate obtained by means of this specified inspection result.
	 * @see https://vocabulary.uncefact.org/obtainedConformanceCertificate
	 */
	obtainedConformanceCertificate?: IConformanceCertificate[];

	/**
	 * An organizational certificate obtained by means of this specified inspection result.
	 * @see https://vocabulary.uncefact.org/obtainedOrganizationalCertificate
	 */
	obtainedOrganizationalCertificate?: IOrganizationalCertificate[];

	/**
	 * A process certificate obtained by means of this specified inspection result.
	 * @see https://vocabulary.uncefact.org/obtainedProcessCertificate
	 */
	obtainedProcessCertificate?: IProcessCertificate[];

	/**
	 * A product certificate obtained by means of this specified inspection result.
	 * @see https://vocabulary.uncefact.org/obtainedProductCertificate
	 */
	obtainedProductCertificate?: IProductCertificate[];

	/**
	 * A certificate obtained by means of this specified inspection result.
	 * @see https://vocabulary.uncefact.org/obtainedSpecifiedCertificate
	 */
	obtainedSpecifiedCertificate?: ISpecifiedCertificate[];

	/**
	 * An outsourced inspection party for this specified inspection result.
	 * @see https://vocabulary.uncefact.org/outsourcedInspectionParty
	 */
	outsourcedInspectionParty?: ITradeParty[];

	/**
	 * An assessment related to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/relatedAssessment
	 */
	relatedAssessment?: IAssessment[];

	/**
	 * Inspection instructions related to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/relatedInstructions
	 */
	relatedInstructions?: IInspectionInstructions[];

	/**
	 * A material type, expressed as text, related to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/relatedMaterialType
	 */
	relatedMaterialType?: string;

	/**
	 * A product type, expressed as text, related to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/relatedProductType
	 */
	relatedProductType?: string;

	/**
	 * The indication of whether or not this specified inspection result is shareable.
	 * @see https://vocabulary.uncefact.org/shareableIndicator
	 */
	shareableIndicator?: boolean;

	/**
	 * An inspection reference specified for this inspection result.
	 * @see https://vocabulary.uncefact.org/specifiedInspectionReference
	 */
	specifiedInspectionReference?: IInspectionReference[];

	/**
	 * A statement, expressed as text, for this specified inspection result.
	 * @see https://vocabulary.uncefact.org/statement
	 */
	statement?: string;

	/**
	 * The code specifying the status of this inspection result.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;
}
