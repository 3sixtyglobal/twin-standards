// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A special question or request for information.
 * @see https://vocabulary.uncefact.org/SpecialQuery
 */
export interface IUneceSpecialQuery {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecialQuery;

	/**
	 * Content, expressed as text, of this special query.
	 * @see https://vocabulary.uncefact.org/content
	 */
	content?: string;

	/**
	 * The identifier for this special query.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The date, time, date time, or other date time value for the latest response to this special query.
	 * @see https://vocabulary.uncefact.org/latestResponseDateTime
	 */
	latestResponseDateTime?: string;

	/**
	 * The date, time, date time, or other date time value of the response for this special query.
	 * @see https://vocabulary.uncefact.org/responseDateTime
	 */
	responseDateTime?: string;

	/**
	 * The code specifying the response status for this special query.
	 * @see https://vocabulary.uncefact.org/responseStatusCode
	 */
	responseStatusCode?: string;

	/**
	 * A subject, expressed as text, of this special query.
	 * @see https://vocabulary.uncefact.org/subject
	 */
	subject?: string;

	/**
	 * The date, time, date time, or other date time value when this special query was submitted.
	 * @see https://vocabulary.uncefact.org/submittedDateTime
	 */
	submittedDateTime?: string;

	/**
	 * A name, expressed as text, of the person submitting this special query.
	 * @see https://vocabulary.uncefact.org/submittingPersonName
	 */
	submittingPersonName?: string;

	/**
	 * The identifier of the version for this special query.
	 * @see https://vocabulary.uncefact.org/versionId
	 */
	versionId?: string;
}
