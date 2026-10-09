// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Plants or produce cultivated from a single botanical species or variety.
 * @see https://vocabulary.uncefact.org/BotanicalCrop
 */
export interface IUneceBotanicalCrop {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.BotanicalCrop;

	/**
	 * The code specifying the genus for this botanical crop.
	 * @see https://vocabulary.uncefact.org/botanicalGenusCode
	 */
	botanicalGenusCode?: string;

	/**
	 * The identifier for this botanical crop.
	 * @see https://vocabulary.uncefact.org/botanicalIdentificationId
	 */
	botanicalIdentificationId?: string | IJsonLdValueObject;

	/**
	 * The botanical name, expressed as text, for this botanical crop.
	 * @see https://vocabulary.uncefact.org/botanicalName
	 */
	botanicalName?: string;

	/**
	 * The code specifying the species for this botanical crop.
	 * @see https://vocabulary.uncefact.org/botanicalSpeciesCode
	 */
	botanicalSpeciesCode?: string;

	/**
	 * The code specifying the purpose for this botanical crop.
	 * @see https://vocabulary.uncefact.org/purposeCode
	 */
	purposeCode?: string;
}
