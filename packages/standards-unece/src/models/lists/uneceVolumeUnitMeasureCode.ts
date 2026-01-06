// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * RDF Class for VolumeUnitMeasureType unit code type to define unit code values.
 * @see https://vocabulary.uncefact.org/VolumeUnitMeasureCode
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceVolumeUnitMeasureCode = {
	/**
	 * cubic centimetre: CMQ.
	 */
	CubicCentimetre: "unece:VolumeUnitMeasureCode#CMQ",

	/**
	 * cubic foot: FTQ.
	 */
	CubicFoot: "unece:VolumeUnitMeasureCode#FTQ",

	/**
	 * litre: LTR.
	 */
	Litre: "unece:VolumeUnitMeasureCode#LTR",

	/**
	 * cubic millimetre: MMQ.
	 */
	CubicMillimetre: "unece:VolumeUnitMeasureCode#MMQ",

	/**
	 * cubic metre: MTQ.
	 */
	CubicMetre: "unece:VolumeUnitMeasureCode#MTQ"
} as const;

/**
 * RDF Class for VolumeUnitMeasureType unit code type to define unit code values.
 * @see https://vocabulary.uncefact.org/VolumeUnitMeasureCode
 */
export type UneceVolumeUnitMeasureCode = (typeof UneceVolumeUnitMeasureCode)[keyof typeof UneceVolumeUnitMeasureCode];
