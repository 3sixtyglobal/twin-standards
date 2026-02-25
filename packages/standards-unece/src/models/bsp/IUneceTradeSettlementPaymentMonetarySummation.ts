// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUnecePaymentBalanceOut } from "./IUnecePaymentBalanceOut.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of monetary amount totals specified for a trade settlement payment.
 * @see https://vocabulary.uncefact.org/TradeSettlementPaymentMonetarySummation
 */
export interface IUneceTradeSettlementPaymentMonetarySummation {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TradeSettlementPaymentMonetarySummation;

	/**
	 * A monetary value that is an adjusted amount balanced out for this trade settlement payment monetary summation.
	 * @see https://vocabulary.uncefact.org/adjustedBalanceOutAmount
	 */
	adjustedBalanceOutAmount?: IUneceAmountType[];

	/**
	 * A balance out applicable to this trade settlement payment monetary summation.
	 * @see https://vocabulary.uncefact.org/applicablePaymentBalanceOut
	 */
	applicablePaymentBalanceOut?: IUnecePaymentBalanceOut[];

	/**
	 * A monetary value that is an amount balanced out for this trade settlement payment monetary summation.
	 * @see https://vocabulary.uncefact.org/balanceOutAmount
	 */
	balanceOutAmount?: IUneceAmountType[];

	/**
	 * A monetary value transferred as an equivalent amount in the credit transfer payment in this trade settlement payment
	 * monetary summation, such as the amount transferred between debtor and creditor, before deduction of charges, expressed
	 * in the currency of the debtor's account, and transferred into a different currency.
	 * @see https://vocabulary.uncefact.org/equivalentTransferTotalAmount
	 */
	equivalentTransferTotalAmount?: IUneceAmountType[];

	/**
	 * A monetary value of a grand total reported in this trade settlement payment monetary summation.
	 * @see https://vocabulary.uncefact.org/grandTotalAmount
	 */
	grandTotalAmount?: IUneceAmountType[];

	/**
	 * A monetary value of the line total, including taxes, being reported in this trade settlement payment monetary summation.
	 * @see https://vocabulary.uncefact.org/includingTaxesLineTotalAmount
	 */
	includingTaxesLineTotalAmount?: IUneceAmountType[];

	/**
	 * A monetary value of the net total of all line amounts, including line level allowances and charges and excluding line
	 * level taxes, being reported in this trade settlement payment monetary summation.
	 * @see https://vocabulary.uncefact.org/netLineTotalAmount
	 */
	netLineTotalAmount?: IUneceAmountType[];

	/**
	 * A monetary value of a payment total reported in this trade settlement payment monetary summation.
	 * @see https://vocabulary.uncefact.org/paymentTotalAmount
	 */
	paymentTotalAmount?: IUneceAmountType[];

	/**
	 * A monetary value of the total of all tax amounts reported in this trade settlement payment monetary summation.
	 * @see https://vocabulary.uncefact.org/taxTotalAmount
	 */
	taxTotalAmount?: IUneceAmountType[];
}
