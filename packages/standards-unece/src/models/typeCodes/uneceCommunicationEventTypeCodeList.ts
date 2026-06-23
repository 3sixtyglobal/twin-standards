// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceCommunicationEvent typeCode property.
 * @see https://vocabulary.uncefact.org/CommunicationEvent
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceCommunicationEventTypeCodeList = {
	/**
	 * A matching event for this communication pairing.
	 * @see https://vocabulary.uncefact.org/matchingEvent
	 */
	MatchingEvent: "unece:matchingEvent",

	/**
	 * A communication event related to this monitoring IOT device.
	 * A communication event related to this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/relatedEvent
	 */
	RelatedEvent: "unece:relatedEvent"
} as const;

/**
 * Values for UneceCommunicationEvent typeCode property.
 * @see https://vocabulary.uncefact.org/CommunicationEvent
 */
export type UneceCommunicationEventTypeCodeList = (typeof UneceCommunicationEventTypeCodeList)[keyof typeof UneceCommunicationEventTypeCodeList];
