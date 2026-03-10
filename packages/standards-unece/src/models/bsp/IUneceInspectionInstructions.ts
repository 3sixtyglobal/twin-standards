// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Information of an instructive nature that describes how to conduct an inspection.
 * @see https://vocabulary.uncefact.org/InspectionInstructions
 */
export interface IUneceInspectionInstructions {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.InspectionInstructions;

	/**
	 * A textual description of this set of inspection instructions.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An identifier of this set of inspection instructions.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The code specifying a description of a set of inspection instructions.
	 * @see https://vocabulary.uncefact.org/inspectionInstructionsDescriptionCode
	 */
	inspectionInstructionsDescriptionCode?: string;

	/**
	 * A type, expressed as text, of this set of inspection instructions.
	 * @see https://vocabulary.uncefact.org/instructionsType
	 */
	instructionsType?: string;

	/**
	 * The code specifying the interpretation for this set of inspection instructions.
	 * @see https://vocabulary.uncefact.org/interpretationCode
	 */
	interpretationCode?: string;

	/**
	 * The date, time, date time, or other date time value of the latest update of this set of inspection instructions.
	 * @see https://vocabulary.uncefact.org/latestUpdateDateTime
	 * @format date-time
	 */
	latestUpdateDateTime?: string;

	/**
	 * A procedure, expressed as text, for a set of inspection instructions.
	 * @see https://vocabulary.uncefact.org/procedure
	 */
	procedure?: string;

	/**
	 * The code specifying the property reference of this set of inspection instructions.
	 * @see https://vocabulary.uncefact.org/propertyReferenceCode
	 */
	propertyReferenceCode?: string;

	/**
	 * The sequence number of this set of inspection instructions.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * The code specifying the status of this set of inspection instructions.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;
}
