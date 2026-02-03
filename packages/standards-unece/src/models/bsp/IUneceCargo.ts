// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceCargoCategoryCodeList } from "../lists/uneceCargoCategoryCodeList.js";
import type { UneceCargoCommodityCategoryCodeList } from "../lists/uneceCargoCommodityCategoryCodeList.js";
import type { UneceCargoOperationalCategoryCodeList } from "../lists/uneceCargoOperationalCategoryCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Information about goods being transported identifying their nature for customs, statistical or transport purposes.
 * @see https://vocabulary.uncefact.org/Cargo
 */
export interface IUneceCargo extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Cargo;

	/**
	 * The code, such as UNECE Recommendation 21 single digit codes, specifying the type of transported cargo.
	 * @see https://vocabulary.uncefact.org/cargoCategoryTypeCode
	 */
	cargoCategoryTypeCode?: UneceCargoCategoryCodeList;

	/**
	 * The code specifying a statistical classification for this transport cargo.
	 * @see https://vocabulary.uncefact.org/cargoCommodityCategoryStatisticalClassificationCode
	 */
	cargoCommodityCategoryStatisticalClassificationCode?: UneceCargoCommodityCategoryCodeList;

	/**
	 * The code specifying the operational category for this transport cargo, such as obnoxious or military.
	 * @see https://vocabulary.uncefact.org/cargoOperationalCategoryCode
	 */
	cargoOperationalCategoryCode?: UneceCargoOperationalCategoryCodeList;

	/**
	 * Identification, expressed as text, of this transport cargo that is sufficient to identify it for customs, statistical or
	 * transport purposes.
	 * @see https://vocabulary.uncefact.org/identification
	 */
	identification?: string;
}
