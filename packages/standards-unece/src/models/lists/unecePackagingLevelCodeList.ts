// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the packaging level.
 * @see https://vocabulary.uncefact.org/PackagingLevelCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UnecePackagingLevelCodeList = {
	/**
	 * Inner: 1.
	 */
	Inner: "unece:PackagingLevelCodeList#1",

	/**
	 * Intermediate: 2.
	 */
	Intermediate: "unece:PackagingLevelCodeList#2",

	/**
	 * Outer: 3.
	 */
	Outer: "unece:PackagingLevelCodeList#3",

	/**
	 * No packaging hierarchy: 4.
	 */
	NoPackagingHierarchy: "unece:PackagingLevelCodeList#4",

	/**
	 * Shipment level: 5.
	 */
	ShipmentLevel: "unece:PackagingLevelCodeList#5",

	/**
	 * Highest: 6.
	 */
	Highest: "unece:PackagingLevelCodeList#6"
} as const;

/**
 * A character string used to represent the packaging level.
 * @see https://vocabulary.uncefact.org/PackagingLevelCodeList
 */
export type UnecePackagingLevelCodeList = (typeof UnecePackagingLevelCodeList)[keyof typeof UnecePackagingLevelCodeList];
