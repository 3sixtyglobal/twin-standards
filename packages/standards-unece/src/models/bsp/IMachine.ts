// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ILocation } from "./ILocation.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IProductBatch } from "./IProductBatch.js";
import type { IProductionDevice } from "./IProductionDevice.js";
import type { IProductionUnit } from "./IProductionUnit.js";
import type { ISpecifiedMaterial } from "./ISpecifiedMaterial.js";
import type { ISpecifiedParameter } from "./ISpecifiedParameter.js";
import type { ISupplyChainEvent } from "./ISupplyChainEvent.js";
import type { ITradeProduct } from "./ITradeProduct.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An apparatus specified to be used to perform an activity to produce something.
 * @see https://vocabulary.uncefact.org/Machine
 */
export interface IMachine extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Machine;

	/**
	 * A production machine combined with this production machine.
	 * @see https://vocabulary.uncefact.org/combinedMachine
	 */
	combinedMachine?: IMachine[];

	/**
	 * A production device combined with this production machine.
	 * @see https://vocabulary.uncefact.org/combinedProductionDevice
	 */
	combinedProductionDevice?: IProductionDevice[];

	/**
	 * A textual description of the function of this production machine.
	 * @see https://vocabulary.uncefact.org/functionDescription
	 */
	functionDescription?: string;

	/**
	 * An identifier of this production machine.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An input batch applicable to this production machine.
	 * @see https://vocabulary.uncefact.org/inputApplicableBatch
	 */
	inputApplicableBatch?: IProductBatch[];

	/**
	 * Input material applicable to this production machine.
	 * @see https://vocabulary.uncefact.org/inputApplicableMaterial
	 */
	inputApplicableMaterial?: ISpecifiedMaterial[];

	/**
	 * An input product applicable to this production machine.
	 * @see https://vocabulary.uncefact.org/inputApplicableProduct
	 */
	inputApplicableProduct?: ITradeProduct[];

	/**
	 * A measure of the input capacity of this production machine.
	 * @see https://vocabulary.uncefact.org/inputCapacityMeasure
	 */
	inputCapacityMeasure?: IMeasureType[];

	/**
	 * A type, expressed as text, for this production machine.
	 * @see https://vocabulary.uncefact.org/machineType
	 */
	machineType?: string;

	/**
	 * An operational parameter applicable to this production machine.
	 * @see https://vocabulary.uncefact.org/operationalApplicableParameter
	 */
	operationalApplicableParameter?: ISpecifiedParameter[];

	/**
	 * An output product batch applicable to this production machine.
	 * @see https://vocabulary.uncefact.org/outputApplicableBatch
	 */
	outputApplicableBatch?: IProductBatch[];

	/**
	 * Output material applicable to this production machine.
	 * @see https://vocabulary.uncefact.org/outputApplicableMaterial
	 */
	outputApplicableMaterial?: ISpecifiedMaterial[];

	/**
	 * An output product applicable to this production machine.
	 * @see https://vocabulary.uncefact.org/outputApplicableProduct
	 */
	outputApplicableProduct?: ITradeProduct[];

	/**
	 * A measure of the output capacity of this production machine.
	 * @see https://vocabulary.uncefact.org/outputCapacityMeasure
	 */
	outputCapacityMeasure?: IMeasureType[];

	/**
	 * An IOT (Internet of Things) device or scanning device reporting event for this production machine.
	 * @see https://vocabulary.uncefact.org/reportingIOTDeviceSupplyChainEvent
	 */
	reportingIOTDeviceSupplyChainEvent?: ISupplyChainEvent[];

	/**
	 * A requested operational parameter applicable to this production machine.
	 * @see https://vocabulary.uncefact.org/requestedOperationalApplicableParameter
	 */
	requestedOperationalApplicableParameter?: ISpecifiedParameter[];

	/**
	 * A referenced location specified for this production machine.
	 * @see https://vocabulary.uncefact.org/specifiedLocation
	 */
	specifiedLocation?: ILocation[];

	/**
	 * A facility production unit specified for this production machine.
	 * @see https://vocabulary.uncefact.org/specifiedProductionUnit
	 */
	specifiedProductionUnit?: IProductionUnit[];

	/**
	 * The code specifying the subordinate type of this production machine.
	 * @see https://vocabulary.uncefact.org/subordinateTypeCode
	 */
	subordinateTypeCode?: string;

	/**
	 * The code specifying the type of production machine.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
