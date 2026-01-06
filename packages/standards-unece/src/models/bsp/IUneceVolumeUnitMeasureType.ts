// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceVolumeUnitMeasureCode } from "../lists/uneceVolumeUnitMeasureCode.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The numeric value determined by volume measuring.
 * @see https://vocabulary.uncefact.org/VolumeUnitMeasureType
 */
export interface IUneceVolumeUnitMeasureType extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.VolumeUnitMeasureType;

	/**
	 * The numeric value.
	 * @see https://vocabulary.uncefact.org/VolumeUnitMeasureTypeValue
	 */
	VolumeUnitMeasureTypeValue?: string;

	/**
	 * The unit code.
	 * @see https://vocabulary.uncefact.org/VolumeUnitMeasureTypeCode
	 */
	VolumeUnitMeasureTypeCode?: UneceVolumeUnitMeasureCode;
}
