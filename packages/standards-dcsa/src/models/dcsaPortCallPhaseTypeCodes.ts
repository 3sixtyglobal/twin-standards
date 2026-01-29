// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * Port call phase type codes.
 *
 * Source: `portCallPhaseTypeCode` enum in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcsaPortCallPhaseTypeCodes = {
	/**
	 * Inbound.
	 */
	INBD: "INBD",
	/**
	 * Alongside.
	 */
	ALGS: "ALGS",
	/**
	 * Shifting.
	 */
	SHIF: "SHIF",
	/**
	 * Outbound.
	 */
	OUTB: "OUTB"
} as const;

/**
 * Port call phase type codes.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type DcsaPortCallPhaseTypeCodes =
	(typeof DcsaPortCallPhaseTypeCodes)[keyof typeof DcsaPortCallPhaseTypeCodes];
