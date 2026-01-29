// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * DCSA shipment event type codes.
 *
 * Source: `shipmentEventTypeCode` enum in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcsaShipmentEventTypeCodes = {
	/**
	 * Received.
	 */
	RECE: "RECE",
	/**
	 * Drafted.
	 */
	DRFT: "DRFT",
	/**
	 * Pending Approval.
	 */
	PENA: "PENA",
	/**
	 * Pending Update.
	 */
	PENU: "PENU",
	/**
	 * Pending Confirmation.
	 */
	PENC: "PENC",
	/**
	 * Confirmed.
	 */
	CONF: "CONF",
	/**
	 * Rejected.
	 */
	REJE: "REJE",
	/**
	 * Approved.
	 */
	APPR: "APPR",
	/**
	 * Issued.
	 */
	ISSU: "ISSU",
	/**
	 * Surrendered.
	 */
	SURR: "SURR",
	/**
	 * Submitted.
	 */
	SUBM: "SUBM",
	/**
	 * Void.
	 */
	VOID: "VOID",
	/**
	 * Requested.
	 */
	REQS: "REQS",
	/**
	 * Completed.
	 */
	CMPL: "CMPL",
	/**
	 * On Hold.
	 */
	HOLD: "HOLD",
	/**
	 * Released.
	 */
	RELS: "RELS",
	/**
	 * Cancelled.
	 */
	CANC: "CANC"
} as const;

/**
 * DCSA shipment event type codes.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type DcsaShipmentEventTypeCodes =
	(typeof DcsaShipmentEventTypeCodes)[keyof typeof DcsaShipmentEventTypeCodes];
