// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceLinearUnitMeasureCode } from "../lists/uneceLinearUnitMeasureCode.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The numeric value determined by linear measuring.
 * @see https://vocabulary.uncefact.org/LinearUnitMeasureType
 */
export interface IUneceLinearUnitMeasureType {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LinearUnitMeasureType;

	/**
	 * The numeric value.
	 * @see https://vocabulary.uncefact.org/LinearUnitMeasureTypeValue
	 */
	LinearUnitMeasureTypeValue?: string;

	/**
	 * The unit code.
	 * @see https://vocabulary.uncefact.org/LinearUnitMeasureTypeCode
	 */
	LinearUnitMeasureTypeCode?: UneceLinearUnitMeasureCode;
}
