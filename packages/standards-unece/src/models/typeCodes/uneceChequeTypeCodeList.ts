// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceCheque typeCode property.
 * @see https://vocabulary.uncefact.org/Cheque
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceChequeTypeCodeList = {
	/**
	 * A cheque payment identified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/identifiedCheque
	 */
	IdentifiedCheque: "unece:identifiedCheque"
} as const;

/**
 * Values for UneceCheque typeCode property.
 * @see https://vocabulary.uncefact.org/Cheque
 */
export type UneceChequeTypeCodeList = (typeof UneceChequeTypeCodeList)[keyof typeof UneceChequeTypeCodeList];
