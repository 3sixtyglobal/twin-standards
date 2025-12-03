// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ICropProduceBatch } from "./ICropProduceBatch.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Agricultural plants or plant products grown and harvested, such as grain, fruit, vegetables, silage.
 * @see https://vocabulary.uncefact.org/Produce
 */
export interface IProduce extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Produce;

	/**
	 * A measure of the calculated yield, such as weight per surface area unit, of this crop produce.
	 * @see https://vocabulary.uncefact.org/calculatedYieldMeasure
	 */
	calculatedYieldMeasure?: IMeasureType[];

	/**
	 * A measure of the estimated yield, such as weight per surface area unit, of this crop produce.
	 * @see https://vocabulary.uncefact.org/estimatedYieldMeasure
	 */
	estimatedYieldMeasure?: IMeasureType[];

	/**
	 * An identifier for this crop produce.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An input batch crop produce, such as seed or fertilizer, specified for this crop produce.
	 * @see https://vocabulary.uncefact.org/inputSpecifiedBatch
	 */
	inputSpecifiedBatch?: ICropProduceBatch[];

	/**
	 * The name, expressed as text, for this crop produce.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * An output batch crop produce, such as potatoes, grain, straw, specified for this crop produce.
	 * @see https://vocabulary.uncefact.org/outputSpecifiedBatch
	 */
	outputSpecifiedBatch?: ICropProduceBatch[];

	/**
	 * The code specifying the subordinate type of crop produce, such as product or by-product.
	 * @see https://vocabulary.uncefact.org/subordinateTypeCode
	 */
	subordinateTypeCode?: string;

	/**
	 * The code specifying the type of crop produce.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
