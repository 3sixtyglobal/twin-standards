// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceAssertion } from "./IUneceAssertion.js";
import type { IUneceLocation } from "./IUneceLocation.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The process of certifying that a process has met performance and quality assurance tests, or qualification requirements.
 * @see https://vocabulary.uncefact.org/ProcessCertification
 */
export interface IUneceProcessCertification {
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
	applicableStandard?: IUneceStandard[];

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
	relatedLocation?: IUneceLocation[];

	/**
	 * An agency, expressed as text, responsible for this process certification.
	 * @see https://vocabulary.uncefact.org/responsibleAgency
	 */
	responsibleAgency?: string;

	/**
	 * A sustainability assertion specified for this process certification.
	 * @see https://vocabulary.uncefact.org/specifiedAssertion
	 */
	specifiedAssertion?: IUneceAssertion[];

	/**
	 * A standard, expressed as text, used for this process certification.
	 * @see https://vocabulary.uncefact.org/standard
	 */
	standard?: string;
}
