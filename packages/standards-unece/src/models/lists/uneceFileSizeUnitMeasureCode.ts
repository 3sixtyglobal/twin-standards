// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * RDF Class for FileSizeUnitMeasureType unit code type to define unit code values.
 * @see https://vocabulary.uncefact.org/FileSizeUnitMeasureCode
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceFileSizeUnitMeasureCode = {
	/**
	 * megabyte: 4L.
	 */
	Megabyte: "unece:FileSizeUnitMeasureCode#4L",

	/**
	 * gigabyte: E34.
	 */
	Gigabyte: "unece:FileSizeUnitMeasureCode#E34",

	/**
	 * terabyte: E35.
	 */
	Terabyte: "unece:FileSizeUnitMeasureCode#E35"
} as const;

/**
 * RDF Class for FileSizeUnitMeasureType unit code type to define unit code values.
 * @see https://vocabulary.uncefact.org/FileSizeUnitMeasureCode
 */
export type UneceFileSizeUnitMeasureCode = (typeof UneceFileSizeUnitMeasureCode)[keyof typeof UneceFileSizeUnitMeasureCode];
