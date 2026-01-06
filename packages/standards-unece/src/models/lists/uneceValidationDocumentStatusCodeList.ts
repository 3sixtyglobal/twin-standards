// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the document status condition of a validation document.
 * Deprecated since version D23B.
 * @see https://vocabulary.uncefact.org/ValidationDocumentStatusCodeList
 * @deprecated
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceValidationDocumentStatusCodeList = {
	/**
	 * Accepted: 1.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	Accepted: "unece:ValidationDocumentStatusCodeList#1",

	/**
	 * In error: 42.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	InError: "unece:ValidationDocumentStatusCodeList#42"
} as const;

/**
 * A character string used to represent the document status condition of a validation document.
 * Deprecated since version D23B.
 * @see https://vocabulary.uncefact.org/ValidationDocumentStatusCodeList
 * @deprecated
 */
export type UneceValidationDocumentStatusCodeList = (typeof UneceValidationDocumentStatusCodeList)[keyof typeof UneceValidationDocumentStatusCodeList];
