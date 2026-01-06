// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A distinctive or characteristic part of something.
 * @see https://vocabulary.uncefact.org/SpecifiedFeature
 */
export interface IUneceSpecifiedFeature extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecifiedFeature;

	/**
	 * A textual description of this specified feature.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A keyword marketing phrase, expressed as text, for this feature.
	 * @see https://vocabulary.uncefact.org/keywordMarketingPhrase
	 */
	keywordMarketingPhrase?: string;

	/**
	 * A marketing phrase, expressed as text, for this specified feature.
	 * @see https://vocabulary.uncefact.org/marketingPhrase
	 */
	marketingPhrase?: string;

	/**
	 * An objective, expressed as text, for this specified feature.
	 * @see https://vocabulary.uncefact.org/objective
	 */
	objective?: string;

	/**
	 * The code specifying the type of feature.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * The code specifying the usage for this specified feature.
	 * @see https://vocabulary.uncefact.org/usageCode
	 */
	usageCode?: string;
}
