// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A period of time from a start date time onwards up to an end date time.
 * @see https://vocabulary.uncefact.org/DelimitedPeriod
 */
export interface IUneceDelimitedPeriod extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.DelimitedPeriod;

	/**
	 * The measure of the length of time for this delimited period such as hours, days, weeks, months or years.
	 * @see https://vocabulary.uncefact.org/durationMeasure
	 */
	durationMeasure?: IUneceMeasureType;

	/**
	 * The date, time, date time or other date time value for the end of this delimited period.
	 * @see https://vocabulary.uncefact.org/endDateTime
	 */
	endDateTime?: string;

	/**
	 * The date, time, date time or other date time value for the start of this delimited period.
	 * @see https://vocabulary.uncefact.org/startDateTime
	 */
	startDateTime?: string;
}
