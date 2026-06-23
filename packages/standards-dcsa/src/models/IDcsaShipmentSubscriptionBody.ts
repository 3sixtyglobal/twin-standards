// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaDocumentTypeCodes } from "./dcsaDocumentTypeCodes.js";
import type { DcsaShipmentEventTypeCodes } from "./dcsaShipmentEventTypeCodes.js";

/**
 * Shipment subscription filters.
 *
 * Source: `shipmentSubscriptionBody` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaShipmentSubscriptionBody {
	/**
	 * Shipment event type codes to filter by.
	 */
	shipmentEventTypeCodes?: DcsaShipmentEventTypeCodes[];
	/**
	 * Document type codes to filter by.
	 */
	documentTypeCodes?: DcsaDocumentTypeCodes[];
	/**
	 * Document reference to filter by.
	 */
	documentReference?: string;
	/**
	 * Equipment reference to filter by.
	 */
	equipmentReference?: string;
}
