// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAccountingAccount } from "./IUneceAccountingAccount.js";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceCurrencyExchange } from "./IUneceCurrencyExchange.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceTradeTax } from "./IUneceTradeTax.js";
import type { UneceAllowanceChargeIdCodeList } from "../lists/uneceAllowanceChargeIdCodeList.js";
import type { UneceAllowanceChargeReasonCodeList } from "../lists/uneceAllowanceChargeReasonCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A component of pricing, such as an allowance or charge for trade purposes.
 * @see https://vocabulary.uncefact.org/TradeAllowanceCharge
 */
export interface IUneceTradeAllowanceCharge extends IJsonLdNodeObject {
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
	actualAmount?: IUneceAmountType[];

	/**
	 * The actual trade currency exchange for this trade allowance charge.
	 * @see https://vocabulary.uncefact.org/actualCurrencyExchange
	 */
	actualCurrencyExchange?: IUneceCurrencyExchange;

	/**
	 * The code specifying the type of this trade allowance charge.
	 * @see https://vocabulary.uncefact.org/allowanceChargeIdTypeCode
	 */
	allowanceChargeIdTypeCode?: UneceAllowanceChargeIdCodeList;

	/**
	 * The code specifying the reason for this trade allowance charge.
	 * @see https://vocabulary.uncefact.org/allowanceChargeReasonCode
	 */
	allowanceChargeReasonCode?: UneceAllowanceChargeReasonCodeList;

	/**
	 * A date, time, date time, or other date time value applied to the trade allowance charge.
	 * @see https://vocabulary.uncefact.org/appliedDateTime
	 */
	appliedDateTime?: string;

	/**
	 * A monetary value that is the basis on which this trade allowance charge is calculated.
	 * @see https://vocabulary.uncefact.org/basisAmount
	 */
	basisAmount?: IUneceAmountType[];

	/**
	 * The quantity on which this trade allowance charge is based.
	 * @see https://vocabulary.uncefact.org/basisQuantity
	 */
	basisQuantity?: IUneceQuantityType;

	/**
	 * The percentage applied to calculate this trade allowance charge.
	 * @see https://vocabulary.uncefact.org/calculationPercent
	 */
	calculationPercent?: string;

	/**
	 * A tax category of this trade allowance charge.
	 * @see https://vocabulary.uncefact.org/categoryTradeTax
	 */
	categoryTradeTax?: IUneceTradeTax[];

	/**
	 * The indication of whether or not the trade allowance charge is a charge.
	 * @see https://vocabulary.uncefact.org/chargeIndicator
	 */
	chargeIndicator?: boolean;

	/**
	 * A monetary value to be deducted from this trade allowance charge.
	 * @see https://vocabulary.uncefact.org/deductionAmount
	 */
	deductionAmount?: IUneceAmountType[];

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
	specifiedAccountingAccount?: IUneceAccountingAccount[];

	/**
	 * The monetary value of the unit basis on which the allowance or charge is calculated.
	 * @see https://vocabulary.uncefact.org/unitBasisAmount
	 */
	unitBasisAmount?: IUneceAmountType;

	/**
	 * The specified period for which this trade allowance charge is valid.
	 * @see https://vocabulary.uncefact.org/validityPeriod
	 */
	validityPeriod?: IUneceSpecifiedPeriod;
}
