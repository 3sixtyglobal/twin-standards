// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of monetary amount totals, specified at line level, for a trade settlement.
 * @see https://vocabulary.uncefact.org/TradeSettlementLineMonetarySummation
 */
export interface IUneceTradeSettlementLineMonetarySummation extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TradeSettlementLineMonetarySummation;

	/**
	 * A monetary value of the total of all allowance amounts being reported in this trade settlement line monetary summation.
	 * @see https://vocabulary.uncefact.org/allowanceTotalAmount
	 */
	allowanceTotalAmount?: IUneceAmountType[];

	/**
	 * A monetary value of the total of all charge amounts being reported in this trade settlement line monetary summation.
	 * @see https://vocabulary.uncefact.org/chargeTotalAmount
	 */
	chargeTotalAmount?: IUneceAmountType[];

	/**
	 * A monetary value that is an amount due and payable for this trade settlement line monetary summation, such as the amount
	 * due to the creditor.
	 * @see https://vocabulary.uncefact.org/duePayableAmount
	 */
	duePayableAmount?: IUneceAmountType[];

	/**
	 * A monetary value of the grand total of this trade settlement line monetary summation, to include addition and
	 * subtraction of individual summation amounts.
	 * @see https://vocabulary.uncefact.org/grandTotalAmount
	 */
	grandTotalAmount?: IUneceAmountType[];

	/**
	 * A monetary value of the total of all line amounts, excluding line level allowances and charges and taxes, being reported
	 * in this trade settlement line monetary summation.
	 * @see https://vocabulary.uncefact.org/grossLineTotalAmount
	 */
	grossLineTotalAmount?: IUneceAmountType[];

	/**
	 * A monetary value of the line total, including taxes, being reported in this trade settlement line monetary summation.
	 * @see https://vocabulary.uncefact.org/includingTaxesLineTotalAmount
	 */
	includingTaxesLineTotalAmount?: IUneceAmountType[];

	/**
	 * A monetary value of an amount being reported for information in this trade settlement monetary summation.
	 * @see https://vocabulary.uncefact.org/informationAmount
	 */
	informationAmount?: IUneceAmountType[];

	/**
	 * A monetary value of the line amount total being reported in this trade settlement line monetary summation.
	 * @see https://vocabulary.uncefact.org/lineTotalAmount
	 */
	lineTotalAmount?: IUneceAmountType[];

	/**
	 * A monetary value of the total of all line amounts, including line level allowances and charges and including line level
	 * taxes, being reported in this trade settlement line monetary summation.
	 * @see https://vocabulary.uncefact.org/netIncludingTaxesLineTotalAmount
	 */
	netIncludingTaxesLineTotalAmount?: IUneceAmountType[];

	/**
	 * A monetary value of the total of all line amounts, including line level allowances and charges and excluding line level
	 * taxes, being reported in this trade settlement line monetary summation.
	 * @see https://vocabulary.uncefact.org/netLineTotalAmount
	 */
	netLineTotalAmount?: IUneceAmountType[];

	/**
	 * A monetary value of a payment total reported in this trade settlement line monetary summation.
	 * @see https://vocabulary.uncefact.org/paymentTotalAmount
	 */
	paymentTotalAmount?: IUneceAmountType[];

	/**
	 * A monetary value of the loss of weight of a product, such as fresh goods, stated for information purposes in this trade
	 * settlement line monetary summation.
	 * @see https://vocabulary.uncefact.org/productWeightLossInformationAmount
	 */
	productWeightLossInformationAmount?: IUneceAmountType[];

	/**
	 * A monetary value of the total of all tax basis amounts being reported in this trade settlement line monetary summation.
	 * @see https://vocabulary.uncefact.org/taxBasisTotalAmount
	 */
	taxBasisTotalAmount?: IUneceAmountType[];

	/**
	 * A monetary value of the total of all tax amounts being reported in this trade settlement line monetary summation.
	 * @see https://vocabulary.uncefact.org/taxTotalAmount
	 */
	taxTotalAmount?: IUneceAmountType[];

	/**
	 * A monetary value of a total allowance and charge reported in this trade settlement line monetary summation.
	 * @see https://vocabulary.uncefact.org/totalAllowanceChargeAmount
	 */
	totalAllowanceChargeAmount?: IUneceAmountType[];

	/**
	 * A monetary value which constitutes the total retail value stated for information purposes in this trade settlement line
	 * monetary summation.
	 * @see https://vocabulary.uncefact.org/totalRetailValueInformationAmount
	 */
	totalRetailValueInformationAmount?: IUneceAmountType[];
}
