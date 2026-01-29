// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaEventTypes } from "./dcsaEventTypes.js";
import type { IDcsaEventMetadataActive } from "./IDcsaEventMetadataActive.js";
import type { IDcsaEventMetadataRetraction } from "./IDcsaEventMetadataRetraction.js";
import type { IDcsaTransportPayload } from "./IDcsaTransportPayload.js";

/**
 * The `TransportEvent` is a specialized event to handle all events related to transportation.
 *
 * Source: `transportEvent` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type IDcsaTransportEvent =
	| {
			/**
			 * Event metadata (eventType = TRANSPORT).
			 */
			metadata: IDcsaEventMetadataActive & { eventType: typeof DcsaEventTypes.TRANSPORT };
			/**
			 * Business attributes related to the `TransportEvent`.
			 */
			payload: IDcsaTransportPayload;
	  }
	| {
			/**
			 * Retraction metadata (eventType = TRANSPORT).
			 */
			metadata: IDcsaEventMetadataRetraction & { eventType: typeof DcsaEventTypes.TRANSPORT };
			/**
			 * Retractions do not carry payloads.
			 */
			payload?: never;
	  };
