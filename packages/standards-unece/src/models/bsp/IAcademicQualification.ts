// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An academic achievement that is officially recognized.
 * @see https://vocabulary.uncefact.org/AcademicQualification
 */
export interface IAcademicQualification extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AcademicQualification;

	/**
	 * The abbreviated name, expressed as text, of this academic qualification.
	 * @see https://vocabulary.uncefact.org/abbreviatedName
	 */
	abbreviatedName?: string;

	/**
	 * A name, expressed as text, of this academic qualification.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;
}
