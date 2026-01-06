// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceResponseTypeCodeList } from "../lists/uneceResponseTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A response to a specification query.
 * @see https://vocabulary.uncefact.org/Response
 */
export interface IUneceResponse extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Response;

	/**
	 * The content, expressed as text, of this specification response.
	 * @see https://vocabulary.uncefact.org/content
	 */
	content?: string;

	/**
	 * The code specifying the contractual language for this specification response.
	 * @see https://vocabulary.uncefact.org/contractualLanguageCode
	 */
	contractualLanguageCode?: string;

	/**
	 * The unique identifier for this specification response.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The unique identifier for the query to which this response refers.
	 * @see https://vocabulary.uncefact.org/queryId
	 */
	queryId?: string;

	/**
	 * The code specifying the type of this specification response.
	 * @see https://vocabulary.uncefact.org/responseTypeCode
	 */
	responseTypeCode?: UneceResponseTypeCodeList[];
}
