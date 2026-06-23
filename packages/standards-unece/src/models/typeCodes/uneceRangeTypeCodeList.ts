// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceRange typeCode property.
 * @see https://vocabulary.uncefact.org/Range
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceRangeTypeCodeList = {
	/**
	 * A defined range specified for this operational parameter.
	 * @see https://vocabulary.uncefact.org/definedRange
	 */
	DefinedRange: "unece:definedRange",

	/**
	 * A requested range specified for this control setting parameter.
	 * @see https://vocabulary.uncefact.org/requestedRange
	 */
	RequestedRange: "unece:requestedRange",

	/**
	 * A range specified for a value of this metric characteristic.
	 * A range specified for a value of this product batch characteristic.
	 * A range specified for a value of this product characteristic.
	 * A range specified for the value of this agricultural characteristic.
	 * A range specified for the value of this organization characteristic.
	 * A range specified for the value of this process characteristic.
	 * A range specified for the value of this sustainability characteristic.
	 * A range specified for the value of this technical characteristic.
	 * @see https://vocabulary.uncefact.org/valueRange
	 */
	ValueRange: "unece:valueRange"
} as const;

/**
 * Values for UneceRange typeCode property.
 * @see https://vocabulary.uncefact.org/Range
 */
export type UneceRangeTypeCodeList = (typeof UneceRangeTypeCodeList)[keyof typeof UneceRangeTypeCodeList];
