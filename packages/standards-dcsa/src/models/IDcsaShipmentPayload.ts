// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaDocumentTypeCodes } from "./dcsaDocumentTypeCodes.js";
import type { DcsaEventClassifierCodes } from "./dcsaEventClassifierCode.js";
import type { DcsaShipmentEventTypeCodes } from "./dcsaShipmentEventTypeCodes.js";
import type { IDcsaBaseEvent } from "./IDcsaBaseEvent.js";
import type { IDcsaReference } from "./IDcsaReference.js";
import type { IDcsaRelatedDocumentReference } from "./IDcsaRelatedDocumentReference.js";

/**
 * Shipment payload.
 *
 * Source: `shipmentPayload` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaShipmentPayload extends IDcsaBaseEvent {
	/**
	 * Shipment events are always "ACT".
	 */
	eventClassifierCode: typeof DcsaEventClassifierCodes.ACT;
	/**
	 * Shipment event type code.
	 */
	shipmentEventTypeCode: DcsaShipmentEventTypeCodes;
	/**
	 * Document type code.
	 * Identifies what kind of document `documentReference` points to.
	 */
	documentTypeCode: DcsaDocumentTypeCodes;
	/**
	 * Reference for the document identified by `documentTypeCode`.
	 * Note: `documentReference` is not necessarily globally unique without `documentTypeCode`.
	 */
	documentReference: string;
	/**
	 * Free-text field that can be used to explain why a specific ShipmentEvent was sent.
	 */
	reason?: string;
	/**
	 * Related documents.
	 */
	relatedDocumentReferences?: IDcsaRelatedDocumentReference[];
	/**
	 * Additional references.
	 */
	references?: IDcsaReference[];
}
