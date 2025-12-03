// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAccountingAccount } from "./IAccountingAccount.js";
import type { IAmountType } from "./IAmountType.js";
import type { IDocument } from "./IDocument.js";
import type { IDocumentLineDocument } from "./IDocumentLineDocument.js";
import type { IFinancialAdjustment } from "./IFinancialAdjustment.js";
import type { IFinancialCard } from "./IFinancialCard.js";
import type { ILineTradeTransaction } from "./ILineTradeTransaction.js";
import type { IPaymentTerms } from "./IPaymentTerms.js";
import type { IServiceCharge } from "./IServiceCharge.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { ITradeAllowanceCharge } from "./ITradeAllowanceCharge.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITradeSettlementLineMonetarySummation } from "./ITradeSettlementLineMonetarySummation.js";
import type { ITradeTax } from "./ITradeTax.js";
import type { CurrencyCodeList } from "../lists/currencyCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The information, at a line level, that enables the reconciliation of a financial transaction with the item(s) that the
 * financial transaction is intended to settle, for example a commercial invoice.
 * @see https://vocabulary.uncefact.org/LineTradeSettlement
 */
export interface ILineTradeSettlement extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LineTradeSettlement;

	/**
	 * An additional document referenced in this line trade settlement.
	 * @see https://vocabulary.uncefact.org/additionalDocument
	 */
	additionalDocument?: IDocument[];

	/**
	 * The code, specifying the direction, either an addition or subtraction, for the amount of this line trade settlement.
	 * @see https://vocabulary.uncefact.org/amountDirectionCode
	 */
	amountDirectionCode?: string;

	/**
	 * A tax applicable to this line trade settlement.
	 * @see https://vocabulary.uncefact.org/applicableTax
	 */
	applicableTax?: ITradeTax[];

	/**
	 * A document associated with this line trade settlement.
	 * @see https://vocabulary.uncefact.org/associatedDocument
	 */
	associatedDocument?: IDocument[];

	/**
	 * A document line associated with this line trade settlement.
	 * @see https://vocabulary.uncefact.org/associatedDocumentLineDocument
	 */
	associatedDocumentLineDocument?: IDocumentLineDocument[];

	/**
	 * A billing period specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/billingPeriod
	 */
	billingPeriod?: ISpecifiedPeriod[];

	/**
	 * A code specifying a type of creditor reference for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/creditorReferenceTypeCode
	 */
	creditorReferenceTypeCode?: string;

	/**
	 * The indication of whether or not a discount applies to the item in this line trade settlement.
	 * @see https://vocabulary.uncefact.org/discountIndicator
	 */
	discountIndicator?: boolean;

	/**
	 * The date, time, date time or other date time value of the invoice in this line trade settlement.
	 * @see https://vocabulary.uncefact.org/invoiceDateTime
	 */
	invoiceDateTime?: string;

	/**
	 * An invoice document referenced in this line trade settlement.
	 * @see https://vocabulary.uncefact.org/invoiceDocument
	 */
	invoiceDocument?: IDocument[];

	/**
	 * The invoice issuer reference, expressed as text, for this line settlement.
	 * @see https://vocabulary.uncefact.org/invoiceIssuerReference
	 */
	invoiceIssuerReference?: string;

	/**
	 * The party to whom an invoice is issued for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/invoiceeParty
	 */
	invoiceeParty?: ITradeParty;

	/**
	 * A payable accounting account specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/payableSpecifiedAccountingAccount
	 */
	payableSpecifiedAccountingAccount?: IAccountingAccount[];

	/**
	 * The payer party for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/payerParty
	 */
	payerParty?: ITradeParty[];

	/**
	 * The payer reference, expressed as text, for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/payerReference
	 */
	payerReference?: string;

	/**
	 * A monetary value of a payment for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/paymentAmount
	 */
	paymentAmount?: IAmountType[];

	/**
	 * A payment reference, expressed as text, for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/paymentReference
	 */
	paymentReference?: string;

	/**
	 * The code specifying the price currency for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/priceCurrencyCode
	 */
	priceCurrencyCode?: CurrencyCodeList[];

	/**
	 * A purchase accounting account specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/purchaseSpecifiedAccountingAccount
	 */
	purchaseSpecifiedAccountingAccount?: IAccountingAccount[];

	/**
	 * A receivable accounting account specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/receivableSpecifiedAccountingAccount
	 */
	receivableSpecifiedAccountingAccount?: IAccountingAccount[];

	/**
	 * A sales accounting account specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/salesSpecifiedAccountingAccount
	 */
	salesSpecifiedAccountingAccount?: IAccountingAccount[];

	/**
	 * An accounting account specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedAccountingAccount
	 */
	specifiedAccountingAccount?: IAccountingAccount[];

	/**
	 * An allowance or charge specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedAllowanceCharge
	 */
	specifiedAllowanceCharge?: ITradeAllowanceCharge[];

	/**
	 * A financial adjustment specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedFinancialAdjustment
	 */
	specifiedFinancialAdjustment?: IFinancialAdjustment[];

	/**
	 * A financial card specified in this line trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedFinancialCard
	 */
	specifiedFinancialCard?: IFinancialCard[];

	/**
	 * Payment terms specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentTerms
	 */
	specifiedPaymentTerms?: IPaymentTerms[];

	/**
	 * A logistics service charge specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedServiceCharge
	 */
	specifiedServiceCharge?: IServiceCharge[];

	/**
	 * The monetary summation totals specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedTradeSettlementLineMonetarySummation
	 */
	specifiedTradeSettlementLineMonetarySummation?: ITradeSettlementLineMonetarySummation[];

	/**
	 * The code specifying the status of this line trade settlement.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * A tax subtotal calculated for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/subtotalCalculatedTax
	 */
	subtotalCalculatedTax?: ITradeTax[];

	/**
	 * The monetary value of the total adjustment for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/totalAdjustmentAmount
	 */
	totalAdjustmentAmount?: IAmountType[];

	/**
	 * A trade transaction referenced in this line trade settlement.
	 * @see https://vocabulary.uncefact.org/tradeTransaction
	 */
	tradeTransaction?: ILineTradeTransaction[];
}
