// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceAppliedAllowanceCharge } from "./IUneceAppliedAllowanceCharge.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Information related to a calculated price.
 * @see https://vocabulary.uncefact.org/CalculatedPrice
 */
export interface IUneceCalculatedPrice extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CalculatedPrice;

	/**
	 * A code specifying the type of calculated price.
	 * @see https://vocabulary.uncefact.org/calculatedPriceTypeCode
	 */
	calculatedPriceTypeCode?: string;

	/**
	 * A monetary value of the calculated price to be charged.
	 * @see https://vocabulary.uncefact.org/chargeAmount
	 */
	chargeAmount?: IUneceAmountType[];

	/**
	 * Applied allowance charge information related to this calculated price.
	 * @see https://vocabulary.uncefact.org/relatedAllowanceCharge
	 */
	relatedAllowanceCharge?: IUneceAppliedAllowanceCharge[];
}
