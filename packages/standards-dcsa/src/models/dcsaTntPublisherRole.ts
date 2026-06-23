// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/* cSpell:disable */

/**
 * Publisher role as used by the Track & Trace (T&T) event hubs.
 *
 * Source: `tntPublisherRole` enum in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcsaTntPublisherRoles = {
	/**
	 * Carrier.
	 */
	CA: "CA",
	/**
	 * Agent.
	 */
	AG: "AG",
	/**
	 * Vessel Sharing Partner.
	 */
	VSP: "VSP",
	/**
	 * Service Partner.
	 */
	SVP: "SVP"
} as const;

/**
 * Publisher role as used by the Track & Trace (T&T) event hubs.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type DcsaTntPublisherRole =
	(typeof DcsaTntPublisherRoles)[keyof typeof DcsaTntPublisherRoles];
