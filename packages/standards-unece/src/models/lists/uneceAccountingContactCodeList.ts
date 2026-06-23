// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of an accounting contact.
 * @see https://vocabulary.uncefact.org/AccountingContactCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceAccountingContactCodeList = {
	/**
	 * Accountant: 1.
	 */
	Accountant: "unece:AccountingContactCodeList#1",

	/**
	 * Chartered accountant: 2.
	 */
	CharteredAccountant: "unece:AccountingContactCodeList#2",

	/**
	 * Certified Public Accountant (CPA): 3.
	 */
	CertifiedPublicAccountant: "unece:AccountingContactCodeList#3",

	/**
	 * Auditor: 4.
	 */
	Auditor: "unece:AccountingContactCodeList#4",

	/**
	 * Accounting Firm: 5.
	 */
	AccountingFirm: "unece:AccountingContactCodeList#5",

	/**
	 * Legal Auditor: 6.
	 */
	LegalAuditor: "unece:AccountingContactCodeList#6",

	/**
	 * Agreed organisation: 7.
	 */
	AgreedOrganisation: "unece:AccountingContactCodeList#7"
} as const;

/**
 * A character string used to represent the type of an accounting contact.
 * @see https://vocabulary.uncefact.org/AccountingContactCodeList
 */
export type UneceAccountingContactCodeList = (typeof UneceAccountingContactCodeList)[keyof typeof UneceAccountingContactCodeList];
