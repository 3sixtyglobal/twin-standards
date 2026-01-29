// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDcsaIotEventMetadataActive } from "./IDcsaIotEventMetadataActive.js";
import type { IDcsaIotEventMetadataRetraction } from "./IDcsaIotEventMetadataRetraction.js";
import type { IDcsaIotPayload } from "./IDcsaIotPayload.js";

/**
 * IoT event.
 *
 * Source: `iotEvent` schema in the DCSA Event Domain (v3.1.0).
 *
 * Retraction rule: if `metadata.retractedEventID` is set, `payload` MUST NOT be present.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type IDcsaIotEvent =
	| {
			/**
			 * Event metadata.
			 */
			metadata: IDcsaIotEventMetadataActive;
			/**
			 * Event payload.
			 */
			payload: IDcsaIotPayload;
	  }
	| {
			/**
			 * Retraction metadata.
			 */
			metadata: IDcsaIotEventMetadataRetraction;
			/**
			 * Must not be present for retractions.
			 */
			payload?: never;
	  };
