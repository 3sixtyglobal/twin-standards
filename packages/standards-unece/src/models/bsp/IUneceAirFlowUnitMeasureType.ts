// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceAirFlowUnitMeasureCode } from "../lists/uneceAirFlowUnitMeasureCode.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The numeric value determined by a measurement of air flow.
 * @see https://vocabulary.uncefact.org/AirFlowUnitMeasureType
 */
export interface IUneceAirFlowUnitMeasureType extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AirFlowUnitMeasureType;

	/**
	 * The numeric value.
	 * @see https://vocabulary.uncefact.org/AirFlowUnitMeasureTypeValue
	 */
	AirFlowUnitMeasureTypeValue?: string;

	/**
	 * The unit code.
	 * @see https://vocabulary.uncefact.org/AirFlowUnitMeasureTypeCode
	 */
	AirFlowUnitMeasureTypeCode?: UneceAirFlowUnitMeasureCode;
}
