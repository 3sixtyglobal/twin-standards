// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The identification of related information in a supply chain context.
 * @see https://vocabulary.uncefact.org/SupplyChainReference
 */
export interface ISupplyChainReference extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SupplyChainReference;

	/**
	 * An abbreviation, expressed as text, for this supply chain reference.
	 * @see https://vocabulary.uncefact.org/abbreviation
	 */
	abbreviation?: string;

	/**
	 * A comment, expressed as text, for this supply chain reference.
	 * @see https://vocabulary.uncefact.org/comment
	 */
	comment?: string;

	/**
	 * A textual description of this supply chain reference.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An identifier for this supply chain reference.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A code specifying a property reference for this supply chain reference.
	 * @see https://vocabulary.uncefact.org/propertyReferenceCode
	 */
	propertyReferenceCode?: string;

	/**
	 * A status, expressed as text, for this supply chain reference.
	 * @see https://vocabulary.uncefact.org/status
	 */
	status?: string;

	/**
	 * A code specifying a type of supply chain reference.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * A value, expressed as text, for this supply chain reference.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;

	/**
	 * A value, expressed as a code, for this supply chain reference.
	 * @see https://vocabulary.uncefact.org/valueCode
	 */
	valueCode?: string;
}
