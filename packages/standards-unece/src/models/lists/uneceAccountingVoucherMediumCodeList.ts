// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a medium containing an accounting voucher.
 * @see https://vocabulary.uncefact.org/AccountingVoucherMediumCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceAccountingVoucherMediumCodeList = {
	/**
	 * Photocopy: 1.
	 */
	Photocopy: "unece:AccountingVoucherMediumCodeList#1",

	/**
	 * USB Key: 10.
	 */
	USBKey: "unece:AccountingVoucherMediumCodeList#10",

	/**
	 * Microfiche: 2.
	 */
	Microfiche: "unece:AccountingVoucherMediumCodeList#2",

	/**
	 * Microfilm: 3.
	 */
	Microfilm: "unece:AccountingVoucherMediumCodeList#3",

	/**
	 * DVD: 4.
	 */
	DVD: "unece:AccountingVoucherMediumCodeList#4",

	/**
	 * HDD: 5.
	 */
	HDD: "unece:AccountingVoucherMediumCodeList#5",

	/**
	 * FDD 3.5": 6.
	 */
	FDD35: "unece:AccountingVoucherMediumCodeList#6",

	/**
	 * FDD 5.25": 7.
	 */
	FDD525: "unece:AccountingVoucherMediumCodeList#7",

	/**
	 * DSP: 8.
	 */
	DSP: "unece:AccountingVoucherMediumCodeList#8",

	/**
	 * FDD 8": 9.
	 */
	FDD8: "unece:AccountingVoucherMediumCodeList#9"
} as const;

/**
 * A character string used to represent a medium containing an accounting voucher.
 * @see https://vocabulary.uncefact.org/AccountingVoucherMediumCodeList
 */
export type UneceAccountingVoucherMediumCodeList = (typeof UneceAccountingVoucherMediumCodeList)[keyof typeof UneceAccountingVoucherMediumCodeList];
