// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A total levy or payment for the support of a government that is required of persons, groups, or businesses within the
 * domain of that government.
 * @see https://vocabulary.uncefact.org/AppliedTax
 */
export interface IUneceAppliedTax extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AppliedTax;

	/**
	 * The code specifying the applied tax type such as VAT.
	 * @see https://vocabulary.uncefact.org/appliedTaxTypeCode
	 */
	appliedTaxTypeCode?: string;

	/**
	 * The monetary value used as the basis in calculating the applied tax.
	 * @see https://vocabulary.uncefact.org/basisAmount
	 */
	basisAmount?: IUneceAmountType[];

	/**
	 * The monetary value resulting from the calculation of the applied tax.
	 * @see https://vocabulary.uncefact.org/calculatedAmount
	 */
	calculatedAmount?: IUneceAmountType[];

	/**
	 * The rate used to calculate the applied tax.
	 * @see https://vocabulary.uncefact.org/calculatedRate
	 */
	calculatedRate?: string;

	/**
	 * The date of the tax point when taxes, such as VAT, are to be applied.
	 * @see https://vocabulary.uncefact.org/taxPointDate
	 */
	taxPointDate?: string;
}
