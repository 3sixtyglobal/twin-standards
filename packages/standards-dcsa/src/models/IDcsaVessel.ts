// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Vessel.
 *
 * Source: `vessel` schema in the DCSA Event Domain (v3.1.0).
 *
 * Note: Most properties are defined in DCSA_DOMAIN; this package models them as strings.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaVessel {
	/**
	 * Vessel IMO number.
	 */
	vesselIMONumber: string;
	/**
	 * Vessel name.
	 */
	name?: string;
	/**
	 * Vessel flag.
	 */
	flag?: string;
	/**
	 * Vessel call sign.
	 */
	callSign?: string;
	/**
	 * Carrier code of the vessel operator.
	 */
	operatorCarrierCode?: string;
	/**
	 * Provider of the operator carrier code list.
	 */
	operatorCarrierCodeListProvider?: string;
}
