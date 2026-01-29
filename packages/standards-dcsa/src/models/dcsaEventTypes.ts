// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * DCSA event types.
 *
 * Source: the Event Domain defines `eventType` as the discriminator for the base `event` schema
 * (SHIPMENT/EQUIPMENT/TRANSPORT). The domain also defines dedicated `iotEvent` and `reeferEvent`
 * schemas which constrain the discriminator to IOT and REEFER respectively.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcsaEventTypes = {
	/**
	 * Shipment event.
	 */
	SHIPMENT: "SHIPMENT",
	/**
	 * Transport event.
	 */
	TRANSPORT: "TRANSPORT",
	/**
	 * Equipment event.
	 */
	EQUIPMENT: "EQUIPMENT",
	/**
	 * IOT event.
	 */
	IOT: "IOT",
	/**
	 * Reefer event.
	 */
	REEFER: "REEFER"
} as const;

/**
 * DCSA event types.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type DcsaEventTypes = (typeof DcsaEventTypes)[keyof typeof DcsaEventTypes];
