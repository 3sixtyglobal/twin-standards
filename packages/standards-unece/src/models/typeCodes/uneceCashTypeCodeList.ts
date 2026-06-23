// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceCash typeCode property.
 * @see https://vocabulary.uncefact.org/Cash
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceCashTypeCodeList = {
	/**
	 * A cash payment identified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/identifiedCash
	 */
	IdentifiedCash: "unece:identifiedCash"
} as const;

/**
 * Values for UneceCash typeCode property.
 * @see https://vocabulary.uncefact.org/Cash
 */
export type UneceCashTypeCodeList = (typeof UneceCashTypeCodeList)[keyof typeof UneceCashTypeCodeList];
