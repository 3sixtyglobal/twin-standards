// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaEventTypes } from "./dcsaEventTypes.js";
import type { DcsaTntPublisherRole } from "./dcsaTntPublisherRole.js";
import type { IDcsaPublisher } from "./IDcsaPublisher.js";

/**
 * Event metadata.
 *
 * Source: `metadata` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaEventMetadataBase {
	/**
	 * The unique identifier for this event message (not the source system).
	 */
	eventID: string;
	/**
	 * Timestamp of when the event was created by the publisher.
	 * Format: ISO 8601 date-time.
	 */
	eventCreatedDateTime: string;
	/**
	 * The party publishing this event.
	 */
	publisher: IDcsaPublisher;
	/**
	 * Publisher role (context of the publisher).
	 * For Track & Trace events, this is the `tntPublisherRole` code list.
	 */
	publisherRole: DcsaTntPublisherRole;
	/**
	 * Event type discriminator.
	 *
	 * For the base `event` schema (T&T polling), the discriminator is limited to
	 * SHIPMENT/EQUIPMENT/TRANSPORT and is further narrowed by the concrete event union types.
	 * Other event hub schemas (e.g. IoT/Reefer) constrain this to IOT/REEFER.
	 */
	eventType: DcsaEventTypes;
}
