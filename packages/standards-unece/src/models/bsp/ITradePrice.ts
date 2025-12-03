// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAmountType } from "./IAmountType.js";
import type { ICustomerClass } from "./ICustomerClass.js";
import type { IDocument } from "./IDocument.js";
import type { IPaymentTradeSettlement } from "./IPaymentTradeSettlement.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { IReferencePrice } from "./IReferencePrice.js";
import type { ISpecifiedNote } from "./ISpecifiedNote.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { ITradeAllowanceCharge } from "./ITradeAllowanceCharge.js";
import type { ITradeLocation } from "./ITradeLocation.js";
import type { ITradeTax } from "./ITradeTax.js";
import type { PriceTypeCodeList } from "../lists/priceTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A sum of money for which something is or may be bought or sold for trade purposes.
 * @see https://vocabulary.uncefact.org/TradePrice
 */
export interface ITradePrice extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TradePrice;

	/**
	 * An applicable customer class for this trade price.
	 * @see https://vocabulary.uncefact.org/applicableCustomerClass
	 */
	applicableCustomerClass?: ICustomerClass[];

	/**
	 * A specified note applicable to this trade price.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedNote
	 */
	applicableSpecifiedNote?: ISpecifiedNote[];

	/**
	 * An allowance or charge applied to the trade price.
	 * @see https://vocabulary.uncefact.org/appliedAllowanceCharge
	 */
	appliedAllowanceCharge?: ITradeAllowanceCharge[];

	/**
	 * An associated document referenced for this trade price.
	 * @see https://vocabulary.uncefact.org/associatedDocument
	 */
	associatedDocument?: IDocument[];

	/**
	 * The date, time, date time, or other date time value used as the basis for this trade price.
	 * @see https://vocabulary.uncefact.org/basisDateTime
	 */
	basisDateTime?: string;

	/**
	 * The quantity on which the trade price is based.
	 * @see https://vocabulary.uncefact.org/basisQuantity
	 */
	basisQuantity?: IQuantityType[];

	/**
	 * The code specifying the type of bracket for this trade price.
	 * @see https://vocabulary.uncefact.org/bracketTypeCode
	 */
	bracketTypeCode?: string;

	/**
	 * The calculation percentage for this trade price.
	 * @see https://vocabulary.uncefact.org/calculationPercent
	 */
	calculationPercent?: string;

	/**
	 * The cancellation percentage for this trade price.
	 * @see https://vocabulary.uncefact.org/cancellationPercent
	 */
	cancellationPercent?: string;

	/**
	 * The code specifying the type of category, such as refund or service charge, for this trade price.
	 * @see https://vocabulary.uncefact.org/categoryTypeCode
	 */
	categoryTypeCode?: string;

	/**
	 * A reason, expressed as text, for a change of this trade price.
	 * @see https://vocabulary.uncefact.org/changeReason
	 */
	changeReason?: string;

	/**
	 * A monetary value of the trade price charge.
	 * @see https://vocabulary.uncefact.org/chargeAmount
	 */
	chargeAmount?: IAmountType[];

	/**
	 * A price that provides a comparison with this trade price.
	 * @see https://vocabulary.uncefact.org/comparisonPrice
	 */
	comparisonPrice?: IReferencePrice[];

	/**
	 * The number of customer service points for this trade price.
	 * @see https://vocabulary.uncefact.org/customerServicePointQuantity
	 */
	customerServicePointQuantity?: IQuantityType[];

	/**
	 * The number of days related to this trade price.
	 * @see https://vocabulary.uncefact.org/dayQuantity
	 */
	dayQuantity?: IQuantityType[];

	/**
	 * A delivery location for this trade price.
	 * @see https://vocabulary.uncefact.org/deliveryLocation
	 */
	deliveryLocation?: ITradeLocation[];

	/**
	 * A textual description of this trade price.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the determination of this trade price.
	 * @see https://vocabulary.uncefact.org/determinationCode
	 */
	determinationCode?: string;

	/**
	 * A document referenced for this trade price.
	 * @see https://vocabulary.uncefact.org/document
	 */
	document?: IDocument[];

	/**
	 * The expiry date, time, date time, or other date time value for this trade price.
	 * @see https://vocabulary.uncefact.org/expiryDateTime
	 */
	expiryDateTime?: string;

	/**
	 * A monetary value of the grand total charge of this trade price.
	 * @see https://vocabulary.uncefact.org/grandTotalChargeAmount
	 */
	grandTotalChargeAmount?: IAmountType[];

	/**
	 * A tax included in this trade price.
	 * @see https://vocabulary.uncefact.org/includedTax
	 */
	includedTax?: ITradeTax[];

	/**
	 * Information, expressed as text, for this trade price.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * A monetary value that is the maximum charge in a range of trade prices.
	 * @see https://vocabulary.uncefact.org/maximumChargeAmount
	 */
	maximumChargeAmount?: IAmountType[];

	/**
	 * The maximum quantity in a range for which the trade price applies.
	 * @see https://vocabulary.uncefact.org/maximumQuantity
	 */
	maximumQuantity?: IQuantityType[];

	/**
	 * A monetary value that is the minimum charge in a range of trade prices.
	 * @see https://vocabulary.uncefact.org/minimumChargeAmount
	 */
	minimumChargeAmount?: IAmountType[];

	/**
	 * The minimum quantity in a range for which this trade price applies.
	 * @see https://vocabulary.uncefact.org/minimumQuantity
	 */
	minimumQuantity?: IQuantityType[];

	/**
	 * The indication of whether or not multiple reasons affect this trade price.
	 * @see https://vocabulary.uncefact.org/multipleReasonIndicator
	 */
	multipleReasonIndicator?: boolean;

	/**
	 * The indication of whether or not the trade price is the net price.
	 * @see https://vocabulary.uncefact.org/netPriceIndicator
	 */
	netPriceIndicator?: boolean;

	/**
	 * An operational period applicable for this trade price.
	 * @see https://vocabulary.uncefact.org/operationalApplicablePeriod
	 */
	operationalApplicablePeriod?: ISpecifiedPeriod[];

	/**
	 * The value used as the factor to convert the order unit into the price unit for this trade price.
	 * @see https://vocabulary.uncefact.org/orderUnitConversionFactorNumeric
	 */
	orderUnitConversionFactorNumeric?: string;

	/**
	 * A type, expressed as text, for this trade price.
	 * @see https://vocabulary.uncefact.org/priceType
	 */
	priceType?: string;

	/**
	 * The code specifying the type of trade price.
	 * @see https://vocabulary.uncefact.org/priceTypeCode
	 */
	priceTypeCode?: PriceTypeCodeList[];

	/**
	 * A code specifying a reason for this trade price.
	 * @see https://vocabulary.uncefact.org/reasonCode
	 */
	reasonCode?: string;

	/**
	 * A monetary value of a repackaging charge for this trade price.
	 * @see https://vocabulary.uncefact.org/repackagingChargeAmount
	 */
	repackagingChargeAmount?: IAmountType[];

	/**
	 * A monetary value of a repair charge for this trade price.
	 * @see https://vocabulary.uncefact.org/repairChargeAmount
	 */
	repairChargeAmount?: IAmountType[];

	/**
	 * A seasonal period applicable for this trade price.
	 * @see https://vocabulary.uncefact.org/seasonalApplicablePeriod
	 */
	seasonalApplicablePeriod?: ISpecifiedPeriod[];

	/**
	 * The code specifying the seasonal rank of this trade price.
	 * @see https://vocabulary.uncefact.org/seasonalRankCode
	 */
	seasonalRankCode?: string;

	/**
	 * A payment trade settlement specified for this trade price.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentTradeSettlement
	 */
	specifiedPaymentTradeSettlement?: IPaymentTradeSettlement[];

	/**
	 * A monetary value of the total charge of this trade price.
	 * @see https://vocabulary.uncefact.org/totalChargeAmount
	 */
	totalChargeAmount?: IAmountType[];

	/**
	 * A price that provides a trade comparison with this trade price.
	 * @see https://vocabulary.uncefact.org/tradeComparisonPrice
	 */
	tradeComparisonPrice?: IReferencePrice[];

	/**
	 * The code specifying the type of bracket for this trade price.
	 * @see https://vocabulary.uncefact.org/tradePriceBracketTypeCode
	 */
	tradePriceBracketTypeCode?: string;

	/**
	 * The code specifying the type of category, such as refund or service charge, for this trade price.
	 * @see https://vocabulary.uncefact.org/tradePriceCategoryTypeCode
	 */
	tradePriceCategoryTypeCode?: string;

	/**
	 * A monetary value of the unit of this trade price.
	 * @see https://vocabulary.uncefact.org/unitAmount
	 */
	unitAmount?: IAmountType;

	/**
	 * A specified period for which this trade price is valid.
	 * @see https://vocabulary.uncefact.org/validityPeriod
	 */
	validityPeriod?: ISpecifiedPeriod;
}
