// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceAgriculturalCharacteristic typeCode property.
 * @see https://vocabulary.uncefact.org/AgriculturalCharacteristic
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceAgriculturalCharacteristicTypeCodeList = {
	/**
	 * An agricultural characteristic applicable to this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/applicableAgriculturalCharacteristic
	 */
	ApplicableAgriculturalCharacteristic: "unece:applicableAgriculturalCharacteristic",

	/**
	 * An agricultural characteristic specified for this crop plot.
	 * An agricultural characteristic specified for this crop produce batch.
	 * An agricultural characteristic specified for this field crop.
	 * An agricultural characteristic specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedAgriculturalCharacteristic
	 */
	SpecifiedAgriculturalCharacteristic: "unece:specifiedAgriculturalCharacteristic"
} as const;

/**
 * Values for UneceAgriculturalCharacteristic typeCode property.
 * @see https://vocabulary.uncefact.org/AgriculturalCharacteristic
 */
export type UneceAgriculturalCharacteristicTypeCodeList = (typeof UneceAgriculturalCharacteristicTypeCodeList)[keyof typeof UneceAgriculturalCharacteristicTypeCodeList];
