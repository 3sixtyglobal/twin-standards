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
 * The process of certifying that a process has met performance and quality assurance tests, or qualification requirements.
 * @see https://vocabulary.uncefact.org/ProcessCertification
 */
export interface IProcessCertification extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProcessCertification;

	/**
	 * A referenced standard applicable to this process certification.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IStandard[];

	/**
	 * An assertion, expressed as text, for this process certification.
	 * @see https://vocabulary.uncefact.org/assertion
	 */
	assertion?: string;

	/**
	 * The code specifying the assertion for this process certification, such as a claim that the process is free from child
	 * labour.
	 * @see https://vocabulary.uncefact.org/assertionCode
	 */
	assertionCode?: string;

	/**
	 * A referenced location related to this process certification.
	 * @see https://vocabulary.uncefact.org/relatedLocation
	 */
	relatedLocation?: ILocation[];

	/**
	 * An agency, expressed as text, responsible for this process certification.
	 * @see https://vocabulary.uncefact.org/responsibleAgency
	 */
	responsibleAgency?: string;

	/**
	 * A sustainability assertion specified for this process certification.
	 * @see https://vocabulary.uncefact.org/specifiedAssertion
	 */
	specifiedAssertion?: IAssertion[];

	/**
	 * A standard, expressed as text, used for this process certification.
	 * @see https://vocabulary.uncefact.org/standard
	 */
	standard?: string;
}
