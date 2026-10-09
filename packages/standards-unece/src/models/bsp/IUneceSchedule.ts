// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { UneceScheduleTypeCodeList } from "../typeCodes/uneceScheduleTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A series of planned activities or things to be done in this supply chain.
 * @see https://vocabulary.uncefact.org/Schedule
 */
export interface IUneceSchedule {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Schedule;

	/**
	 * A textual description of this supply chain schedule.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An identifier of this supply chain schedule.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * A date, time, date time, or other date time of an occurrence in this supply chain schedule.
	 * @see https://vocabulary.uncefact.org/occurrenceDateTime
	 * @json-schema format:date-time
	 */
	occurrenceDateTime?: string;

	/**
	 * A code specifying the status of this supply chain schedule.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * A code specifying the type of supply chain schedule.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceScheduleTypeCodeList | string;
}
