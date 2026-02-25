// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Notes, such as conclusions, related to an inspection.
 * @see https://vocabulary.uncefact.org/InspectionNote
 */
export interface IUneceInspectionNote {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.InspectionNote;

	/**
	 * Content, expressed as text, of this inspection note.
	 * @see https://vocabulary.uncefact.org/content
	 */
	content?: string;

	/**
	 * The date, time, date time, or other date time value for the creation of this inspection note.
	 * @see https://vocabulary.uncefact.org/creationDateTime
	 */
	creationDateTime?: string;
}
