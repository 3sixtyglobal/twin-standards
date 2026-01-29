// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * Publisher role.
 *
 * Source: `publisherRole` enum in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcsaPublisherRoles = {
	/**
	 * Carrier.
	 */
	CA: "CA",
	/**
	 * Carrier local agent.
	 */
	AG: "AG",
	/**
	 * Vessel.
	 */
	VSL: "VSL",
	/**
	 * Port authorities.
	 */
	ATH: "ATH",
	/**
	 * Port pilot.
	 */
	PLT: "PLT",
	/**
	 * Towage service provider.
	 */
	TWG: "TWG",
	/**
	 * Mooring service provider.
	 */
	MOR: "MOR",
	/**
	 * Terminal.
	 */
	TR: "TR",
	/**
	 * Lashing service provider.
	 */
	LSH: "LSH",
	/**
	 * Bunker service provider.
	 */
	BUK: "BUK",
	/**
	 * Sludge service provider.
	 */
	SLU: "SLU",
	/**
	 * Any other service provider.
	 */
	SVP: "SVP"
} as const;

/**
 * Publisher role.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type DcsaPublisherRole = (typeof DcsaPublisherRoles)[keyof typeof DcsaPublisherRoles];
