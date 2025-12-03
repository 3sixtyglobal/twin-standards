// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAssertion } from "./IAssertion.js";
import type { IAssessment } from "./IAssessment.js";
import type { IBinaryFile } from "./IBinaryFile.js";
import type { ICropProtectionTreatment } from "./ICropProtectionTreatment.js";
import type { IDisposalInstructions } from "./IDisposalInstructions.js";
import type { IDocument } from "./IDocument.js";
import type { ILicence } from "./ILicence.js";
import type { IMachine } from "./IMachine.js";
import type { INote } from "./INote.js";
import type { IOrganizationalCertificate } from "./IOrganizationalCertificate.js";
import type { IOrganizationalCertification } from "./IOrganizationalCertification.js";
import type { IProcessCertificate } from "./IProcessCertificate.js";
import type { IProcessCertification } from "./IProcessCertification.js";
import type { IProcessWorkItem } from "./IProcessWorkItem.js";
import type { IProductBatch } from "./IProductBatch.js";
import type { IProductBatchCertification } from "./IProductBatchCertification.js";
import type { IProductFinishingTreatment } from "./IProductFinishingTreatment.js";
import type { IProductionCycle } from "./IProductionCycle.js";
import type { IProductionDevice } from "./IProductionDevice.js";
import type { IProductionFacility } from "./IProductionFacility.js";
import type { IProductionWasteMaterial } from "./IProductionWasteMaterial.js";
import type { ISpecifiedCertificate } from "./ISpecifiedCertificate.js";
import type { ISpecifiedChemicalTreatment } from "./ISpecifiedChemicalTreatment.js";
import type { ISpecifiedDeclaration } from "./ISpecifiedDeclaration.js";
import type { ISpecifiedFault } from "./ISpecifiedFault.js";
import type { ISpecifiedInspection } from "./ISpecifiedInspection.js";
import type { ISpecifiedMaterial } from "./ISpecifiedMaterial.js";
import type { ISpecifiedParameter } from "./ISpecifiedParameter.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { IStandard } from "./IStandard.js";
import type { ISupplyChainEvent } from "./ISupplyChainEvent.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { ISustainabilityInspection } from "./ISustainabilityInspection.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITradeProduct } from "./ITradeProduct.js";
import type { ITradeProductCertification } from "./ITradeProductCertification.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A naturally occurring or designed sequence of operations or events in order to produce something.
 * @see https://vocabulary.uncefact.org/ProductionProcess
 */
