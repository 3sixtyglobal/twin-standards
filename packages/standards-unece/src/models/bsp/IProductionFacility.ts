// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAnimalCertificate } from "./IAnimalCertificate.js";
import type { IAnimalCertification } from "./IAnimalCertification.js";
import type { IAssessment } from "./IAssessment.js";
import type { ILocation } from "./ILocation.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IOrganizationalCertificate } from "./IOrganizationalCertificate.js";
import type { IOrganizationalCertification } from "./IOrganizationalCertification.js";
import type { IProcessCertificate } from "./IProcessCertificate.js";
import type { IProcessCertification } from "./IProcessCertification.js";
import type { IProductBatchCertificate } from "./IProductBatchCertificate.js";
import type { IProductBatchCertification } from "./IProductBatchCertification.js";
import type { IProductCertificate } from "./IProductCertificate.js";
import type { IProductionProcess } from "./IProductionProcess.js";
import type { IProductionUnit } from "./IProductionUnit.js";
import type { ISpecifiedCertificate } from "./ISpecifiedCertificate.js";
import type { ISpecifiedInspection } from "./ISpecifiedInspection.js";
import type { ISupplyChainEvent } from "./ISupplyChainEvent.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { ISustainabilityInspection } from "./ISustainabilityInspection.js";
import type { ITradeProductCertification } from "./ITradeProductCertification.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A man made physical structure, such as a building, in which something is produced.
 * @see https://vocabulary.uncefact.org/ProductionFacility
 */
export interface IProductionFacility extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductionFacility;

	/**
	 * An assessment applicable to this production facility.
	 * @see https://vocabulary.uncefact.org/applicableAssessment
	 */
	applicableAssessment?: IAssessment[];

	/**
	 * A certificate applicable to this production facility.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedCertificate
	 */
	applicableSpecifiedCertificate?: ISpecifiedCertificate[];

	/**
	 * A specified inspection applicable to this production facility.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedInspection
	 */
	applicableSpecifiedInspection?: ISpecifiedInspection[];

	/**
	 * A sustainability characteristic applicable to this production facility.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A sustainability inspection applicable to this production facility.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityInspection
	 */
	applicableSustainabilityInspection?: ISustainabilityInspection[];

	/**
	 * A measure of the buffer capacity for this production facility.
	 * @see https://vocabulary.uncefact.org/bufferCapacityMeasure
	 */
	bufferCapacityMeasure?: IMeasureType[];

	/**
	 * A measure of the capacity of this production facility.
	 * @see https://vocabulary.uncefact.org/capacityMeasure
	 */
	capacityMeasure?: IMeasureType[];

	/**
	 * The completion date of this production facility.
	 * @see https://vocabulary.uncefact.org/completionDate
	 */
	completionDate?: string;

	/**
	 * The construction date for this production facility.
	 * @see https://vocabulary.uncefact.org/constructionDate
	 */
	constructionDate?: string;

	/**
	 * A textual description of this production facility.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The digital platform assigned identifier for this production facility.
	 * @see https://vocabulary.uncefact.org/digitalPlatformAssignedId
	 */
	digitalPlatformAssignedId?: string;

	/**
	 * The code specifying the function of this production facility.
	 * @see https://vocabulary.uncefact.org/functionCode
	 */
	functionCode?: string;

	/**
	 * A global identifier of this production facility.
	 * @see https://vocabulary.uncefact.org/globalId
	 */
	globalId?: string;

	/**
	 * An identifier of this production facility.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A measure of the input capacity for this production facility.
	 * @see https://vocabulary.uncefact.org/inputCapacityMeasure
	 */
	inputCapacityMeasure?: IMeasureType[];

	/**
	 * A licence, expressed as text, for this production facility.
	 * @see https://vocabulary.uncefact.org/licence
	 */
	licence?: string;

	/**
	 * The name, expressed as text, of this production facility.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A measure of the output capacity for this production facility.
	 * @see https://vocabulary.uncefact.org/outputCapacityMeasure
	 */
	outputCapacityMeasure?: IMeasureType[];

	/**
	 * A physical location referenced for this production facility.
	 * @see https://vocabulary.uncefact.org/physicalLocation
	 */
	physicalLocation?: ILocation[];

	/**
	 * The code specifying the type of certification for this production facility.
	 * @see https://vocabulary.uncefact.org/productionFacilityCertificationTypeCode
	 */
	productionFacilityCertificationTypeCode?: string;

	/**
	 * The code specifying the type of roof, such as a glass roof, for this production facility.
	 * @see https://vocabulary.uncefact.org/productionFacilityRoofTypeCode
	 */
	productionFacilityRoofTypeCode?: string;

	/**
	 * The code specifying the subordinate type for this production facility.
	 * @see https://vocabulary.uncefact.org/productionFacilitySubordinateTypeCode
	 */
	productionFacilitySubordinateTypeCode?: string;

	/**
	 * The code specifying the type of production facility.
	 * @see https://vocabulary.uncefact.org/productionFacilityTypeCode
	 */
	productionFacilityTypeCode?: string;

	/**
	 * A production unit related to this production facility.
	 * @see https://vocabulary.uncefact.org/relatedProductionUnit
	 */
	relatedProductionUnit?: IProductionUnit[];

	/**
	 * The renovation date of this production facility.
	 * @see https://vocabulary.uncefact.org/renovationDate
	 */
	renovationDate?: string;

	/**
	 * The code specifying the type of roof, such as a glass roof, for this production facility.
	 * @see https://vocabulary.uncefact.org/roofTypeCode
	 */
	roofTypeCode?: string;

	/**
	 * An animal certificate specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedAnimalCertificate
	 */
	specifiedAnimalCertificate?: IAnimalCertificate[];

	/**
	 * An animal certification specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedAnimalCertification
	 */
	specifiedAnimalCertification?: IAnimalCertification[];

	/**
	 * An organizational certificate specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedOrganizationalCertificate
	 */
	specifiedOrganizationalCertificate?: IOrganizationalCertificate[];

	/**
	 * An organizational certification specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedOrganizationalCertification
	 */
	specifiedOrganizationalCertification?: IOrganizationalCertification[];

	/**
	 * A production process specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedProcess
	 */
	specifiedProcess?: IProductionProcess[];

	/**
	 * A process certificate specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedProcessCertificate
	 */
	specifiedProcessCertificate?: IProcessCertificate[];

	/**
	 * A process certification specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedProcessCertification
	 */
	specifiedProcessCertification?: IProcessCertification[];

	/**
	 * A product batch certificate specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedProductBatchCertificate
	 */
	specifiedProductBatchCertificate?: IProductBatchCertificate[];

	/**
	 * A product batch certification specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedProductBatchCertification
	 */
	specifiedProductBatchCertification?: IProductBatchCertification[];

	/**
	 * A product certificate specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedProductCertificate
	 */
	specifiedProductCertificate?: IProductCertificate[];

	/**
	 * A supply chain event specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainEvent
	 */
	specifiedSupplyChainEvent?: ISupplyChainEvent[];

	/**
	 * A trade product certification specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedTradeProductCertification
	 */
	specifiedTradeProductCertification?: ITradeProductCertification[];

	/**
	 * A production facility subordinate to this production facility.
	 * @see https://vocabulary.uncefact.org/subordinateFacility
	 */
	subordinateFacility?: IProductionFacility[];
}
