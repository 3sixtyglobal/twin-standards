// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Transport call subscription filters.
 *
 * Source: `transportCallSubscriptionBody` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaTransportCallSubscriptionBody {
	/**
	 * Filters to only receive events for a specific transport call.
	 */
	transportCallReference?: string;
	/**
	 * Filters to only receive events for a specific vessel IMO number.
	 */
	vesselIMONumber?: string;
	/**
	 * Filters to only receive events for a specific carrier export voyage number.
	 */
	carrierExportVoyageNumber?: string;
	/**
	 * Filters to only receive events for a specific universal export voyage reference.
	 */
	universalExportVoyageReference?: string;
	/**
	 * Filters to only receive events for a specific carrier service code.
	 */
	carrierServiceCode?: string;
	/**
	 * Filters to only receive events for a specific universal service reference.
	 */
	universalServiceReference?: string;
	/**
	 * Filters to only receive events for a specific UN/LOCODE.
	 */
	UNLocationCode?: string;
}
