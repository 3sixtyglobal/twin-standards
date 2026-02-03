// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceXHEParameter } from "./IUneceXHEParameter.js";
import type { IUneceXHEReference } from "./IUneceXHEReference.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A set of circumstances that form the setting for an XHE (Exchange Header Envelope) data exchange.
 * @see https://vocabulary.uncefact.org/XHEContext
 */
export interface IUneceXHEContext extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.XHEContext;

	/**
	 * A reference to the scope of this XHE context.
	 * @see https://vocabulary.uncefact.org/scopeReference
	 */
	scopeReference?: IUneceXHEReference;

	/**
	 * A parameter specified for this XHE context.
	 * @see https://vocabulary.uncefact.org/specifiedParameter
	 */
	specifiedParameter?: IUneceXHEParameter;
}
