// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceAssertion } from "./IUneceAssertion.js";
import type { IUneceAssessment } from "./IUneceAssessment.js";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceConformanceCertificate } from "./IUneceConformanceCertificate.js";
import type { IUneceCorrectiveAction } from "./IUneceCorrectiveAction.js";
import type { IUneceInspectionInstructions } from "./IUneceInspectionInstructions.js";
import type { IUneceInspectionNote } from "./IUneceInspectionNote.js";
import type { IUneceInspectionReference } from "./IUneceInspectionReference.js";
import type { IUneceInspectionResultCharacteristic } from "./IUneceInspectionResultCharacteristic.js";
import type { IUneceObservationResult } from "./IUneceObservationResult.js";
import type { IUneceOrganizationalCertificate } from "./IUneceOrganizationalCertificate.js";
import type { IUnecePreventiveAction } from "./IUnecePreventiveAction.js";
import type { IUneceProcessCertificate } from "./IUneceProcessCertificate.js";
import type { IUneceProductCertificate } from "./IUneceProductCertificate.js";
import type { IUneceSpecifiedAction } from "./IUneceSpecifiedAction.js";
import type { IUneceSpecifiedCertificate } from "./IUneceSpecifiedCertificate.js";
import type { IUneceSpecifiedMethod } from "./IUneceSpecifiedMethod.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Results obtained by performing an inspection.
 * @see https://vocabulary.uncefact.org/InspectionResult
 */
export interface IUneceInspectionResult {
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
	applicableCorrectiveAction?: IUneceCorrectiveAction[];

	/**
	 * A characteristic applicable to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/applicableInspectionResultCharacteristic
	 */
	applicableInspectionResultCharacteristic?: IUneceInspectionResultCharacteristic[];

	/**
	 * A method applicable to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/applicableMethod
	 */
	applicableMethod?: IUneceSpecifiedMethod[];

	/**
	 * A preventive action applicable to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/applicablePreventiveAction
	 */
	applicablePreventiveAction?: IUnecePreventiveAction[];

	/**
	 * An action applicable to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedAction
	 */
	applicableSpecifiedAction?: IUneceSpecifiedAction[];

	/**
	 * The date, time, date time, or other date time value for the approval of this specified inspection result.
	 * @see https://vocabulary.uncefact.org/approvalDateTime
	 * @format date-time
	 */
	approvalDateTime?: string;

	/**
	 * A binary file attached to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/attachedBinaryFile
	 */
	attachedBinaryFile?: IUneceBinaryFile[];

	/**
	 * A note with additional information and or conclusions attached to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/attachedInspectionNote
	 */
	attachedInspectionNote?: IUneceInspectionNote[];

	/**
	 * An expected value for the inspection characteristic to be acquired by using the type of inspection applicable to this
	 * specified inspection result.
	 * @see https://vocabulary.uncefact.org/expectedValueApplicableCharacteristic
	 */
	expectedValueApplicableCharacteristic?: IUneceInspectionResultCharacteristic[];

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
	identifier?: string | IJsonLdValueObject;

	/**
	 * The date, time, date time, or other date time value of the inspection for this specified inspection result.
	 * @see https://vocabulary.uncefact.org/inspectionDateTime
	 * @format date-time
	 */
	inspectionDateTime?: string;

	/**
	 * An inspection party specified for this inspection result.
	 * @see https://vocabulary.uncefact.org/inspectionParty
	 */
	inspectionParty?: IUneceTradeParty[];

	/**
	 * A referenced inspection standard for this specified inspection result.
	 * @see https://vocabulary.uncefact.org/inspectionStandard
	 */
	inspectionStandard?: IUneceStandard[];

	/**
	 * A laboratory sample observation result for this specified inspection result.
	 * @see https://vocabulary.uncefact.org/laboratoryObservationResult
	 */
	laboratoryObservationResult?: IUneceObservationResult[];

	/**
	 * A maximum standard value for the inspection characteristic observed or measured by using the type of inspection
	 * applicable to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/maximumStandardValueApplicableCharacteristic
	 */
	maximumStandardValueApplicableCharacteristic?: IUneceInspectionResultCharacteristic[];

	/**
	 * A minimum standard value for the inspection characteristic observed or measured by using the type of inspection
	 * applicable to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/minimumStandardValueApplicableCharacteristic
	 */
	minimumStandardValueApplicableCharacteristic?: IUneceInspectionResultCharacteristic[];

	/**
	 * An observed value for the inspection characteristic acquired by using the type of inspection applicable to this
	 * specified inspection result.
	 * @see https://vocabulary.uncefact.org/observedValueApplicableCharacteristic
	 */
	observedValueApplicableCharacteristic?: IUneceInspectionResultCharacteristic[];

	/**
	 * A sustainability assertion obtained by means of this specified inspection result.
	 * @see https://vocabulary.uncefact.org/obtainedAssertion
	 */
	obtainedAssertion?: IUneceAssertion[];

	/**
	 * A conformance certificate obtained by means of this specified inspection result.
	 * @see https://vocabulary.uncefact.org/obtainedConformanceCertificate
	 */
	obtainedConformanceCertificate?: IUneceConformanceCertificate[];

	/**
	 * An organizational certificate obtained by means of this specified inspection result.
	 * @see https://vocabulary.uncefact.org/obtainedOrganizationalCertificate
	 */
	obtainedOrganizationalCertificate?: IUneceOrganizationalCertificate[];

	/**
	 * A process certificate obtained by means of this specified inspection result.
	 * @see https://vocabulary.uncefact.org/obtainedProcessCertificate
	 */
	obtainedProcessCertificate?: IUneceProcessCertificate[];

	/**
	 * A product certificate obtained by means of this specified inspection result.
	 * @see https://vocabulary.uncefact.org/obtainedProductCertificate
	 */
	obtainedProductCertificate?: IUneceProductCertificate[];

	/**
	 * A certificate obtained by means of this specified inspection result.
	 * @see https://vocabulary.uncefact.org/obtainedSpecifiedCertificate
	 */
	obtainedSpecifiedCertificate?: IUneceSpecifiedCertificate[];

	/**
	 * An outsourced inspection party for this specified inspection result.
	 * @see https://vocabulary.uncefact.org/outsourcedInspectionParty
	 */
	outsourcedInspectionParty?: IUneceTradeParty[];

	/**
	 * An assessment related to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/relatedAssessment
	 */
	relatedAssessment?: IUneceAssessment[];

	/**
	 * Inspection instructions related to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/relatedInstructions
	 */
	relatedInstructions?: IUneceInspectionInstructions[];

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
	specifiedInspectionReference?: IUneceInspectionReference[];

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
