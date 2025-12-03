// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A textual or coded description, such as a remark or additional information.
 * @see https://vocabulary.uncefact.org/Note
 */
export interface INote extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Note;

	/**
	 * A content, expressed as text, of this note.
	 * @see https://vocabulary.uncefact.org/content
	 */
	content?: string;

	/**
	 * A code specifying the content of this note.
	 * @see https://vocabulary.uncefact.org/contentCode
	 */
	contentCode?: string;

	/**
	 * The date, time, date time, or other date time value for the creation of this note.
	 * @see https://vocabulary.uncefact.org/creationDateTime
	 */
	creationDateTime?: string;

	/**
	 * A unique identifier for this note.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A name, expressed as text, for this note.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A code specifying the subject of this note.
	 * @see https://vocabulary.uncefact.org/noteSubjectCode
	 */
	noteSubjectCode?: string;

	/**
	 * The subject, expressed as text, of this note.
	 * @see https://vocabulary.uncefact.org/subject
	 */
	subject?: string;
}
