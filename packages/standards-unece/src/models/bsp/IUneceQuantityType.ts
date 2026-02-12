// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceQuantityCode } from "./IUneceQuantityCode.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Missing description.
 * @see https://vocabulary.uncefact.org/QuantityType
 */
export interface IUneceQuantityType extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.QuantityType;

	/**
	 * The numeric value.
	 * @see https://vocabulary.uncefact.org/QuantityTypeValue
	 */
	QuantityTypeValue?: number;

	/**
	 * The unit code.
	 * @see https://vocabulary.uncefact.org/QuantityTypeCode
	 */
	QuantityTypeCode?: IUneceQuantityCode;
}
