// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the transport equipment movement status.
 * @see https://vocabulary.uncefact.org/TransportEquipmentMovementStatusCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceTransportEquipmentMovementStatusCodeList = {
	/**
	 * Export: 2.
	 */
	Export: "unece:TransportEquipmentMovementStatusCodeList#2",

	/**
	 * Import: 3.
	 */
	Import: "unece:TransportEquipmentMovementStatusCodeList#3",

	/**
	 * Transhipment: 6.
	 */
	Transhipment: "unece:TransportEquipmentMovementStatusCodeList#6",

	/**
	 * Overlanded: 8.
	 */
	Overlanded: "unece:TransportEquipmentMovementStatusCodeList#8"
} as const;

/**
 * A character string used to represent the transport equipment movement status.
 * @see https://vocabulary.uncefact.org/TransportEquipmentMovementStatusCodeList
 */
export type UneceTransportEquipmentMovementStatusCodeList = (typeof UneceTransportEquipmentMovementStatusCodeList)[keyof typeof UneceTransportEquipmentMovementStatusCodeList];
