// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The identification of related information for an inspection.
 * @see https://vocabulary.uncefact.org/InspectionReference
 */
export interface IUneceInspectionReference {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.InspectionReference;

	/**
	 * The shortened text string to identify this inspection reference.
	 * @see https://vocabulary.uncefact.org/abbreviation
	 */
	abbreviation?: string;

	/**
	 * A comment, expressed as text, for this inspection reference.
	 * @see https://vocabulary.uncefact.org/comment
	 */
	comment?: string;

	/**
	 * A textual description of this inspection reference.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An identifier of this inspection reference.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The code specifying the property reference of this inspection reference.
	 * @see https://vocabulary.uncefact.org/propertyReferenceCode
	 */
	propertyReferenceCode?: string;

	/**
	 * A status, expressed as text, for this inspection reference.
	 * @see https://vocabulary.uncefact.org/status
	 */
	status?: string;

	/**
	 * A value, expressed as text, for this inspection reference.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;

	/**
	 * The value, expressed as a code, for this inspection reference.
	 * @see https://vocabulary.uncefact.org/valueCode
	 */
	valueCode?: string;
}
