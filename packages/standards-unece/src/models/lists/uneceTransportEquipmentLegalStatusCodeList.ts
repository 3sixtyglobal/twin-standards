// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the transport equipment legal status.
 * @see https://vocabulary.uncefact.org/TransportEquipmentLegalStatusCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceTransportEquipmentLegalStatusCodeList = {
	/**
	 * Shortlanded: 7.
	 */
	Shortlanded: "unece:TransportEquipmentLegalStatusCodeList#7",

	/**
	 * Overlanded: 8.
	 */
	Overlanded: "unece:TransportEquipmentLegalStatusCodeList#8"
} as const;

/**
 * A character string used to represent the transport equipment legal status.
 * @see https://vocabulary.uncefact.org/TransportEquipmentLegalStatusCodeList
 */
export type UneceTransportEquipmentLegalStatusCodeList = (typeof UneceTransportEquipmentLegalStatusCodeList)[keyof typeof UneceTransportEquipmentLegalStatusCodeList];
