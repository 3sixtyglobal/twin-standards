// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * DCSA transport event type codes.
 *
 * Source: `transportEventTypeCode` enum in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcsaTransportEventTypeCodes = {
	/**
	 * Arrived.
	 */
	ARRI: "ARRI",
	/**
	 * Departed.
	 */
	DEPA: "DEPA"
} as const;

/**
 * DCSA transport event type codes.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type DcsaTransportEventTypeCodes =
	(typeof DcsaTransportEventTypeCodes)[keyof typeof DcsaTransportEventTypeCodes];
