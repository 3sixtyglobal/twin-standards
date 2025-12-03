// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A product tag device to provide protection from a peril such as theft.
 * @see https://vocabulary.uncefact.org/SecurityTag
 */
export interface ISecurityTag extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SecurityTag;

	/**
	 * The code specifying the location of this product security tag.
	 * @see https://vocabulary.uncefact.org/locationCode
	 */
	locationCode?: string;

	/**
	 * The code specifying the type of this product security tag.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
