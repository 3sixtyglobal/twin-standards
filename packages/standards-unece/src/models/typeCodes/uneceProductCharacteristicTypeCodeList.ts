// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceProductCharacteristic typeCode property.
 * @see https://vocabulary.uncefact.org/ProductCharacteristic
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceProductCharacteristicTypeCodeList = {
	/**
	 * A characteristic applicable to this trade product.
	 * A product characteristic applicable to this distinct chemical.
	 * A product characteristic applicable to this product batch certificate.
	 * A product characteristic applicable to this product certificate.
	 * A product characteristic applicable to this specified material.
	 * A product characteristic applicable to this toxicological hazardous material.
	 * A product characteristic applicable to this trade product instance.
	 * @see https://vocabulary.uncefact.org/applicableProductCharacteristic
	 */
	ApplicableProductCharacteristic: "unece:applicableProductCharacteristic",

	/**
	 * A product class characteristic for this product classification.
	 * @see https://vocabulary.uncefact.org/classCharacteristic
	 */
	ClassCharacteristic: "unece:classCharacteristic",

	/**
	 * A product characteristic for this trade product instance.
	 * @see https://vocabulary.uncefact.org/productCharacteristic
	 */
	ProductCharacteristic: "unece:productCharacteristic"
} as const;

/**
 * Values for UneceProductCharacteristic typeCode property.
 * @see https://vocabulary.uncefact.org/ProductCharacteristic
 */
export type UneceProductCharacteristicTypeCodeList = (typeof UneceProductCharacteristicTypeCodeList)[keyof typeof UneceProductCharacteristicTypeCodeList];
