// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a cargo commodity category.
 * @see https://vocabulary.uncefact.org/CargoCommodityCategoryCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const CargoCommodityCategoryCodeList = {
	/**
	 * Mutually defined: ZZZ.
	 */
	MutuallyDefined: "unece:CargoCommodityCategoryCodeList#ZZZ"
} as const;

/**
 * A character string used to represent a cargo commodity category.
 * @see https://vocabulary.uncefact.org/CargoCommodityCategoryCodeList
 */
export type CargoCommodityCategoryCodeList = (typeof CargoCommodityCategoryCodeList)[keyof typeof CargoCommodityCategoryCodeList];
