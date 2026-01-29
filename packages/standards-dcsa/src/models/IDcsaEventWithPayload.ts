// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaEventTypes } from "./dcsaEventTypes.js";
import type { IDcsaEquipmentPayload } from "./IDcsaEquipmentPayload.js";
import type { IDcsaEventMetadataActive } from "./IDcsaEventMetadataActive.js";
import type { IDcsaShipmentPayload } from "./IDcsaShipmentPayload.js";
import type { IDcsaTransportPayload } from "./IDcsaTransportPayload.js";

/**
 * Event with payload (i.e., not a retraction).
 */
export type IDcsaEventWithPayload =
	| {
			/**
			 * Event metadata (eventType = SHIPMENT).
			 */
			metadata: IDcsaEventMetadataActive & { eventType: typeof DcsaEventTypes.SHIPMENT };
			/**
			 * Event payload.
			 */
			payload: IDcsaShipmentPayload;
	  }
	| {
			/**
			 * Event metadata (eventType = EQUIPMENT).
			 */
			metadata: IDcsaEventMetadataActive & { eventType: typeof DcsaEventTypes.EQUIPMENT };
			/**
			 * Event payload.
			 */
			payload: IDcsaEquipmentPayload;
	  }
	| {
			/**
			 * Event metadata (eventType = TRANSPORT).
			 */
			metadata: IDcsaEventMetadataActive & { eventType: typeof DcsaEventTypes.TRANSPORT };
			/**
			 * Event payload.
			 */
			payload: IDcsaTransportPayload;
	  };
