// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceCommunicationEvent } from "./IUneceCommunicationEvent.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The process by which two potentially communicating entities are linked.
 * @see https://vocabulary.uncefact.org/Pairing
 */
export interface IUnecePairing {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Pairing;

	/**
	 * A matching event for this communication pairing.
	 * @see https://vocabulary.uncefact.org/matchingEvent
	 */
	matchingEvent?: IUneceCommunicationEvent[];

	/**
	 * The code specifying the method of this communication pairing.
	 * @see https://vocabulary.uncefact.org/methodCode
	 */
	methodCode?: string;

	/**
	 * The indication of whether or not the entity is paired in this communication pairing.
	 * @see https://vocabulary.uncefact.org/pairedIndicator
	 */
	pairedIndicator?: boolean;

	/**
	 * The identifier of the target entity for this communication pairing.
	 * @see https://vocabulary.uncefact.org/targetEntityId
	 */
	targetEntityId?: string | IJsonLdValueObject;
}
