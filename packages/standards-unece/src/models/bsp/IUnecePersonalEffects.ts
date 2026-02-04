// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Specified privately owned articles for personal use by an individual.
 * @see https://vocabulary.uncefact.org/PersonalEffects
 */
export interface IUnecePersonalEffects extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.PersonalEffects;

	/**
	 * A textual description of these specified personal effects.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An onboard number of these specified personal effects.
	 * @see https://vocabulary.uncefact.org/onboardQuantity
	 */
	onboardQuantity?: IUneceQuantityType[];

	/**
	 * A sequence number for these specified personal effects.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * A code specifying a type of specified personal effects.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
