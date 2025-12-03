// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUnitMeasureType } from "./IUnitMeasureType.js";
import type { IVolumeUnitMeasureType } from "./IVolumeUnitMeasureType.js";
import type { IWeightUnitMeasureType } from "./IWeightUnitMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any specified material that is burnt or altered in order to obtain energy.
 * @see https://vocabulary.uncefact.org/Fuel
 */
export interface IFuel extends IJsonLdNodeObject {
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
	typeCode?: string;

	/**
	 * A measure of a weight (mass) for this specified fuel.
	 * @see https://vocabulary.uncefact.org/volumeUnitVolumeMeasure
	 */
	volumeUnitVolumeMeasure?: IVolumeUnitMeasureType[];

	/**
	 * A measure of a volume for this specified fuel.
	 * @see https://vocabulary.uncefact.org/weightUnitWeightMeasure
	 */
	weightUnitWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * A working pressure measure for this specified fuel.
	 * @see https://vocabulary.uncefact.org/workingPressureMeasure
	 */
	workingPressureMeasure?: IUnitMeasureType[];
}
