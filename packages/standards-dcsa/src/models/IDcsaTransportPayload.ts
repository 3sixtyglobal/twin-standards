// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaEventClassifierCodeNoReq } from "./dcsaEventClassifierCodeNoReq.js";
import type { DcsaTransportEventTypeCodes } from "./dcsaTransportEventTypeCodes.js";
import type { IDcsaBaseEvent } from "./IDcsaBaseEvent.js";
import type { IDcsaReference } from "./IDcsaReference.js";
import type { IDcsaRelatedDocumentReference } from "./IDcsaRelatedDocumentReference.js";
import type { IDcsaTransportCall } from "./IDcsaTransportCall.js";

/**
 * Transport payload.
 *
 * Source: `transportPayload` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaTransportPayload extends IDcsaBaseEvent {
	/**
	 * Event classifier code.
	 */
	eventClassifierCode: DcsaEventClassifierCodeNoReq;
	/**
	 * Transport event type code.
	 */
	transportEventTypeCode: DcsaTransportEventTypeCodes;
	/**
	 * Transport call context.
	 */
	transportCall: IDcsaTransportCall;
	/**
	 * Delay reason code.
	 * The authoritative schema references the shared `delayReasonCode` from DCSA_DOMAIN.
	 */
	delayReasonCode?: string;
	/**
	 * Free-text field to provide information as to why the TransportEvent was sent.
	 */
	changeRemark?: string;
	/**
	 * Related documents.
	 */
	relatedDocumentReferences?: IDcsaRelatedDocumentReference[];
	/**
	 * Additional references.
	 */
	references?: IDcsaReference[];
}
