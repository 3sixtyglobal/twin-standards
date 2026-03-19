// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceError } from "./IUneceError.js";
import type { IUneceEventElement } from "./IUneceEventElement.js";
import type { IUneceSpecifiedCertification } from "./IUneceSpecifiedCertification.js";
import type { IUneceTTLocation } from "./IUneceTTLocation.js";
import type { IUneceTTParty } from "./IUneceTTParty.js";
import type { IUneceTTTradeTransaction } from "./IUneceTTTradeTransaction.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Information about an event declaring that certain objects have been associated or disassociated with one or more Track
 * and Trace (TT) trade transactions.
 * @see https://vocabulary.uncefact.org/TTTransactionEvent
 */
export interface IUneceTTTransactionEvent {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TTTransactionEvent;

	/**
	 * The code specifying the action for this TT transaction event.
	 * @see https://vocabulary.uncefact.org/actionCode
	 */
	actionCode: string;

	/**
	 * The business location related to this TT transaction event.
	 * @see https://vocabulary.uncefact.org/businessRelatedLocation
	 */
	businessRelatedLocation?: IUneceTTLocation;

	/**
	 * The code specifying the business step for this TT transaction event.
	 * @see https://vocabulary.uncefact.org/businessStepCode
	 */
	businessStepCode?: string;

	/**
	 * A destination related party for this TT transaction event.
	 * @see https://vocabulary.uncefact.org/destinationRelatedParty
	 */
	destinationRelatedParty?: IUneceTTParty[];

	/**
	 * The code specifying the disposition related to this TT transaction event.
	 * @see https://vocabulary.uncefact.org/dispositionCode
	 */
	dispositionCode?: string;

	/**
	 * The identifier for this TT transaction event.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * An instance identifier for an object of this TT transaction event.
	 * @see https://vocabulary.uncefact.org/objectInstanceId
	 */
	objectInstanceId?: string | IJsonLdValueObject;

	/**
	 * The date, time, date time, or other date time value at which this TT transaction event occurred.
	 * @see https://vocabulary.uncefact.org/occurrenceDateTime
	 * @json-schema format:date-time
	 */
	occurrenceDateTime: string;

	/**
	 * The identifier of the parent object for this TT transaction event.
	 * @see https://vocabulary.uncefact.org/parentObjectId
	 */
	parentObjectId?: string | IJsonLdValueObject;

	/**
	 * A quantity event element specified for this TT transaction event.
	 * @see https://vocabulary.uncefact.org/quantitySpecifiedEventElement
	 */
	quantitySpecifiedEventElement?: IUneceEventElement[];

	/**
	 * The read point related location of this TT transaction event.
	 * @see https://vocabulary.uncefact.org/readPointRelatedLocation
	 */
	readPointRelatedLocation?: IUneceTTLocation;

	/**
	 * The date, time, date time, or other date time value at which this TT transaction event was recorded.
	 * @see https://vocabulary.uncefact.org/recordedDateTime
	 * @json-schema format:date-time
	 */
	recordedDateTime: string;

	/**
	 * A certification related to this TT transaction event.
	 * @see https://vocabulary.uncefact.org/relatedCertification
	 */
	relatedCertification?: IUneceSpecifiedCertification[];

	/**
	 * A source related party for this TT transaction event.
	 * @see https://vocabulary.uncefact.org/sourceRelatedParty
	 */
	sourceRelatedParty?: IUneceTTParty[];

	/**
	 * A declared error specified for this TT transaction event.
	 * @see https://vocabulary.uncefact.org/specifiedError
	 */
	specifiedError?: IUneceError[];

	/**
	 * A trade transaction specified for this TT transaction event.
	 * @see https://vocabulary.uncefact.org/specifiedTradeTransaction
	 */
	specifiedTradeTransaction: IUneceTTTradeTransaction[];
}
