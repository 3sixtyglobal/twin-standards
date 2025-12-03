// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An identified defect or fault.
 * @see https://vocabulary.uncefact.org/IdentifiedFault
 */
export interface IIdentifiedFault extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.IdentifiedFault;

	/**
	 * A textual description of this identified fault.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A code specifying an identified fault.
	 * @see https://vocabulary.uncefact.org/identificationCode
	 */
	identificationCode?: string;
}
