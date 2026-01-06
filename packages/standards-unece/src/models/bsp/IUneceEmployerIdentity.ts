// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Identification of a party who pays someone to do work on a regular or contractual basis.
 * @see https://vocabulary.uncefact.org/EmployerIdentity
 */
export interface IUneceEmployerIdentity extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.EmployerIdentity;

	/**
	 * The unique identifier for this employer identity.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;
}
