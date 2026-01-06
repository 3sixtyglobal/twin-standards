// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the role of a financial institution.
 * @see https://vocabulary.uncefact.org/FinancialInstitutionRoleCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceFinancialInstitutionRoleCodeList = {
	/**
	 * Intermediary: I.
	 */
	Intermediary: "unece:FinancialInstitutionRoleCodeList#I",

	/**
	 * Settlement agent: S.
	 */
	SettlementAgent: "unece:FinancialInstitutionRoleCodeList#S"
} as const;

/**
 * A character string used to represent the role of a financial institution.
 * @see https://vocabulary.uncefact.org/FinancialInstitutionRoleCodeList
 */
export type UneceFinancialInstitutionRoleCodeList = (typeof UneceFinancialInstitutionRoleCodeList)[keyof typeof UneceFinancialInstitutionRoleCodeList];
