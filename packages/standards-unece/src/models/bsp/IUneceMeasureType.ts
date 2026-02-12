// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureCode } from "./IUneceMeasureCode.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Missing description.
 * @see https://vocabulary.uncefact.org/MeasureType
 */
export interface IUneceMeasureType extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.MeasureType;

	/**
	 * The numeric value.
	 * @see https://vocabulary.uncefact.org/MeasureTypeValue
	 */
	MeasureTypeValue?: number;

	/**
	 * The unit code.
	 * @see https://vocabulary.uncefact.org/MeasureTypeCode
	 */
	MeasureTypeCode?: IUneceMeasureCode;
}
