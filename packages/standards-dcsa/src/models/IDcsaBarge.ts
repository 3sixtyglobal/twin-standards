// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Barge.
 *
 * Source: `barge` schema in the DCSA Event Domain (v3.1.0).
 *
 * Note: Most properties are defined in DCSA_DOMAIN; this package models them as strings.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaBarge {
	/**
	 * Barge name.
	 */
	name: string;
	/**
	 * Barge IMO number (when available).
	 */
	vesselIMONumber?: string;
	/**
	 * Barge flag.
	 */
	flag?: string;
	/**
	 * Barge call sign.
	 */
	callSign?: string;
	/**
	 * Carrier code of the barge operator.
	 */
	operatorCarrierCode?: string;
	/**
	 * Provider of the operator carrier code list.
	 */
	operatorCarrierCodeListProvider?: string;
}
