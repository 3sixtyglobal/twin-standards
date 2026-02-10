// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceNegotiationContextTypeCodeList } from "../typeCodes/uneceNegotiationContextTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The protocol and setting of a negotiation.
 * @see https://vocabulary.uncefact.org/NegotiationContext
 */
export interface IUneceNegotiationContext extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.NegotiationContext;

	/**
	 * The identifier of the negotiation context.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The code specifying the type for this negotiation context, such as chain negotiation, item negotiation or counterpart
	 * negotiation.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceNegotiationContextTypeCodeList | string;
}
