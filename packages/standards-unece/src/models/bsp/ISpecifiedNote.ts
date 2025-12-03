// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A specified textual or coded description, such as a remark or additional information.
 * @see https://vocabulary.uncefact.org/SpecifiedNote
 */
export interface ISpecifiedNote extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecifiedNote;

	/**
	 * Content, expressed as text, of this specified note.
	 * @see https://vocabulary.uncefact.org/content
	 */
	content?: string;

	/**
	 * The date, time, date time, or other date time value for the creation of this specified note.
	 * @see https://vocabulary.uncefact.org/creationDateTime
	 */
	creationDateTime?: string;

	/**
	 * A textual description of this specified note.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier of this specified note.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A name, expressed as text, of this specified note.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The code specifying the subject of this specified note.
	 * @see https://vocabulary.uncefact.org/specifiedNoteSubjectCode
	 */
	specifiedNoteSubjectCode?: string;

	/**
	 * A subject, expressed as text, of this specified note.
	 * @see https://vocabulary.uncefact.org/subject
	 */
	subject?: string;

	/**
	 * The code specifying the subject of this specified note.
	 * @see https://vocabulary.uncefact.org/subjectCode
	 */
	subjectCode?: string;
}
