// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * IoT event codes.
 *
 * Source: `iotEventCode` enum in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcsaIotEventCodes = {
	/**
	 * Door open.
	 */
	DRO: "DRO"
} as const;

/**
 * IoT event codes.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type DcsaIotEventCode = (typeof DcsaIotEventCodes)[keyof typeof DcsaIotEventCodes];
