// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { IUneceLocation } from "./IUneceLocation.js";
import type { IUneceMachine } from "./IUneceMachine.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceProductBatch } from "./IUneceProductBatch.js";
import type { IUneceProductionUnit } from "./IUneceProductionUnit.js";
import type { IUneceSpecifiedMaterial } from "./IUneceSpecifiedMaterial.js";
import type { IUneceSpecifiedParameter } from "./IUneceSpecifiedParameter.js";
import type { IUneceSupplyChainEvent } from "./IUneceSupplyChainEvent.js";
import type { IUneceTradeProduct } from "./IUneceTradeProduct.js";
import type { UneceProductionDeviceTypeCodeList } from "../typeCodes/uneceProductionDeviceTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An object, especially a piece of mechanical or electronic equipment, made or adapted in order to perform a production
 * activity.
 * @see https://vocabulary.uncefact.org/ProductionDevice
 */
export interface IUneceProductionDevice {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductionDevice;

	/**
	 * A parameter applicable to this specified production device.
	 * @see https://vocabulary.uncefact.org/applicableParameter
	 */
	applicableParameter?: IUneceSpecifiedParameter[];

	/**
	 * A production machine combined with this specified production device.
	 * @see https://vocabulary.uncefact.org/combinedMachine
	 */
	combinedMachine?: IUneceMachine[];

	/**
	 * A production device combined with this specified production device.
	 * @see https://vocabulary.uncefact.org/combinedProductionDevice
	 */
	combinedProductionDevice?: IUneceProductionDevice[];

	/**
	 * A textual description of a function of this specified production device.
	 * @see https://vocabulary.uncefact.org/functionDescription
	 */
	functionDescription?: string;

	/**
	 * An identifier of this specified production device.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * An input batch applicable to this specified production device.
	 * @see https://vocabulary.uncefact.org/inputApplicableBatch
	 */
	inputApplicableBatch?: IUneceProductBatch[];

	/**
	 * Input material applicable to this specified production device.
	 * @see https://vocabulary.uncefact.org/inputApplicableMaterial
	 */
	inputApplicableMaterial?: IUneceSpecifiedMaterial[];

	/**
	 * An input product applicable to this specified production device.
	 * @see https://vocabulary.uncefact.org/inputApplicableProduct
	 */
	inputApplicableProduct?: IUneceTradeProduct[];

	/**
	 * A measure of the input capacity of this specified production device, such as maximum reach or average per month.
	 * @see https://vocabulary.uncefact.org/inputCapacityMeasure
	 */
	inputCapacityMeasure?: IUneceMeasureType[];

	/**
	 * An output batch applicable to this specified production device.
	 * @see https://vocabulary.uncefact.org/outputApplicableBatch
	 */
	outputApplicableBatch?: IUneceProductBatch[];

	/**
	 * Output material applicable to this specified production device.
	 * @see https://vocabulary.uncefact.org/outputApplicableMaterial
	 */
	outputApplicableMaterial?: IUneceSpecifiedMaterial[];

	/**
	 * An output product applicable to this specified production device.
	 * @see https://vocabulary.uncefact.org/outputApplicableProduct
	 */
	outputApplicableProduct?: IUneceTradeProduct[];

	/**
	 * A measure of the output capacity of this specified production device, such as maximum reach or average per month.
	 * @see https://vocabulary.uncefact.org/outputCapacityMeasure
	 */
	outputCapacityMeasure?: IUneceMeasureType[];

	/**
	 * A type, expressed as text, for this specified production device.
	 * @see https://vocabulary.uncefact.org/productionDeviceType
	 */
	productionDeviceType?: string;

	/**
	 * An IOT (Internet of Things) or other scanning device reporting event for this specified production device.
	 * @see https://vocabulary.uncefact.org/reportingIOTDeviceSupplyChainEvent
	 */
	reportingIOTDeviceSupplyChainEvent?: IUneceSupplyChainEvent[];

	/**
	 * An operational parameter requested for this specified production device.
	 * @see https://vocabulary.uncefact.org/requestedOperationalApplicableParameter
	 */
	requestedOperationalApplicableParameter?: IUneceSpecifiedParameter[];

	/**
	 * A referenced location specified for this production device.
	 * @see https://vocabulary.uncefact.org/specifiedLocation
	 */
	specifiedLocation?: IUneceLocation[];

	/**
	 * A facility production unit for this specified production device.
	 * @see https://vocabulary.uncefact.org/specifiedProductionUnit
	 */
	specifiedProductionUnit?: IUneceProductionUnit[];

	/**
	 * The code specifying the subordinate type for this production device.
	 * @see https://vocabulary.uncefact.org/subordinateTypeCode
	 */
	subordinateTypeCode?: string;

	/**
	 * The code specifying the type of production device.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceProductionDeviceTypeCodeList | string;
}
