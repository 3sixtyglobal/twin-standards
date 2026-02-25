// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Instructions for handling the document, such as stamping the agent signature.
 * @see https://vocabulary.uncefact.org/DocumentHandlingInstructions
 */
export interface IUneceDocumentHandlingInstructions {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.DocumentHandlingInstructions;

	/**
	 * A procedure, expressed as text, for these document handling instructions.
	 * @see https://vocabulary.uncefact.org/procedure
	 */
	procedure?: string;

	/**
	 * The indication of whether or not a requirement exists for these document handling instructions.
	 * @see https://vocabulary.uncefact.org/requirementIndicator
	 */
	requirementIndicator?: boolean;
}
