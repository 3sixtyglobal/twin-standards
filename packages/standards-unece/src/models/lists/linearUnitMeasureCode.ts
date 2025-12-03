// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * RDF Class for LinearUnitMeasureType unit code type to define unit code values.
 * @see https://vocabulary.uncefact.org/LinearUnitMeasureCode
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const LinearUnitMeasureCode = {
	/**
	 * centimetre: CMT.
	 */
	Centimetre: "unece:LinearUnitMeasureCode#CMT",

	/**
	 * foot: FOT.
	 */
	Foot: "unece:LinearUnitMeasureCode#FOT",

	/**
	 * inch: INH.
	 */
	Inch: "unece:LinearUnitMeasureCode#INH",

	/**
	 * kilometre: KMT.
	 */
	Kilometre: "unece:LinearUnitMeasureCode#KMT",

	/**
	 * metre: MTR.
	 */
	Metre: "unece:LinearUnitMeasureCode#MTR"
} as const;

/**
 * RDF Class for LinearUnitMeasureType unit code type to define unit code values.
 * @see https://vocabulary.uncefact.org/LinearUnitMeasureCode
 */
export type LinearUnitMeasureCode = (typeof LinearUnitMeasureCode)[keyof typeof LinearUnitMeasureCode];
