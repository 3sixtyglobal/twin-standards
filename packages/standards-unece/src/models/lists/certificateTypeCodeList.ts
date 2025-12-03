// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of a certificate.
 * @see https://vocabulary.uncefact.org/CertificateTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const CertificateTypeCodeList = {
	/**
	 * Mark: 1.
	 */
	Mark: "unece:CertificateTypeCodeList#1",

	/**
	 * Certificate: 2.
	 */
	Certificate: "unece:CertificateTypeCodeList#2",

	/**
	 * Label: 3.
	 */
	Label: "unece:CertificateTypeCodeList#3"
} as const;

/**
 * A character string used to represent the type of a certificate.
 * @see https://vocabulary.uncefact.org/CertificateTypeCodeList
 */
export type CertificateTypeCodeList = (typeof CertificateTypeCodeList)[keyof typeof CertificateTypeCodeList];
