// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * RDF Class for TemperatureUnitMeasureType unit code type to define unit code values.
 * @see https://vocabulary.uncefact.org/TemperatureUnitMeasureCode
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TemperatureUnitMeasureCode = {
	/**
	 * degree Celsius: CEL.
	 */
	DegreeCelsius: "unece:TemperatureUnitMeasureCode#CEL",

	/**
	 * degree Fahrenheit: FAH.
	 */
	DegreeFahrenheit: "unece:TemperatureUnitMeasureCode#FAH"
} as const;

/**
 * RDF Class for TemperatureUnitMeasureType unit code type to define unit code values.
 * @see https://vocabulary.uncefact.org/TemperatureUnitMeasureCode
 */
export type TemperatureUnitMeasureCode = (typeof TemperatureUnitMeasureCode)[keyof typeof TemperatureUnitMeasureCode];
