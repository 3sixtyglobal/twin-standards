// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceGoodsCharacteristic typeCode property.
 * @see https://vocabulary.uncefact.org/GoodsCharacteristic
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceGoodsCharacteristicTypeCodeList = {
	/**
	 * A distinguishing material feature applicable to this trade product instance.
	 * A goods characteristic applicable to this specified material.
	 * A material goods characteristic applicable to this trade product.
	 * Material goods characteristic applicable to this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/applicableGoodsCharacteristic
	 */
	ApplicableGoodsCharacteristic: "unece:applicableGoodsCharacteristic",

	/**
	 * Material characteristics of goods carried during this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/carriedGoodsCharacteristic
	 */
	CarriedGoodsCharacteristic: "unece:carriedGoodsCharacteristic"
} as const;

/**
 * Values for UneceGoodsCharacteristic typeCode property.
 * @see https://vocabulary.uncefact.org/GoodsCharacteristic
 */
export type UneceGoodsCharacteristicTypeCodeList = (typeof UneceGoodsCharacteristicTypeCodeList)[keyof typeof UneceGoodsCharacteristicTypeCodeList];
