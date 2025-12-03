// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the transport equipment fullness.
 * @see https://vocabulary.uncefact.org/TransportEquipmentFullnessCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TransportEquipmentFullnessCodeList = {
	/**
	 * More than one quarter volume available: 1.
	 */
	MoreThanOneQuarterVolumeAvailable: "unece:TransportEquipmentFullnessCodeList#1",

	/**
	 * Part load mixed consignments: 10.
	 */
	PartLoadMixedConsignments: "unece:TransportEquipmentFullnessCodeList#10",

	/**
	 * Single invoiced load: 11.
	 */
	SingleInvoicedLoad: "unece:TransportEquipmentFullnessCodeList#11",

	/**
	 * Multi invoiced load: 12.
	 */
	MultiInvoicedLoad: "unece:TransportEquipmentFullnessCodeList#12",

	/**
	 * Full load, multiple bills: 13.
	 */
	FullLoadMultipleBills: "unece:TransportEquipmentFullnessCodeList#13",

	/**
	 * More than half volume available: 2.
	 */
	MoreThanHalfVolumeAvailable: "unece:TransportEquipmentFullnessCodeList#2",

	/**
	 * More than three quarters volume available: 3.
	 */
	MoreThanThreeQuartersVolumeAvailable: "unece:TransportEquipmentFullnessCodeList#3",

	/**
	 * Empty: 4.
	 */
	Empty: "unece:TransportEquipmentFullnessCodeList#4",

	/**
	 * Full: 5.
	 */
	Full: "unece:TransportEquipmentFullnessCodeList#5",

	/**
	 * No volume available: 6.
	 */
	NoVolumeAvailable: "unece:TransportEquipmentFullnessCodeList#6",

	/**
	 * Full, mixed consignment: 7.
	 */
	FullMixedConsignment: "unece:TransportEquipmentFullnessCodeList#7",

	/**
	 * Full, single consignment: 8.
	 */
	FullSingleConsignment: "unece:TransportEquipmentFullnessCodeList#8",

	/**
	 * Part load: 9.
	 */
	PartLoad: "unece:TransportEquipmentFullnessCodeList#9"
} as const;

/**
 * A character string used to represent the transport equipment fullness.
 * @see https://vocabulary.uncefact.org/TransportEquipmentFullnessCodeList
 */
export type TransportEquipmentFullnessCodeList = (typeof TransportEquipmentFullnessCodeList)[keyof typeof TransportEquipmentFullnessCodeList];
