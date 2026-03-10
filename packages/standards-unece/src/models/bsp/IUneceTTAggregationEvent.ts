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
 * A Track and Trace (TT) event where objects or processes are grouped.
 * @see https://vocabulary.uncefact.org/TTAggregationEvent
 */
export interface IUneceTTAggregationEvent {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TTAggregationEvent;

	/**
	 * The code specifying the action for this TT aggregation event.
	 * @see https://vocabulary.uncefact.org/actionCode
	 */
	actionCode: string;

	/**
	 * The code specifying the business step for this TT aggregation event.
	 * @see https://vocabulary.uncefact.org/businessStepCode
	 */
	businessStepCode?: string;

	/**
	 * An instance identifier for a child object of this TT aggregation event.
	 * @see https://vocabulary.uncefact.org/childObjectInstanceId
	 */
	childObjectInstanceId?: string | IJsonLdValueObject;

	/**
	 * A quantity event element specified for a child of this TT aggregation event.
	 * @see https://vocabulary.uncefact.org/childQuantitySpecifiedEventElement
	 */
	childQuantitySpecifiedEventElement?: IUneceEventElement[];

	/**
	 * A destination related party for this TT aggregation event.
	 * @see https://vocabulary.uncefact.org/destinationRelatedParty
	 */
	destinationRelatedParty?: IUneceTTParty[];

	/**
	 * The code specifying the disposition related to this TT aggregation event.
	 * @see https://vocabulary.uncefact.org/dispositionCode
	 */
	dispositionCode?: string;

	/**
	 * The identifier for this TT aggregation event.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The date, time, date time, or other date time value at which this TT aggregation event occurred.
	 * @see https://vocabulary.uncefact.org/occurrenceDateTime
	 * @format date-time
	 */
	occurrenceDateTime: string;

	/**
	 * The identifier of the parent object for this TT aggregation event.
	 * @see https://vocabulary.uncefact.org/parentObjectId
	 */
	parentObjectId?: string | IJsonLdValueObject;

	/**
	 * The read point related location of this TT aggregation event.
	 * @see https://vocabulary.uncefact.org/readPointRelatedLocation
	 */
	readPointRelatedLocation?: IUneceTTLocation;

	/**
	 * The date, time, date time, or other date time value at which this TT aggregation event was recorded.
	 * @see https://vocabulary.uncefact.org/recordedDateTime
	 * @format date-time
	 */
	recordedDateTime: string;

	/**
	 * A certification related to this TT aggregation event.
	 * @see https://vocabulary.uncefact.org/relatedCertification
	 */
	relatedCertification?: IUneceSpecifiedCertification[];

	/**
	 * The location related to this TT aggregation event.
	 * @see https://vocabulary.uncefact.org/relatedTTLocation
	 */
	relatedTTLocation?: IUneceTTLocation;

	/**
	 * A source related party for this TT aggregation event.
	 * @see https://vocabulary.uncefact.org/sourceRelatedParty
	 */
	sourceRelatedParty?: IUneceTTParty[];

	/**
	 * A declared error specified for this TT aggregation event.
	 * @see https://vocabulary.uncefact.org/specifiedError
	 */
	specifiedError?: IUneceError[];

	/**
	 * A trade transaction specified for this TT aggregation event.
	 * @see https://vocabulary.uncefact.org/specifiedTradeTransaction
	 */
	specifiedTradeTransaction?: IUneceTTTradeTransaction[];
}
