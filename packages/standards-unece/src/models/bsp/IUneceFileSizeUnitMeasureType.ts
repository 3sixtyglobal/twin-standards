// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceFileSizeUnitMeasureCode } from "../lists/uneceFileSizeUnitMeasureCode.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A numeric value determined by measuring a file size.
 * @see https://vocabulary.uncefact.org/FileSizeUnitMeasureType
 */
export interface IUneceFileSizeUnitMeasureType {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.FileSizeUnitMeasureType;

	/**
	 * The numeric value.
	 * @see https://vocabulary.uncefact.org/FileSizeUnitMeasureTypeValue
	 */
	FileSizeUnitMeasureTypeValue?: string;

	/**
	 * The unit code.
	 * @see https://vocabulary.uncefact.org/FileSizeUnitMeasureTypeCode
	 */
	FileSizeUnitMeasureTypeCode?: UneceFileSizeUnitMeasureCode;
}
