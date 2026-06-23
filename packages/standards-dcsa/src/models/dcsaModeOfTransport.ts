// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * DCSA mode of transport.
 *
 * Source: discriminator `modeOfTransport` used by `transportCall` (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcsaModeOfTransport = {
	/**
	 * Vessel.
	 */
	VESSEL: "VESSEL",
	/**
	 * Barge.
	 */
	BARGE: "BARGE",
	/**
	 * Rail.
	 */
	RAIL: "RAIL",
	/**
	 * Truck.
	 */
	TRUCK: "TRUCK"
} as const;

/**
 * DCSA mode of transport.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type DcsaModeOfTransport = (typeof DcsaModeOfTransport)[keyof typeof DcsaModeOfTransport];
