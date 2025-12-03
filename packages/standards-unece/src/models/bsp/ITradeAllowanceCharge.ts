// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAccountingAccount } from "./IAccountingAccount.js";
import type { IAmountType } from "./IAmountType.js";
import type { ICurrencyExchange } from "./ICurrencyExchange.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { ITradeTax } from "./ITradeTax.js";
import type { AllowanceChargeIdCodeList } from "../lists/allowanceChargeIdCodeList.js";
import type { AllowanceChargeReasonCodeList } from "../lists/allowanceChargeReasonCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A component of pricing, such as an allowance or charge for trade purposes.
 * @see https://vocabulary.uncefact.org/TradeAllowanceCharge
 */
export interface ITradeAllowanceCharge extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TradeAllowanceCharge;

	/**
	 * An actual monetary value of the trade allowance charge.
	 * @see https://vocabulary.uncefact.org/actualAmount
	 */
	actualAmount?: IAmountType[];

	/**
	 * The actual trade currency exchange for this trade allowance charge.
	 * @see https://vocabulary.uncefact.org/actualCurrencyExchange
	 */
	actualCurrencyExchange?: ICurrencyExchange[];

	/**
	 * The code specifying the type of this trade allowance charge.
	 * @see https://vocabulary.uncefact.org/allowanceChargeIdTypeCode
	 */
	allowanceChargeIdTypeCode?: AllowanceChargeIdCodeList[];

	/**
	 * The code specifying the reason for this trade allowance charge.
	 * @see https://vocabulary.uncefact.org/allowanceChargeReasonCode
	 */
	allowanceChargeReasonCode?: AllowanceChargeReasonCodeList[];

	/**
	 * A date, time, date time, or other date time value applied to the trade allowance charge.
	 * @see https://vocabulary.uncefact.org/appliedDateTime
	 */
	appliedDateTime?: string;

	/**
	 * A monetary value that is the basis on which this trade allowance charge is calculated.
	 * @see https://vocabulary.uncefact.org/basisAmount
	 */
	basisAmount?: IAmountType[];

	/**
	 * The quantity on which this trade allowance charge is based.
	 * @see https://vocabulary.uncefact.org/basisQuantity
	 */
	basisQuantity?: IQuantityType[];

	/**
	 * The percentage applied to calculate this trade allowance charge.
	 * @see https://vocabulary.uncefact.org/calculationPercent
	 */
	calculationPercent?: string;

	/**
	 * A tax category of this trade allowance charge.
	 * @see https://vocabulary.uncefact.org/categoryTradeTax
	 */
	categoryTradeTax?: ITradeTax[];

	/**
	 * The indication of whether or not the trade allowance charge is a charge.
	 * @see https://vocabulary.uncefact.org/chargeIndicator
	 */
	chargeIndicator?: boolean;

	/**
	 * A monetary value to be deducted from this trade allowance charge.
	 * @see https://vocabulary.uncefact.org/deductionAmount
	 */
	deductionAmount?: IAmountType;

	/**
	 * A textual description of this trade allowance charge.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The unique identifier for this trade allowance charge.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The indication of whether or not this trade allowance charge is prepaid.
	 * @see https://vocabulary.uncefact.org/prepaidIndicator
	 */
	prepaidIndicator?: boolean;

	/**
	 * The reason, expressed as text, for this trade allowance charge.
	 * @see https://vocabulary.uncefact.org/reason
	 */
	reason?: string;

	/**
	 * The sequence number for applying this trade allowance charge.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * An accounting account specified for this trade allowance charge.
	 * @see https://vocabulary.uncefact.org/specifiedAccountingAccount
	 */
	specifiedAccountingAccount?: IAccountingAccount[];

	/**
	 * The monetary value of the unit basis on which the allowance or charge is calculated.
	 * @see https://vocabulary.uncefact.org/unitBasisAmount
	 */
	unitBasisAmount?: IAmountType[];

	/**
	 * The specified period for which this trade allowance charge is valid.
	 * @see https://vocabulary.uncefact.org/validityPeriod
	 */
	validityPeriod?: ISpecifiedPeriod;
}
