// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceAnimalCertificate } from "./IUneceAnimalCertificate.js";
import type { IUneceAnimalCertification } from "./IUneceAnimalCertification.js";
import type { IUneceAssessment } from "./IUneceAssessment.js";
import type { IUneceLocation } from "./IUneceLocation.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceOrganizationalCertificate } from "./IUneceOrganizationalCertificate.js";
import type { IUneceOrganizationalCertification } from "./IUneceOrganizationalCertification.js";
import type { IUneceProcessCertificate } from "./IUneceProcessCertificate.js";
import type { IUneceProcessCertification } from "./IUneceProcessCertification.js";
import type { IUneceProductBatchCertificate } from "./IUneceProductBatchCertificate.js";
import type { IUneceProductBatchCertification } from "./IUneceProductBatchCertification.js";
import type { IUneceProductCertificate } from "./IUneceProductCertificate.js";
import type { IUneceProductionProcess } from "./IUneceProductionProcess.js";
import type { IUneceProductionUnit } from "./IUneceProductionUnit.js";
import type { IUneceSpecifiedCertificate } from "./IUneceSpecifiedCertificate.js";
import type { IUneceSpecifiedInspection } from "./IUneceSpecifiedInspection.js";
import type { IUneceSupplyChainEvent } from "./IUneceSupplyChainEvent.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { IUneceSustainabilityInspection } from "./IUneceSustainabilityInspection.js";
import type { IUneceTradeProductCertification } from "./IUneceTradeProductCertification.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A man made physical structure, such as a building, in which something is produced.
 * @see https://vocabulary.uncefact.org/ProductionFacility
 */
export interface IUneceProductionFacility {
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
	applicableAssessment?: IUneceAssessment[];

	/**
	 * A certificate applicable to this production facility.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedCertificate
	 */
	applicableSpecifiedCertificate?: IUneceSpecifiedCertificate[];

	/**
	 * A specified inspection applicable to this production facility.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedInspection
	 */
	applicableSpecifiedInspection?: IUneceSpecifiedInspection[];

	/**
	 * A sustainability characteristic applicable to this production facility.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

	/**
	 * A sustainability inspection applicable to this production facility.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityInspection
	 */
	applicableSustainabilityInspection?: IUneceSustainabilityInspection[];

	/**
	 * A measure of the buffer capacity for this production facility.
	 * @see https://vocabulary.uncefact.org/bufferCapacityMeasure
	 */
	bufferCapacityMeasure?: IUneceMeasureType[];

	/**
	 * A measure of the capacity of this production facility.
	 * @see https://vocabulary.uncefact.org/capacityMeasure
	 */
	capacityMeasure?: IUneceMeasureType[];

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
	inputCapacityMeasure?: IUneceMeasureType[];

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
	outputCapacityMeasure?: IUneceMeasureType[];

	/**
	 * A physical location referenced for this production facility.
	 * @see https://vocabulary.uncefact.org/physicalLocation
	 */
	physicalLocation?: IUneceLocation[];

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
	relatedProductionUnit?: IUneceProductionUnit[];

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
	specifiedAnimalCertificate?: IUneceAnimalCertificate[];

	/**
	 * An animal certification specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedAnimalCertification
	 */
	specifiedAnimalCertification?: IUneceAnimalCertification[];

	/**
	 * An organizational certificate specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedOrganizationalCertificate
	 */
	specifiedOrganizationalCertificate?: IUneceOrganizationalCertificate[];

	/**
	 * An organizational certification specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedOrganizationalCertification
	 */
	specifiedOrganizationalCertification?: IUneceOrganizationalCertification[];

	/**
	 * A production process specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedProcess
	 */
	specifiedProcess?: IUneceProductionProcess[];

	/**
	 * A process certificate specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedProcessCertificate
	 */
	specifiedProcessCertificate?: IUneceProcessCertificate[];

	/**
	 * A process certification specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedProcessCertification
	 */
	specifiedProcessCertification?: IUneceProcessCertification[];

	/**
	 * A product batch certificate specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedProductBatchCertificate
	 */
	specifiedProductBatchCertificate?: IUneceProductBatchCertificate[];

	/**
	 * A product batch certification specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedProductBatchCertification
	 */
	specifiedProductBatchCertification?: IUneceProductBatchCertification[];

	/**
	 * A product certificate specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedProductCertificate
	 */
	specifiedProductCertificate?: IUneceProductCertificate[];

	/**
	 * A supply chain event specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainEvent
	 */
	specifiedSupplyChainEvent?: IUneceSupplyChainEvent[];

	/**
	 * A trade product certification specified for this production facility.
	 * @see https://vocabulary.uncefact.org/specifiedTradeProductCertification
	 */
	specifiedTradeProductCertification?: IUneceTradeProductCertification[];

	/**
	 * A production facility subordinate to this production facility.
	 * @see https://vocabulary.uncefact.org/subordinateFacility
	 */
	subordinateFacility?: IUneceProductionFacility[];
}
