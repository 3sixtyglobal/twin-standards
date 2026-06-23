// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceLocation } from "./IUneceLocation.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceProductBatch } from "./IUneceProductBatch.js";
import type { IUneceProductionDevice } from "./IUneceProductionDevice.js";
import type { IUneceProductionUnit } from "./IUneceProductionUnit.js";
import type { IUneceSpecifiedMaterial } from "./IUneceSpecifiedMaterial.js";
import type { IUneceSpecifiedParameter } from "./IUneceSpecifiedParameter.js";
import type { IUneceSupplyChainEvent } from "./IUneceSupplyChainEvent.js";
import type { IUneceTradeProduct } from "./IUneceTradeProduct.js";
import type { UneceMachineTypeCodeList } from "../typeCodes/uneceMachineTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An apparatus specified to be used to perform an activity to produce something.
 * @see https://vocabulary.uncefact.org/Machine
 */
export interface IUneceMachine {
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
	combinedMachine?: IUneceMachine[];

	/**
	 * A production device combined with this production machine.
	 * @see https://vocabulary.uncefact.org/combinedProductionDevice
	 */
	combinedProductionDevice?: IUneceProductionDevice[];

	/**
	 * A textual description of the function of this production machine.
	 * @see https://vocabulary.uncefact.org/functionDescription
	 */
	functionDescription?: string;

	/**
	 * An identifier of this production machine.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * An input batch applicable to this production machine.
	 * @see https://vocabulary.uncefact.org/inputApplicableBatch
	 */
	inputApplicableBatch?: IUneceProductBatch[];

	/**
	 * Input material applicable to this production machine.
	 * @see https://vocabulary.uncefact.org/inputApplicableMaterial
	 */
	inputApplicableMaterial?: IUneceSpecifiedMaterial[];

	/**
	 * An input product applicable to this production machine.
	 * @see https://vocabulary.uncefact.org/inputApplicableProduct
	 */
	inputApplicableProduct?: IUneceTradeProduct[];

	/**
	 * A measure of the input capacity of this production machine.
	 * @see https://vocabulary.uncefact.org/inputCapacityMeasure
	 */
	inputCapacityMeasure?: IUneceMeasureType[];

	/**
	 * A type, expressed as text, for this production machine.
	 * @see https://vocabulary.uncefact.org/machineType
	 */
	machineType?: string;

	/**
	 * An operational parameter applicable to this production machine.
	 * @see https://vocabulary.uncefact.org/operationalApplicableParameter
	 */
	operationalApplicableParameter?: IUneceSpecifiedParameter[];

	/**
	 * An output product batch applicable to this production machine.
	 * @see https://vocabulary.uncefact.org/outputApplicableBatch
	 */
	outputApplicableBatch?: IUneceProductBatch[];

	/**
	 * Output material applicable to this production machine.
	 * @see https://vocabulary.uncefact.org/outputApplicableMaterial
	 */
	outputApplicableMaterial?: IUneceSpecifiedMaterial[];

	/**
	 * An output product applicable to this production machine.
	 * @see https://vocabulary.uncefact.org/outputApplicableProduct
	 */
	outputApplicableProduct?: IUneceTradeProduct[];

	/**
	 * A measure of the output capacity of this production machine.
	 * @see https://vocabulary.uncefact.org/outputCapacityMeasure
	 */
	outputCapacityMeasure?: IUneceMeasureType[];

	/**
	 * An IOT (Internet of Things) device or scanning device reporting event for this production machine.
	 * @see https://vocabulary.uncefact.org/reportingIOTDeviceSupplyChainEvent
	 */
	reportingIOTDeviceSupplyChainEvent?: IUneceSupplyChainEvent[];

	/**
	 * A requested operational parameter applicable to this production machine.
	 * @see https://vocabulary.uncefact.org/requestedOperationalApplicableParameter
	 */
	requestedOperationalApplicableParameter?: IUneceSpecifiedParameter[];

	/**
	 * A referenced location specified for this production machine.
	 * @see https://vocabulary.uncefact.org/specifiedLocation
	 */
	specifiedLocation?: IUneceLocation[];

	/**
	 * A facility production unit specified for this production machine.
	 * @see https://vocabulary.uncefact.org/specifiedProductionUnit
	 */
	specifiedProductionUnit?: IUneceProductionUnit[];

	/**
	 * The code specifying the subordinate type of this production machine.
	 * @see https://vocabulary.uncefact.org/subordinateTypeCode
	 */
	subordinateTypeCode?: string;

	/**
	 * The code specifying the type of production machine.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceMachineTypeCodeList | string;
}
