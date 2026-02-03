// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceCurrencyExchange } from "./IUneceCurrencyExchange.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A cross-border trade related assessment of the worth of an object, such as its monetary value, for customs purposes.
 * @see https://vocabulary.uncefact.org/CustomsValuation
 */
export interface IUneceCustomsValuation extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CustomsValuation;

	/**
	 * The monetary value of the adjustment added for this cross-border customs valuation.
	 * @see https://vocabulary.uncefact.org/addedAdjustmentAmount
	 */
	addedAdjustmentAmount?: IUneceAmountType;

	/**
	 * The adjustment added, expressed as a percentage, for this cross-border customs valuation.
	 * @see https://vocabulary.uncefact.org/addedAdjustmentPercent
	 */
	addedAdjustmentPercent?: string;

	/**
	 * The trade related currency exchange applicable to this cross-border customs valuation.
	 * @see https://vocabulary.uncefact.org/applicableCurrencyExchange
	 */
	applicableCurrencyExchange?: IUneceCurrencyExchange;

	/**
	 * The indication of whether or not there is a relationship between the buyer and the seller, such as a financial
	 * relationship, for this cross-border customs valuation.
	 * @see https://vocabulary.uncefact.org/buyerSellerRelationshipIndicator
	 */
	buyerSellerRelationshipIndicator?: boolean;

	/**
	 * The indication of whether or not the buyer seller relationship influences the price of the goods for this cross-border
	 * customs valuation.
	 * @see https://vocabulary.uncefact.org/buyerSellerRelationshipPriceInfluenceIndicator
	 */
	buyerSellerRelationshipPriceInfluenceIndicator?: boolean;

	/**
	 * The code specifying the method of the apportion of charges for this cross-border customs valuation.
	 * @see https://vocabulary.uncefact.org/chargeApportionMethodCode
	 */
	chargeApportionMethodCode?: string;

	/**
	 * The monetary value of the adjustment deducted for this cross-border customs valuation.
	 * @see https://vocabulary.uncefact.org/deductedAdjustmentAmount
	 */
	deductedAdjustmentAmount?: IUneceAmountType;

	/**
	 * The adjustment deducted, expressed as a percentage, for this cross-border customs valuation.
	 * @see https://vocabulary.uncefact.org/deductedAdjustmentPercent
	 */
	deductedAdjustmentPercent?: string;

	/**
	 * The code specifying the method by which this cross-border customs valuation is determined.
	 * @see https://vocabulary.uncefact.org/methodCode
	 */
	methodCode?: string;

	/**
	 * A monetary value added or subtracted from the total invoice price not previously taken into account for this
	 * cross-border customs valuation.
	 * @see https://vocabulary.uncefact.org/otherChargeAmount
	 */
	otherChargeAmount?: IUneceAmountType;

	/**
	 * The indication of whether or not there is a royalty or licence fee related to the goods for this cross-border customs
	 * valuation.
	 * @see https://vocabulary.uncefact.org/royaltyLicenseFeeIndicator
	 */
	royaltyLicenseFeeIndicator?: boolean;

	/**
	 * The indication of whether or not there is a condition imposed on the sale price of the goods for this cross-border
	 * customs valuation.
	 * @see https://vocabulary.uncefact.org/salePriceConditionIndicator
	 */
	salePriceConditionIndicator?: boolean;

	/**
	 * A restriction, expressed as text, imposed on the sale of the goods for this cross-border customs valuation.
	 * @see https://vocabulary.uncefact.org/saleRestriction
	 */
	saleRestriction?: string;

	/**
	 * The indication of whether or not there is any restriction imposed on the sale of the goods for this cross-border customs
	 * valuation.
	 * @see https://vocabulary.uncefact.org/saleRestrictionIndicator
	 */
	saleRestrictionIndicator?: boolean;

	/**
	 * The code specifying the type of cross-border customs valuation.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * The code specifying any additions necessary under the World Trade Organization (WTO) Valuation Agreement used for the
	 * assessment of this cross-border customs valuation.
	 * @see https://vocabulary.uncefact.org/wTOAdditionCode
	 */
	wTOAdditionCode?: string;
}
