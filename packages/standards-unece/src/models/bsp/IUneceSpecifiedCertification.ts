// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceAssertion } from "./IUneceAssertion.js";
import type { IUneceLocation } from "./IUneceLocation.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The process of certifying that a certain product, process or organization has passed performance tests, or qualification
 * requirements stipulated in a standard or regulation.
 * @see https://vocabulary.uncefact.org/SpecifiedCertification
 */
export interface IUneceSpecifiedCertification {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecifiedCertification;

	/**
	 * An assertion, expressed as text, for this specified certification.
	 * @see https://vocabulary.uncefact.org/assertion
	 */
	assertion?: string;

	/**
	 * A code specifying an assertion for this specified certification, such as a claim that a product is free of hazardous
	 * chemicals.
	 * @see https://vocabulary.uncefact.org/assertionCode
	 */
	assertionCode?: string;

	/**
	 * An audit date, time, date time or other date time value for this specified certification.
	 * @see https://vocabulary.uncefact.org/auditDateTime
	 * @format date-time
	 */
	auditDateTime?: string;

	/**
	 * The end date value for this specified certification.
	 * @see https://vocabulary.uncefact.org/endDateTime
	 * @format date-time
	 */
	endDateTime?: string;

	/**
	 * An identifier for this specified certification.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * A referenced location related to this specified certification.
	 * @see https://vocabulary.uncefact.org/relatedLocation
	 */
	relatedLocation?: IUneceLocation[];

	/**
	 * A referenced standard related to this specified certification.
	 * @see https://vocabulary.uncefact.org/relatedStandard
	 */
	relatedStandard?: IUneceStandard[];

	/**
	 * A responsible agency, expressed as text, for this specified certification.
	 * @see https://vocabulary.uncefact.org/responsibleAgency
	 */
	responsibleAgency?: string;

	/**
	 * A sustainability assertion for this specified certification.
	 * @see https://vocabulary.uncefact.org/specifiedAssertion
	 */
	specifiedAssertion?: IUneceAssertion[];

	/**
	 * A standard, expressed as text, for this specified certification.
	 * @see https://vocabulary.uncefact.org/standard
	 */
	standard?: string;

	/**
	 * The start date value for this specified certification.
	 * @see https://vocabulary.uncefact.org/startDateTime
	 * @format date-time
	 */
	startDateTime?: string;

	/**
	 * A Uniform Resource Identifier (URI) for this specified certification.
	 * @see https://vocabulary.uncefact.org/uRIId
	 */
	uRIId?: string | IJsonLdValueObject;
}
