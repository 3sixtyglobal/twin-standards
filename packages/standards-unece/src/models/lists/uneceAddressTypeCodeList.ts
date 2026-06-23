// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent or replace an address type.
 * @see https://vocabulary.uncefact.org/AddressTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceAddressTypeCodeList = {
	/**
	 * Postal address: 1.
	 */
	PostalAddress: "unece:AddressTypeCodeList#1",

	/**
	 * Fiscal address: 2.
	 */
	FiscalAddress: "unece:AddressTypeCodeList#2",

	/**
	 * Physical address: 3.
	 */
	PhysicalAddress: "unece:AddressTypeCodeList#3",

	/**
	 * Business address: 4.
	 */
	BusinessAddress: "unece:AddressTypeCodeList#4",

	/**
	 * Delivery To Address: 5.
	 */
	DeliveryToAddress: "unece:AddressTypeCodeList#5",

	/**
	 * Residential Address: 6.
	 */
	ResidentialAddress: "unece:AddressTypeCodeList#6",

	/**
	 * Mail To Address: 7.
	 */
	MailToAddress: "unece:AddressTypeCodeList#7",

	/**
	 * Postbox Address: 8.
	 */
	PostboxAddress: "unece:AddressTypeCodeList#8"
} as const;

/**
 * A character string used to represent or replace an address type.
 * @see https://vocabulary.uncefact.org/AddressTypeCodeList
 */
export type UneceAddressTypeCodeList = (typeof UneceAddressTypeCodeList)[keyof typeof UneceAddressTypeCodeList];
