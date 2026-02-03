// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The procedures to follow for returnable assets, such as reusable packaging (pallets, crates).
 * @see https://vocabulary.uncefact.org/ReturnableAssetInstructions
 */
export interface IUneceReturnableAssetInstructions extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ReturnableAssetInstructions;

	/**
	 * A deposit value specified in these returnable asset instructions.
	 * @see https://vocabulary.uncefact.org/depositValueSpecifiedAmount
	 */
	depositValueSpecifiedAmount?: IUneceAmountType;

	/**
	 * The specified period during which the deposit value specified in these returnable asset instructions is valid.
	 * @see https://vocabulary.uncefact.org/depositValueValidityPeriod
	 */
	depositValueValidityPeriod?: IUneceSpecifiedPeriod;

	/**
	 * An identifier of the material to which these returnable asset instructions apply.
	 * @see https://vocabulary.uncefact.org/materialId
	 */
	materialId?: string;

	/**
	 * The code specifying the description of the terms and conditions for these returnable asset instructions.
	 * @see https://vocabulary.uncefact.org/returnableAssetInstructionsTermsAndConditionsDescriptionCode
	 */
	returnableAssetInstructionsTermsAndConditionsDescriptionCode?: string;

	/**
	 * A textual description of the terms and conditions for these returnable asset instructions.
	 * @see https://vocabulary.uncefact.org/termsAndConditionsDescription
	 */
	termsAndConditionsDescription?: string;
}
