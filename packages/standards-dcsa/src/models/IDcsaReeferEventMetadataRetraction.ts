// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaEventTypes } from "./dcsaEventTypes.js";
import type { DcsaTntPublisherRole } from "./dcsaTntPublisherRole.js";
import type { IDcsaPublisher } from "./IDcsaPublisher.js";

/**
 * Reefer event metadata (retraction).
 *
 * Source: `metadata` + `retractedEventID` rule in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaReeferEventMetadataRetraction {
	/**
	 * Unique identifier of this event.
	 */
	eventID: string;
	/**
	 * Date-time when the event was created by the publisher.
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
	eventType: typeof DcsaEventTypes.REEFER;
	/**
	 * Reference to the event that is retracted.
	 */
	retractedEventID: string;
}
