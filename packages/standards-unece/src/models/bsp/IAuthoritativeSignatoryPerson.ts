// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAcademicQualification } from "./IAcademicQualification.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A person who is authorized to sign a document, such as a customs officer or other government official.
 * @see https://vocabulary.uncefact.org/AuthoritativeSignatoryPerson
 */
export interface IAuthoritativeSignatoryPerson extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AuthoritativeSignatoryPerson;

	/**
	 * An academic qualification attained by this authoritative signatory person.
	 * @see https://vocabulary.uncefact.org/attainedAcademicQualification
	 */
	attainedAcademicQualification?: IAcademicQualification[];

	/**
	 * The name, expressed as text, of this authoritative signatory person.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;
}
