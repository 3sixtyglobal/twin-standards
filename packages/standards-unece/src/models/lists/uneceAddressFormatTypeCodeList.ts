// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of format address.
 * @see https://vocabulary.uncefact.org/AddressFormatTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceAddressFormatTypeCodeList = {
	/**
	 * Fiscal Format: 1.
	 */
	FiscalFormat: "unece:AddressFormatTypeCodeList#1",

	/**
	 * Legal Format: 2.
	 */
	LegalFormat: "unece:AddressFormatTypeCodeList#2",

	/**
	 * Postal Format: 3.
	 */
	PostalFormat: "unece:AddressFormatTypeCodeList#3"
} as const;

/**
 * A character string used to represent the type of format address.
 * @see https://vocabulary.uncefact.org/AddressFormatTypeCodeList
 */
export type UneceAddressFormatTypeCodeList = (typeof UneceAddressFormatTypeCodeList)[keyof typeof UneceAddressFormatTypeCodeList];
