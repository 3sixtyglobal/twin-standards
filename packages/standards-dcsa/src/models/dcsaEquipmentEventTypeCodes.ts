// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * DCSA equipment event type codes.
 *
 * Source: `equipmentEventTypeCode` enum in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcsaEquipmentEventTypeCodes = {
	/**
	 * Loaded.
	 */
	LOAD: "LOAD",
	/**
	 * Discharged.
	 */
	DISC: "DISC",
	/**
	 * Gated in.
	 */
	GTIN: "GTIN",
	/**
	 * Gated out.
	 */
	GTOT: "GTOT",
	/**
	 * Stuffed.
	 */
	STUF: "STUF",
	/**
	 * Stripped.
	 */
	STRP: "STRP",
	/**
	 * Pick-up.
	 */
	PICK: "PICK",
	/**
	 * Available for pick-up.
	 */
	AVPU: "AVPU",
	/**
	 * Drop-off.
	 */
	DROP: "DROP",
	/**
	 * Available for drop-off.
	 */
	AVDO: "AVDO",
	/**
	 * Inspected.
	 */
	INSP: "INSP",
	/**
	 * Resealed.
	 */
	RSEA: "RSEA",
	/**
	 * Removed.
	 */
	RMVD: "RMVD",
	/**
	 * Customs selected for scan.
	 */
	CUSS: "CUSS",
	/**
	 * Customs selected for inspection.
	 */
	CUSI: "CUSI",
	/**
	 * Customs released.
	 */
	CUSR: "CUSR",
	/**
	 * Crossed.
	 */
	CROS: "CROS"
} as const;

/**
 * DCSA equipment event type codes.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type DcsaEquipmentEventTypeCodes =
	(typeof DcsaEquipmentEventTypeCodes)[keyof typeof DcsaEquipmentEventTypeCodes];
