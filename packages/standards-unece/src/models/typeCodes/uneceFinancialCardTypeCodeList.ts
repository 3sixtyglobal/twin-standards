// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceFinancialCard typeCode property.
 * @see https://vocabulary.uncefact.org/FinancialCard
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceFinancialCardTypeCodeList = {
	/**
	 * A financial card applicable to this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/applicableFinancialCard
	 */
	ApplicableFinancialCard: "unece:applicableFinancialCard",

	/**
	 * A financial card identified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/identifiedFinancialCard
	 */
	IdentifiedFinancialCard: "unece:identifiedFinancialCard",

	/**
	 * A financial card specified in this header trade settlement.
	 * A financial card specified in this line trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedFinancialCard
	 */
	SpecifiedFinancialCard: "unece:specifiedFinancialCard"
} as const;

/**
 * Values for UneceFinancialCard typeCode property.
 * @see https://vocabulary.uncefact.org/FinancialCard
 */
export type UneceFinancialCardTypeCodeList = (typeof UneceFinancialCardTypeCodeList)[keyof typeof UneceFinancialCardTypeCodeList];
