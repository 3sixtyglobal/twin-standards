// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IError } from "./IError.js";
import type { IEventElement } from "./IEventElement.js";
import type { ISpecifiedCertification } from "./ISpecifiedCertification.js";
import type { ITTLocation } from "./ITTLocation.js";
import type { ITTParty } from "./ITTParty.js";
import type { ITTTradeTransaction } from "./ITTTradeTransaction.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Information about an event concerning one or more physical or digital Track and Trace (TT) objects identified by
 * instance or class level identifiers.
 * @see https://vocabulary.uncefact.org/TTObjectEvent
 */
export interface ITTObjectEvent extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TTObjectEvent;

	/**
	 * The code specifying the action for this TT object event.
	 * @see https://vocabulary.uncefact.org/actionCode
	 */
	actionCode?: string;

	/**
	 * The business location related to this TT object event.
	 * @see https://vocabulary.uncefact.org/businessRelatedLocation
	 */
	businessRelatedLocation?: ITTLocation[];

	/**
	 * The code specifying the business step for this TT object event.
	 * @see https://vocabulary.uncefact.org/businessStepCode
	 */
	businessStepCode?: string;

	/**
	 * A destination related party for this TT object event.
	 * @see https://vocabulary.uncefact.org/destinationRelatedParty
	 */
	destinationRelatedParty?: ITTParty[];

	/**
	 * The code specifying the disposition related to this TT object event.
	 * @see https://vocabulary.uncefact.org/dispositionCode
	 */
	dispositionCode?: string;

	/**
	 * The identifier for this TT object event.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An instance identifier for an object of this TT object event.
	 * @see https://vocabulary.uncefact.org/objectInstanceId
	 */
	objectInstanceId?: string;

	/**
	 * The date, time, date time, or other date time value at which this TT object event occurred.
	 * @see https://vocabulary.uncefact.org/occurrenceDateTime
	 */
	occurrenceDateTime?: string;

	/**
	 * A quantity event element specified for this TT object event.
	 * @see https://vocabulary.uncefact.org/quantitySpecifiedEventElement
	 */
	quantitySpecifiedEventElement?: IEventElement[];

	/**
	 * The read point related location of this TT object event.
	 * @see https://vocabulary.uncefact.org/readPointRelatedLocation
	 */
	readPointRelatedLocation?: ITTLocation[];

	/**
	 * The date, time, date time, or other date time value at which this TT object event was recorded.
	 * @see https://vocabulary.uncefact.org/recordedDateTime
	 */
	recordedDateTime?: string;

	/**
	 * A certification related to this TT object event.
	 * @see https://vocabulary.uncefact.org/relatedCertification
	 */
	relatedCertification?: ISpecifiedCertification[];

	/**
	 * A source related party for this TT object event.
	 * @see https://vocabulary.uncefact.org/sourceRelatedParty
	 */
	sourceRelatedParty?: ITTParty[];

	/**
	 * A declared error specified for this TT object event.
	 * @see https://vocabulary.uncefact.org/specifiedError
	 */
	specifiedError?: IError[];

	/**
	 * A trade transaction specified for this TT object event.
	 * @see https://vocabulary.uncefact.org/specifiedTradeTransaction
	 */
	specifiedTradeTransaction?: ITTTradeTransaction[];
}
