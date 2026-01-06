// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceAnimalHoldingEvent } from "./IUneceAnimalHoldingEvent.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceRange } from "./IUneceRange.js";
import type { IUneceSpecifiedMaterial } from "./IUneceSpecifiedMaterial.js";
import type { IUneceSpecifiedParameter } from "./IUneceSpecifiedParameter.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { IUneceSupplyChainEvent } from "./IUneceSupplyChainEvent.js";
import type { IUneceTolerance } from "./IUneceTolerance.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A prominent technical attribute or aspect.
 * @see https://vocabulary.uncefact.org/TechnicalCharacteristic
 */
export interface IUneceTechnicalCharacteristic extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TechnicalCharacteristic;

	/**
	 * A referenced standard applicable to this technical characteristic.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IUneceStandard[];

	/**
	 * The capacity, expressed as a measure, such as a production volume, a surface area or a number of animals, for this
	 * technical characteristic.
	 * @see https://vocabulary.uncefact.org/capacityValueMeasure
	 */
	capacityValueMeasure?: IUneceMeasureType[];

	/**
	 * The code specifying the certification granted to this technical characteristic.
	 * @see https://vocabulary.uncefact.org/certificationCode
	 */
	certificationCode?: string;

	/**
	 * A specified material component of this technical characteristic.
	 * @see https://vocabulary.uncefact.org/componentMaterial
	 */
	componentMaterial?: IUneceSpecifiedMaterial[];

	/**
	 * The date, time, date time, or other date time value of the construction of this technical characteristic.
	 * @see https://vocabulary.uncefact.org/constructionDateTime
	 */
	constructionDateTime?: string;

	/**
	 * The textual description of this technical characteristic.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A code specifying a description of this technical characteristic.
	 * @see https://vocabulary.uncefact.org/descriptionCode
	 */
	descriptionCode?: string;

	/**
	 * The identifier for this technical characteristic.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The date, time, date time, or other date time value of the latest renovation of this technical characteristic.
	 * @see https://vocabulary.uncefact.org/latestRenovationDateTime
	 */
	latestRenovationDateTime?: string;

	/**
	 * The licence, expressed as text, for this technical characteristic.
	 * @see https://vocabulary.uncefact.org/licence
	 */
	licence?: string;

	/**
	 * The code specifying the measurement method for this technical characteristic.
	 * @see https://vocabulary.uncefact.org/measurementMethodCode
	 */
	measurementMethodCode?: string;

	/**
	 * An animal holding event specified for this technical characteristic.
	 * @see https://vocabulary.uncefact.org/specifiedAnimalHoldingEvent
	 */
	specifiedAnimalHoldingEvent?: IUneceAnimalHoldingEvent[];

	/**
	 * A supply chain event specified for this technical characteristic.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainEvent
	 */
	specifiedSupplyChainEvent?: IUneceSupplyChainEvent[];

	/**
	 * The code specifying the subordinate type for this technical characteristic.
	 * @see https://vocabulary.uncefact.org/subordinateTypeCode
	 */
	subordinateTypeCode?: string;

	/**
	 * The code specifying the value of this technical characteristic.
	 * @see https://vocabulary.uncefact.org/technicalCharacteristicValueCode
	 */
	technicalCharacteristicValueCode?: string;

	/**
	 * A code specifying the type of technical characteristic.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * A value, expressed as text, for this technical characteristic.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;

	/**
	 * The value, expressed as an amount, for this technical characteristic.
	 * @see https://vocabulary.uncefact.org/valueAmount
	 */
	valueAmount?: IUneceAmountType[];

	/**
	 * The value, expressed as a date, time, date time, or other date time value. for this technical characteristic.
	 * @see https://vocabulary.uncefact.org/valueDateTime
	 */
	valueDateTime?: string;

	/**
	 * The value, expressed as an indicator, for this technical characteristic.
	 * @see https://vocabulary.uncefact.org/valueIndicator
	 */
	valueIndicator?: boolean;

	/**
	 * The measure of the value of this technical characteristic.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IUneceMeasureType[];

	/**
	 * The value, expressed as a number, for this technical characteristic.
	 * @see https://vocabulary.uncefact.org/valueNumeric
	 */
	valueNumeric?: string;

	/**
	 * A parameter specified for the value of this technical characteristic.
	 * @see https://vocabulary.uncefact.org/valueParameter
	 */
	valueParameter?: IUneceSpecifiedParameter[];

	/**
	 * A range specified for the value of this technical characteristic.
	 * @see https://vocabulary.uncefact.org/valueRange
	 */
	valueRange?: IUneceRange[];

	/**
	 * A tolerance specified for the value of this technical characteristic.
	 * @see https://vocabulary.uncefact.org/valueTolerance
	 */
	valueTolerance?: IUneceTolerance[];
}
