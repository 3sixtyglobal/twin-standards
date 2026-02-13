// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceDurationUnitMeasureCode } from "../lists/uneceDurationUnitMeasureCode.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A numeric value determined by measuring a duration of time.
 * @see https://vocabulary.uncefact.org/DurationUnitMeasureType
 */
export interface IUneceDurationUnitMeasureType extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.DurationUnitMeasureType;

	/**
	 * The numeric value.
	 * @see https://vocabulary.uncefact.org/DurationUnitMeasureTypeValue
	 */
	DurationUnitMeasureTypeValue?: string;

	/**
	 * The unit code.
	 * @see https://vocabulary.uncefact.org/DurationUnitMeasureTypeCode
	 */
	DurationUnitMeasureTypeCode?: UneceDurationUnitMeasureCode;
}
