// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaEventClassifierCode } from "./dcsaEventClassifierCode.js";

/**
 * Base event attributes shared by all payloads.
 *
 * Source: `baseEvent` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaBaseEvent {
	/**
	 * Code for the event classifier.
	 *
	 * Note: allowed values depend on event type. Some event categories in the upstream spec
	 * constrain this to a subset (e.g. Shipment/IoT/Reefer are always ACT).
	 */
	eventClassifierCode: DcsaEventClassifierCode;
	/**
	 * The local date and time when the event took place (or will take place).
	 * Format: ISO 8601 date-time.
	 */
	eventDateTime: string;
}
