// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ILogisticsLocation } from "./ILogisticsLocation.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A movement of a vessel during a port call.
 * @see https://vocabulary.uncefact.org/PortMovementEvent
 */
export interface IPortMovementEvent extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.PortMovementEvent;

	/**
	 * An actual date, time, date time, or other date time value of the occurrence of this port movement event.
	 * @see https://vocabulary.uncefact.org/actualOccurrenceDateTime
	 */
	actualOccurrenceDateTime?: string;

	/**
	 * An arrival location related to this port movement event.
	 * @see https://vocabulary.uncefact.org/arrivalRelatedLocation
	 */
	arrivalRelatedLocation?: ILogisticsLocation[];

	/**
	 * A textual description of this port movement event.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An estimated date, time, date time, or other date time value of the occurrence of this port movement event.
	 * @see https://vocabulary.uncefact.org/estimatedOccurrenceDateTime
	 */
	estimatedOccurrenceDateTime?: string;

	/**
	 * An identifier for this port movement event.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The indication of whether or not this port movement event involves a maritime anchorage.
	 * @see https://vocabulary.uncefact.org/maritimeAnchorageIndicator
	 */
	maritimeAnchorageIndicator?: boolean;

	/**
	 * A pilot boarding place, expressed as text, for this port movement event.
	 * @see https://vocabulary.uncefact.org/pilotBoardingPlace
	 */
	pilotBoardingPlace?: string;

	/**
	 * A requested date, time, date time, or other date time value of the occurrence of this port movement event.
	 * @see https://vocabulary.uncefact.org/requestedOccurrenceDateTime
	 */
	requestedOccurrenceDateTime?: string;

	/**
	 * A scheduled date, time, date time, or other date time value of the occurrence of this port movement event.
	 * @see https://vocabulary.uncefact.org/scheduledOccurrenceDateTime
	 */
	scheduledOccurrenceDateTime?: string;

	/**
	 * The sequence number for this port movement event.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * A code specifying a type of port movement event.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
