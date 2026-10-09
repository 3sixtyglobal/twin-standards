// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The direction to related information for this laboratory observation.
 * @see https://vocabulary.uncefact.org/LaboratoryObservationReference
 */
export interface IUneceLaboratoryObservationReference {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LaboratoryObservationReference;

	/**
	 * The shortened text string to identify this laboratory observation reference.
	 * @see https://vocabulary.uncefact.org/abbreviation
	 */
	abbreviation?: string;

	/**
	 * The comment, expressed as text, for this laboratory observation reference.
	 * @see https://vocabulary.uncefact.org/comment
	 */
	comment?: string;

	/**
	 * The textual description of this laboratory observation reference.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier for this laboratory observation reference.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The code specifying the property reference of this laboratory observation reference.
	 * @see https://vocabulary.uncefact.org/propertyReferenceCode
	 */
	propertyReferenceCode?: string;

	/**
	 * The status, expressed as text, for this laboratory observation reference.
	 * @see https://vocabulary.uncefact.org/status
	 */
	status?: string;

	/**
	 * The value, expressed as text, for this laboratory observation reference.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;

	/**
	 * The value, expressed as a code, for this laboratory observation reference.
	 * @see https://vocabulary.uncefact.org/valueCode
	 */
	valueCode?: string;
}
