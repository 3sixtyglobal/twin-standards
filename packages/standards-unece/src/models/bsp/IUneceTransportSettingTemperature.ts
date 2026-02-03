// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceTemperatureSettingInstructions } from "./IUneceTemperatureSettingInstructions.js";
import type { IUneceTemperatureUnitMeasureType } from "./IUneceTemperatureUnitMeasureType.js";
import type { UneceTemperatureTypeCodeList } from "../lists/uneceTemperatureTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Temperature settings for a transport movement, such as a required storage temperature range.
 * @see https://vocabulary.uncefact.org/TransportSettingTemperature
 */
export interface IUneceTransportSettingTemperature extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TransportSettingTemperature;

	/**
	 * Informational instructions for achieving, maintaining, using or responding to this transport setting temperature.
	 * @see https://vocabulary.uncefact.org/informationInstructions
	 */
	informationInstructions?: IUneceTemperatureSettingInstructions;

	/**
	 * The measure of the highest value of this transport setting temperature, such as a maximum temperature value of fourteen
	 * degrees Celsius.
	 * @see https://vocabulary.uncefact.org/maximumValueMeasure
	 */
	maximumValueMeasure?: IUneceMeasureType;

	/**
	 * The measure of the lowest value of this transport setting temperature, such as a minimum temperature value of four
	 * degrees Celsius.
	 * @see https://vocabulary.uncefact.org/minimumValueMeasure
	 */
	minimumValueMeasure?: IUneceMeasureType;

	/**
	 * The code specifying the type of transport setting temperature [Reference United Nations Code List (UNCL) 6245].
	 * @see https://vocabulary.uncefact.org/temperatureTypeCode
	 */
	temperatureTypeCode?: UneceTemperatureTypeCodeList;

	/**
	 * The measure of the value of this transport setting temperature, such as a temperature value of ten degrees Celsius.
	 * @see https://vocabulary.uncefact.org/temperatureUnitValueMeasure
	 */
	temperatureUnitValueMeasure?: IUneceTemperatureUnitMeasureType;
}
