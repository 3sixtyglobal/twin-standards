// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ICountry } from "./ICountry.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An individual human being acting as a representative.
 * @see https://vocabulary.uncefact.org/RepresentativePerson
 */
export interface IRepresentativePerson extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.RepresentativePerson;

	/**
	 * The date, time, date time or other date time value which specifies the birth date for this representative person.
	 * @see https://vocabulary.uncefact.org/birthDateTime
	 */
	birthDateTime?: string;

	/**
	 * The unique identifier for this representative person.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A country that constitutes a nationality by origin, birth, or naturalization for this representative person.
	 * @see https://vocabulary.uncefact.org/nationalityCountry
	 */
	nationalityCountry?: ICountry[];

	/**
	 * The name or set of names, expressed as text, by which this representative person is known.
	 * @see https://vocabulary.uncefact.org/representativePersonName
	 */
	representativePersonName?: string;

	/**
	 * A role, expressed as text, of this representative person.
	 * @see https://vocabulary.uncefact.org/role
	 */
	role?: string;
}
