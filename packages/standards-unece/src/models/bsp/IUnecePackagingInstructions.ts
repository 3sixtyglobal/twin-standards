// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Packaging information of an instructive nature.
 * @see https://vocabulary.uncefact.org/PackagingInstructions
 */
export interface IUnecePackagingInstructions {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.PackagingInstructions;

	/**
	 * A textual description of these packaging instructions.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * Packaging handling instructions, expressed as text.
	 * @see https://vocabulary.uncefact.org/handling
	 */
	handling?: string;

	/**
	 * A code specifying packaging handling instructions.
	 * @see https://vocabulary.uncefact.org/handlingCode
	 */
	handlingCode?: string;

	/**
	 * A type, expressed as text, of these packaging instructions.
	 * @see https://vocabulary.uncefact.org/instructionsType
	 */
	instructionsType?: string;

	/**
	 * A name, expressed as text, of an item included in these packaging instructions.
	 * @see https://vocabulary.uncefact.org/itemName
	 */
	itemName?: string;

	/**
	 * The code specifying a description of these packaging instructions.
	 * @see https://vocabulary.uncefact.org/packagingInstructionsDescriptionCode
	 */
	packagingInstructionsDescriptionCode?: string;

	/**
	 * A procedure, expressed as text, for these packaging instructions.
	 * @see https://vocabulary.uncefact.org/procedure
	 */
	procedure?: string;

	/**
	 * The indication of whether or not there is a requirement for these packaging instructions.
	 * @see https://vocabulary.uncefact.org/requirementIndicator
	 */
	requirementIndicator?: boolean;
}
