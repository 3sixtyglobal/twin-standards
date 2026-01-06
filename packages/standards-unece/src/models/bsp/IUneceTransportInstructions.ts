// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Transport information of an instructive nature.
 * @see https://vocabulary.uncefact.org/TransportInstructions
 */
export interface IUneceTransportInstructions extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TransportInstructions;

	/**
	 * A textual description of these transport instructions.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A type, expressed as text, for these transport instructions.
	 * @see https://vocabulary.uncefact.org/instructionsType
	 */
	instructionsType?: string;

	/**
	 * The code specifying a description of these transport instructions.
	 * @see https://vocabulary.uncefact.org/transportInstructionsDescriptionCode
	 */
	transportInstructionsDescriptionCode?: string;
}
