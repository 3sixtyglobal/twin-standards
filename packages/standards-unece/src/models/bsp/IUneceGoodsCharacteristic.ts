// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { UneceGoodsCharacteristicTypeCodeList } from "../typeCodes/uneceGoodsCharacteristicTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A distinctive feature of a material contained within physical goods.
 * @see https://vocabulary.uncefact.org/GoodsCharacteristic
 */
export interface IUneceGoodsCharacteristic extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.GoodsCharacteristic;

	/**
	 * The volume measure of the absolute presence of this material goods characteristic.
	 * @see https://vocabulary.uncefact.org/absolutePresenceVolumeMeasure
	 */
	absolutePresenceVolumeMeasure?: IUneceMeasureType;

	/**
	 * The weight measure of the absolute presence of this material goods characteristic.
	 * @see https://vocabulary.uncefact.org/absolutePresenceWeightMeasure
	 */
	absolutePresenceWeightMeasure?: IUneceMeasureType;

	/**
	 * A textual description of this material goods characteristic.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The percentage presence of the material within the goods for this material goods characteristic.
	 * @see https://vocabulary.uncefact.org/proportionalConstituentPercent
	 */
	proportionalConstituentPercent?: string;

	/**
	 * The code specifying the type of material goods characteristic.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceGoodsCharacteristicTypeCodeList | string;
}
