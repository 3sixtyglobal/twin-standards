// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A physical process out of which waste originates.
 * @see https://vocabulary.uncefact.org/WasteOriginProcess
 */
export interface IWasteOriginProcess extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.WasteOriginProcess;

	/**
	 * The textual description of this waste origin process.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;
}
