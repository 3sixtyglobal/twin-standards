// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceFuel typeCode property.
 * @see https://vocabulary.uncefact.org/Fuel
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceFuelTypeCodeList = {
	/**
	 * Gaseous fuels included in the transport of these dangerous goods.
	 * @see https://vocabulary.uncefact.org/includedFuel
	 */
	IncludedFuel: "unece:includedFuel"
} as const;

/**
 * Values for UneceFuel typeCode property.
 * @see https://vocabulary.uncefact.org/Fuel
 */
export type UneceFuelTypeCodeList = (typeof UneceFuelTypeCodeList)[keyof typeof UneceFuelTypeCodeList];
