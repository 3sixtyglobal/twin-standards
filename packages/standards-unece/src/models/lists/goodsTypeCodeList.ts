// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a type of goods.
 * @see https://vocabulary.uncefact.org/GoodsTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const GoodsTypeCodeList = {
	/**
	 * Mutually defined: ZZZ.
	 */
	MutuallyDefined: "unece:GoodsTypeCodeList#ZZZ"
} as const;

/**
 * A character string used to represent a type of goods.
 * @see https://vocabulary.uncefact.org/GoodsTypeCodeList
 */
export type GoodsTypeCodeList = (typeof GoodsTypeCodeList)[keyof typeof GoodsTypeCodeList];
