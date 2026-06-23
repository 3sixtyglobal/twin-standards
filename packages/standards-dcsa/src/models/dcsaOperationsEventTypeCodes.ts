// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * DCSA operations event type codes.
 *
 * Source: `operationsEventTypeCode` enum in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcsaOperationsEventTypeCodes = {
	/**
	 * Started.
	 */
	STRT: "STRT",
	/**
	 * Completed.
	 */
	CMPL: "CMPL",
	/**
	 * Arrived.
	 */
	ARRI: "ARRI",
	/**
	 * Departed.
	 */
	DEPA: "DEPA",
	/**
	 * Omitted.
	 */
	OMIT: "OMIT",
	/**
	 * Cancelled.
	 */
	CANC: "CANC"
} as const;

/**
 * DCSA operations event type codes.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type DcsaOperationsEventTypeCodes =
	(typeof DcsaOperationsEventTypeCodes)[keyof typeof DcsaOperationsEventTypeCodes];
