// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaEventClassifierCodes } from "./dcsaEventClassifierCode.js";
import type { DcsaIotEventCode } from "./dcsaIotEventCode.js";
import type { DcsaIotEventTypeCodes } from "./dcsaIotEventTypeCodes.js";
import type { IDcsaRelatedDocumentReference } from "./IDcsaRelatedDocumentReference.js";

/**
 * Base IoT event attributes.
 *
 * Source: `baseIoTEvent` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaBaseIoTEvent {
	/**
	 * Local date-time when the event happened.
	 */
	eventDateTime: string;
	/**
	 * IoT events are always "ACT".
	 */
	eventClassifierCode: typeof DcsaEventClassifierCodes.ACT;
	/**
	 * IoT event type code.
	 */
	iotEventTypeCode: DcsaIotEventTypeCodes;
	/**
	 * IoT event code.
	 */
	iotEventCode: DcsaIotEventCode;
	/**
	 * Geo location.
	 *
	 * Kept as unknown since the authoritative schema references LOCATION_DOMAIN types.
	 */
	geoLocation?: unknown;
	/**
	 * Equipment reference.
	 */
	equipmentReference: string;
	/**
	 * Related document references.
	 */
	relatedDocumentReferences?: IDcsaRelatedDocumentReference[];
}
