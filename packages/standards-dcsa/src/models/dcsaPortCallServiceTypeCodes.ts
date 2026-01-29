// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * Port call service type codes.
 *
 * Source: `portCallServiceTypeCode` enum in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcsaPortCallServiceTypeCodes = {
	/**
	 * Pilotage.
	 */
	PILO: "PILO",
	/**
	 * Mooring.
	 */
	MOOR: "MOOR",
	/**
	 * Cargo operations.
	 */
	CRGO: "CRGO",
	/**
	 * Towage.
	 */
	TOWG: "TOWG",
	/**
	 * Bunkering.
	 */
	BUNK: "BUNK",
	/**
	 * Lashing.
	 */
	LASH: "LASH",
	/**
	 * Safety.
	 */
	SAFE: "SAFE",
	/**
	 * Fastening.
	 */
	FAST: "FAST",
	/**
	 * Gangway.
	 */
	GWAY: "GWAY",
	/**
	 * Anchorage.
	 */
	ANCO: "ANCO",
	/**
	 * Sludge.
	 */
	SLUG: "SLUG",
	/**
	 * Ship waste.
	 */
	SHPW: "SHPW",
	/**
	 * Loading cargo.
	 */
	LCRO: "LCRO",
	/**
	 * Discharge cargo.
	 */
	DCRO: "DCRO",
	/**
	 * Vessel ready.
	 */
	VRDY: "VRDY"
} as const;

/**
 * Port call service type codes.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type DcsaPortCallServiceTypeCodes =
	(typeof DcsaPortCallServiceTypeCodes)[keyof typeof DcsaPortCallServiceTypeCodes];
