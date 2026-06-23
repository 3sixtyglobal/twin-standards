// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Publisher (the party sending the event).
 *
 * Source: `publisher` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaPublisher {
	/**
	 * Name of the publishing party.
	 */
	partyName?: string;
	/**
	 * Carrier code identifying the publisher.
	 */
	carrierCode: string;
	/**
	 * Provider of the carrier code list.
	 */
	carrierCodeListProvider: string;
}
