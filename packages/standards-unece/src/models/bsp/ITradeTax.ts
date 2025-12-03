// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAccountingAccount } from "./IAccountingAccount.js";
import type { IAmountType } from "./IAmountType.js";
import type { ICountry } from "./ICountry.js";
import type { IDebtorFinancialAccount } from "./IDebtorFinancialAccount.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ITradeLocation } from "./ITradeLocation.js";
import type { CurrencyCodeList } from "../lists/currencyCodeList.js";
import type { CustomsDutyRegimeTypeCodeList } from "../lists/customsDutyRegimeTypeCodeList.js";
import type { CustomsProcedureGuaranteeCodeList } from "../lists/customsProcedureGuaranteeCodeList.js";
import type { PaymentMethodCodeList } from "../lists/paymentMethodCodeList.js";
import type { TaxCategoryCodeList } from "../lists/taxCategoryCodeList.js";
import type { TaxExemptionReasonCodeList } from "../lists/taxExemptionReasonCodeList.js";
import type { TaxTypeCodeList } from "../lists/taxTypeCodeList.js";
import type { TimeReferenceCodeList } from "../lists/timeReferenceCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A trade related fiscal levy or duty.
 * @see https://vocabulary.uncefact.org/TradeTax
 */
export interface ITradeTax extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TradeTax;

	/**
	 * A monetary value used as the allowance and charge basis on which this trade related tax, levy or duty is calculated.
	 * @see https://vocabulary.uncefact.org/allowanceChargeBasisAmount
	 */
	allowanceChargeBasisAmount?: IAmountType[];

	/**
	 * The percent of trade tax applicable, such as to an object or an activity.
	 * @see https://vocabulary.uncefact.org/applicablePercent
	 */
	applicablePercent?: string;

	/**
	 * A location where this trade tax is applicable.
	 * @see https://vocabulary.uncefact.org/applicableTradeLocation
	 */
	applicableTradeLocation?: ITradeLocation[];

	/**
	 * A monetary value used as the basis on which this trade related tax, levy or duty is calculated.
	 * @see https://vocabulary.uncefact.org/basisAmount
	 */
	basisAmount?: IAmountType[];

	/**
	 * The quantity used as the basis for calculating the amount of this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/basisQuantity
	 */
	basisQuantity?: IQuantityType[];

	/**
	 * The buyer deductible tax specified accounting account for this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/buyerDeductibleTaxSpecifiedAccountingAccount
	 */
	buyerDeductibleTaxSpecifiedAccountingAccount?: IAccountingAccount[];

	/**
	 * The buyer non-deductible tax specified accounting account for this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/buyerNonDeductibleTaxSpecifiedAccountingAccount
	 */
	buyerNonDeductibleTaxSpecifiedAccountingAccount?: IAccountingAccount[];

	/**
	 * The buyer repayable tax specified accounting account for this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/buyerRepayableTaxSpecifiedAccountingAccount
	 */
	buyerRepayableTaxSpecifiedAccountingAccount?: IAccountingAccount[];

	/**
	 * A monetary value resulting from the calculation of this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/calculatedAmount
	 */
	calculatedAmount?: IAmountType[];

	/**
	 * The rate used to calculate the amount of this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/calculatedRate
	 */
	calculatedRate?: string;

	/**
	 * The code specifying the method by which this trade related tax, levy or duty is calculated, such as codes for "tax
	 * calculated after line total summation", "tax calculated before line total summation", "tax back calculated based on
	 * grand total".
	 * @see https://vocabulary.uncefact.org/calculationMethodCode
	 */
	calculationMethodCode?: string;

	/**
	 * A numeric expression of the sequence in which this trade related tax is to be or has been applied when multiple taxes
	 * are applicable per calculation, such as first "Value Added Tax (VAT)", second "Transfer".
	 * @see https://vocabulary.uncefact.org/calculationSequenceNumeric
	 */
	calculationSequenceNumeric?: string;

	/**
	 * A category name, expressed as text, of this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/categoryName
	 */
	categoryName?: string;

	/**
	 * The indication of whether or not this trade related tax, levy or duty is a customs duty.
	 * @see https://vocabulary.uncefact.org/customsDutyIndicator
	 */
	customsDutyIndicator?: boolean;

	/**
	 * The code specifying a type of regime applicable to the assessment or calculation of this trade related tax, levy or
	 * duty, such as a preferential duty rate.
	 * @see https://vocabulary.uncefact.org/customsDutyRegimeTypeCode
	 */
	customsDutyRegimeTypeCode?: CustomsDutyRegimeTypeCodeList[];

	/**
	 * The code specifying an undertaking given in cash, bond or as a written guarantee to ensure that an obligation will be
	 * fulfilled for this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/customsProcedureGuaranteeCode
	 */
	customsProcedureGuaranteeCode?: CustomsProcedureGuaranteeCodeList;

	/**
	 * A monetary value of the deduction from this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/deductionAmount
	 */
	deductionAmount?: IAmountType;

	/**
	 * The debtor financial account of the party with deferred status for this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/deferredStatusPartyFinancialAccount
	 */
	deferredStatusPartyFinancialAccount?: IDebtorFinancialAccount;

	/**
	 * A textual description of this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The unique identifier of the exemption authorization for this trade tax.
	 * @see https://vocabulary.uncefact.org/exemptionAuthorizationId
	 */
	exemptionAuthorizationId?: string;

	/**
	 * The indication of whether or not there is an exemption from this trade tax.
	 * @see https://vocabulary.uncefact.org/exemptionIndicator
	 */
	exemptionIndicator?: boolean;

	/**
	 * The reason, expressed as text, for exemption from this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/exemptionReason
	 */
	exemptionReason?: string;

	/**
	 * A monetary value of the grand total of the basis plus tax for this trade tax.
	 * @see https://vocabulary.uncefact.org/grandTotalAmount
	 */
	grandTotalAmount?: IAmountType[];

	/**
	 * The undertaking, expressed as text, given in cash, bond or as a written guarantee to ensure that an obligation will be
	 * fulfilled for this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/guarantee
	 */
	guarantee?: string;

	/**
	 * The identifier of this trade tax.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A monetary value of an amount being reported for information for this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/informationAmount
	 */
	informationAmount?: IAmountType[];

	/**
	 * A jurisdiction, expressed as text, to which this trade related tax, levy or duty applies.
	 * @see https://vocabulary.uncefact.org/jurisdiction
	 */
	jurisdiction?: string;

	/**
	 * A monetary value used as the line total basis on which this trade related tax, levy or duty is calculated.
	 * @see https://vocabulary.uncefact.org/lineTotalBasisAmount
	 */
	lineTotalBasisAmount?: IAmountType[];

	/**
	 * The identifier of the local tax system for this trade tax.
	 * @see https://vocabulary.uncefact.org/localTaxSystemId
	 */
	localTaxSystemId?: string;

	/**
	 * The unique identifier of the payment of this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/paymentId
	 */
	paymentId?: string;

	/**
	 * A location where this trade tax is applicable.
	 * @see https://vocabulary.uncefact.org/placeApplicableLocation
	 */
	placeApplicableLocation?: ITradeLocation[];

	/**
	 * The rate, expressed as text, of this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/rate
	 */
	rate?: string;

	/**
	 * The applicable rate, expressed as a percentage, for this trade tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/rateApplicablePercent
	 */
	rateApplicablePercent?: string;

	/**
	 * The code specifying the rate for this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/rateCode
	 */
	rateCode?: string;

	/**
	 * A monetary value of the refund of this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/refundAmount
	 */
	refundAmount?: IAmountType;

	/**
	 * The type of regime, expressed as text, applicable to the assessment or calculation of this trade related tax, levy or
	 * duty, such as a preferential duty rate.
	 * @see https://vocabulary.uncefact.org/regimeType
	 */
	regimeType?: string;

	/**
	 * A monetary value of the amount on which this trade related tax, levy or duty has been calculated on a self-assessment
	 * basis.
	 * @see https://vocabulary.uncefact.org/selfAssessedBasisAmount
	 */
	selfAssessedBasisAmount?: IAmountType;

	/**
	 * The quantity on which this trade related tax, levy or duty has been calculated on a self-assessment basis.
	 * @see https://vocabulary.uncefact.org/selfAssessedBasisQuantity
	 */
	selfAssessedBasisQuantity?: IQuantityType[];

	/**
	 * A monetary value of the self-assessed calculated amount of this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/selfAssessedCalculatedAmount
	 */
	selfAssessedCalculatedAmount?: IAmountType;

	/**
	 * The seller payable tax specified accounting account for this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/sellerPayableTaxSpecifiedAccountingAccount
	 */
	sellerPayableTaxSpecifiedAccountingAccount?: IAccountingAccount[];

	/**
	 * The seller refundable tax specified accounting account for this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/sellerRefundableTaxSpecifiedAccountingAccount
	 */
	sellerRefundableTaxSpecifiedAccountingAccount?: IAccountingAccount[];

	/**
	 * The country or country sub-division where a service was supplied for this trade tax.
	 * @see https://vocabulary.uncefact.org/serviceSupplyCountry
	 */
	serviceSupplyCountry?: ICountry[];

	/**
	 * A specified accounting account for this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/specifiedAccountingAccount
	 */
	specifiedAccountingAccount?: IAccountingAccount[];

	/**
	 * A quantity to be deducted from the tariff quantity for the calculation of this trade related tax, duty or levy.
	 * @see https://vocabulary.uncefact.org/tariffDeductionQuantity
	 */
	tariffDeductionQuantity?: IQuantityType;

	/**
	 * The rate of the tax basis allowance (deduction or discount) used to calculate the trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/taxBasisAllowanceRate
	 */
	taxBasisAllowanceRate?: string;

	/**
	 * The code specifying the category to which this trade related tax, levy or duty applies, such as codes for "Exempt from
	 * Tax", "Standard Rate", "Free Export Item - Tax Not Charged" [Reference United Nations Code List (UNCL) 5305].
	 * @see https://vocabulary.uncefact.org/taxCategoryCode
	 */
	taxCategoryCode?: TaxCategoryCodeList;

	/**
	 * The unique tax exemption authority identifier for this trade tax.
	 * @see https://vocabulary.uncefact.org/taxExemptionAuthorityId
	 */
	taxExemptionAuthorityId?: string;

	/**
	 * A code specifying a reason for exemption from this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/taxExemptionReasonExemptionReasonCode
	 */
	taxExemptionReasonExemptionReasonCode?: TaxExemptionReasonCodeList;

	/**
	 * The date of the tax point when this trade related tax, levy or duty becomes applicable.
	 * @see https://vocabulary.uncefact.org/taxPointDate
	 */
	taxPointDate?: string;

	/**
	 * The type, expressed as text, of this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/taxType
	 */
	taxType?: string;

	/**
	 * The code specifying the type of trade related tax, levy or duty, such as a code for a Value Added Tax (VAT) [Reference
	 * United Nations Code List (UNCL) 5153].
	 * @see https://vocabulary.uncefact.org/taxTypeCode
	 */
	taxTypeCode?: TaxTypeCodeList[];

	/**
	 * The code specifying a type of due date for this trade tax.
	 * @see https://vocabulary.uncefact.org/timeReferenceDueDateTypeCode
	 */
	timeReferenceDueDateTypeCode?: TimeReferenceCodeList;

	/**
	 * The code specifying the currency for this trade related tax, levy or duty [UNCL 6345].
	 * @see https://vocabulary.uncefact.org/tradeTaxCurrencyCode
	 */
	tradeTaxCurrencyCode?: CurrencyCodeList;

	/**
	 * A code specifying the function of this trade tax.
	 * @see https://vocabulary.uncefact.org/tradeTaxFunctionCode
	 */
	tradeTaxFunctionCode?: string;

	/**
	 * The code specifying the payment method for this trade related tax, levy or duty.
	 * @see https://vocabulary.uncefact.org/tradeTaxPaymentMethodCode
	 */
	tradeTaxPaymentMethodCode?: PaymentMethodCodeList[];

	/**
	 * A monetary value that constitutes the per unit basis on which this trade related tax, levy or duty is calculated.
	 * @see https://vocabulary.uncefact.org/unitBasisAmount
	 */
	unitBasisAmount?: IAmountType[];
}
