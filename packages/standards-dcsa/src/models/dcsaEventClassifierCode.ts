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
export const DcsaEventClassifierCodes = {
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
	EST: "EST",
	/**
	 * Requested.
	 */
	REQ: "REQ"
} as const;

/**
 * DCSA event classifier codes.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type DcsaEventClassifierCode =
	(typeof DcsaEventClassifierCodes)[keyof typeof DcsaEventClassifierCodes];
