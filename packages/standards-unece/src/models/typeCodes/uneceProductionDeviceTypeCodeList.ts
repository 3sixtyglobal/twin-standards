// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceProductionDevice typeCode property.
 * @see https://vocabulary.uncefact.org/ProductionDevice
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceProductionDeviceTypeCodeList = {
	/**
	 * A production device allocated to this production process.
	 * @see https://vocabulary.uncefact.org/allocatedProductionDevice
	 */
	AllocatedProductionDevice: "unece:allocatedProductionDevice",

	/**
	 * A production device applicable to this facility production unit.
	 * A production device applicable to this product colour.
	 * A production device applicable to this product print.
	 * @see https://vocabulary.uncefact.org/applicableProductionDevice
	 */
	ApplicableProductionDevice: "unece:applicableProductionDevice",

	/**
	 * A production device combined with this production machine.
	 * A production device combined with this specified production device.
	 * @see https://vocabulary.uncefact.org/combinedProductionDevice
	 */
	CombinedProductionDevice: "unece:combinedProductionDevice"
} as const;

/**
 * Values for UneceProductionDevice typeCode property.
 * @see https://vocabulary.uncefact.org/ProductionDevice
 */
export type UneceProductionDeviceTypeCodeList = (typeof UneceProductionDeviceTypeCodeList)[keyof typeof UneceProductionDeviceTypeCodeList];
