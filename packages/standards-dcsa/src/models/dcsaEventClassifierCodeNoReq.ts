// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/* cSpell:disable */

/**
 * DCSA event classifier codes.
 *
 * Note: Allowed values depend on event type.
 * Source: `eventClassifierCode` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcsaEventClassifierCodeNoReq = {
	/**
	 * Actual.
	 */
	ACT: "ACT",
	/**
	 * Planned.
	 */
	PLN: "PLN",
	/**
	 * Estimated.
	 */
	EST: "EST"
} as const;

/**
 * DCSA event classifier codes.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type DcsaEventClassifierCodeNoReq =
	(typeof DcsaEventClassifierCodeNoReq)[keyof typeof DcsaEventClassifierCodeNoReq];
