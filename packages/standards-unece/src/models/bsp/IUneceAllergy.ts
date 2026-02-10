// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceAllergyTypeCodeList } from "../typeCodes/uneceAllergyTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A guest condition of the abnormal reaction of the body to a previously encountered substance introduced by inhalation,
 * ingestion, injection, or skin contact.
 * @see https://vocabulary.uncefact.org/Allergy
 */
export interface IUneceAllergy extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Allergy;

	/**
	 * A textual description of this guest allergy.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A name, expressed as text, of this guest allergy.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A restriction, expressed as text, related to this guest allergy.
	 * @see https://vocabulary.uncefact.org/restriction
	 */
	restriction?: string;

	/**
	 * The code specifying the type of guest allergy.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceAllergyTypeCodeList | string;
}
