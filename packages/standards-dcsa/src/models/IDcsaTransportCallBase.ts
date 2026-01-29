// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaTransportCallFacilityTypeCodes } from "./dcsaTransportCallFacilityTypeCodes.js";

/**
 * Transport call common attributes.
 *
 * Source: `transportCall` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaTransportCallBase {
	/**
	 * Unique reference for the transport call.
	 */
	transportCallReference: string;
	/**
	 * Sequence number of the transport call.
	 */
	transportCallSequenceNumber?: number;
	/**
	 * Location of the transport call.
	 *
	 * Kept as unknown since the authoritative schema references LOCATION_DOMAIN types.
	 */
	location?: unknown;
	/**
	 * Facility type code.
	 */
	facilityTypeCode?: DcsaTransportCallFacilityTypeCodes;
}
