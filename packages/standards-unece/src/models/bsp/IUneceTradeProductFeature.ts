// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { UneceTradeProductFeatureTypeCodeList } from "../typeCodes/uneceTradeProductFeatureTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Distinctive or characteristic parts of a trade product.
 * @see https://vocabulary.uncefact.org/TradeProductFeature
 */
export interface IUneceTradeProductFeature {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TradeProductFeature;

	/**
	 * A textual description of this trade product feature.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The unique identifier for this trade product feature.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * A marketing measure for this trade product feature.
	 * @see https://vocabulary.uncefact.org/marketingMeasure
	 */
	marketingMeasure?: IUneceMeasureType[];

	/**
	 * A catch phrase, expressed as text, for marketing of this trade product feature.
	 * @see https://vocabulary.uncefact.org/marketingPhrase
	 */
	marketingPhrase?: string;

	/**
	 * A name, expressed as text, for this trade product feature.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The code specifying the type of trade product feature.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceTradeProductFeatureTypeCodeList | string;
}
