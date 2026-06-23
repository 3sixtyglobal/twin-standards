// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDcsaReeferEventMetadataActive } from "./IDcsaReeferEventMetadataActive.js";
import type { IDcsaReeferEventMetadataRetraction } from "./IDcsaReeferEventMetadataRetraction.js";
import type { IDcsaReeferPayload } from "./IDcsaReeferPayload.js";

/**
 * Reefer event.
 *
 * Source: `reeferEvent` schema in the DCSA Event Domain (v3.1.0).
 *
 * Retraction rule: if `metadata.retractedEventID` is set, `payload` MUST NOT be present.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type IDcsaReeferEvent =
	| {
			/**
			 * Event metadata.
			 */
			metadata: IDcsaReeferEventMetadataActive;
			/**
			 * Event payload.
			 */
			payload: IDcsaReeferPayload;
	  }
	| {
			/**
			 * Retraction metadata.
			 */
			metadata: IDcsaReeferEventMetadataRetraction;
			/**
			 * Must not be present for retractions.
			 */
			payload?: never;
	  };
