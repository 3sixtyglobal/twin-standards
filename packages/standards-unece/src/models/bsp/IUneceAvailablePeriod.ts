// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A specific period of time such as the length of time between two known date/time points, from a start date onwards, or
 * up to an end date for which something is available.
 * @see https://vocabulary.uncefact.org/AvailablePeriod
 */
export interface IUneceAvailablePeriod {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AvailablePeriod;

	/**
	 * The textual description of this available period.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The date, time, date time or other date time value for the end of this available period of time.
	 * @see https://vocabulary.uncefact.org/endDateTime
	 */
	endDateTime?: string;

	/**
	 * The date, time, date time or other date time value for the start of this available period of time.
	 * @see https://vocabulary.uncefact.org/startDateTime
	 */
	startDateTime?: string;
}
