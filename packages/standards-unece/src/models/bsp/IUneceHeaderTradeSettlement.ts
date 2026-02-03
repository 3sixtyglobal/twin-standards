// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAccountingAccount } from "./IUneceAccountingAccount.js";
import type { IUneceAdvancePayment } from "./IUneceAdvancePayment.js";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceCurrencyExchange } from "./IUneceCurrencyExchange.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceFinancialAdjustment } from "./IUneceFinancialAdjustment.js";
import type { IUneceFinancialCard } from "./IUneceFinancialCard.js";
import type { IUneceInstalmentPlan } from "./IUneceInstalmentPlan.js";
import type { IUnecePaymentMeans } from "./IUnecePaymentMeans.js";
import type { IUnecePaymentTerms } from "./IUnecePaymentTerms.js";
import type { IUneceServiceCharge } from "./IUneceServiceCharge.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceTradeAllowanceCharge } from "./IUneceTradeAllowanceCharge.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTradeSettlementHeaderMonetarySummation } from "./IUneceTradeSettlementHeaderMonetarySummation.js";
import type { IUneceTradeTax } from "./IUneceTradeTax.js";
import type { UneceCurrencyCodeList } from "../lists/uneceCurrencyCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The information, at a header level, that enables the reconciliation of a financial transaction, with the item(s) that
 * the financial transaction is intended to settle, such as a commercial invoice.
 * @see https://vocabulary.uncefact.org/HeaderTradeSettlement
 */
