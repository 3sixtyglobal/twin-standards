// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * DCSA IoT event type codes.
 *
 * Source: `iotEventTypeCode` enum in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcsaIotEventTypeCodes = {
	/**
	 * Detected.
	 */
	DETC: "DETC"
} as const;

/**
 * DCSA IoT event type codes.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type DcsaIotEventTypeCodes =
	(typeof DcsaIotEventTypeCodes)[keyof typeof DcsaIotEventTypeCodes];
