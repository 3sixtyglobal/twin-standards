// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceGeographicalFeature } from "./IUneceGeographicalFeature.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceCommunicationEventTypeCodeList } from "../typeCodes/uneceCommunicationEventTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A significant occurrence or happening communicated by means of sending or receiving information, such as transmitting
 * digital data by using the internet.
 * @see https://vocabulary.uncefact.org/CommunicationEvent
 */
export interface IUneceCommunicationEvent extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CommunicationEvent;

	/**
	 * A geographical feature associated with this communication event.
	 * @see https://vocabulary.uncefact.org/associatedGeographicalFeature
	 */
	associatedGeographicalFeature?: IUneceGeographicalFeature[];

	/**
	 * A textual description of this communication event.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier for this communication event.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The date, time, date time, or other date time value of an occurrence of this communication event.
	 * @see https://vocabulary.uncefact.org/occurrenceDateTime
	 */
	occurrenceDateTime?: string;

	/**
	 * The logistics location where this communication event will occur or has occurred.
	 * @see https://vocabulary.uncefact.org/occurrenceLogisticsLocation
	 */
	occurrenceLogisticsLocation?: IUneceLogisticsLocation;

	/**
	 * The operational responsible party for this communication event.
	 * @see https://vocabulary.uncefact.org/operationalResponsibleParty
	 */
	operationalResponsibleParty?: IUneceTradeParty;

	/**
	 * The code specifying a reason for this communication event.
	 * @see https://vocabulary.uncefact.org/reasonCode
	 */
	reasonCode?: string;

	/**
	 * The code specifying the type of communication event.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceCommunicationEventTypeCodeList | string;

	/**
	 * The number of units for this communication event.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IUneceQuantityType;

	/**
	 * The measure of a value for this communication event.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IUneceMeasureType;
}
