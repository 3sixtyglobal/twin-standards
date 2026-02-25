// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A place from which water originates, such as a hot spring or lake that provides water to public drinking water supplies
 * and private wells.
 * @see https://vocabulary.uncefact.org/Source
 */
export interface IUneceSource {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Source;

	/**
	 * A caution, expressed as text, of a bathing prohibition for this water source.
	 * @see https://vocabulary.uncefact.org/bathingProhibitionCaution
	 */
	bathingProhibitionCaution?: string;

	/**
	 * The code specifying the category for this water source.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * A characteristic, expressed as text, for this water source.
	 * @see https://vocabulary.uncefact.org/characteristic
	 */
	characteristic?: string;

	/**
	 * The code specifying the characteristic of this water source.
	 * @see https://vocabulary.uncefact.org/characteristicCode
	 */
	characteristicCode?: string;

	/**
	 * A textual description of this water source.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A caution, expressed as text, of a drinking prohibition for this water source.
	 * @see https://vocabulary.uncefact.org/drinkingProhibitionCaution
	 */
	drinkingProhibitionCaution?: string;

	/**
	 * A health benefit, expressed as text, for this water source.
	 * @see https://vocabulary.uncefact.org/healthBenefit
	 */
	healthBenefit?: string;

	/**
	 * The identifier of this water source.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A marketing phrase, expressed as text, for this water source.
	 * @see https://vocabulary.uncefact.org/marketingPhrase
	 */
	marketingPhrase?: string;

	/**
	 * A name, expressed as text, for this water source.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;
}
