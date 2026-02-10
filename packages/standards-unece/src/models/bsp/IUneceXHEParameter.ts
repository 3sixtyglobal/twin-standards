// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceXHEParameterTypeCodeList } from "../typeCodes/uneceXHEParameterTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A feature that is fixed for an XHE (Exchange Header Envelope) but may be different in other cases.
 * @see https://vocabulary.uncefact.org/XHEParameter
 */
export interface IUneceXHEParameter extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.XHEParameter;

	/**
	 * The code specifying the type of XHE parameter.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceXHEParameterTypeCodeList | string;

	/**
	 * The value, expressed as text, of this XHE parameter.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;
}
