// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceMetricCharacteristic typeCode property.
 * @see https://vocabulary.uncefact.org/MetricCharacteristic
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceMetricCharacteristicTypeCodeList = {
	/**
	 * A metric characteristic applicable to this referenced standard.
	 * @see https://vocabulary.uncefact.org/applicableMetricCharacteristic
	 */
	ApplicableMetricCharacteristic: "unece:applicableMetricCharacteristic",

	/**
	 * The maximum metric characteristic specified for this target issue.
	 * @see https://vocabulary.uncefact.org/maximumSpecifiedCharacteristic
	 */
	MaximumSpecifiedCharacteristic: "unece:maximumSpecifiedCharacteristic",

	/**
	 * The minimum metric characteristic specified for this target issue.
	 * @see https://vocabulary.uncefact.org/minimumSpecifiedCharacteristic
	 */
	MinimumSpecifiedCharacteristic: "unece:minimumSpecifiedCharacteristic",

	/**
	 * The metric characteristic specified for this target issue.
	 * @see https://vocabulary.uncefact.org/specifiedMetricCharacteristic
	 */
	SpecifiedMetricCharacteristic: "unece:specifiedMetricCharacteristic"
} as const;

/**
 * Values for UneceMetricCharacteristic typeCode property.
 * @see https://vocabulary.uncefact.org/MetricCharacteristic
 */
export type UneceMetricCharacteristicTypeCodeList = (typeof UneceMetricCharacteristicTypeCodeList)[keyof typeof UneceMetricCharacteristicTypeCodeList];
