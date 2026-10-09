// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A set of instructions detailing how to properly dispose of a material.
 * @see https://vocabulary.uncefact.org/DisposalInstructions
 */
export interface IUneceDisposalInstructions {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.DisposalInstructions;

	/**
	 * A textual description of these disposal instructions.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A code describing recycling in these disposal instructions.
	 * @see https://vocabulary.uncefact.org/disposalInstructionsRecyclingDescriptionCode
	 */
	disposalInstructionsRecyclingDescriptionCode?: string;

	/**
	 * The handling, expressed as text, in this set of disposal instructions.
	 * @see https://vocabulary.uncefact.org/handling
	 */
	handling?: string;

	/**
	 * The identifier of the material to which these disposal instructions apply.
	 * @see https://vocabulary.uncefact.org/materialId
	 */
	materialId?: string | IJsonLdValueObject;

	/**
	 * The Resource Conservation and Recovery Act (RCRA) handling, expressed as text, in this set of disposal instructions.
	 * @see https://vocabulary.uncefact.org/rCRAHandling
	 */
	rCRAHandling?: string;

	/**
	 * A recycling procedure, expressed as text, for these disposal instructions.
	 * @see https://vocabulary.uncefact.org/recyclingProcedure
	 */
	recyclingProcedure?: string;
}
