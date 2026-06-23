// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a remittance document type.
 * @see https://vocabulary.uncefact.org/RemittanceDocumentCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceRemittanceDocumentCodeList = {
	/**
	 * Remittance advice: 481.
	 */
	RemittanceAdvice: "unece:RemittanceDocumentCodeList#481"
} as const;

/**
 * A character string used to represent a remittance document type.
 * @see https://vocabulary.uncefact.org/RemittanceDocumentCodeList
 */
export type UneceRemittanceDocumentCodeList = (typeof UneceRemittanceDocumentCodeList)[keyof typeof UneceRemittanceDocumentCodeList];
