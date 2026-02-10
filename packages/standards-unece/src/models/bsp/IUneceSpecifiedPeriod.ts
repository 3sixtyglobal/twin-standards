// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceDurationUnitMeasureType } from "./IUneceDurationUnitMeasureType.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { UneceSpecifiedPeriodTypeCodeList } from "../typeCodes/uneceSpecifiedPeriodTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A specified period of time.
 * @see https://vocabulary.uncefact.org/SpecifiedPeriod
 */
export interface IUneceSpecifiedPeriod extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecifiedPeriod;

	/**
	 * The date, time, date time or other date time value for a complete specified period of time expressed as a specific
	 * month, a specific week, etc.
	 * @see https://vocabulary.uncefact.org/completeDateTime
	 */
	completeDateTime?: string;

	/**
	 * The indication of whether or not this specified period is continuous.
	 * @see https://vocabulary.uncefact.org/continuousIndicator
	 */
	continuousIndicator?: boolean;

	/**
	 * The number of days in this specified period.
	 * @see https://vocabulary.uncefact.org/dayQuantity
	 */
	dayQuantity?: IUneceQuantityType;

	/**
	 * A textual description of this specified period of time.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A duration, expressed as text, for this specified period.
	 * @see https://vocabulary.uncefact.org/duration
	 */
	duration?: string;

	/**
	 * A measure of the length of time for this specified time period such as hours, days, weeks, months, years.
	 * @see https://vocabulary.uncefact.org/durationMeasure
	 */
	durationMeasure?: IUneceMeasureType;

	/**
	 * The date, time, date time or other date time value for the end of this specified period of time.
	 * @see https://vocabulary.uncefact.org/endDateTime
	 */
	endDateTime?: string;

	/**
	 * The code specifying the end day of the week for this specified period.
	 * @see https://vocabulary.uncefact.org/endDayOfWeekCode
	 */
	endDayOfWeekCode?: string;

	/**
	 * The unique identifier of this specified period.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The indication of whether or not the start and end dates are included in this specified period.
	 * @see https://vocabulary.uncefact.org/inclusiveIndicator
	 */
	inclusiveIndicator?: boolean;

	/**
	 * The measure of the maximum length of time for this specified period, such as hours, days, weeks, months, years.
	 * @see https://vocabulary.uncefact.org/maximumDurationMeasure
	 */
	maximumDurationMeasure?: IUneceDurationUnitMeasureType;

	/**
	 * The measure of the minimum length of time for this specified period, such as hours, days, weeks, months, years.
	 * @see https://vocabulary.uncefact.org/minimumDurationMeasure
	 */
	minimumDurationMeasure?: IUneceDurationUnitMeasureType;

	/**
	 * A name, expressed as text, of this specified period.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The number of nights in this specified period.
	 * @see https://vocabulary.uncefact.org/nightQuantity
	 */
	nightQuantity?: IUneceQuantityType;

	/**
	 * The indication of whether or not an entity is open during this specified period.
	 * @see https://vocabulary.uncefact.org/openIndicator
	 */
	openIndicator?: boolean;

	/**
	 * The code specifying the purpose of this specified period.
	 * @see https://vocabulary.uncefact.org/purposeCode
	 */
	purposeCode?: string;

	/**
	 * The code specifying the season for this specified period.
	 * @see https://vocabulary.uncefact.org/seasonCode
	 */
	seasonCode?: string;

	/**
	 * A sequence number for this specified period.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * The code specifying the flexibility of the start date of this specified period.
	 * @see https://vocabulary.uncefact.org/startDateFlexibilityCode
	 */
	startDateFlexibilityCode?: string;

	/**
	 * The date, time, date time or other date time value for the start of this specified period of time.
	 * @see https://vocabulary.uncefact.org/startDateTime
	 */
	startDateTime?: string;

	/**
	 * The code specifying the start day of the week for this specified period.
	 * @see https://vocabulary.uncefact.org/startDayOfWeekCode
	 */
	startDayOfWeekCode?: string;

	/**
	 * The code specifying the type of specified period.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceSpecifiedPeriodTypeCodeList | string;
}
