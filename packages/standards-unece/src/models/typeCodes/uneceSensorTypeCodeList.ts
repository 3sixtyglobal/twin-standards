// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceSensor typeCode property.
 * @see https://vocabulary.uncefact.org/Sensor
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceSensorTypeCodeList = {
	/**
	 * An embedded sensor of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/embeddedSensor
	 */
	EmbeddedSensor: "unece:embeddedSensor",

	/**
	 * A remote sensor of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/remoteSensor
	 */
	RemoteSensor: "unece:remoteSensor"
} as const;

/**
 * Values for UneceSensor typeCode property.
 * @see https://vocabulary.uncefact.org/Sensor
 */
export type UneceSensorTypeCodeList = (typeof UneceSensorTypeCodeList)[keyof typeof UneceSensorTypeCodeList];
