// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAssertion } from "./IUneceAssertion.js";
import type { IUneceAssessment } from "./IUneceAssessment.js";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceCropProtectionTreatment } from "./IUneceCropProtectionTreatment.js";
import type { IUneceDisposalInstructions } from "./IUneceDisposalInstructions.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceLicence } from "./IUneceLicence.js";
import type { IUneceMachine } from "./IUneceMachine.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUneceOrganizationalCertificate } from "./IUneceOrganizationalCertificate.js";
import type { IUneceOrganizationalCertification } from "./IUneceOrganizationalCertification.js";
import type { IUneceProcessCertificate } from "./IUneceProcessCertificate.js";
import type { IUneceProcessCertification } from "./IUneceProcessCertification.js";
import type { IUneceProcessWorkItem } from "./IUneceProcessWorkItem.js";
import type { IUneceProductBatch } from "./IUneceProductBatch.js";
import type { IUneceProductBatchCertification } from "./IUneceProductBatchCertification.js";
import type { IUneceProductFinishingTreatment } from "./IUneceProductFinishingTreatment.js";
import type { IUneceProductionCycle } from "./IUneceProductionCycle.js";
import type { IUneceProductionDevice } from "./IUneceProductionDevice.js";
import type { IUneceProductionFacility } from "./IUneceProductionFacility.js";
import type { IUneceProductionWasteMaterial } from "./IUneceProductionWasteMaterial.js";
import type { IUneceSpecifiedCertificate } from "./IUneceSpecifiedCertificate.js";
import type { IUneceSpecifiedChemicalTreatment } from "./IUneceSpecifiedChemicalTreatment.js";
import type { IUneceSpecifiedDeclaration } from "./IUneceSpecifiedDeclaration.js";
import type { IUneceSpecifiedFault } from "./IUneceSpecifiedFault.js";
import type { IUneceSpecifiedInspection } from "./IUneceSpecifiedInspection.js";
import type { IUneceSpecifiedMaterial } from "./IUneceSpecifiedMaterial.js";
import type { IUneceSpecifiedParameter } from "./IUneceSpecifiedParameter.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { IUneceSupplyChainEvent } from "./IUneceSupplyChainEvent.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { IUneceSustainabilityInspection } from "./IUneceSustainabilityInspection.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTradeProduct } from "./IUneceTradeProduct.js";
import type { IUneceTradeProductCertification } from "./IUneceTradeProductCertification.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A naturally occurring or designed sequence of operations or events in order to produce something.
 * @see https://vocabulary.uncefact.org/ProductionProcess
 */
export interface IUneceProductionProcess extends IJsonLdNodeObject {
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
	additionalInformationNote?: IUneceNote;

	/**
	 * A machine allocated to this production process.
	 * @see https://vocabulary.uncefact.org/allocatedMachine
	 */
	allocatedMachine?: IUneceMachine;

	/**
	 * A production device allocated to this production process.
	 * @see https://vocabulary.uncefact.org/allocatedProductionDevice
	 */
	allocatedProductionDevice?: IUneceProductionDevice;

	/**
	 * An assessment applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableAssessment
	 */
	applicableAssessment?: IUneceAssessment;

	/**
	 * A specified declaration applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableDeclaration
	 */
	applicableDeclaration?: IUneceSpecifiedDeclaration;

	/**
	 * A specified fault applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableFault
	 */
	applicableFault?: IUneceSpecifiedFault;

	/**
	 * A specified licence applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableLicence
	 */
	applicableLicence?: IUneceLicence;

	/**
	 * A specified parameter applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableParameter
	 */
	applicableParameter?: IUneceSpecifiedParameter;

	/**
	 * A period applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicablePeriod
	 */
	applicablePeriod?: IUneceSpecifiedPeriod;

	/**
	 * A specified production cycle applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableProductionCycle
	 */
	applicableProductionCycle?: IUneceProductionCycle;

	/**
	 * A certificate applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedCertificate
	 */
	applicableSpecifiedCertificate?: IUneceSpecifiedCertificate;

	/**
	 * A specified inspection applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedInspection
	 */
	applicableSpecifiedInspection?: IUneceSpecifiedInspection;

	/**
	 * A sustainability characteristic applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic;

	/**
	 * A sustainability inspection applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityInspection
	 */
	applicableSustainabilityInspection?: IUneceSustainabilityInspection;

	/**
	 * A chemical treatment applied during this production process.
	 * @see https://vocabulary.uncefact.org/appliedChemicalTreatment
	 */
	appliedChemicalTreatment?: IUneceSpecifiedChemicalTreatment;

	/**
	 * A crop protection treatment applied during this production process.
	 * @see https://vocabulary.uncefact.org/appliedCropProtectionTreatment
	 */
	appliedCropProtectionTreatment?: IUneceCropProtectionTreatment;

