// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The process of doing something in order to make something happen or to deal with a situation.
 * @see https://vocabulary.uncefact.org/SpecifiedAction
 */
export interface ISpecifiedAction extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecifiedAction;

	/**
	 * A type, expressed as text, for this specified action.
	 * @see https://vocabulary.uncefact.org/actionType
	 */
	actionType?: string;

	/**
	 * A textual description for this specified action.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the type of action.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
