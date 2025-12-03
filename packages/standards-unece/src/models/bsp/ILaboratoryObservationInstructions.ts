// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Information of an instructive nature that describes how to conduct this laboratory observation.
 * @see https://vocabulary.uncefact.org/LaboratoryObservationInstructions
 */
export interface ILaboratoryObservationInstructions extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LaboratoryObservationInstructions;

	/**
	 * The textual description of this set of laboratory observation instructions.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier for this set of laboratory observation instructions.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The type, expressed as text, of this set of laboratory observation instructions.
	 * @see https://vocabulary.uncefact.org/instructionsType
	 */
	instructionsType?: string;

	/**
	 * The code specifying the interpretation for this laboratory instruction.
	 * @see https://vocabulary.uncefact.org/interpretationCode
	 */
	interpretationCode?: string;

	/**
	 * The code specifying a description of a laboratory observation instruction or a set of instructions.
	 * @see https://vocabulary.uncefact.org/laboratoryObservationInstructionsDescriptionCode
	 */
	laboratoryObservationInstructionsDescriptionCode?: string;

	/**
	 * The date, time, date time, or other date time value of the latest update of this set of laboratory observation
	 * instructions.
	 * @see https://vocabulary.uncefact.org/latestUpdateDateTime
	 */
	latestUpdateDateTime?: string;

	/**
	 * The procedure, expressed as text, for a set of laboratory observation Instructions.
	 * @see https://vocabulary.uncefact.org/procedure
	 */
	procedure?: string;

	/**
	 * The code specifying the property reference of this laboratory observation instruction.
	 * @see https://vocabulary.uncefact.org/propertyReferenceCode
	 */
	propertyReferenceCode?: string;

	/**
	 * The sequence number of this set of laboratory observation instructions.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * The code specifying the status of this set of laboratory observation instructions.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;
}
