// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceTechnicalCharacteristic } from "./IUneceTechnicalCharacteristic.js";
import type { IUneceTTLocation } from "./IUneceTTLocation.js";
import type { UneceAnimalHoldingEventTypeCodeList } from "../typeCodes/uneceAnimalHoldingEventTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The keeping of an animal in a particular location.
 * @see https://vocabulary.uncefact.org/AnimalHoldingEvent
 */
export interface IUneceAnimalHoldingEvent {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AnimalHoldingEvent;

	/**
	 * The identifier of the location for this animal holding event.
	 * @see https://vocabulary.uncefact.org/locationId
	 */
	locationId?: string;

	/**
	 * The date, time, date time, or other date time value of the occurrence of this animal holding event.
	 * @see https://vocabulary.uncefact.org/occurrenceDateTime
	 */
	occurrenceDateTime: string;

	/**
	 * A Track and Trace (TT) location related to this animal holding event.
	 * @see https://vocabulary.uncefact.org/relatedTTLocation
	 */
	relatedTTLocation?: IUneceTTLocation[];

	/**
	 * A technical characteristic related to this animal holding event.
	 * @see https://vocabulary.uncefact.org/relatedTechnicalCharacteristic
	 */
	relatedTechnicalCharacteristic?: IUneceTechnicalCharacteristic[];

	/**
	 * The code specifying the type of animal holding event.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode: UneceAnimalHoldingEventTypeCodeList | string;
}
