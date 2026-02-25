// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Instructions related to the action or process of conveyance.
 * @see https://vocabulary.uncefact.org/HaulageInstructions
 */
export interface IUneceHaulageInstructions {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.HaulageInstructions;

	/**
	 * The textual description of these haulage instructions.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the description of these haulage instructions.
	 * @see https://vocabulary.uncefact.org/haulageInstructionsDescriptionCode
	 */
	haulageInstructionsDescriptionCode?: string;
}
