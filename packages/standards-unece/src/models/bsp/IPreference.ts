// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An involvement in a happening, such as a theme park, a guided tour that is liked or wanted more than another item.
 * @see https://vocabulary.uncefact.org/Preference
 */
export interface IPreference extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Preference;

	/**
	 * A textual description of this experience item preference.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A disliked item, expressed as text, for this experience item preference.
	 * @see https://vocabulary.uncefact.org/dislikedItem
	 */
	dislikedItem?: string;

	/**
	 * A preferred item, expressed as text, for this experience item preference.
	 * @see https://vocabulary.uncefact.org/preferredItem
	 */
	preferredItem?: string;

	/**
	 * The priority ranking number for this experience item preference.
	 * @see https://vocabulary.uncefact.org/priorityRankingNumeric
	 */
	priorityRankingNumeric?: string;
}
