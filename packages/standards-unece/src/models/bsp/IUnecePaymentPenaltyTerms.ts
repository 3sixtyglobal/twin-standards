// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Trade terms and conditions by which a penalty is or can be applied to a payable amount.
 * @see https://vocabulary.uncefact.org/PaymentPenaltyTerms
 */
export interface IUnecePaymentPenaltyTerms extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.PaymentPenaltyTerms;

	/**
	 * A monetary value of the actual penalty in these trade payment penalty terms.
	 * @see https://vocabulary.uncefact.org/actualPenaltyAmount
	 */
	actualPenaltyAmount?: IUneceAmountType[];

	/**
	 * A monetary value used as a basis to calculate these trade payment penalty terms.
	 * @see https://vocabulary.uncefact.org/basisAmount
	 */
	basisAmount?: IUneceAmountType[];

	/**
	 * The date, time, date time, or other date time value used as the basis to calculate these trade payment penalty terms.
	 * @see https://vocabulary.uncefact.org/basisDateTime
	 */
	basisDateTime?: string;

	/**
	 * The measure of the period used as a basis to calculate these trade payment penalty terms.
	 * @see https://vocabulary.uncefact.org/basisPeriodMeasure
	 */
	basisPeriodMeasure?: IUneceMeasureType[];

	/**
	 * The percent applied to calculate these trade payment penalty terms.
	 * @see https://vocabulary.uncefact.org/calculationPercent
	 */
	calculationPercent?: string;
}
