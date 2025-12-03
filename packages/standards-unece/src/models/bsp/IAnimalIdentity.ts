// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Information about an animal which uniquely identifies it.
 * @see https://vocabulary.uncefact.org/AnimalIdentity
 */
export interface IAnimalIdentity extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AnimalIdentity;

	/**
	 * The identifier for this animal identity.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The length, expressed as the number of characters, of the identifier in this animal identity.
	 * @see https://vocabulary.uncefact.org/identifierLengthNumeric
	 */
	identifierLengthNumeric?: string;

	/**
	 * The name, expressed as text, of the party issuing this animal identity.
	 * @see https://vocabulary.uncefact.org/issuerPartyName
	 */
	issuerPartyName?: string;

	/**
	 * The legal basis, expressed as text, for this animal identity.
	 * @see https://vocabulary.uncefact.org/legalBasis
	 */
	legalBasis?: string;

	/**
	 * The identifier of the version of this animal identity.
	 * @see https://vocabulary.uncefact.org/versionId
	 */
	versionId?: string;
}
