// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the dangerous goods packaging level.
 * @see https://vocabulary.uncefact.org/DangerousGoodsPackagingLevelCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DangerousGoodsPackagingLevelCodeList = {
	/**
	 * Great danger: 1.
	 */
	GreatDanger: "unece:DangerousGoodsPackagingLevelCodeList#1",

	/**
	 * Medium danger: 2.
	 */
	MediumDanger: "unece:DangerousGoodsPackagingLevelCodeList#2",

	/**
	 * Minor danger: 3.
	 */
	MinorDanger: "unece:DangerousGoodsPackagingLevelCodeList#3",

	/**
	 * Not assigned: 4.
	 */
	NotAssigned: "unece:DangerousGoodsPackagingLevelCodeList#4"
} as const;

/**
 * A character string used to represent the dangerous goods packaging level.
 * @see https://vocabulary.uncefact.org/DangerousGoodsPackagingLevelCodeList
 */
export type DangerousGoodsPackagingLevelCodeList = (typeof DangerousGoodsPackagingLevelCodeList)[keyof typeof DangerousGoodsPackagingLevelCodeList];
