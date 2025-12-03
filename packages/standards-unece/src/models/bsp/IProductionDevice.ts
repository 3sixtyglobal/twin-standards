// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ILocation } from "./ILocation.js";
import type { IMachine } from "./IMachine.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IProductBatch } from "./IProductBatch.js";
import type { IProductionUnit } from "./IProductionUnit.js";
import type { ISpecifiedMaterial } from "./ISpecifiedMaterial.js";
import type { ISpecifiedParameter } from "./ISpecifiedParameter.js";
import type { ISupplyChainEvent } from "./ISupplyChainEvent.js";
import type { ITradeProduct } from "./ITradeProduct.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An object, especially a piece of mechanical or electronic equipment, made or adapted in order to perform a production
 * activity.
 * @see https://vocabulary.uncefact.org/ProductionDevice
 */
export interface IProductionDevice extends IJsonLdNodeObject {
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
	applicableParameter?: ISpecifiedParameter[];

	/**
	 * A production machine combined with this specified production device.
	 * @see https://vocabulary.uncefact.org/combinedMachine
	 */
	combinedMachine?: IMachine[];

	/**
	 * A production device combined with this specified production device.
	 * @see https://vocabulary.uncefact.org/combinedProductionDevice
	 */
	combinedProductionDevice?: IProductionDevice[];

	/**
	 * A textual description of a function of this specified production device.
	 * @see https://vocabulary.uncefact.org/functionDescription
	 */
	functionDescription?: string;

	/**
	 * An identifier of this specified production device.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An input batch applicable to this specified production device.
	 * @see https://vocabulary.uncefact.org/inputApplicableBatch
	 */
	inputApplicableBatch?: IProductBatch[];

	/**
	 * Input material applicable to this specified production device.
	 * @see https://vocabulary.uncefact.org/inputApplicableMaterial
	 */
	inputApplicableMaterial?: ISpecifiedMaterial[];

	/**
	 * An input product applicable to this specified production device.
	 * @see https://vocabulary.uncefact.org/inputApplicableProduct
	 */
	inputApplicableProduct?: ITradeProduct[];

	/**
	 * A measure of the input capacity of this specified production device, such as maximum reach or average per month.
	 * @see https://vocabulary.uncefact.org/inputCapacityMeasure
	 */
	inputCapacityMeasure?: IMeasureType[];

	/**
	 * An output batch applicable to this specified production device.
	 * @see https://vocabulary.uncefact.org/outputApplicableBatch
	 */
	outputApplicableBatch?: IProductBatch[];

	/**
	 * Output material applicable to this specified production device.
	 * @see https://vocabulary.uncefact.org/outputApplicableMaterial
	 */
	outputApplicableMaterial?: ISpecifiedMaterial[];

	/**
	 * An output product applicable to this specified production device.
	 * @see https://vocabulary.uncefact.org/outputApplicableProduct
	 */
	outputApplicableProduct?: ITradeProduct[];

	/**
	 * A measure of the output capacity of this specified production device, such as maximum reach or average per month.
	 * @see https://vocabulary.uncefact.org/outputCapacityMeasure
	 */
	outputCapacityMeasure?: IMeasureType[];

	/**
	 * A type, expressed as text, for this specified production device.
	 * @see https://vocabulary.uncefact.org/productionDeviceType
	 */
	productionDeviceType?: string;

	/**
	 * An IOT (Internet of Things) or other scanning device reporting event for this specified production device.
	 * @see https://vocabulary.uncefact.org/reportingIOTDeviceSupplyChainEvent
	 */
	reportingIOTDeviceSupplyChainEvent?: ISupplyChainEvent[];

	/**
	 * An operational parameter requested for this specified production device.
	 * @see https://vocabulary.uncefact.org/requestedOperationalApplicableParameter
	 */
	requestedOperationalApplicableParameter?: ISpecifiedParameter[];

	/**
	 * A referenced location specified for this production device.
	 * @see https://vocabulary.uncefact.org/specifiedLocation
	 */
	specifiedLocation?: ILocation[];

	/**
	 * A facility production unit for this specified production device.
	 * @see https://vocabulary.uncefact.org/specifiedProductionUnit
	 */
	specifiedProductionUnit?: IProductionUnit[];

	/**
	 * The code specifying the subordinate type for this production device.
	 * @see https://vocabulary.uncefact.org/subordinateTypeCode
	 */
	subordinateTypeCode?: string;

	/**
	 * The code specifying the type of production device.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
