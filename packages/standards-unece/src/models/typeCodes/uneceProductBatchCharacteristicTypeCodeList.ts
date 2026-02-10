// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceProductBatchCharacteristic typeCode property.
 * @see https://vocabulary.uncefact.org/ProductBatchCharacteristic
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceProductBatchCharacteristicTypeCodeList = {
	/**
	 * A product batch characteristic applicable to this product batch.
	 * @see https://vocabulary.uncefact.org/applicableProductBatchCharacteristic
	 */
	ApplicableProductBatchCharacteristic: "unece:applicableProductBatchCharacteristic",

	/**
	 * A product batch characteristic specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedProductBatchCharacteristic
	 */
	SpecifiedProductBatchCharacteristic: "unece:specifiedProductBatchCharacteristic"
} as const;

/**
 * Values for UneceProductBatchCharacteristic typeCode property.
 * @see https://vocabulary.uncefact.org/ProductBatchCharacteristic
 */
export type UneceProductBatchCharacteristicTypeCodeList = (typeof UneceProductBatchCharacteristicTypeCodeList)[keyof typeof UneceProductBatchCharacteristicTypeCodeList];
