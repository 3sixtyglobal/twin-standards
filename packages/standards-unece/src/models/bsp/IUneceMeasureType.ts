// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceMeasureCode } from "./IUneceMeasureCode.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Missing description.
 * @see https://vocabulary.uncefact.org/MeasureType
 */
export interface IUneceMeasureType {
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
	MeasureTypeValue?: string;

	/**
	 * The unit code.
	 * @see https://vocabulary.uncefact.org/MeasureTypeCode
	 */
	MeasureTypeCode?: IUneceMeasureCode;
}
