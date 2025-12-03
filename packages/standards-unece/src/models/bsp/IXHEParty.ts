// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IXHEIdentity } from "./IXHEIdentity.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An individual, a group, or a body having a role in an XHE (Exchange Header Envelope).
 * @see https://vocabulary.uncefact.org/XHEParty
 */
export interface IXHEParty extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.XHEParty;

	/**
	 * Identifying information specified for an XHE party.
	 * @see https://vocabulary.uncefact.org/specifiedXHEIdentity
	 */
	specifiedXHEIdentity?: IXHEIdentity[];
}
