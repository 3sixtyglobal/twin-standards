// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ILocation } from "./ILocation.js";
import type { IMachine } from "./IMachine.js";
import type { IOrganizationalCertificate } from "./IOrganizationalCertificate.js";
import type { IProcessCertificate } from "./IProcessCertificate.js";
import type { IProductBatch } from "./IProductBatch.js";
import type { IProductBatchCertificate } from "./IProductBatchCertificate.js";
import type { IProductCertificate } from "./IProductCertificate.js";
import type { IProductionDevice } from "./IProductionDevice.js";
import type { IProductionFacility } from "./IProductionFacility.js";
import type { IProductionProcess } from "./IProductionProcess.js";
import type { ISpecifiedMaterial } from "./ISpecifiedMaterial.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITradeProduct } from "./ITradeProduct.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A defined set of production processes under the single management of a facility.
 * @see https://vocabulary.uncefact.org/ProductionUnit
 */
export interface IProductionUnit extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductionUnit;

	/**
	 * A production machine applicable to this facility production unit.
	 * @see https://vocabulary.uncefact.org/applicableMachine
	 */
	applicableMachine?: IMachine[];

	/**
	 * A production device applicable to this facility production unit.
	 * @see https://vocabulary.uncefact.org/applicableProductionDevice
	 */
	applicableProductionDevice?: IProductionDevice[];

	/**
	 * A production process applicable to this facility production unit.
	 * @see https://vocabulary.uncefact.org/applicableProductionProcess
	 */
	applicableProductionProcess?: IProductionProcess[];

	/**
	 * A sustainability characteristic applicable to this facility production unit.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * The date of completion of this facility production unit.
	 * @see https://vocabulary.uncefact.org/completionDate
	 */
	completionDate?: string;

	/**
	 * The date of construction of this facility production unit.
	 * @see https://vocabulary.uncefact.org/constructionDate
	 */
	constructionDate?: string;

	/**
	 * A dedicated production facility for this production unit.
	 * @see https://vocabulary.uncefact.org/dedicatedFacility
	 */
	dedicatedFacility?: IProductionFacility[];

	/**
	 * A textual description of this facility production unit.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A global identifier of this facility production unit.
	 * @see https://vocabulary.uncefact.org/globalId
	 */
	globalId?: string;

	/**
	 * An identifier of this facility production unit.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An input product batch applicable to this facility production unit.
	 * @see https://vocabulary.uncefact.org/inputApplicableBatch
	 */
	inputApplicableBatch?: IProductBatch[];

	/**
	 * Input material applicable to this facility production unit.
	 * @see https://vocabulary.uncefact.org/inputApplicableMaterial
	 */
	inputApplicableMaterial?: ISpecifiedMaterial[];

	/**
	 * An input product applicable to this facility production unit.
	 * @see https://vocabulary.uncefact.org/inputApplicableProduct
	 */
	inputApplicableProduct?: ITradeProduct[];

	/**
	 * A manufacturer party related to this facility production unit.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: ITradeParty[];

	/**
	 * The name, expressed as text, for this facility production unit.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * An output product batch applicable to this facility production unit.
	 * @see https://vocabulary.uncefact.org/outputApplicableBatch
	 */
	outputApplicableBatch?: IProductBatch[];

	/**
	 * Output material applicable to this facility production unit.
	 * @see https://vocabulary.uncefact.org/outputApplicableMaterial
	 */
	outputApplicableMaterial?: ISpecifiedMaterial[];

	/**
	 * An output product applicable to this facility production unit.
	 * @see https://vocabulary.uncefact.org/outputApplicableProduct
	 */
	outputApplicableProduct?: ITradeProduct[];

	/**
	 * A physical location referenced for this facility production unit.
	 * @see https://vocabulary.uncefact.org/physicalLocation
	 */
	physicalLocation?: ILocation[];

	/**
	 * A trade party related to this facility production unit.
	 * @see https://vocabulary.uncefact.org/relatedParty
	 */
	relatedParty?: ITradeParty[];

	/**
	 * An organizational certificate specified for this facility production unit.
	 * @see https://vocabulary.uncefact.org/specifiedOrganizationalCertificate
	 */
	specifiedOrganizationalCertificate?: IOrganizationalCertificate[];

	/**
	 * A process certificate specified for this facility production unit.
	 * @see https://vocabulary.uncefact.org/specifiedProcessCertificate
	 */
	specifiedProcessCertificate?: IProcessCertificate[];

	/**
	 * A product batch certificate specified for this facility production unit.
	 * @see https://vocabulary.uncefact.org/specifiedProductBatchCertificate
	 */
	specifiedProductBatchCertificate?: IProductBatchCertificate[];

	/**
	 * A product certificate specified for this facility production unit.
	 * @see https://vocabulary.uncefact.org/specifiedProductCertificate
	 */
	specifiedProductCertificate?: IProductCertificate[];

	/**
	 * A subcontractor party for this facility production unit.
	 * @see https://vocabulary.uncefact.org/subcontractorParty
	 */
	subcontractorParty?: ITradeParty[];

	/**
	 * A production unit subordinate to this facility production unit.
	 * @see https://vocabulary.uncefact.org/subordinateProductionUnit
	 */
	subordinateProductionUnit?: IProductionUnit[];

	/**
	 * The code specifying the type of facility production unit.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
