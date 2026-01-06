// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A significant word, part of word or phrase that is used to enable indexing of or searching within a textual repository,
 * such as a product catalogue or library.
 * @see https://vocabulary.uncefact.org/Keyword
 */
export interface IUneceKeyword extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Keyword;

	/**
	 * A name, expressed as text, for this keyword.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;
}
