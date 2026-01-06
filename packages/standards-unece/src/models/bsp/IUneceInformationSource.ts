// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A person, organization, thing or place from which information comes, arises or is obtained.
 * @see https://vocabulary.uncefact.org/InformationSource
 */
export interface IUneceInformationSource extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.InformationSource;

	/**
	 * The code specifying the category of this specified information source.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * Content, expressed as text, of this specified information source.
	 * @see https://vocabulary.uncefact.org/content
	 */
	content?: string;

	/**
	 * A textual description of this specified information source.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A name, expressed as text, of this specified information source.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * Security information, expressed as text, of this specified information source.
	 * @see https://vocabulary.uncefact.org/securityInformation
	 */
	securityInformation?: string;

	/**
	 * The identifier of the website URI (Uniform Resource Identifier) of this specified information source.
	 * @see https://vocabulary.uncefact.org/websiteURIId
	 */
	websiteURIId?: string;
}
