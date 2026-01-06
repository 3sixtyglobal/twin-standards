// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Proprietary information which uniquely identifies a person or organization.
 * @see https://vocabulary.uncefact.org/ProprietaryIdentity
 */
export interface IUneceProprietaryIdentity extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProprietaryIdentity;

	/**
	 * An identifier type, expressed as text, for this proprietary identity.
	 * @see https://vocabulary.uncefact.org/identificationType
	 */
	identificationType?: string;

	/**
	 * A proprietary identifier.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;
}
