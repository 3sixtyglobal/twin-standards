// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Instructions for a period of imposed isolation or detention.
 * @see https://vocabulary.uncefact.org/QuarantineInstructions
 */
export interface IUneceQuarantineInstructions extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.QuarantineInstructions;

	/**
	 * The textual description of these quarantine instructions.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the description of these quarantine instructions.
	 * @see https://vocabulary.uncefact.org/quarantineInstructionsDescriptionCode
	 */
	quarantineInstructionsDescriptionCode?: string;
}
