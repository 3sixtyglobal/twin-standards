// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceCalibratedMeasurement } from "./IUneceCalibratedMeasurement.js";
import type { IUneceControlSettingParameter } from "./IUneceControlSettingParameter.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceOperationalParameter } from "./IUneceOperationalParameter.js";
import type { IUneceProductCertificate } from "./IUneceProductCertificate.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceSensorTypeCodeList } from "../typeCodes/uneceSensorTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An object which can detect and measure physical properties and which can record, indicate and transmit such
 * measurements.
 * @see https://vocabulary.uncefact.org/Sensor
 */
export interface IUneceSensor {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Sensor;

	/**
	 * An actual calibrated measurement reported for this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/actualReportedMeasurement
	 */
	actualReportedMeasurement?: IUneceCalibratedMeasurement[];

	/**
	 * A control setting parameter defined for this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/definedControlSettingParameter
	 */
	definedControlSettingParameter?: IUneceControlSettingParameter[];

	/**
	 * An operational parameter defined for this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/definedOperationalParameter
	 */
	definedOperationalParameter?: IUneceOperationalParameter[];

	/**
	 * A product certificate granted for this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/grantedCertificate
	 */
	grantedCertificate?: IUneceProductCertificate[];

	/**
	 * An identifier of this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The manufacturer party for this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: IUneceTradeParty;

	/**
	 * The owner party of this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/ownerParty
	 */
	ownerParty?: IUneceTradeParty;

	/**
	 * The code specifying a position of this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/positionCode
	 */
	positionCode?: string;

	/**
	 * A calibrated measurement of precision for this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/precisionMeasurement
	 */
	precisionMeasurement?: IUneceCalibratedMeasurement[];

	/**
	 * The percentage of the remaining battery charge of this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/remainingBatteryChargePercent
	 */
	remainingBatteryChargePercent?: string;

	/**
	 * A scheduled calibrated measurement reported for this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/scheduledReportedMeasurement
	 */
	scheduledReportedMeasurement?: IUneceCalibratedMeasurement[];

	/**
	 * The code specifying a type of monitoring sensor.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceSensorTypeCodeList | string;

	/**
	 * The measure of the value for this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IUneceMeasureType;
}
