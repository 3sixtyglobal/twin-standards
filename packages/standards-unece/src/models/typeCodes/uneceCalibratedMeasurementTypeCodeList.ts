// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceCalibratedMeasurement typeCode property.
 * @see https://vocabulary.uncefact.org/CalibratedMeasurement
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceCalibratedMeasurementTypeCodeList = {
	/**
	 * An actual calibrated measurement reported for this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/actualReportedMeasurement
	 */
	ActualReportedMeasurement: "unece:actualReportedMeasurement",

	/**
	 * A calibrated measurement of precision for this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/precisionMeasurement
	 */
	PrecisionMeasurement: "unece:precisionMeasurement",

	/**
	 * A scheduled calibrated measurement reported for this monitoring sensor.
	 * @see https://vocabulary.uncefact.org/scheduledReportedMeasurement
	 */
	ScheduledReportedMeasurement: "unece:scheduledReportedMeasurement",

	/**
	 * A calibrated measurement specified for this specified condition.
	 * @see https://vocabulary.uncefact.org/specifiedMeasurement
	 */
	SpecifiedMeasurement: "unece:specifiedMeasurement"
} as const;

/**
 * Values for UneceCalibratedMeasurement typeCode property.
 * @see https://vocabulary.uncefact.org/CalibratedMeasurement
 */
export type UneceCalibratedMeasurementTypeCodeList = (typeof UneceCalibratedMeasurementTypeCodeList)[keyof typeof UneceCalibratedMeasurementTypeCodeList];
