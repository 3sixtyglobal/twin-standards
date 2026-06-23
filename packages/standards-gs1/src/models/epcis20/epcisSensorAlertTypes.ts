// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * Supported EPCIS 2.0 `sensorAlertType` values for sensor-generated alarms or
 * errors.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EpcisSensorAlertTypes = {
	/**
	 * Sensor alert indicating an alarm condition.
	 */
	AlarmCondition: "ALARM_CONDITION",

	/**
	 * Sensor alert indicating an error condition.
	 */
	ErrorCondition: "ERROR_CONDITION"
} as const;

/**
 * Supported EPCIS 2.0 `sensorAlertType` values for sensor-generated alarms or
 * errors.
 */
export type EpcisSensorAlertTypes =
	(typeof EpcisSensorAlertTypes)[keyof typeof EpcisSensorAlertTypes];
