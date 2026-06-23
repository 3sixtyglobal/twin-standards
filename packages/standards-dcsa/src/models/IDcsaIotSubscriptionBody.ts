// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaIotEventTypeCodes } from "./dcsaIotEventTypeCodes.js";

/**
 * IoT subscription filters.
 *
 * Source: `iotSubscriptionBody` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaIotSubscriptionBody {
	/**
	 * IoT event type codes to filter by.
	 */
	iotEventTypeCodes?: DcsaIotEventTypeCodes[];
	/**
	 * Carrier booking reference to filter by.
	 */
	carrierBookingReference?: string;
	/**
	 * Equipment reference to filter by.
	 */
	equipmentReference?: string;
}
