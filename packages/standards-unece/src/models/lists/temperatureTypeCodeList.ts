// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to replace or represent a type of temperature.
 * @see https://vocabulary.uncefact.org/TemperatureTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TemperatureTypeCodeList = {
	/**
	 * Storage temperature: 1.
	 */
	StorageTemperature: "unece:TemperatureTypeCodeList#1",

	/**
	 * Transport temperature: 2.
	 */
	TransportTemperature: "unece:TemperatureTypeCodeList#2",

	/**
	 * Cargo operating temperature: 3.
	 */
	CargoOperatingTemperature: "unece:TemperatureTypeCodeList#3",

	/**
	 * Transport emergency temperature: 4.
	 */
	TransportEmergencyTemperature: "unece:TemperatureTypeCodeList#4",

	/**
	 * Transport control temperature: 5.
	 */
	TransportControlTemperature: "unece:TemperatureTypeCodeList#5",

	/**
	 * Boiling point: 6.
	 */
	BoilingPoint: "unece:TemperatureTypeCodeList#6",

	/**
	 * Temperature, recorded: 7.
	 */
	TemperatureRecorded: "unece:TemperatureTypeCodeList#7",

	/**
	 * Self-accelerating decomposition temperature (SADT): 8.
	 */
	SelfAcceleratingDecompositionTemperature: "unece:TemperatureTypeCodeList#8",

	/**
	 * Self-accelerating polymerization temperature (SAPT): 9.
	 */
	SelfAcceleratingPolymerizationTemperature: "unece:TemperatureTypeCodeList#9"
} as const;

/**
 * A character string used to replace or represent a type of temperature.
 * @see https://vocabulary.uncefact.org/TemperatureTypeCodeList
 */
export type TemperatureTypeCodeList = (typeof TemperatureTypeCodeList)[keyof typeof TemperatureTypeCodeList];
