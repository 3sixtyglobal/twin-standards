// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A defined way of performing laboratory observation analysis.
 * @see https://vocabulary.uncefact.org/LaboratoryObservationAnalysisMethod
 */
export interface IUneceLaboratoryObservationAnalysisMethod extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LaboratoryObservationAnalysisMethod;

	/**
	 * The identifier for the certificate granted to a party for this laboratory observation analysis method.
	 * @see https://vocabulary.uncefact.org/certificationId
	 */
	certificationId?: string;

	/**
	 * The code specifying the type of certification for this laboratory observation analysis method.
	 * @see https://vocabulary.uncefact.org/certificationTypeCode
	 */
	certificationTypeCode?: string;

	/**
	 * The external reference, expressed as text, for this laboratory observation analysis method.
	 * @see https://vocabulary.uncefact.org/externalReference
	 */
	externalReference?: string;

	/**
	 * The identifier for this laboratory observation analysis method.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * Information, expressed as text, for this laboratory observation analysis method.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * The code specifying the type of laboratory observation analysis method, which is the local method of the observer party
	 * for the kind of observation.
	 * @see https://vocabulary.uncefact.org/localTypeCode
	 */
	localTypeCode?: string;

	/**
	 * The name, expressed as text, for this laboratory observation analysis method.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The code specifying the type of analysis method obligatory for the laboratory observation.
	 * @see https://vocabulary.uncefact.org/obligatoryTypeCode
	 */
	obligatoryTypeCode?: string;

	/**
	 * The measure of the minimum object size required for this laboratory observation analysis method.
	 * @see https://vocabulary.uncefact.org/sampledObjectMinimumRequiredObjectSizeMeasure
	 */
	sampledObjectMinimumRequiredObjectSizeMeasure?: IUneceMeasureType[];

	/**
	 * The code specifying the type of laboratory observation analysis method, which is the standard method of the observer
	 * party for the kind of observation, such as a Logical Observation Identifiers Names and Codes (LOINC) code and method.
	 * @see https://vocabulary.uncefact.org/standardTypeCode
	 */
	standardTypeCode?: string;
}
