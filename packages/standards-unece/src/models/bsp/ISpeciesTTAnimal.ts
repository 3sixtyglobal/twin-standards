// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The species of a Track and Trace (TT) animal or batch of animals.
 * @see https://vocabulary.uncefact.org/SpeciesTTAnimal
 */
export interface ISpeciesTTAnimal extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpeciesTTAnimal;

	/**
	 * A code specifying the type of regulation species name for this TT animal.
	 * @see https://vocabulary.uncefact.org/regulationSpeciesNameTypeCode
	 */
	regulationSpeciesNameTypeCode?: string;

	/**
	 * A code specifying the type of scientific species name for this TT animal.
	 * @see https://vocabulary.uncefact.org/scientificSpeciesNameTypeCode
	 */
	scientificSpeciesNameTypeCode?: string;

	/**
	 * A code specifying the species type of this TT animal.
	 * @see https://vocabulary.uncefact.org/speciesTypeCode
	 */
	speciesTypeCode?: string;

	/**
	 * A code specifying the type of trade species name for this TT animal.
	 * @see https://vocabulary.uncefact.org/tradeSpeciesNameTypeCode
	 */
	tradeSpeciesNameTypeCode?: string;
}
