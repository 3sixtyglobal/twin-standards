// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A certified recognition that provides evidence of a level of competency in a given area, such as certifying a level of
 * skill in a trade.
 * @see https://vocabulary.uncefact.org/Accreditation
 */
export interface IUneceAccreditation extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Accreditation;

	/**
	 * The name of the accrediting body, expressed as text, for this certified accreditation.
	 * @see https://vocabulary.uncefact.org/accreditingBodyName
	 */
	accreditingBodyName?: string;

	/**
	 * A code specifying an authentication method for this certified accreditation.
	 * @see https://vocabulary.uncefact.org/authenticationMethodCode
	 */
	authenticationMethodCode?: string;

	/**
	 * The code specifying the category of this certified accreditation, such as driving or academic.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * The textual description of this certified accreditation.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The date, time, date time or other date time value when this certified accreditation expires.
	 * @see https://vocabulary.uncefact.org/expiryDateTime
	 */
	expiryDateTime?: string;

	/**
	 * An identifier for this certified accreditation.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The date, time, date time or other date time value when this certified accreditation was obtained.
	 * @see https://vocabulary.uncefact.org/obtainedDateTime
	 */
	obtainedDateTime?: string;

	/**
	 * The code specifying the type of this certified accreditation, such as a type of driving license.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
