// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaEquipmentEventTypeCodes } from "./dcsaEquipmentEventTypeCodes.js";
import type { DcsaEventClassifierCodeNoReq } from "./dcsaEventClassifierCodeNoReq.js";
import type { IDcsaBaseEvent } from "./IDcsaBaseEvent.js";
import type { IDcsaReference } from "./IDcsaReference.js";
import type { IDcsaRelatedDocumentReference } from "./IDcsaRelatedDocumentReference.js";

/**
 * Equipment payload.
 *
 * Source: `equipmentPayload` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaEquipmentPayload extends IDcsaBaseEvent {
	/**
	 * Event classifier code.
	 */
	eventClassifierCode: DcsaEventClassifierCodeNoReq;
	/**
	 * Equipment event type code.
	 */
	equipmentEventTypeCode: DcsaEquipmentEventTypeCodes;
	/**
	 * Indicates whether the equipment is empty or laden.
	 * The authoritative schema references the shared `emptyIndicatorCode` from DCSA_DOMAIN.
	 */
	emptyIndicatorCode: string;
	/**
	 * Equipment reference.
	 * Typically the BIC ISO Container Identification Number where possible.
	 */
	equipmentReference?: string;
	/**
	 * ISO equipment code.
	 */
	ISOEquipmentCode?: string;
	/**
	 * Indicates transshipment move.
	 */
	isTransshipmentMove?: boolean;
	/**
	 * When present, captures a location not tied to a TransportCall.
	 * Kept as unknown since the schema references LOCATION_DOMAIN types.
	 */
	eventLocation?: unknown;
	/**
	 * Facility type code.
	 * Used to identify the role of the facility when an EquipmentEvent is not associated
	 * with a TransportCall (e.g. stuffing/stripping contexts).
	 */
	facilityTypeCode?: string;
	/**
	 * Related documents.
	 */
	relatedDocumentReferences?: IDcsaRelatedDocumentReference[];
	/**
	 * Additional references.
	 */
	references?: IDcsaReference[];
}
