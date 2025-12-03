// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IInstructedTemperature } from "./IInstructedTemperature.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ITransportSettingTemperature } from "./ITransportSettingTemperature.js";
import type { IWeightUnitMeasureType } from "./IWeightUnitMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Handling information of an instructive nature.
 * @see https://vocabulary.uncefact.org/HandlingInstructions
 */
export interface IHandlingInstructions extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.HandlingInstructions;

	/**
	 * A transport related temperature setting applicable to these handling instructions.
	 * @see https://vocabulary.uncefact.org/applicableTransportSettingTemperature
	 */
	applicableTransportSettingTemperature?: ITransportSettingTemperature[];

	/**
	 * The instructed temperature for delivery applicable to these handling instructions.
	 * @see https://vocabulary.uncefact.org/deliveryApplicableTemperature
	 */
	deliveryApplicableTemperature?: IInstructedTemperature[];

	/**
	 * A textual description of these handling instructions.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The indication of whether or not an exclusive usage exists in these handling instructions.
	 * @see https://vocabulary.uncefact.org/exclusiveUsageIndicator
	 */
	exclusiveUsageIndicator?: boolean;

	/**
	 * A textual expression of these handling instructions.
	 * @see https://vocabulary.uncefact.org/handling
	 */
	handling?: string;

	/**
	 * A code specifying these handling instructions.
	 * @see https://vocabulary.uncefact.org/handlingCode
	 */
	handlingCode?: string;

	/**
	 * A code specifying a description of these handling instructions.
	 * @see https://vocabulary.uncefact.org/handlingInstructionsDescriptionCode
	 */
	handlingInstructionsDescriptionCode?: string;

	/**
	 * The identifier of this handling instructions.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A type, expressed as text, for these handling instructions.
	 * @see https://vocabulary.uncefact.org/instructionsType
	 */
	instructionsType?: string;

	/**
	 * A name, expressed as text, of an item included in these handling instructions.
	 * @see https://vocabulary.uncefact.org/itemName
	 */
	itemName?: string;

	/**
	 * The instructed temperature for market delivery applicable to these handling instructions.
	 * @see https://vocabulary.uncefact.org/marketDeliveryApplicableTemperature
	 */
	marketDeliveryApplicableTemperature?: IInstructedTemperature[];

	/**
	 * The maximum number of units which can be stacked on top of each other according to these handling instructions.
	 * @see https://vocabulary.uncefact.org/maximumStackabilityApplicableQuantity
	 */
	maximumStackabilityApplicableQuantity?: IQuantityType[];

	/**
	 * The maximum stackability weight applicable to these handling instructions.
	 * @see https://vocabulary.uncefact.org/maximumStackabilityWeightApplicableMeasure
	 */
	maximumStackabilityWeightApplicableMeasure?: IWeightUnitMeasureType[];

	/**
	 * The measure of the maximum storage humidity applicable to these handling instructions.
	 * @see https://vocabulary.uncefact.org/maximumStorageHumidityApplicableMeasure
	 */
	maximumStorageHumidityApplicableMeasure?: IMeasureType[];

	/**
	 * The measure of the minimum storage humidity applicable to these handling instructions.
	 * @see https://vocabulary.uncefact.org/minimumStorageHumidityApplicableMeasure
	 */
	minimumStorageHumidityApplicableMeasure?: IMeasureType[];

	/**
	 * A procedure, expressed as text, for these handling instructions.
	 * @see https://vocabulary.uncefact.org/procedure
	 */
	procedure?: string;

	/**
	 * An indication of whether or not a requirement exists for these handling instructions.
	 * @see https://vocabulary.uncefact.org/requirementIndicator
	 */
	requirementIndicator?: boolean;

	/**
	 * The instructed temperature for storage applicable to these handling instructions.
	 * @see https://vocabulary.uncefact.org/storageApplicableTemperature
	 */
	storageApplicableTemperature?: IInstructedTemperature[];
}
