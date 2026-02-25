// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceUnitMeasureType } from "./IUneceUnitMeasureType.js";
import type { IUneceVolumeUnitMeasureType } from "./IUneceVolumeUnitMeasureType.js";
import type { IUneceWeightUnitMeasureType } from "./IUneceWeightUnitMeasureType.js";
import type { UneceFuelTypeCodeList } from "../typeCodes/uneceFuelTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any specified material that is burnt or altered in order to obtain energy.
 * @see https://vocabulary.uncefact.org/Fuel
 */
export interface IUneceFuel {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Fuel;

	/**
	 * The code specifying the type of specified fuel.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceFuelTypeCodeList | string;

	/**
	 * A measure of a weight (mass) for this specified fuel.
	 * @see https://vocabulary.uncefact.org/volumeUnitVolumeMeasure
	 */
	volumeUnitVolumeMeasure?: IUneceVolumeUnitMeasureType[];

	/**
	 * A measure of a volume for this specified fuel.
	 * @see https://vocabulary.uncefact.org/weightUnitWeightMeasure
	 */
	weightUnitWeightMeasure?: IUneceWeightUnitMeasureType[];

	/**
	 * A working pressure measure for this specified fuel.
	 * @see https://vocabulary.uncefact.org/workingPressureMeasure
	 */
	workingPressureMeasure?: IUneceUnitMeasureType[];
}
