// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaEventTypes } from "./dcsaEventTypes.js";
import type { IDcsaEquipmentPayload } from "./IDcsaEquipmentPayload.js";
import type { IDcsaEventMetadataActive } from "./IDcsaEventMetadataActive.js";
import type { IDcsaEventMetadataRetraction } from "./IDcsaEventMetadataRetraction.js";

/**
 * The `EquipmentEvent` is a specialized event to handle all events related to equipment (containers).
 *
 * Source: `equipmentEvent` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type IDcsaEquipmentEvent =
	| {
			/**
			 * Event metadata (eventType = EQUIPMENT).
			 */
			metadata: IDcsaEventMetadataActive & { eventType: typeof DcsaEventTypes.EQUIPMENT };
			/**
			 * Business attributes related to the `EquipmentEvent`.
			 */
			payload: IDcsaEquipmentPayload;
	  }
	| {
			/**
			 * Retraction metadata (eventType = EQUIPMENT).
			 */
			metadata: IDcsaEventMetadataRetraction & { eventType: typeof DcsaEventTypes.EQUIPMENT };
			/**
			 * Retractions do not carry payloads.
			 */
			payload?: never;
	  };
