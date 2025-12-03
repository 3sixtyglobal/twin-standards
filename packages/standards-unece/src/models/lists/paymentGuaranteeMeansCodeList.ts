// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a payment guarantee means.
 * @see https://vocabulary.uncefact.org/PaymentGuaranteeMeansCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const PaymentGuaranteeMeansCodeList = {
	/**
	 * Factor guarantee: 1.
	 */
	FactorGuarantee: "unece:PaymentGuaranteeMeansCodeList#1",

	/**
	 * Bank guarantee: 10.
	 */
	BankGuarantee: "unece:PaymentGuaranteeMeansCodeList#10",

	/**
	 * Public authority guarantee: 11.
	 */
	PublicAuthorityGuarantee: "unece:PaymentGuaranteeMeansCodeList#11",

	/**
	 * Third party guarantee: 12.
	 */
	ThirdPartyGuarantee: "unece:PaymentGuaranteeMeansCodeList#12",

	/**
	 * Standby letter of credit: 13.
	 */
	StandbyLetterOfCredit: "unece:PaymentGuaranteeMeansCodeList#13",

	/**
	 * No guarantee: 14.
	 */
	NoGuarantee: "unece:PaymentGuaranteeMeansCodeList#14",

	/**
	 * Goods as security: 20.
	 */
	GoodsAsSecurity: "unece:PaymentGuaranteeMeansCodeList#20",

	/**
	 * Business as security: 21.
	 */
	BusinessAsSecurity: "unece:PaymentGuaranteeMeansCodeList#21",

	/**
	 * Warrant or similar (warehouse receipts): 23.
	 */
	WarrantOrSimilar: "unece:PaymentGuaranteeMeansCodeList#23",

	/**
	 * Mortgage: 24.
	 */
	Mortgage: "unece:PaymentGuaranteeMeansCodeList#24",

	/**
	 * Insurance certificate: 45.
	 */
	InsuranceCertificate: "unece:PaymentGuaranteeMeansCodeList#45",

	/**
	 * Mutually defined: ZZZ.
	 */
	MutuallyDefined: "unece:PaymentGuaranteeMeansCodeList#ZZZ"
} as const;

/**
 * A character string used to represent a payment guarantee means.
 * @see https://vocabulary.uncefact.org/PaymentGuaranteeMeansCodeList
 */
export type PaymentGuaranteeMeansCodeList = (typeof PaymentGuaranteeMeansCodeList)[keyof typeof PaymentGuaranteeMeansCodeList];
