// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceError } from "./IUneceError.js";
import type { IUneceEventElement } from "./IUneceEventElement.js";
import type { IUneceSpecifiedCertification } from "./IUneceSpecifiedCertification.js";
import type { IUneceTTLocation } from "./IUneceTTLocation.js";
import type { IUneceTTParty } from "./IUneceTTParty.js";
import type { IUneceTTTradeTransaction } from "./IUneceTTTradeTransaction.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Information about an event concerning one or more physical or digital Track and Trace (TT) objects identified by
 * instance or class level identifiers.
 * @see https://vocabulary.uncefact.org/TTObjectEvent
 */
export interface IUneceTTObjectEvent extends IJsonLdNodeObject {
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
	businessRelatedLocation?: IUneceTTLocation;

	/**
	 * The code specifying the business step for this TT object event.
	 * @see https://vocabulary.uncefact.org/businessStepCode
	 */
	businessStepCode?: string;

	/**
	 * A destination related party for this TT object event.
	 * @see https://vocabulary.uncefact.org/destinationRelatedParty
	 */
	destinationRelatedParty?: IUneceTTParty;

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
	quantitySpecifiedEventElement?: IUneceEventElement[];

	/**
	 * The read point related location of this TT object event.
	 * @see https://vocabulary.uncefact.org/readPointRelatedLocation
	 */
	readPointRelatedLocation?: IUneceTTLocation;

	/**
	 * The date, time, date time, or other date time value at which this TT object event was recorded.
	 * @see https://vocabulary.uncefact.org/recordedDateTime
	 */
	recordedDateTime: string;

	/**
	 * A certification related to this TT object event.
	 * @see https://vocabulary.uncefact.org/relatedCertification
	 */
	relatedCertification?: IUneceSpecifiedCertification[];

	/**
	 * A source related party for this TT object event.
	 * @see https://vocabulary.uncefact.org/sourceRelatedParty
	 */
	sourceRelatedParty?: IUneceTTParty;

	/**
	 * A declared error specified for this TT object event.
	 * @see https://vocabulary.uncefact.org/specifiedError
	 */
	specifiedError?: IUneceError[];

	/**
	 * A trade transaction specified for this TT object event.
	 * @see https://vocabulary.uncefact.org/specifiedTradeTransaction
	 */
	specifiedTradeTransaction?: IUneceTTTradeTransaction[];
}
