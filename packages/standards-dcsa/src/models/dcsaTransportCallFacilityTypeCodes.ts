// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * Facility type codes used on a TransportCall.
 *
 * Source: inline `facilityTypeCode` enum in the `transportCall` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcsaTransportCallFacilityTypeCodes = {
	/**
	 * Border.
	 */
	BOCR: "BOCR",
	/**
	 * Customer location.
	 */
	CLOC: "CLOC",
	/**
	 * Container freight station.
	 */
	COFS: "COFS",
	/**
	 * Off dock storage.
	 */
	OFFD: "OFFD",
	/**
	 * Depot.
	 */
	DEPO: "DEPO",
	/**
	 * Inland terminal.
	 */
	INTE: "INTE",
	/**
	 * Port terminal.
	 */
	POTE: "POTE",
	/**
	 * Ramp.
	 */
	RAMP: "RAMP",
	/**
	 * Waypoint.
	 */
	WAYP: "WAYP"
} as const;

/**
 * Facility type codes used on a TransportCall.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type DcsaTransportCallFacilityTypeCodes =
	(typeof DcsaTransportCallFacilityTypeCodes)[keyof typeof DcsaTransportCallFacilityTypeCodes];