	/**
	 * A product finishing treatment applied during this production process.
	 * @see https://vocabulary.uncefact.org/appliedProductFinishingTreatment
	 */
	appliedProductFinishingTreatment?: IUneceProductFinishingTreatment;

	/**
	 * A referenced standard associated with this production process.
	 * @see https://vocabulary.uncefact.org/associatedStandard
	 */
	associatedStandard?: IUneceStandard;

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
	inputApplicableBatch?: IUneceProductBatch;

	/**
	 * Input material applicable to this production process.
	 * @see https://vocabulary.uncefact.org/inputApplicableMaterial
	 */
	inputApplicableMaterial?: IUneceSpecifiedMaterial;

	/**
	 * An input product applicable to this production process.
	 * @see https://vocabulary.uncefact.org/inputApplicableProduct
	 */
	inputApplicableProduct?: IUneceTradeProduct;

	/**
	 * The code specifying the inventory type for this production process.
	 * @see https://vocabulary.uncefact.org/inventoryTypeCode
	 */
	inventoryTypeCode?: string;

	/**
	 * A manufacturer party for this production process.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: IUneceTradeParty;

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
	occurrenceEvent?: IUneceSupplyChainEvent;

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
	outputApplicableBatch?: IUneceProductBatch;

	/**
	 * Output material applicable to this production process.
	 * @see https://vocabulary.uncefact.org/outputApplicableMaterial
	 */
	outputApplicableMaterial?: IUneceSpecifiedMaterial;

	/**
	 * An output product applicable to this production process.
	 * @see https://vocabulary.uncefact.org/outputApplicableProduct
	 */
	outputApplicableProduct?: IUneceTradeProduct;

	/**
	 * A work item performed for this production process.
	 * @see https://vocabulary.uncefact.org/performedWorkItem
	 */
	performedWorkItem?: IUneceProcessWorkItem;

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
	productionWasteInstructions?: IUneceDisposalInstructions;

	/**
	 * The indication of whether or not this is a recycling production process.
	 * @see https://vocabulary.uncefact.org/recyclingIndicator
	 */
	recyclingIndicator?: boolean;

	/**
	 * A binary file related to this production process.
	 * @see https://vocabulary.uncefact.org/relatedBinaryFile
	 */
	relatedBinaryFile?: IUneceBinaryFile;

	/**
	 * Waste material reported for this production process.
	 * @see https://vocabulary.uncefact.org/reportedProductionWasteMaterial
	 */
	reportedProductionWasteMaterial?: IUneceProductionWasteMaterial;

	/**
	 * A specification document referenced for this production process.
	 * @see https://vocabulary.uncefact.org/specificationDocument
	 */
	specificationDocument?: IUneceDocument;

	/**
	 * A sustainability assertion specified for this production process.
	 * @see https://vocabulary.uncefact.org/specifiedAssertion
	 */
	specifiedAssertion?: IUneceAssertion;

	/**
	 * A referenced document specified for this production process.
	 * @see https://vocabulary.uncefact.org/specifiedDocument
	 */
	specifiedDocument?: IUneceDocument;

	/**
	 * A production facility specified for this production process.
	 * @see https://vocabulary.uncefact.org/specifiedFacility
	 */
	specifiedFacility?: IUneceProductionFacility;

	/**
	 * An organizational certificate specified for this production process.
	 * @see https://vocabulary.uncefact.org/specifiedOrganizationalCertificate
	 */
	specifiedOrganizationalCertificate?: IUneceOrganizationalCertificate;

	/**
	 * An organizational certification specified for this production process.
	 * @see https://vocabulary.uncefact.org/specifiedOrganizationalCertification
	 */
	specifiedOrganizationalCertification?: IUneceOrganizationalCertification;

	/**
	 * A process certificate specified for this production process.
	 * @see https://vocabulary.uncefact.org/specifiedProcessCertificate
	 */
	specifiedProcessCertificate?: IUneceProcessCertificate;

	/**
	 * A process certification specified for this production process.
	 * @see https://vocabulary.uncefact.org/specifiedProcessCertification
	 */
	specifiedProcessCertification?: IUneceProcessCertification;

	/**
	 * A product batch certification specified for this production process.
	 * @see https://vocabulary.uncefact.org/specifiedProductBatchCertification
	 */
	specifiedProductBatchCertification?: IUneceProductBatchCertification;

	/**
	 * A trade product certification specified for this production process.
	 * @see https://vocabulary.uncefact.org/specifiedTradeProductCertification
	 */
	specifiedTradeProductCertification?: IUneceTradeProductCertification;

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
	subcontractorParty?: IUneceTradeParty;

	/**
	 * A subordinate process of this production process.
	 * @see https://vocabulary.uncefact.org/subordinateProcess
	 */
	subordinateProcess?: IUneceProductionProcess;
}
