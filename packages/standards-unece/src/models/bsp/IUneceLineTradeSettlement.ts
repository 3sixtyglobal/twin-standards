// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAccountingAccount } from "./IUneceAccountingAccount.js";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceDocumentLineDocument } from "./IUneceDocumentLineDocument.js";
import type { IUneceFinancialAdjustment } from "./IUneceFinancialAdjustment.js";
import type { IUneceFinancialCard } from "./IUneceFinancialCard.js";
import type { IUneceLineTradeTransaction } from "./IUneceLineTradeTransaction.js";
import type { IUnecePaymentTerms } from "./IUnecePaymentTerms.js";
import type { IUneceServiceCharge } from "./IUneceServiceCharge.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceTradeAllowanceCharge } from "./IUneceTradeAllowanceCharge.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTradeSettlementLineMonetarySummation } from "./IUneceTradeSettlementLineMonetarySummation.js";
import type { IUneceTradeTax } from "./IUneceTradeTax.js";
import type { UneceCurrencyCodeList } from "../lists/uneceCurrencyCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The information, at a line level, that enables the reconciliation of a financial transaction with the item(s) that the
 * financial transaction is intended to settle, for example a commercial invoice.
 * @see https://vocabulary.uncefact.org/LineTradeSettlement
 */
export interface IUneceLineTradeSettlement extends IJsonLdNodeObject {
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
	additionalDocument?: IUneceDocument;

	/**
	 * The code, specifying the direction, either an addition or subtraction, for the amount of this line trade settlement.
	 * @see https://vocabulary.uncefact.org/amountDirectionCode
	 */
	amountDirectionCode?: string;

	/**
	 * A tax applicable to this line trade settlement.
	 * @see https://vocabulary.uncefact.org/applicableTax
	 */
	applicableTax?: IUneceTradeTax;

	/**
	 * A document associated with this line trade settlement.
	 * @see https://vocabulary.uncefact.org/associatedDocument
	 */
	associatedDocument?: IUneceDocument;

	/**
	 * A document line associated with this line trade settlement.
	 * @see https://vocabulary.uncefact.org/associatedDocumentLineDocument
	 */
	associatedDocumentLineDocument?: IUneceDocumentLineDocument;

	/**
	 * A billing period specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/billingPeriod
	 */
	billingPeriod?: IUneceSpecifiedPeriod;

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
	invoiceDocument?: IUneceDocument;

	/**
	 * The invoice issuer reference, expressed as text, for this line settlement.
	 * @see https://vocabulary.uncefact.org/invoiceIssuerReference
	 */
	invoiceIssuerReference?: string;

	/**
	 * The party to whom an invoice is issued for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/invoiceeParty
	 */
	invoiceeParty?: IUneceTradeParty;

	/**
	 * A payable accounting account specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/payableSpecifiedAccountingAccount
	 */
	payableSpecifiedAccountingAccount?: IUneceAccountingAccount;

	/**
	 * The payer party for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/payerParty
	 */
	payerParty?: IUneceTradeParty;

	/**
	 * The payer reference, expressed as text, for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/payerReference
	 */
	payerReference?: string;

	/**
	 * A monetary value of a payment for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/paymentAmount
	 */
	paymentAmount?: IUneceAmountType;

	/**
	 * A payment reference, expressed as text, for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/paymentReference
	 */
	paymentReference?: string;

	/**
	 * The code specifying the price currency for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/priceCurrencyCode
	 */
	priceCurrencyCode?: UneceCurrencyCodeList;

	/**
	 * A purchase accounting account specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/purchaseSpecifiedAccountingAccount
	 */
	purchaseSpecifiedAccountingAccount?: IUneceAccountingAccount;

	/**
	 * A receivable accounting account specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/receivableSpecifiedAccountingAccount
	 */
	receivableSpecifiedAccountingAccount?: IUneceAccountingAccount;

	/**
	 * A sales accounting account specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/salesSpecifiedAccountingAccount
	 */
	salesSpecifiedAccountingAccount?: IUneceAccountingAccount;

	/**
	 * An accounting account specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedAccountingAccount
	 */
	specifiedAccountingAccount?: IUneceAccountingAccount;

	/**
	 * An allowance or charge specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedAllowanceCharge
	 */
	specifiedAllowanceCharge?: IUneceTradeAllowanceCharge;

	/**
	 * A financial adjustment specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedFinancialAdjustment
	 */
	specifiedFinancialAdjustment?: IUneceFinancialAdjustment;

	/**
	 * A financial card specified in this line trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedFinancialCard
	 */
	specifiedFinancialCard?: IUneceFinancialCard;

	/**
	 * Payment terms specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentTerms
	 */
	specifiedPaymentTerms?: IUnecePaymentTerms;

	/**
	 * A logistics service charge specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedServiceCharge
	 */
	specifiedServiceCharge?: IUneceServiceCharge;

	/**
	 * The monetary summation totals specified for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedTradeSettlementLineMonetarySummation
	 */
	specifiedTradeSettlementLineMonetarySummation?: IUneceTradeSettlementLineMonetarySummation;

	/**
	 * The code specifying the status of this line trade settlement.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * A tax subtotal calculated for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/subtotalCalculatedTax
	 */
	subtotalCalculatedTax?: IUneceTradeTax;

	/**
	 * The monetary value of the total adjustment for this line trade settlement.
	 * @see https://vocabulary.uncefact.org/totalAdjustmentAmount
	 */
	totalAdjustmentAmount?: IUneceAmountType;

	/**
	 * A trade transaction referenced in this line trade settlement.
	 * @see https://vocabulary.uncefact.org/tradeTransaction
	 */
	tradeTransaction?: IUneceLineTradeTransaction;
}
