// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaEventTypes } from "./dcsaEventTypes.js";
import type { DcsaTntPublisherRole } from "./dcsaTntPublisherRole.js";
import type { IDcsaPublisher } from "./IDcsaPublisher.js";

/**
 * IoT event metadata (active event).
 *
 * Source: `iotEvent` metadata allOf in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaIotEventMetadataActive {
	/**
	 * Unique identifier of this event.
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
	 */
	publisherRole: DcsaTntPublisherRole;
	/**
	 * Event type discriminator.
	 */
	eventType: typeof DcsaEventTypes.IOT;
	/**
	 * Must be `null` (or omitted) for non-retraction events.
	 * The upstream schema defines a default of `null`.
	 */
	retractedEventID?: null;
}
