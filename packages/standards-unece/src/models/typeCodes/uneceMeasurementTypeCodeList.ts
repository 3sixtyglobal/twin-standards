// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceMeasurement typeCode property.
 * @see https://vocabulary.uncefact.org/Measurement
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceMeasurementTypeCodeList = {
	/**
	 * A measurement associated with this document clause.
	 * @see https://vocabulary.uncefact.org/associatedMeasurement
	 */
	AssociatedMeasurement: "unece:associatedMeasurement",

	/**
	 * The measurement of the control temperature of these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/controlTemperatureMeasurement
	 */
	ControlTemperatureMeasurement: "unece:controlTemperatureMeasurement",

	/**
	 * The measurement of the emergency temperature of these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/emergencyTemperatureMeasurement
	 */
	EmergencyTemperatureMeasurement: "unece:emergencyTemperatureMeasurement",

	/**
	 * A measurement of the flashpoint temperature of these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/flashpointTemperatureMeasurement
	 */
	FlashpointTemperatureMeasurement: "unece:flashpointTemperatureMeasurement"
} as const;

/**
 * Values for UneceMeasurement typeCode property.
 * @see https://vocabulary.uncefact.org/Measurement
 */
export type UneceMeasurementTypeCodeList = (typeof UneceMeasurementTypeCodeList)[keyof typeof UneceMeasurementTypeCodeList];
