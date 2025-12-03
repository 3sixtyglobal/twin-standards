// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * RDF Class for WeightUnitMeasureType unit code type to define unit code values.
 * @see https://vocabulary.uncefact.org/WeightUnitMeasureCode
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const WeightUnitMeasureCode = {
	/**
	 * gram: GRM.
	 */
	Gram: "unece:WeightUnitMeasureCode#GRM",

	/**
	 * kilogram: KGM.
	 */
	Kilogram: "unece:WeightUnitMeasureCode#KGM",

	/**
	 * tonne (metric ton): TNE.
	 */
	Tonne: "unece:WeightUnitMeasureCode#TNE"
} as const;

/**
 * RDF Class for WeightUnitMeasureType unit code type to define unit code values.
 * @see https://vocabulary.uncefact.org/WeightUnitMeasureCode
 */
export type WeightUnitMeasureCode = (typeof WeightUnitMeasureCode)[keyof typeof WeightUnitMeasureCode];
