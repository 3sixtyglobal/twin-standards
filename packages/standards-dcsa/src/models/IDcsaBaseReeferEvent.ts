// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaEventClassifierCodes } from "./dcsaEventClassifierCode.js";
import type { DcsaReeferEventTypeCodes } from "./dcsaReeferEventTypeCodes.js";
import type { IDcsaReeferMeasurements } from "./IDcsaReeferMeasurements.js";
import type { IDcsaReeferSetpoint } from "./IDcsaReeferSetpoint.js";
import type { IDcsaRelatedDocumentReference } from "./IDcsaRelatedDocumentReference.js";

/**
 * Base reefer event attributes.
 *
 * Source: `baseReeferEvent` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaBaseReeferEvent {
	/**
	 * Local date-time when the event happened.
	 */
	eventDateTime: string;
	/**
	 * Reefer events are always "ACT".
	 */
	eventClassifierCode: typeof DcsaEventClassifierCodes.ACT;
	/**
	 * Reefer event type code.
	 */
	reeferEventTypeCode: DcsaReeferEventTypeCodes;
	/**
	 * Measured reefer values (conditioned by event type).
	 */
	measurements?: IDcsaReeferMeasurements;
	/**
	 * Reefer setpoint values (conditioned by event type).
	 */
	setpoints?: IDcsaReeferSetpoint;
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
