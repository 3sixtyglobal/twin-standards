// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAssertion } from "./IAssertion.js";
import type { ILocation } from "./ILocation.js";
import type { IStandard } from "./IStandard.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The process of certifying organizational performance or qualification requirements as stipulated in regulations.
 * @see https://vocabulary.uncefact.org/OrganizationalCertification
 */
export interface IOrganizationalCertification extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.OrganizationalCertification;

	/**
	 * A referenced standard applicable to this organizational certification.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IStandard[];

	/**
	 * An assertion, expressed as text, for this organizational certification.
	 * @see https://vocabulary.uncefact.org/assertion
	 */
	assertion?: string;

	/**
	 * The code specifying the assertion, such as a claim that an organization does not practise child labour, of this
	 * organizational certification.
	 * @see https://vocabulary.uncefact.org/assertionCode
	 */
	assertionCode?: string;

	/**
	 * A referenced location related to this organizational certification.
	 * @see https://vocabulary.uncefact.org/relatedLocation
	 */
	relatedLocation?: ILocation[];

	/**
	 * An agency, expressed as text, responsible for this organizational certification.
	 * @see https://vocabulary.uncefact.org/responsibleAgency
	 */
	responsibleAgency?: string;

	/**
	 * A sustainability assertion specified for this organizational certification.
	 * @see https://vocabulary.uncefact.org/specifiedAssertion
	 */
	specifiedAssertion?: IAssertion[];

	/**
	 * A standard, expressed as text, used for this organizational certification.
	 * @see https://vocabulary.uncefact.org/standard
	 */
	standard?: string;
}
