// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceCustomerClass } from "./IUneceCustomerClass.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUnecePaymentTradeSettlement } from "./IUnecePaymentTradeSettlement.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceReferencePrice } from "./IUneceReferencePrice.js";
import type { IUneceSpecifiedNote } from "./IUneceSpecifiedNote.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceTradeAllowanceCharge } from "./IUneceTradeAllowanceCharge.js";
import type { IUneceTradeLocation } from "./IUneceTradeLocation.js";
import type { IUneceTradeTax } from "./IUneceTradeTax.js";
import type { UnecePriceTypeCodeList } from "../lists/unecePriceTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A sum of money for which something is or may be bought or sold for trade purposes.
 * @see https://vocabulary.uncefact.org/TradePrice
 */
export interface IUneceTradePrice extends IJsonLdNodeObject {
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
	applicableCustomerClass?: IUneceCustomerClass;

	/**
	 * A specified note applicable to this trade price.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedNote
	 */
	applicableSpecifiedNote?: IUneceSpecifiedNote;

	/**
	 * An allowance or charge applied to the trade price.
	 * @see https://vocabulary.uncefact.org/appliedAllowanceCharge
	 */
	appliedAllowanceCharge?: IUneceTradeAllowanceCharge;

	/**
	 * An associated document referenced for this trade price.
	 * @see https://vocabulary.uncefact.org/associatedDocument
	 */
	associatedDocument?: IUneceDocument;

	/**
	 * The date, time, date time, or other date time value used as the basis for this trade price.
	 * @see https://vocabulary.uncefact.org/basisDateTime
	 */
	basisDateTime?: string;

	/**
	 * The quantity on which the trade price is based.
	 * @see https://vocabulary.uncefact.org/basisQuantity
	 */
	basisQuantity?: IUneceQuantityType;

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
	chargeAmount?: IUneceAmountType;

	/**
	 * A price that provides a comparison with this trade price.
	 * @see https://vocabulary.uncefact.org/comparisonPrice
	 */
	comparisonPrice?: IUneceReferencePrice;

	/**
	 * The number of customer service points for this trade price.
	 * @see https://vocabulary.uncefact.org/customerServicePointQuantity
	 */
	customerServicePointQuantity?: IUneceQuantityType;

	/**
	 * The number of days related to this trade price.
	 * @see https://vocabulary.uncefact.org/dayQuantity
	 */
	dayQuantity?: IUneceQuantityType;

	/**
	 * A delivery location for this trade price.
	 * @see https://vocabulary.uncefact.org/deliveryLocation
	 */
	deliveryLocation?: IUneceTradeLocation;

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
	document?: IUneceDocument;

	/**
	 * The expiry date, time, date time, or other date time value for this trade price.
	 * @see https://vocabulary.uncefact.org/expiryDateTime
	 */
	expiryDateTime?: string;

	/**
	 * A monetary value of the grand total charge of this trade price.
	 * @see https://vocabulary.uncefact.org/grandTotalChargeAmount
	 */
	grandTotalChargeAmount?: IUneceAmountType;

	/**
	 * A tax included in this trade price.
	 * @see https://vocabulary.uncefact.org/includedTax
	 */
	includedTax?: IUneceTradeTax;

	/**
	 * Information, expressed as text, for this trade price.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * A monetary value that is the maximum charge in a range of trade prices.
	 * @see https://vocabulary.uncefact.org/maximumChargeAmount
	 */
	maximumChargeAmount?: IUneceAmountType;

	/**
	 * The maximum quantity in a range for which the trade price applies.
	 * @see https://vocabulary.uncefact.org/maximumQuantity
	 */
	maximumQuantity?: IUneceQuantityType;

	/**
	 * A monetary value that is the minimum charge in a range of trade prices.
	 * @see https://vocabulary.uncefact.org/minimumChargeAmount
	 */
	minimumChargeAmount?: IUneceAmountType;

	/**
	 * The minimum quantity in a range for which this trade price applies.
	 * @see https://vocabulary.uncefact.org/minimumQuantity
	 */
	minimumQuantity?: IUneceQuantityType;

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
	operationalApplicablePeriod?: IUneceSpecifiedPeriod;

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
	priceTypeCode?: UnecePriceTypeCodeList;

	/**
	 * A code specifying a reason for this trade price.
	 * @see https://vocabulary.uncefact.org/reasonCode
	 */
	reasonCode?: string;

	/**
	 * A monetary value of a repackaging charge for this trade price.
	 * @see https://vocabulary.uncefact.org/repackagingChargeAmount
	 */
	repackagingChargeAmount?: IUneceAmountType;

	/**
	 * A monetary value of a repair charge for this trade price.
	 * @see https://vocabulary.uncefact.org/repairChargeAmount
	 */
	repairChargeAmount?: IUneceAmountType;

	/**
	 * A seasonal period applicable for this trade price.
	 * @see https://vocabulary.uncefact.org/seasonalApplicablePeriod
	 */
	seasonalApplicablePeriod?: IUneceSpecifiedPeriod;

	/**
	 * The code specifying the seasonal rank of this trade price.
	 * @see https://vocabulary.uncefact.org/seasonalRankCode
	 */
	seasonalRankCode?: string;

	/**
	 * A payment trade settlement specified for this trade price.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentTradeSettlement
	 */
	specifiedPaymentTradeSettlement?: IUnecePaymentTradeSettlement;

	/**
	 * A monetary value of the total charge of this trade price.
	 * @see https://vocabulary.uncefact.org/totalChargeAmount
	 */
	totalChargeAmount?: IUneceAmountType;

	/**
	 * A price that provides a trade comparison with this trade price.
	 * @see https://vocabulary.uncefact.org/tradeComparisonPrice
	 */
	tradeComparisonPrice?: IUneceReferencePrice;

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
	unitAmount?: IUneceAmountType;

	/**
	 * A specified period for which this trade price is valid.
	 * @see https://vocabulary.uncefact.org/validityPeriod
	 */
	validityPeriod?: IUneceSpecifiedPeriod;
}