export interface IUneceHeaderTradeSettlement extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.HeaderTradeSettlement;

	/**
	 * A tax applicable to this header trade settlement.
	 * @see https://vocabulary.uncefact.org/applicableTax
	 */
	applicableTax?: IUneceTradeTax;

	/**
	 * A billing period specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/billingPeriod
	 */
	billingPeriod?: IUneceSpecifiedPeriod;

	/**
	 * The date, time, date time or other date time value when the book closing is due for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/closingBookDueDateTime
	 */
	closingBookDueDateTime?: string;

	/**
	 * A monetary value of the credit note for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/creditNoteAmount
	 */
	creditNoteAmount?: IUneceAmountType;

	/**
	 * A textual description of the reason for a credit being given in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/creditReason
	 */
	creditReason?: string;

	/**
	 * The code specifying the reason for a credit being given in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/creditReasonCode
	 */
	creditReasonCode?: string;

	/**
	 * The identifier of the creditor reference for this header trade settlement, such as a specific identifier assigned by the
	 * creditor to reference the financial transaction.
	 * @see https://vocabulary.uncefact.org/creditorReferenceId
	 */
	creditorReferenceId?: string;

	/**
	 * An identifier of the creditor reference issuer for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/creditorReferenceIssuerId
	 */
	creditorReferenceIssuerId?: string;

	/**
	 * A creditor reference type, expressed as text, for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/creditorReferenceType
	 */
	creditorReferenceType?: string;

	/**
	 * A code specifying the creditor reference type for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/creditorReferenceTypeCode
	 */
	creditorReferenceTypeCode?: string;

	/**
	 * A monetary value of the debit note for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/debitNoteAmount
	 */
	debitNoteAmount?: IUneceAmountType;

	/**
	 * A textual description of this header trade settlement.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The indication of whether or not this header trade settlement includes a discount amount.
	 * @see https://vocabulary.uncefact.org/discountIndicator
	 */
	discountIndicator?: boolean;

	/**
	 * A monetary value that is an exact amount due and payable for this header trade settlement, such as the amount due to the
	 * creditor.
	 * @see https://vocabulary.uncefact.org/duePayableAmount
	 */
	duePayableAmount?: IUneceAmountType;

	/**
	 * A factoring agreement document referenced in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/factoringAgreementDocument
	 */
	factoringAgreementDocument?: IUneceDocument;

	/**
	 * A factoring list document referenced in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/factoringListDocument
	 */
	factoringListDocument?: IUneceDocument;

	/**
	 * The currency exchange applicable to the invoice in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/invoiceApplicableCurrencyExchange
	 */
	invoiceApplicableCurrencyExchange?: IUneceCurrencyExchange;

	/**
	 * The code specifying the invoice currency for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/invoiceCurrencyCode
	 */
	invoiceCurrencyCode?: UneceCurrencyCodeList;

	/**
	 * The date, time, date time or other date time value of the invoice in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/invoiceDateTime
	 */
	invoiceDateTime?: string;

	/**
	 * An invoice document referenced by this header trade settlement.
	 * @see https://vocabulary.uncefact.org/invoiceDocument
	 */
	invoiceDocument?: IUneceDocument;

	/**
	 * The invoice issuer reference, expressed as text, for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/invoiceIssuerReference
	 */
	invoiceIssuerReference?: string;

	/**
	 * The party to whom an invoice is issued for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/invoiceeParty
	 */
	invoiceeParty?: IUneceTradeParty;

	/**
	 * The party issuing the invoice for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/invoicerParty
	 */
	invoicerParty?: IUneceTradeParty;

	/**
	 * The letter of credit document referenced in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/letterOfCreditDocument
	 */
	letterOfCreditDocument?: IUneceDocument;

	/**
	 * A date, time, date time or other date time value of a next invoice or invoices in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/nextInvoiceDateTime
	 */
	nextInvoiceDateTime?: string;

	/**
	 * The currency exchange applicable to the order currency in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/orderApplicableCurrencyExchange
	 */
	orderApplicableCurrencyExchange?: IUneceCurrencyExchange;

	/**
	 * The code specifying the currency of the order for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/orderCurrencyCode
	 */
	orderCurrencyCode?: UneceCurrencyCodeList;

	/**
	 * The monetary summation totals outstanding for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/outstandingSpecifiedMonetarySummation
	 */
	outstandingSpecifiedMonetarySummation?: IUneceTradeSettlementHeaderMonetarySummation;

	/**
	 * A payable accounting account specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/payableSpecifiedAccountingAccount
	 */
	payableSpecifiedAccountingAccount?: IUneceAccountingAccount;

	/**
	 * A payee party for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/payeeParty
	 */
	payeeParty?: IUneceTradeParty;

	/**
	 * The payer party for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/payerParty
	 */
	payerParty?: IUneceTradeParty;

	/**
	 * The payer reference, expressed as text, for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/payerReference
	 */
	payerReference?: string;

	/**
	 * A monetary value of a payment for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/paymentAmount
	 */
	paymentAmount?: IUneceAmountType;

	/**
	 * The currency exchange applicable to the payment in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/paymentApplicableCurrencyExchange
	 */
	paymentApplicableCurrencyExchange?: IUneceCurrencyExchange;

	/**
	 * The code specifying the payment currency for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/paymentCurrencyCode
	 */
	paymentCurrencyCode?: UneceCurrencyCodeList;

	/**
	 * A payment reference, expressed as text, for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/paymentReference
	 */
	paymentReference?: string;

	/**
	 * The currency exchange applicable to the price in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/priceApplicableCurrencyExchange
	 */
	priceApplicableCurrencyExchange?: IUneceCurrencyExchange;

	/**
	 * The code specifying the price currency for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/priceCurrencyCode
	 */
	priceCurrencyCode?: UneceCurrencyCodeList;

	/**
	 * The pro-forma invoice document referenced by this header trade settlement.
	 * @see https://vocabulary.uncefact.org/proFormaInvoiceDocument
	 */
	proFormaInvoiceDocument?: IUneceDocument;

	/**
	 * A purchase accounting account specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/purchaseSpecifiedAccountingAccount
	 */
	purchaseSpecifiedAccountingAccount?: IUneceAccountingAccount;

	/**
	 * The currency exchange applicable to the quotation currency in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/quotationApplicableCurrencyExchange
	 */
	quotationApplicableCurrencyExchange?: IUneceCurrencyExchange;

	/**
	 * The code specifying the quotation currency for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/quotationCurrencyCode
	 */
	quotationCurrencyCode?: UneceCurrencyCodeList;

	/**
	 * A receivable accounting account specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/receivableSpecifiedAccountingAccount
	 */
	receivableSpecifiedAccountingAccount?: IUneceAccountingAccount;

	/**
	 * A relevant party for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/relevantParty
	 */
	relevantParty?: IUneceTradeParty;

	/**
	 * A financing monetary value requested for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/requestedFinancingAmount
	 */
	requestedFinancingAmount?: IUneceAmountType;

	/**
	 * The financing rate, expressed as a percentage, requested for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/requestedFinancingRatePercent
	 */
	requestedFinancingRatePercent?: string;

	/**
	 * A sales accounting account specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/salesSpecifiedAccountingAccount
	 */
	salesSpecifiedAccountingAccount?: IUneceAccountingAccount;

	/**
	 * The date, time, date time or other date time value of the scheduled payment of this header trade settlement.
	 * @see https://vocabulary.uncefact.org/scheduledPaymentDateTime
	 */
	scheduledPaymentDateTime?: string;

	/**
	 * An advance payment specified in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedAdvancePayment
	 */
	specifiedAdvancePayment?: IUneceAdvancePayment;

	/**
	 * An allowance or charge specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedAllowanceCharge
	 */
	specifiedAllowanceCharge?: IUneceTradeAllowanceCharge;

	/**
	 * A financial adjustment specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedFinancialAdjustment
	 */
	specifiedFinancialAdjustment?: IUneceFinancialAdjustment;

	/**
	 * A financial card specified in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedFinancialCard
	 */
	specifiedFinancialCard?: IUneceFinancialCard;

	/**
	 * The payment instalment plan specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedInstalmentPlan
	 */
	specifiedInstalmentPlan?: IUneceInstalmentPlan;

	/**
	 * A payment means specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentMeans
	 */
	specifiedPaymentMeans?: IUnecePaymentMeans;

	/**
	 * Payment terms specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentTerms
	 */
	specifiedPaymentTerms?: IUnecePaymentTerms;

	/**
	 * A logistics service charge specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedServiceCharge
	 */
	specifiedServiceCharge?: IUneceServiceCharge;

	/**
	 * The monetary summation totals specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedTradeSettlementHeaderMonetarySummation
	 */
	specifiedTradeSettlementHeaderMonetarySummation?: IUneceTradeSettlementHeaderMonetarySummation;

	/**
	 * A tax subtotal calculated for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/subtotalCalculatedTax
	 */
	subtotalCalculatedTax?: IUneceTradeTax;

	/**
	 * A currency exchange applicable to a tax in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/taxApplicableCurrencyExchange
	 */
	taxApplicableCurrencyExchange?: IUneceCurrencyExchange;

	/**
	 * The code specifying the tax currency for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/taxCurrencyCode
	 */
	taxCurrencyCode?: UneceCurrencyCodeList;

	/**
	 * A monetary value of the total adjustment for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/totalAdjustmentAmount
	 */
	totalAdjustmentAmount?: IUneceAmountType;

	/**
	 * A monetary value of the total invoice on which this header trade settlement is calculated.
	 * @see https://vocabulary.uncefact.org/totalInvoiceAmount
	 */
	totalInvoiceAmount?: IUneceAmountType;

	/**
	 * An ultimate payee party in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/ultimatePayeeParty
	 */
	ultimatePayeeParty?: IUneceTradeParty;
}
