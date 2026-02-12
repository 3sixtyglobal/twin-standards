// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceWeightUnitMeasureCode } from "../lists/uneceWeightUnitMeasureCode.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The numeric value determined by weight measuring.
 * @see https://vocabulary.uncefact.org/WeightUnitMeasureType
 */
export interface IUneceWeightUnitMeasureType extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.WeightUnitMeasureType;

	/**
	 * The numeric value.
	 * @see https://vocabulary.uncefact.org/WeightUnitMeasureTypeValue
	 */
	WeightUnitMeasureTypeValue?: number;

	/**
	 * The unit code.
	 * @see https://vocabulary.uncefact.org/WeightUnitMeasureTypeCode
	 */
	WeightUnitMeasureTypeCode?: UneceWeightUnitMeasureCode;
}
