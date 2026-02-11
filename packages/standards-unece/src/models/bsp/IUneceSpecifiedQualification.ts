// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A specified condition that must be fulfilled.
 * @see https://vocabulary.uncefact.org/SpecifiedQualification
 */
export interface IUneceSpecifiedQualification extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecifiedQualification;

	/**
	 * The name, expressed as text, of this specified qualification.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name: string;
}
