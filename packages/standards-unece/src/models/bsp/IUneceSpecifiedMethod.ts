// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceSpecifiedParameter } from "./IUneceSpecifiedParameter.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A defined way of performing something.
 * @see https://vocabulary.uncefact.org/SpecifiedMethod
 */
export interface IUneceSpecifiedMethod extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecifiedMethod;

	/**
	 * A parameter applicable to this specified method.
	 * @see https://vocabulary.uncefact.org/applicableParameter
	 */
	applicableParameter?: IUneceSpecifiedParameter;

	/**
	 * A certification identifier of this specified method.
	 * @see https://vocabulary.uncefact.org/certificationId
	 */
	certificationId?: string;

	/**
	 * The code specifying the certification type of this method.
	 * @see https://vocabulary.uncefact.org/certificationTypeCode
	 */
	certificationTypeCode?: string;

	/**
	 * An external reference, expressed as text, for this specified method.
	 * @see https://vocabulary.uncefact.org/externalReference
	 */
	externalReference?: string;

	/**
	 * An identifier of this specified method.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * Information, expressed as text, for this specified method.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * The code specifying the local type for this method.
	 * @see https://vocabulary.uncefact.org/localTypeCode
	 */
	localTypeCode?: string;

	/**
	 * The code specifying the measurement for this method.
	 * @see https://vocabulary.uncefact.org/measurementCode
	 */
	measurementCode?: string;

	/**
	 * The name, expressed as text, of this specified method.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The code specifying the obligatory type for this method.
	 * @see https://vocabulary.uncefact.org/obligatoryTypeCode
	 */
	obligatoryTypeCode?: string;

	/**
	 * The code specifying the standard type for this method.
	 * @see https://vocabulary.uncefact.org/standardTypeCode
	 */
	standardTypeCode?: string;

	/**
	 * The code specifying the technology used by this method.
	 * @see https://vocabulary.uncefact.org/usedTechnologyCode
	 */
	usedTechnologyCode?: string;
}
