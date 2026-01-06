// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceBotanicalCrop } from "./IUneceBotanicalCrop.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A plant species or variety constituting part of a field crop mixture.
 * @see https://vocabulary.uncefact.org/CropMixtureConstituent
 */
export interface IUneceCropMixtureConstituent extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CropMixtureConstituent;

	/**
	 * The percent of the crop proportion of this field crop mixture constituent.
	 * @see https://vocabulary.uncefact.org/cropProportionPercent
	 */
	cropProportionPercent?: string;

	/**
	 * The botanical crop specified for this field crop mixture constituent.
	 * @see https://vocabulary.uncefact.org/specifiedBotanicalCrop
	 */
	specifiedBotanicalCrop?: IUneceBotanicalCrop[];
}
