// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaTransportEventTypeCodes } from "./dcsaTransportEventTypeCodes.js";
import type { IDcsaTransportCallSubscriptionBody } from "./IDcsaTransportCallSubscriptionBody.js";

/**
 * Transport subscription filters.
 *
 * Source: `transportSubscriptionBody` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaTransportSubscriptionBody extends IDcsaTransportCallSubscriptionBody {
	/**
	 * Transport event type codes to filter by.
	 */
	transportEventTypeCodes?: DcsaTransportEventTypeCodes[];
}
