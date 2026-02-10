// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceLocation } from "./IUneceLocation.js";
import type { IUneceMachine } from "./IUneceMachine.js";
import type { IUneceOrganizationalCertificate } from "./IUneceOrganizationalCertificate.js";
import type { IUneceProcessCertificate } from "./IUneceProcessCertificate.js";
import type { IUneceProductBatch } from "./IUneceProductBatch.js";
import type { IUneceProductBatchCertificate } from "./IUneceProductBatchCertificate.js";
import type { IUneceProductCertificate } from "./IUneceProductCertificate.js";
import type { IUneceProductionDevice } from "./IUneceProductionDevice.js";
import type { IUneceProductionFacility } from "./IUneceProductionFacility.js";
import type { IUneceProductionProcess } from "./IUneceProductionProcess.js";
import type { IUneceSpecifiedMaterial } from "./IUneceSpecifiedMaterial.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTradeProduct } from "./IUneceTradeProduct.js";
import type { UneceProductionUnitTypeCodeList } from "../typeCodes/uneceProductionUnitTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A defined set of production processes under the single management of a facility.
 * @see https://vocabulary.uncefact.org/ProductionUnit
 */
export interface IUneceProductionUnit extends IJsonLdNodeObject {
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
	applicableMachine?: IUneceMachine[];

	/**
	 * A production device applicable to this facility production unit.
	 * @see https://vocabulary.uncefact.org/applicableProductionDevice
	 */
	applicableProductionDevice?: IUneceProductionDevice[];

	/**
	 * A production process applicable to this facility production unit.
	 * @see https://vocabulary.uncefact.org/applicableProductionProcess
	 */
	applicableProductionProcess?: IUneceProductionProcess[];

	/**
	 * A sustainability characteristic applicable to this facility production unit.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

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
	dedicatedFacility?: IUneceProductionFacility[];

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
	inputApplicableBatch?: IUneceProductBatch[];

	/**
	 * Input material applicable to this facility production unit.
	 * @see https://vocabulary.uncefact.org/inputApplicableMaterial
	 */
	inputApplicableMaterial?: IUneceSpecifiedMaterial[];

	/**
	 * An input product applicable to this facility production unit.
	 * @see https://vocabulary.uncefact.org/inputApplicableProduct
	 */
	inputApplicableProduct?: IUneceTradeProduct[];

	/**
	 * A manufacturer party related to this facility production unit.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: IUneceTradeParty[];

	/**
	 * The name, expressed as text, for this facility production unit.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * An output product batch applicable to this facility production unit.
	 * @see https://vocabulary.uncefact.org/outputApplicableBatch
	 */
	outputApplicableBatch?: IUneceProductBatch[];

	/**
	 * Output material applicable to this facility production unit.
	 * @see https://vocabulary.uncefact.org/outputApplicableMaterial
	 */
	outputApplicableMaterial?: IUneceSpecifiedMaterial[];

	/**
	 * An output product applicable to this facility production unit.
	 * @see https://vocabulary.uncefact.org/outputApplicableProduct
	 */
	outputApplicableProduct?: IUneceTradeProduct[];

	/**
	 * A physical location referenced for this facility production unit.
	 * @see https://vocabulary.uncefact.org/physicalLocation
	 */
	physicalLocation?: IUneceLocation;

	/**
	 * A trade party related to this facility production unit.
	 * @see https://vocabulary.uncefact.org/relatedParty
	 */
	relatedParty?: IUneceTradeParty[];

	/**
	 * An organizational certificate specified for this facility production unit.
	 * @see https://vocabulary.uncefact.org/specifiedOrganizationalCertificate
	 */
	specifiedOrganizationalCertificate?: IUneceOrganizationalCertificate[];

	/**
	 * A process certificate specified for this facility production unit.
	 * @see https://vocabulary.uncefact.org/specifiedProcessCertificate
	 */
	specifiedProcessCertificate?: IUneceProcessCertificate[];

	/**
	 * A product batch certificate specified for this facility production unit.
	 * @see https://vocabulary.uncefact.org/specifiedProductBatchCertificate
	 */
	specifiedProductBatchCertificate?: IUneceProductBatchCertificate[];

	/**
	 * A product certificate specified for this facility production unit.
	 * @see https://vocabulary.uncefact.org/specifiedProductCertificate
	 */
	specifiedProductCertificate?: IUneceProductCertificate[];

	/**
	 * A subcontractor party for this facility production unit.
	 * @see https://vocabulary.uncefact.org/subcontractorParty
	 */
	subcontractorParty?: IUneceTradeParty[];

	/**
	 * A production unit subordinate to this facility production unit.
	 * @see https://vocabulary.uncefact.org/subordinateProductionUnit
	 */
	subordinateProductionUnit?: IUneceProductionUnit[];

	/**
	 * The code specifying the type of facility production unit.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceProductionUnitTypeCodeList | string;
}
