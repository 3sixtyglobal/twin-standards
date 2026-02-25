// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Notes and conclusions related to a laboratory observation.
 * @see https://vocabulary.uncefact.org/LaboratoryObservationNote
 */
export interface IUneceLaboratoryObservationNote {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LaboratoryObservationNote;

	/**
	 * The content, expressed as text, of this laboratory observation note.
	 * @see https://vocabulary.uncefact.org/content
	 */
	content: string;

	/**
	 * The date, time, date time, or other date time value for the creation of this laboratory observation note.
	 * @see https://vocabulary.uncefact.org/creationDateTime
	 */
	creationDateTime: string;
}
