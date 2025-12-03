// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Recorded information relevant to a condition or a position of an object.
 * @see https://vocabulary.uncefact.org/RecordedStatus
 */
export interface IRecordedStatus extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.RecordedStatus;

	/**
	 * The date, time, date time, or other date time value when this recorded status changed.
	 * @see https://vocabulary.uncefact.org/changedDateTime
	 */
	changedDateTime?: string;

	/**
	 * The name of the person or system, expressed as text, that changed this recorded status.
	 * @see https://vocabulary.uncefact.org/changerName
	 */
	changerName?: string;

	/**
	 * The code specifying the condition for this recorded status.
	 * @see https://vocabulary.uncefact.org/recordedStatusConditionCode
	 */
	recordedStatusConditionCode?: string;
}
