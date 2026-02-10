// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UnecePaymentFinancialInstitution typeCode property.
 * @see https://vocabulary.uncefact.org/PaymentFinancialInstitution
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UnecePaymentFinancialInstitutionTypeCodeList = {
	/**
	 * A creditor financial institution specified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/creditorSpecifiedFinancialInstitution
	 */
	CreditorSpecifiedFinancialInstitution: "unece:creditorSpecifiedFinancialInstitution",

	/**
	 * A debtor financial institution specified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/debtorSpecifiedFinancialInstitution
	 */
	DebtorSpecifiedFinancialInstitution: "unece:debtorSpecifiedFinancialInstitution",

	/**
	 * A financial institution specified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentFinancialInstitution
	 */
	SpecifiedPaymentFinancialInstitution: "unece:specifiedPaymentFinancialInstitution"
} as const;

/**
 * Values for UnecePaymentFinancialInstitution typeCode property.
 * @see https://vocabulary.uncefact.org/PaymentFinancialInstitution
 */
export type UnecePaymentFinancialInstitutionTypeCodeList = (typeof UnecePaymentFinancialInstitutionTypeCodeList)[keyof typeof UnecePaymentFinancialInstitutionTypeCodeList];
