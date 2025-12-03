// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Anything that is visible or tangible, such as a product, process, or organization.
 * @see https://vocabulary.uncefact.org/Object
 */
export interface IObject extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Object;

	/**
	 * A category, expressed as text, for this specified object.
	 * @see https://vocabulary.uncefact.org/category
	 */
	category?: string;

	/**
	 * The code specifying the category for this specified object.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * The identifier for this specified object.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A type, expressed as text, for this specified object.
	 * @see https://vocabulary.uncefact.org/objectType
	 */
	objectType?: string;

	/**
	 * A remark, expressed as text, for this specified object.
	 * @see https://vocabulary.uncefact.org/remark
	 */
	remark?: string;

	/**
	 * The code specifying the type of specified object.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
