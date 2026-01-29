// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaEventTypes } from "./dcsaEventTypes.js";
import type { IDcsaEventMetadataActive } from "./IDcsaEventMetadataActive.js";
import type { IDcsaEventMetadataRetraction } from "./IDcsaEventMetadataRetraction.js";
import type { IDcsaShipmentPayload } from "./IDcsaShipmentPayload.js";

/**
 * The `ShipmentEvent` is a specialized event to handle all events related to documentation.
 *
 * Source: `shipmentEvent` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type IDcsaShipmentEvent =
	| {
			/**
			 * Event metadata (eventType = SHIPMENT).
			 */
			metadata: IDcsaEventMetadataActive & { eventType: typeof DcsaEventTypes.SHIPMENT };
			/**
			 * Business attributes related to the `ShipmentEvent`.
			 */
			payload: IDcsaShipmentPayload;
	  }
	| {
			/**
			 * Retraction metadata (eventType = SHIPMENT).
			 */
			metadata: IDcsaEventMetadataRetraction & { eventType: typeof DcsaEventTypes.SHIPMENT };
			/**
			 * Retractions do not carry payloads.
			 */
			payload?: never;
	  };
