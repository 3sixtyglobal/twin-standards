// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceUnitMeasureCode } from "../lists/uneceUnitMeasureCode.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A numeric value determined by measuring an object along with the specified unit of measure.
 * @see https://vocabulary.uncefact.org/UnitMeasureType
 */
export interface IUneceUnitMeasureType {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.UnitMeasureType;

	/**
	 * The numeric value.
	 * @see https://vocabulary.uncefact.org/UnitMeasureTypeValue
	 */
	UnitMeasureTypeValue?: string;

	/**
	 * The unit code.
	 * @see https://vocabulary.uncefact.org/UnitMeasureTypeCode
	 */
	UnitMeasureTypeCode?: UneceUnitMeasureCode;
}
