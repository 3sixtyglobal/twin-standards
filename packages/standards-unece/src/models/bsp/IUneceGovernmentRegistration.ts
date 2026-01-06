// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { UneceCountryId } from "../lists/uneceCountryId.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The recording of items or details for a governmental purpose.
 * @see https://vocabulary.uncefact.org/GovernmentRegistration
 */
export interface IUneceGovernmentRegistration extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.GovernmentRegistration;

	/**
	 * A code specifying a category of this government registration.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * The identifier of the country for this government registration.
	 * @see https://vocabulary.uncefact.org/countryId
	 */
	countryId?: UneceCountryId;

	/**
	 * The identifier of the country sub-division for this registration.
	 * @see https://vocabulary.uncefact.org/countrySubDivisionId
	 */
	countrySubDivisionId?: string;

	/**
	 * An identifier for this government registration.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The last registered year of this government registration.
	 * @see https://vocabulary.uncefact.org/lastRegisteredYearDateTime
	 */
	lastRegisteredYearDateTime?: string;

	/**
	 * The identifier of a licence for this government registration.
	 * @see https://vocabulary.uncefact.org/licenceId
	 */
	licenceId?: string;

	/**
	 * The date that this government registration was recorded.
	 * @see https://vocabulary.uncefact.org/recordedDate
	 */
	recordedDate?: string;

	/**
	 * A code specifying a type of government registration.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * The period of time during which this government registration is valid.
	 * @see https://vocabulary.uncefact.org/validityPeriod
	 */
	validityPeriod?: IUneceSpecifiedPeriod;

	/**
	 * The identifier of the version of this government registration.
	 * @see https://vocabulary.uncefact.org/versionId
	 */
	versionId?: string;
}
