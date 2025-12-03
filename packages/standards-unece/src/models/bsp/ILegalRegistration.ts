// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { CountryId } from "../lists/countryId.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The recording of items or details for a specific legal purpose.
 * @see https://vocabulary.uncefact.org/LegalRegistration
 */
export interface ILegalRegistration extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LegalRegistration;

	/**
	 * A code specifying the category of this legal registration.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * An identifier of the country in which this legal registration is valid.
	 * @see https://vocabulary.uncefact.org/countryId
	 */
	countryId?: CountryId;

	/**
	 * A unique identifier of the country sub-division for this legal registration.
	 * @see https://vocabulary.uncefact.org/countrySubDivisionId
	 */
	countrySubDivisionId?: string;

	/**
	 * A unique identifier for this legal registration.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The last year in which this legal registration was registered.
	 * @see https://vocabulary.uncefact.org/lastRegisteredYearDateTime
	 */
	lastRegisteredYearDateTime?: string;

	/**
	 * The unique identifier of a licence for this legal registration.
	 * @see https://vocabulary.uncefact.org/licenceId
	 */
	licenceId?: string;

	/**
	 * A date when this legal registration was recorded.
	 * @see https://vocabulary.uncefact.org/recordedDate
	 */
	recordedDate?: string;

	/**
	 * A code specifying the type of this legal registration.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
