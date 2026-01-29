// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaEquipmentEventTypeCodes } from "./dcsaEquipmentEventTypeCodes.js";
import type { IDcsaTransportCallSubscriptionBody } from "./IDcsaTransportCallSubscriptionBody.js";

/**
 * Equipment subscription filters.
 *
 * Source: `equipmentSubscriptionBody` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaEquipmentSubscriptionBody extends IDcsaTransportCallSubscriptionBody {
	/**
	 * Equipment event type codes to filter by.
	 */
	equipmentEventTypeCodes?: DcsaEquipmentEventTypeCodes[];
	/**
	 * Equipment reference to filter by.
	 */
	equipmentReference?: string;
}
