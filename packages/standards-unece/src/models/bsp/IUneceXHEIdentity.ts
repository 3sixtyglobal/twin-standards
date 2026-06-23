// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Information which uniquely identifies an XHE (Exchange Header Envelope) object.
 * @see https://vocabulary.uncefact.org/XHEIdentity
 */
export interface IUneceXHEIdentity {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.XHEIdentity;

	/**
	 * The identifier of this XHE identity.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier: string | IJsonLdValueObject;
}
