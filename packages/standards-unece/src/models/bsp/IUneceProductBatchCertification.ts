// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAssertion } from "./IUneceAssertion.js";
import type { IUneceLocation } from "./IUneceLocation.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The process of certifying that a certain product batch has passed performance and quality assurance tests, or
 * qualification requirements stipulated in regulations.
 * @see https://vocabulary.uncefact.org/ProductBatchCertification
 */
export interface IUneceProductBatchCertification extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductBatchCertification;

	/**
	 * A referenced standard applicable to this product batch certification.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IUneceStandard;

	/**
	 * An assertion, expressed as text, for this product batch certification, such as a claim that this product is free from
	 * gluten.
	 * @see https://vocabulary.uncefact.org/assertion
	 */
	assertion?: string;

	/**
	 * The code specifying the assertion for this product batch certification, such as a claim that a product is free from
	 * gluten.
	 * @see https://vocabulary.uncefact.org/assertionCode
	 */
	assertionCode?: string;

	/**
	 * A referenced location related to this product batch certification.
	 * @see https://vocabulary.uncefact.org/relatedLocation
	 */
	relatedLocation?: IUneceLocation;

	/**
	 * An agency, expressed as text, responsible for this product batch certification.
	 * @see https://vocabulary.uncefact.org/responsibleAgency
	 */
	responsibleAgency?: string;

	/**
	 * A sustainability assertion specified for this product batch certification.
	 * @see https://vocabulary.uncefact.org/specifiedAssertion
	 */
	specifiedAssertion?: IUneceAssertion;

	/**
	 * A standard, expressed as text, used for this product batch certification.
	 * @see https://vocabulary.uncefact.org/standard
	 */
	standard?: string;
}
