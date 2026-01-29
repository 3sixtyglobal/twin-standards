// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * DCSA reefer event type codes.
 *
 * Source: `reeferEventTypeCode` enum in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcsaReeferEventTypeCodes = {
	/**
	 * Measured.
	 */
	MEAS: "MEAS",
	/**
	 * Adjusted.
	 */
	ADJU: "ADJU"
} as const;

/**
 * DCSA reefer event type codes.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type DcsaReeferEventTypeCodes =
	(typeof DcsaReeferEventTypeCodes)[keyof typeof DcsaReeferEventTypeCodes];
