// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceResponse } from "./IUneceResponse.js";
import type { IUneceSpecificationQuery } from "./IUneceSpecificationQuery.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An aggregation of descriptive information consisting of different but related characteristics that together constitute a
 * work item complex description.
 * @see https://vocabulary.uncefact.org/ComplexDescription
 */
export interface IUneceComplexDescription extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ComplexDescription;

	/**
	 * A textual abstract of the content of the work item complex description.
	 * @see https://vocabulary.uncefact.org/abstract
	 */
	abstract?: string;

	/**
	 * Content, expressed as text, for this work item complex description.
	 * @see https://vocabulary.uncefact.org/content
	 */
	content?: string;

	/**
	 * The code specifying the contractual language for this work item complex description.
	 * @see https://vocabulary.uncefact.org/contractualLanguageCode
	 */
	contractualLanguageCode?: string;

	/**
	 * A requesting specification query for this work item complex description.
	 * @see https://vocabulary.uncefact.org/requestingQuery
	 */
	requestingQuery?: IUneceSpecificationQuery;

	/**
	 * A responding specification response for this work item complex description.
	 * @see https://vocabulary.uncefact.org/respondingResponse
	 */
	respondingResponse?: IUneceResponse;

	/**
	 * The complex description subset for this work item complex description.
	 * @see https://vocabulary.uncefact.org/subsetComplexDescription
	 */
	subsetComplexDescription?: IUneceComplexDescription;
}
