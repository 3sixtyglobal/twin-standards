// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A domestic or tamed animal that is kept for companionship or pleasure.
 * @see https://vocabulary.uncefact.org/PetAnimal
 */
export interface IUnecePetAnimal extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.PetAnimal;

	/**
	 * The indication of whether or not this pet animal is allowed.
	 * @see https://vocabulary.uncefact.org/allowedIndicator
	 */
	allowedIndicator?: boolean;

	/**
	 * The code specifying the category for this pet animal.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * A textual description of this pet animal.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A restriction, expressed as text, for this pet animal.
	 * @see https://vocabulary.uncefact.org/restriction
	 */
	restriction?: string;
}
