// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Improvements taken to eliminate causes of non-conformities or other undesirable situations, such as to an organization's
 * processes or products.
 * @see https://vocabulary.uncefact.org/CorrectiveAction
 */
export interface IUneceCorrectiveAction extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CorrectiveAction;

	/**
	 * A type, expressed as text, for this corrective action.
	 * @see https://vocabulary.uncefact.org/actionType
	 */
	actionType?: string;

	/**
	 * A textual description for this corrective action.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the type of corrective action.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
