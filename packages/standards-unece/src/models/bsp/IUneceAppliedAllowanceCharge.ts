// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceAppliedTax } from "./IUneceAppliedTax.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The applied allowance or charge component of pricing.
 * @see https://vocabulary.uncefact.org/AppliedAllowanceCharge
 */
export interface IUneceAppliedAllowanceCharge extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AppliedAllowanceCharge;

	/**
	 * The actual monetary value of the applied allowance charge.
	 * @see https://vocabulary.uncefact.org/actualAmount
	 */
	actualAmount?: IUneceAmountType;

	/**
	 * The code specifying the reason for this applied allowance charge.
	 * @see https://vocabulary.uncefact.org/appliedAllowanceChargeReasonCode
	 */
	appliedAllowanceChargeReasonCode?: string;

	/**
	 * The monetary value that is the basis on which the applied allowance charge is calculated.
	 * @see https://vocabulary.uncefact.org/basisAmount
	 */
	basisAmount?: IUneceAmountType;

	/**
	 * The percentage used to calculate the applied allowance charge.
	 * @see https://vocabulary.uncefact.org/calculationPercent
	 */
	calculationPercent?: string;

	/**
	 * The applied tax category of this applied allowance charge.
	 * @see https://vocabulary.uncefact.org/categoryAppliedTax
	 */
	categoryAppliedTax?: IUneceAppliedTax;

	/**
	 * The indication of whether or not the applied allowance charge is a charge.
	 * @see https://vocabulary.uncefact.org/chargeIndicator
	 */
	chargeIndicator: boolean;

	/**
	 * The textual description of the applied allowance charge.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;
}
