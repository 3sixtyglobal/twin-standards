// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceTemperatureUnitMeasureCode } from "../lists/uneceTemperatureUnitMeasureCode.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The numeric value determined by temperature measuring.
 * @see https://vocabulary.uncefact.org/TemperatureUnitMeasureType
 */
export interface IUneceTemperatureUnitMeasureType {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TemperatureUnitMeasureType;

	/**
	 * The numeric value.
	 * @see https://vocabulary.uncefact.org/TemperatureUnitMeasureTypeValue
	 */
	TemperatureUnitMeasureTypeValue?: string;

	/**
	 * The unit code.
	 * @see https://vocabulary.uncefact.org/TemperatureUnitMeasureTypeCode
	 */
	TemperatureUnitMeasureTypeCode?: UneceTemperatureUnitMeasureCode;
}
