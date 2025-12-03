// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IInformationSource } from "./IInformationSource.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An organized structure set up for a particular purpose, such as a business, government body, department, charity, or
 * financial institution that is working together with another organization, business, or person.
 * @see https://vocabulary.uncefact.org/CooperatingOrganization
 */
export interface ICooperatingOrganization extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CooperatingOrganization;

	/**
	 * A name, expressed as text, for this cooperating organization.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The code specifying the role for this cooperating organization.
	 * @see https://vocabulary.uncefact.org/roleCode
	 */
	roleCode?: string;

	/**
	 * A specified cooperative information source used for or from this cooperating organization.
	 * @see https://vocabulary.uncefact.org/usedInformationSource
	 */
	usedInformationSource?: IInformationSource[];
}
