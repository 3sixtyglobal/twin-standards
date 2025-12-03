// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A named, delimited and identified part of a land and or water surface of the globe subject to dedicated uniform
 * agricultural treatment.
 * Deprecated since version D23B. Use `unece:AgriculturalZoneArea` property instead.
 * @see https://vocabulary.uncefact.org/Area
 * @deprecated
 */
export interface IArea extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Area;
}
