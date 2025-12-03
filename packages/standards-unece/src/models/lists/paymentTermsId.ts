// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a payment terms.
 * @see https://vocabulary.uncefact.org/PaymentTermsId
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const PaymentTermsId = {
	/**
	 * Draft(s) drawn on issuing bank: 1.
	 */
	DraftDrawnOnIssuingBank: "unece:PaymentTermsId#1",

	/**
	 * Draft(s) drawn on advising bank: 2.
	 */
	DraftDrawnOnAdvisingBank: "unece:PaymentTermsId#2",

	/**
	 * Draft(s) drawn on reimbursing bank: 3.
	 */
	DraftDrawnOnReimbursingBank: "unece:PaymentTermsId#3",

	/**
	 * Draft(s) drawn on applicant: 4.
	 */
	DraftDrawnOnApplicant: "unece:PaymentTermsId#4",

	/**
	 * Draft(s) drawn on any other drawee: 5.
	 */
	DraftDrawnOnAnyOtherDrawee: "unece:PaymentTermsId#5",

	/**
	 * No drafts: 6.
	 */
	NoDrafts: "unece:PaymentTermsId#6",

	/**
	 * Payment means specified in commercial account summary: 7.
	 */
	PaymentMeansSpecifiedInCommercialAccountSummary: "unece:PaymentTermsId#7"
} as const;

/**
 * A character string used to represent a payment terms.
 * @see https://vocabulary.uncefact.org/PaymentTermsId
 */
export type PaymentTermsId = (typeof PaymentTermsId)[keyof typeof PaymentTermsId];
