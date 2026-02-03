// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceLinearUnitMeasureType } from "./IUneceLinearUnitMeasureType.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceWeightUnitMeasureType } from "./IUneceWeightUnitMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A calculation of the pollution (including noise, heat, and radiation etc.) discharged into the environment by a
 * residential, commercial, or industrial facility or by a means of transport, such as a vessel, aircraft or truck.
 * @see https://vocabulary.uncefact.org/Emission
 */
export interface IUneceEmission extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Emission;

	/**
	 * The affected distance over which this calculated emission is measured.
	 * @see https://vocabulary.uncefact.org/affectedDistanceMeasure
	 */
	affectedDistanceMeasure?: IUneceLinearUnitMeasureType;

	/**
	 * A measure of the pollution calculated for this emission.
	 * @see https://vocabulary.uncefact.org/pollutionMeasure
	 */
	pollutionMeasure?: IUneceMeasureType;

	/**
	 * The code specifying the type of this calculated emission.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * A weight for which this calculated emission is measured.
	 * @see https://vocabulary.uncefact.org/weightUnitWeightMeasure
	 */
	weightUnitWeightMeasure?: IUneceWeightUnitMeasureType;
}
