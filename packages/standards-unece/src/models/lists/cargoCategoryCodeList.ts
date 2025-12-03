// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the cargo category.
 * @see https://vocabulary.uncefact.org/CargoCategoryCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const CargoCategoryCodeList = {
	/**
	 * Liquid Bulk: 0.
	 */
	LiquidBulk: "unece:CargoCategoryCodeList#0",

	/**
	 * Solid Bulk: 1.
	 */
	SolidBulk: "unece:CargoCategoryCodeList#1",

	/**
	 * Large Freight Container (20 feet or more in length): 2.
	 */
	LargeFreightContainer: "unece:CargoCategoryCodeList#2",

	/**
	 * Other Freight Container (Less than 20 feet in length): 3.
	 */
	OtherFreightContainer: "unece:CargoCategoryCodeList#3",

	/**
	 * Palletized: 4.
	 */
	Palletized: "unece:CargoCategoryCodeList#4",

	/**
	 * Pre-slung: 5.
	 */
	PreSlung: "unece:CargoCategoryCodeList#5",

	/**
	 * Mobile self-propelled: 6.
	 */
	MobileSelfPropelled: "unece:CargoCategoryCodeList#6",

	/**
	 * Other mobile units: 7.
	 */
	OtherMobileUnits: "unece:CargoCategoryCodeList#7",

	/**
	 * Other types of cargo: 9.
	 */
	OtherTypesOfCargo: "unece:CargoCategoryCodeList#9"
} as const;

/**
 * A character string used to represent the cargo category.
 * @see https://vocabulary.uncefact.org/CargoCategoryCodeList
 */
export type CargoCategoryCodeList = (typeof CargoCategoryCodeList)[keyof typeof CargoCategoryCodeList];
