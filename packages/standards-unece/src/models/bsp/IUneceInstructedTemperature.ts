// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Temperature settings instructed for storage or movement of goods.
 * @see https://vocabulary.uncefact.org/InstructedTemperature
 */
export interface IUneceInstructedTemperature extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.InstructedTemperature;

	/**
	 * The code specifying the control of this instructed temperature, such as normal or chilled.
	 * @see https://vocabulary.uncefact.org/controlCode
	 */
	controlCode?: string;

	/**
	 * The measure of the maximum value of this instructed temperature.
	 * @see https://vocabulary.uncefact.org/maximumValueMeasure
	 */
	maximumValueMeasure?: IUneceMeasureType;

	/**
	 * The measure of the minimum value of this instructed temperature.
	 * @see https://vocabulary.uncefact.org/minimumValueMeasure
	 */
	minimumValueMeasure?: IUneceMeasureType;
}
