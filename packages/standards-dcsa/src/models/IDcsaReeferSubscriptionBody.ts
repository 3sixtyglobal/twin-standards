// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Reefer subscription filters.
 *
 * Source: `reeferSubscriptionBody` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaReeferSubscriptionBody {
	/**
	 * Carrier booking reference to filter by.
	 */
	carrierBookingReference?: string;
	/**
	 * Equipment reference to filter by.
	 */
	equipmentReference?: string;
}
