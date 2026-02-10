// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceLocation } from "./IUneceLocation.js";
import type { UneceInspectionEventTypeCodeList } from "../typeCodes/uneceInspectionEventTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A significant occurrence or happening related to an inspection.
 * @see https://vocabulary.uncefact.org/InspectionEvent
 */
export interface IUneceInspectionEvent extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.InspectionEvent;

	/**
	 * A textual description of the inspection for this event.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The date, time, date time, or other date time value of the occurrence of this inspection event.
	 * @see https://vocabulary.uncefact.org/occurrenceDateTime
	 */
	occurrenceDateTime?: string;

	/**
	 * The referenced location where this inspection event will occur or has occurred.
	 * @see https://vocabulary.uncefact.org/occurrenceLocation
	 */
	occurrenceLocation?: IUneceLocation;

	/**
	 * The code specifying the type of inspection for this event.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceInspectionEventTypeCodeList | string;
}
