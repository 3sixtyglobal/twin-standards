// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a transport movement type.
 * @see https://vocabulary.uncefact.org/TransportMovementTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceTransportMovementTypeCodeList = {
	/**
	 * Export: 1.
	 */
	Export: "unece:TransportMovementTypeCodeList#1",

	/**
	 * Import: 2.
	 */
	Import: "unece:TransportMovementTypeCodeList#2",

	/**
	 * Transit: 3.
	 */
	Transit: "unece:TransportMovementTypeCodeList#3",

	/**
	 * Relay: 4.
	 */
	Relay: "unece:TransportMovementTypeCodeList#4",

	/**
	 * Transshipment: 5.
	 */
	Transshipment: "unece:TransportMovementTypeCodeList#5"
} as const;

/**
 * A character string used to represent a transport movement type.
 * @see https://vocabulary.uncefact.org/TransportMovementTypeCodeList
 */
export type UneceTransportMovementTypeCodeList = (typeof UneceTransportMovementTypeCodeList)[keyof typeof UneceTransportMovementTypeCodeList];
