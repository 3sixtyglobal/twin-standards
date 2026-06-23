// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A named, delimited and identified part of a land and or water surface of the globe.
 * @see https://vocabulary.uncefact.org/GeographicalArea
 */
export interface IUneceGeographicalArea {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.GeographicalArea;

	/**
	 * The identifier for this geographical area.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier: string | IJsonLdValueObject;

	/**
	 * The name, expressed as text, for this geographical area.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name: string;
}
