// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceDelimitedPeriod } from "./IUneceDelimitedPeriod.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A Track and Trace (TT) animal, such as one kept or raised on a farm, ranch.
 * @see https://vocabulary.uncefact.org/IndividualTTAnimal
 */
export interface IUneceIndividualTTAnimal {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.IndividualTTAnimal;

	/**
	 * The birth date for this individual TT animal.
	 * @see https://vocabulary.uncefact.org/birthDateTime
	 */
	birthDateTime: string;

	/**
	 * The death date for this individual TT animal.
	 * @see https://vocabulary.uncefact.org/deathDateTime
	 */
	deathDateTime: string;

	/**
	 * The identifier for this TT animal, such as the number appearing on an animal ear tag.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier: string;

	/**
	 * The delimited period specified for this individual TT animal.
	 * @see https://vocabulary.uncefact.org/specifiedDelimitedPeriod
	 */
	specifiedDelimitedPeriod?: IUneceDelimitedPeriod;

	/**
	 * The delimited period specified for this individual TT animal.
	 * @see https://vocabulary.uncefact.org/specifiedPeriod
	 */
	specifiedPeriod?: IUneceDelimitedPeriod;
}
