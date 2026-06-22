// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { UneceCountryId } from "../lists/uneceCountryId.js";
import type { UneceLegalRegistrationTypeCodeList } from "../typeCodes/uneceLegalRegistrationTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The recording of items or details for a specific legal purpose.
 * @see https://vocabulary.uncefact.org/LegalRegistration
 */
export interface IUneceLegalRegistration {
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
	countryId?: UneceCountryId | string | IJsonLdValueObject;

	/**
	 * A unique identifier of the country sub-division for this legal registration.
	 * @see https://vocabulary.uncefact.org/countrySubDivisionId
	 */
	countrySubDivisionId?: string | IJsonLdValueObject;

	/**
	 * A unique identifier for this legal registration.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The last year in which this legal registration was registered.
	 * @see https://vocabulary.uncefact.org/lastRegisteredYearDateTime
	 * @json-schema format:date-time
	 */
	lastRegisteredYearDateTime?: string;

	/**
	 * The unique identifier of a licence for this legal registration.
	 * @see https://vocabulary.uncefact.org/licenceId
	 */
	licenceId?: string | IJsonLdValueObject;

	/**
	 * A date when this legal registration was recorded.
	 * @see https://vocabulary.uncefact.org/recordedDate
	 */
	recordedDate?: string;

	/**
	 * A code specifying the type of this legal registration.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceLegalRegistrationTypeCodeList | string;
}
