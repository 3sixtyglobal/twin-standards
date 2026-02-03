// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceTemperatureUnitMeasureType } from "./IUneceTemperatureUnitMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A specified temperature value or range of values.
 * @see https://vocabulary.uncefact.org/SpecifiedTemperature
 */
export interface IUneceSpecifiedTemperature extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecifiedTemperature;

	/**
	 * The measure of the highest value of a range for this specified temperature, such as a maximum temperature value of
	 * fourteen degrees Celsius.
	 * @see https://vocabulary.uncefact.org/maximumValueMeasure
	 */
	maximumValueMeasure?: IUneceMeasureType;

	/**
	 * The measure of the lowest value of a range for this specified temperature, such as a minimum temperature value of four
	 * degrees Celsius.
	 * @see https://vocabulary.uncefact.org/minimumValueMeasure
	 */
	minimumValueMeasure?: IUneceMeasureType;

	/**
	 * The measure of the value of this specified temperature, such as a temperature value of ten degrees Celsius.
	 * @see https://vocabulary.uncefact.org/temperatureUnitValueMeasure
	 */
	temperatureUnitValueMeasure?: IUneceTemperatureUnitMeasureType;
}
