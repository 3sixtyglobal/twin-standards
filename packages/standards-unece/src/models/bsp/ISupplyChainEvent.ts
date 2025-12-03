// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IInspectionStatus } from "./IInspectionStatus.js";
import type { ILocation } from "./ILocation.js";
import type { ILogisticsLocation } from "./ILogisticsLocation.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { ISupplyChainReference } from "./ISupplyChainReference.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { ITechnicalCharacteristic } from "./ITechnicalCharacteristic.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A significant occurrence or happening in a supply chain.
 * @see https://vocabulary.uncefact.org/SupplyChainEvent
 */
export interface ISupplyChainEvent extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SupplyChainEvent;

	/**
	 * The actual inspection status of this supply chain event.
	 * @see https://vocabulary.uncefact.org/actualStatus
	 */
	actualStatus?: IInspectionStatus;

	/**
	 * A reference associated with this supply chain event.
	 * @see https://vocabulary.uncefact.org/associatedReference
	 */
	associatedReference?: ISupplyChainReference[];

	/**
	 * A textual description of this supply chain event.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * Binary object data, such as a photograph, describing this supply chain event.
	 * @see https://vocabulary.uncefact.org/descriptionBinaryObject
	 */
	descriptionBinaryObject?: string;

	/**
	 * A discrete period specified for this supply chain event.
	 * @see https://vocabulary.uncefact.org/discretePeriod
	 */
	discretePeriod?: ISpecifiedPeriod[];

	/**
	 * The due date, time, date time, or other date time value of this supply chain event.
	 * @see https://vocabulary.uncefact.org/dueDateTime
	 */
	dueDateTime?: string;

	/**
	 * The date, time, date time, or other date time value of the earliest occurrence of this supply chain event.
	 * @see https://vocabulary.uncefact.org/earliestOccurrenceDateTime
	 */
	earliestOccurrenceDateTime?: string;

	/**
	 * The code specifying a frequency for this supply chain event.
	 * @see https://vocabulary.uncefact.org/frequencyCode
	 */
	frequencyCode?: string;

	/**
	 * The unique identifier for this supply chain event.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The date, time, date time, or other date time value of the latest occurrence of this supply chain event.
	 * @see https://vocabulary.uncefact.org/latestOccurrenceDateTime
	 */
	latestOccurrenceDateTime?: string;

	/**
	 * A date, time, date time, or other date time value of an occurrence of this supply chain event.
	 * @see https://vocabulary.uncefact.org/occurrenceDateTime
	 */
	occurrenceDateTime?: string;

	/**
	 * The referenced location for the occurrence of this supply chain event.
	 * @see https://vocabulary.uncefact.org/occurrenceLocation
	 */
	occurrenceLocation?: ILocation[];

	/**
	 * A logistics location where this supply chain event occurs.
	 * @see https://vocabulary.uncefact.org/occurrenceLogisticsLocation
	 */
	occurrenceLogisticsLocation?: ILogisticsLocation[];

	/**
	 * A specified period of time during which this supply chain event occurs.
	 * @see https://vocabulary.uncefact.org/occurrencePeriod
	 */
	occurrencePeriod?: ISpecifiedPeriod[];

	/**
	 * A sustainability characteristic related to this supply chain event.
	 * @see https://vocabulary.uncefact.org/relatedSustainabilityCharacteristic
	 */
	relatedSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A technical characteristic related to this supply chain event.
	 * @see https://vocabulary.uncefact.org/relatedTechnicalCharacteristic
	 */
	relatedTechnicalCharacteristic?: ITechnicalCharacteristic[];

	/**
	 * A time value of an occurrence of this supply chain event.
	 * @see https://vocabulary.uncefact.org/timeOccurrenceDateTime
	 */
	timeOccurrenceDateTime?: string;

	/**
	 * A code specifying the type of supply chain event.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * A number of units for this supply chain event.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IQuantityType[];
}
