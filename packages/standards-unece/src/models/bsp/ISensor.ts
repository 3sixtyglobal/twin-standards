// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ICalibratedMeasurement } from "./ICalibratedMeasurement.js";
import type { IControlSettingParameter } from "./IControlSettingParameter.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IOperationalParameter } from "./IOperationalParameter.js";
import type { IProductCertificate } from "./IProductCertificate.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An object which can detect and measure physical properties and which can record, indicate and transmit such
 * measurements.
 * @see https://vocabulary.uncefact.org/Sensor
 */
export interface ISensor extends IJsonLdNodeObject {
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
	actualReportedMeasurement?: ICalibratedMeasurement[];

	/**
	 * A control setting parameter defined for this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/definedControlSettingParameter
	 */
	definedControlSettingParameter?: IControlSettingParameter[];

	/**
	 * An operational parameter defined for this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/definedOperationalParameter
	 */
	definedOperationalParameter?: IOperationalParameter[];

	/**
	 * A product certificate granted for this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/grantedCertificate
	 */
	grantedCertificate?: IProductCertificate[];

	/**
	 * An identifier of this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The manufacturer party for this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: ITradeParty[];

	/**
	 * The owner party of this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/ownerParty
	 */
	ownerParty?: ITradeParty[];

	/**
	 * The code specifying a position of this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/positionCode
	 */
	positionCode?: string;

	/**
	 * A calibrated measurement of precision for this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/precisionMeasurement
	 */
	precisionMeasurement?: ICalibratedMeasurement[];

	/**
	 * The percentage of the remaining battery charge of this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/remainingBatteryChargePercent
	 */
	remainingBatteryChargePercent?: string;

	/**
	 * A scheduled calibrated measurement reported for this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/scheduledReportedMeasurement
	 */
	scheduledReportedMeasurement?: ICalibratedMeasurement[];

	/**
	 * The code specifying a type of monitoring sensor.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * The measure of the value for this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IMeasureType[];
}
