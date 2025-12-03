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
 * Information about an event that captures the relationship between one or more physical or digital objects identified by
 * identifiers, such as an EPC (Electronic Product Code) or EPC class, that are fully or partially consumed as inputs or as
 * outputs.
 * @see https://vocabulary.uncefact.org/TTTransformationEvent
 */
export interface ITTTransformationEvent extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TTTransformationEvent;

	/**
	 * The business location related to this TT transformation event.
	 * @see https://vocabulary.uncefact.org/businessRelatedLocation
	 */
	businessRelatedLocation?: ITTLocation[];

	/**
	 * The code specifying the business step for this TT transformation event.
	 * @see https://vocabulary.uncefact.org/businessStepCode
	 */
	businessStepCode?: string;

	/**
	 * A destination related party for this TT transformation event.
	 * @see https://vocabulary.uncefact.org/destinationRelatedParty
	 */
	destinationRelatedParty?: ITTParty[];

	/**
	 * The code specifying the disposition related to this TT transformation event.
	 * @see https://vocabulary.uncefact.org/dispositionCode
	 */
	dispositionCode?: string;

	/**
	 * The identifier for this TT transformation event.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An instance identifier for an input object of this TT transformation event.
	 * @see https://vocabulary.uncefact.org/inputObjectInstanceId
	 */
	inputObjectInstanceId?: string;

	/**
	 * A quantity event element specified for an input of this TT transformation event.
	 * @see https://vocabulary.uncefact.org/inputQuantitySpecifiedEventElement
	 */
	inputQuantitySpecifiedEventElement?: IEventElement[];

	/**
	 * The date, time, date time, or other date time value at which this TT transformation event occurred.
	 * @see https://vocabulary.uncefact.org/occurrenceDateTime
	 */
	occurrenceDateTime?: string;

	/**
	 * An instance identifier for an output object of this TT transformation event.
	 * @see https://vocabulary.uncefact.org/outputObjectInstanceId
	 */
	outputObjectInstanceId?: string;

	/**
	 * A quantity event element specified for an output of this TT transformation event.
	 * @see https://vocabulary.uncefact.org/outputQuantitySpecifiedEventElement
	 */
	outputQuantitySpecifiedEventElement?: IEventElement[];

	/**
	 * The read point related location of this TT transformation event.
	 * @see https://vocabulary.uncefact.org/readPointRelatedLocation
	 */
	readPointRelatedLocation?: ITTLocation[];

	/**
	 * The date, time, date time, or other date time value at which this TT transformation event was recorded.
	 * @see https://vocabulary.uncefact.org/recordedDateTime
	 */
	recordedDateTime?: string;

	/**
	 * A certification related to this TT transformation event.
	 * @see https://vocabulary.uncefact.org/relatedCertification
	 */
	relatedCertification?: ISpecifiedCertification[];

	/**
	 * A source related party for this TT transformation event.
	 * @see https://vocabulary.uncefact.org/sourceRelatedParty
	 */
	sourceRelatedParty?: ITTParty[];

	/**
	 * A declared error specified for this TT transformation event.
	 * @see https://vocabulary.uncefact.org/specifiedError
	 */
	specifiedError?: IError[];

	/**
	 * A trade transaction specified for this TT transformation event.
	 * @see https://vocabulary.uncefact.org/specifiedTradeTransaction
	 */
	specifiedTradeTransaction?: ITTTradeTransaction[];

	/**
	 * The transformation identifier for this TT transformation event.
	 * @see https://vocabulary.uncefact.org/transformationId
	 */
	transformationId?: string;
}