export interface IProductionProcess extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductionProcess;

	/**
	 * An additional information note for this production process.
	 * @see https://vocabulary.uncefact.org/additionalInformationNote
	 */
	additionalInformationNote?: INote[];

	/**
	 * A machine allocated to this production process.
	 * @see https://vocabulary.uncefact.org/allocatedMachine
	 */
	allocatedMachine?: IMachine[];

	/**
	 * A production device allocated to this production process.
	 * @see https://vocabulary.uncefact.org/allocatedProductionDevice
	 */
	allocatedProductionDevice?: IProductionDevice[];

	/**
	 * An assessment applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableAssessment
	 */
	applicableAssessment?: IAssessment[];

	/**
	 * A specified declaration applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableDeclaration
	 */
	applicableDeclaration?: ISpecifiedDeclaration[];

	/**
	 * A specified fault applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableFault
	 */
	applicableFault?: ISpecifiedFault[];

	/**
	 * A specified licence applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableLicence
	 */
	applicableLicence?: ILicence[];

	/**
	 * A specified parameter applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableParameter
	 */
	applicableParameter?: ISpecifiedParameter[];

	/**
	 * A period applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicablePeriod
	 */
	applicablePeriod?: ISpecifiedPeriod[];

	/**
	 * A specified production cycle applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableProductionCycle
	 */
	applicableProductionCycle?: IProductionCycle[];

	/**
	 * A certificate applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedCertificate
	 */
	applicableSpecifiedCertificate?: ISpecifiedCertificate[];

	/**
	 * A specified inspection applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedInspection
	 */
	applicableSpecifiedInspection?: ISpecifiedInspection[];

	/**
	 * A sustainability characteristic applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A sustainability inspection applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityInspection
	 */
	applicableSustainabilityInspection?: ISustainabilityInspection[];

	/**
	 * A chemical treatment applied during this production process.
	 * @see https://vocabulary.uncefact.org/appliedChemicalTreatment
	 */
	appliedChemicalTreatment?: ISpecifiedChemicalTreatment[];

	/**
	 * A crop protection treatment applied during this production process.
	 * @see https://vocabulary.uncefact.org/appliedCropProtectionTreatment
	 */
	appliedCropProtectionTreatment?: ICropProtectionTreatment[];

	/**
	 * A product finishing treatment applied during this production process.
	 * @see https://vocabulary.uncefact.org/appliedProductFinishingTreatment
	 */
	appliedProductFinishingTreatment?: IProductFinishingTreatment[];

	/**
	 * A referenced standard associated with this production process.
	 * @see https://vocabulary.uncefact.org/associatedStandard
	 */
	associatedStandard?: IStandard[];

	/**
	 * The indication of whether or not this production process is critical.
	 * @see https://vocabulary.uncefact.org/criticalIndicator
	 */
	criticalIndicator?: boolean;

	/**
	 * A textual description of this production process.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A code specifying a disclosure level for this production process.
	 * @see https://vocabulary.uncefact.org/disclosureLevelCode
	 */
	disclosureLevelCode?: string;

	/**
	 * The indication of whether or not this production process is a final one.
	 * @see https://vocabulary.uncefact.org/finalIndicator
	 */
	finalIndicator?: boolean;

	/**
	 * An identifier of this production process.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An input product batch applicable to this production process.
	 * @see https://vocabulary.uncefact.org/inputApplicableBatch
	 */
	inputApplicableBatch?: IProductBatch[];

	/**
	 * Input material applicable to this production process.
	 * @see https://vocabulary.uncefact.org/inputApplicableMaterial
	 */
	inputApplicableMaterial?: ISpecifiedMaterial[];

	/**
	 * An input product applicable to this production process.
	 * @see https://vocabulary.uncefact.org/inputApplicableProduct
	 */
	inputApplicableProduct?: ITradeProduct[];

	/**
	 * The code specifying the inventory type for this production process.
	 * @see https://vocabulary.uncefact.org/inventoryTypeCode
	 */
	inventoryTypeCode?: string;

	/**
	 * A manufacturer party for this production process.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: ITradeParty[];

	/**
	 * The name, expressed as text, of this production process.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The date, time, date time or other date time value of the occurrence of this production process.
	 * @see https://vocabulary.uncefact.org/occurrenceDateTime
	 */
	occurrenceDateTime?: string;

	/**
	 * An occurrence of an event for this production process.
	 * @see https://vocabulary.uncefact.org/occurrenceEvent
	 */
	occurrenceEvent?: ISupplyChainEvent[];

	/**
	 * The code specifying the operation reference for this production process.
	 * @see https://vocabulary.uncefact.org/operationReferenceCode
	 */
	operationReferenceCode?: string;

	/**
	 * The code specifying the operation technology for this production process.
	 * @see https://vocabulary.uncefact.org/operationTechnologyCode
	 */
	operationTechnologyCode?: string;

	/**
	 * An output product batch applicable to this production process.
	 * @see https://vocabulary.uncefact.org/outputApplicableBatch
	 */
	outputApplicableBatch?: IProductBatch[];

	/**
	 * Output material applicable to this production process.
	 * @see https://vocabulary.uncefact.org/outputApplicableMaterial
	 */
	outputApplicableMaterial?: ISpecifiedMaterial[];

	/**
	 * An output product applicable to this production process.
	 * @see https://vocabulary.uncefact.org/outputApplicableProduct
	 */
	outputApplicableProduct?: ITradeProduct[];

	/**
	 * A work item performed for this production process.
	 * @see https://vocabulary.uncefact.org/performedWorkItem
	 */
	performedWorkItem?: IProcessWorkItem[];

	/**
	 * The code specifying the inventory type for this production process.
	 * @see https://vocabulary.uncefact.org/productionProcessInventoryTypeCode
	 */
	productionProcessInventoryTypeCode?: string;

	/**
	 * The code specifying the subordinate type of production process.
	 * @see https://vocabulary.uncefact.org/productionProcessSubordinateTypeCode
	 */
	productionProcessSubordinateTypeCode?: string;

	/**
	 * The code specifying the type of production process.
	 * @see https://vocabulary.uncefact.org/productionProcessTypeCode
	 */
	productionProcessTypeCode?: string;

	/**
	 * Disposal instructions for the waste resulting from this production process.
	 * @see https://vocabulary.uncefact.org/productionWasteInstructions
	 */
	productionWasteInstructions?: IDisposalInstructions[];

	/**
	 * The indication of whether or not this is a recycling production process.
	 * @see https://vocabulary.uncefact.org/recyclingIndicator
	 */
	recyclingIndicator?: boolean;

	/**
	 * A binary file related to this production process.
	 * @see https://vocabulary.uncefact.org/relatedBinaryFile
	 */
	relatedBinaryFile?: IBinaryFile[];

	/**
	 * Waste material reported for this production process.
	 * @see https://vocabulary.uncefact.org/reportedProductionWasteMaterial
	 */
	reportedProductionWasteMaterial?: IProductionWasteMaterial[];

	/**
	 * A specification document referenced for this production process.
	 * @see https://vocabulary.uncefact.org/specificationDocument
	 */
	specificationDocument?: IDocument[];

	/**
	 * A sustainability assertion specified for this production process.
	 * @see https://vocabulary.uncefact.org/specifiedAssertion
	 */
	specifiedAssertion?: IAssertion[];

	/**
	 * A referenced document specified for this production process.
	 * @see https://vocabulary.uncefact.org/specifiedDocument
	 */
	specifiedDocument?: IDocument[];

	/**
	 * A production facility specified for this production process.
	 * @see https://vocabulary.uncefact.org/specifiedFacility
	 */
	specifiedFacility?: IProductionFacility[];

	/**
	 * An organizational certificate specified for this production process.
	 * @see https://vocabulary.uncefact.org/specifiedOrganizationalCertificate
	 */
	specifiedOrganizationalCertificate?: IOrganizationalCertificate[];

	/**
	 * An organizational certification specified for this production process.
	 * @see https://vocabulary.uncefact.org/specifiedOrganizationalCertification
	 */
	specifiedOrganizationalCertification?: IOrganizationalCertification[];

	/**
	 * A process certificate specified for this production process.
	 * @see https://vocabulary.uncefact.org/specifiedProcessCertificate
	 */
	specifiedProcessCertificate?: IProcessCertificate[];

	/**
	 * A process certification specified for this production process.
	 * @see https://vocabulary.uncefact.org/specifiedProcessCertification
	 */
	specifiedProcessCertification?: IProcessCertification[];

	/**
	 * A product batch certification specified for this production process.
	 * @see https://vocabulary.uncefact.org/specifiedProductBatchCertification
	 */
	specifiedProductBatchCertification?: IProductBatchCertification[];

	/**
	 * A trade product certification specified for this production process.
	 * @see https://vocabulary.uncefact.org/specifiedTradeProductCertification
	 */
	specifiedTradeProductCertification?: ITradeProductCertification[];

	/**
	 * A status, expressed as text, of this production process.
	 * @see https://vocabulary.uncefact.org/status
	 */
	status?: string;

	/**
	 * The code specifying the status of this production process.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * The code specifying the step in this production process.
	 * @see https://vocabulary.uncefact.org/stepCode
	 */
	stepCode?: string;

	/**
	 * A subcontractor party specified for this production process.
	 * @see https://vocabulary.uncefact.org/subcontractorParty
	 */
	subcontractorParty?: ITradeParty[];

	/**
	 * A subordinate process of this production process.
	 * @see https://vocabulary.uncefact.org/subordinateProcess
	 */
	subordinateProcess?: IProductionProcess[];
}
