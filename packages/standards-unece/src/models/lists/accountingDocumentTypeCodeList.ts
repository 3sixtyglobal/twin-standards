// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of accounting document.
 * @see https://vocabulary.uncefact.org/AccountingDocumentTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AccountingDocumentTypeCodeList = {
	/**
	 * Bundle collection: BC.
	 */
	BundleCollection: "unece:AccountingDocumentTypeCodeList#BC",

	/**
	 * Accounting account classification: COA.
	 */
	AccountingAccountClassification: "unece:AccountingDocumentTypeCodeList#COA",

	/**
	 * Day book: DB.
	 */
	DayBook: "unece:AccountingDocumentTypeCodeList#DB",

	/**
	 * Journal List: JL.
	 */
	JournalList: "unece:AccountingDocumentTypeCodeList#JL",

	/**
	 * Journal: JN.
	 */
	Journal: "unece:AccountingDocumentTypeCodeList#JN",

	/**
	 * Ledger: LG.
	 */
	Ledger: "unece:AccountingDocumentTypeCodeList#LG",

	/**
	 * Reporting: RP.
	 */
	Reporting: "unece:AccountingDocumentTypeCodeList#RP",

	/**
	 * Trial balance: TR.
	 */
	TrialBalance: "unece:AccountingDocumentTypeCodeList#TR"
} as const;

/**
 * A character string used to represent the type of accounting document.
 * @see https://vocabulary.uncefact.org/AccountingDocumentTypeCodeList
 */
export type AccountingDocumentTypeCodeList = (typeof AccountingDocumentTypeCodeList)[keyof typeof AccountingDocumentTypeCodeList];
