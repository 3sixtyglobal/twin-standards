// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAccountingAccount } from "./IAccountingAccount.js";
import type { IAdvancePayment } from "./IAdvancePayment.js";
import type { IAmountType } from "./IAmountType.js";
import type { ICurrencyExchange } from "./ICurrencyExchange.js";
import type { IDocument } from "./IDocument.js";
import type { IFinancialAdjustment } from "./IFinancialAdjustment.js";
import type { IFinancialCard } from "./IFinancialCard.js";
import type { IInstalmentPlan } from "./IInstalmentPlan.js";
import type { IPaymentMeans } from "./IPaymentMeans.js";
import type { IPaymentTerms } from "./IPaymentTerms.js";
import type { IServiceCharge } from "./IServiceCharge.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { ITradeAllowanceCharge } from "./ITradeAllowanceCharge.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITradeSettlementHeaderMonetarySummation } from "./ITradeSettlementHeaderMonetarySummation.js";
import type { ITradeTax } from "./ITradeTax.js";
import type { CurrencyCodeList } from "../lists/currencyCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The information, at a header level, that enables the reconciliation of a financial transaction, with the item(s) that
 * the financial transaction is intended to settle, such as a commercial invoice.
 * @see https://vocabulary.uncefact.org/HeaderTradeSettlement
 */
export interface IHeaderTradeSettlement extends IJsonLdNodeObject {
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
	applicableTax?: ITradeTax[];

	/**
	 * A billing period specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/billingPeriod
	 */
	billingPeriod?: ISpecifiedPeriod[];

	/**
	 * The date, time, date time or other date time value when the book closing is due for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/closingBookDueDateTime
	 */
	closingBookDueDateTime?: string;

	/**
	 * A monetary value of the credit note for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/creditNoteAmount
	 */
	creditNoteAmount?: IAmountType[];

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
	debitNoteAmount?: IAmountType[];

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
	duePayableAmount?: IAmountType[];

	/**
	 * A factoring agreement document referenced in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/factoringAgreementDocument
	 */
	factoringAgreementDocument?: IDocument[];

	/**
	 * A factoring list document referenced in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/factoringListDocument
	 */
	factoringListDocument?: IDocument[];

	/**
	 * The currency exchange applicable to the invoice in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/invoiceApplicableCurrencyExchange
	 */
	invoiceApplicableCurrencyExchange?: ICurrencyExchange;

	/**
	 * The code specifying the invoice currency for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/invoiceCurrencyCode
	 */
	invoiceCurrencyCode?: CurrencyCodeList[];

	/**
	 * The date, time, date time or other date time value of the invoice in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/invoiceDateTime
	 */
	invoiceDateTime?: string;

	/**
	 * An invoice document referenced by this header trade settlement.
	 * @see https://vocabulary.uncefact.org/invoiceDocument
	 */
	invoiceDocument?: IDocument[];

	/**
	 * The invoice issuer reference, expressed as text, for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/invoiceIssuerReference
	 */
	invoiceIssuerReference?: string;

	/**
	 * The party to whom an invoice is issued for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/invoiceeParty
	 */
	invoiceeParty?: ITradeParty;

	/**
	 * The party issuing the invoice for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/invoicerParty
	 */
	invoicerParty?: ITradeParty;

	/**
	 * The letter of credit document referenced in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/letterOfCreditDocument
	 */
	letterOfCreditDocument?: IDocument[];

	/**
	 * A date, time, date time or other date time value of a next invoice or invoices in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/nextInvoiceDateTime
	 */
	nextInvoiceDateTime?: string;

	/**
	 * The currency exchange applicable to the order currency in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/orderApplicableCurrencyExchange
	 */
	orderApplicableCurrencyExchange?: ICurrencyExchange[];

	/**
	 * The code specifying the currency of the order for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/orderCurrencyCode
	 */
	orderCurrencyCode?: CurrencyCodeList[];

	/**
	 * The monetary summation totals outstanding for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/outstandingSpecifiedMonetarySummation
	 */
	outstandingSpecifiedMonetarySummation?: ITradeSettlementHeaderMonetarySummation[];

	/**
	 * A payable accounting account specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/payableSpecifiedAccountingAccount
	 */
	payableSpecifiedAccountingAccount?: IAccountingAccount[];

	/**
	 * A payee party for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/payeeParty
	 */
	payeeParty?: ITradeParty[];

	/**
	 * The payer party for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/payerParty
	 */
	payerParty?: ITradeParty[];

	/**
	 * The payer reference, expressed as text, for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/payerReference
	 */
	payerReference?: string;

	/**
	 * A monetary value of a payment for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/paymentAmount
	 */
	paymentAmount?: IAmountType[];

	/**
	 * The currency exchange applicable to the payment in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/paymentApplicableCurrencyExchange
	 */
	paymentApplicableCurrencyExchange?: ICurrencyExchange[];

	/**
	 * The code specifying the payment currency for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/paymentCurrencyCode
	 */
	paymentCurrencyCode?: CurrencyCodeList[];

	/**
	 * A payment reference, expressed as text, for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/paymentReference
	 */
	paymentReference?: string;

	/**
	 * The currency exchange applicable to the price in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/priceApplicableCurrencyExchange
	 */
	priceApplicableCurrencyExchange?: ICurrencyExchange[];

	/**
	 * The code specifying the price currency for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/priceCurrencyCode
	 */
	priceCurrencyCode?: CurrencyCodeList[];

	/**
	 * The pro-forma invoice document referenced by this header trade settlement.
	 * @see https://vocabulary.uncefact.org/proFormaInvoiceDocument
	 */
	proFormaInvoiceDocument?: IDocument[];

	/**
	 * A purchase accounting account specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/purchaseSpecifiedAccountingAccount
	 */
	purchaseSpecifiedAccountingAccount?: IAccountingAccount[];

	/**
	 * The currency exchange applicable to the quotation currency in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/quotationApplicableCurrencyExchange
	 */
	quotationApplicableCurrencyExchange?: ICurrencyExchange[];

	/**
	 * The code specifying the quotation currency for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/quotationCurrencyCode
	 */
	quotationCurrencyCode?: CurrencyCodeList[];

	/**
	 * A receivable accounting account specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/receivableSpecifiedAccountingAccount
	 */
	receivableSpecifiedAccountingAccount?: IAccountingAccount[];

	/**
	 * A relevant party for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/relevantParty
	 */
	relevantParty?: ITradeParty[];

	/**
	 * A financing monetary value requested for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/requestedFinancingAmount
	 */
	requestedFinancingAmount?: IAmountType[];

	/**
	 * The financing rate, expressed as a percentage, requested for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/requestedFinancingRatePercent
	 */
	requestedFinancingRatePercent?: string;

	/**
	 * A sales accounting account specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/salesSpecifiedAccountingAccount
	 */
	salesSpecifiedAccountingAccount?: IAccountingAccount[];

	/**
	 * The date, time, date time or other date time value of the scheduled payment of this header trade settlement.
	 * @see https://vocabulary.uncefact.org/scheduledPaymentDateTime
	 */
	scheduledPaymentDateTime?: string;

	/**
	 * An advance payment specified in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedAdvancePayment
	 */
	specifiedAdvancePayment?: IAdvancePayment[];

	/**
	 * An allowance or charge specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedAllowanceCharge
	 */
	specifiedAllowanceCharge?: ITradeAllowanceCharge[];

	/**
	 * A financial adjustment specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedFinancialAdjustment
	 */
	specifiedFinancialAdjustment?: IFinancialAdjustment[];

	/**
	 * A financial card specified in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedFinancialCard
	 */
	specifiedFinancialCard?: IFinancialCard[];

	/**
	 * The payment instalment plan specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedInstalmentPlan
	 */
	specifiedInstalmentPlan?: IInstalmentPlan[];

	/**
	 * A payment means specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentMeans
	 */
	specifiedPaymentMeans?: IPaymentMeans[];

	/**
	 * Payment terms specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentTerms
	 */
	specifiedPaymentTerms?: IPaymentTerms[];

	/**
	 * A logistics service charge specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedServiceCharge
	 */
	specifiedServiceCharge?: IServiceCharge[];

	/**
	 * The monetary summation totals specified for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedTradeSettlementHeaderMonetarySummation
	 */
	specifiedTradeSettlementHeaderMonetarySummation?: ITradeSettlementHeaderMonetarySummation[];

	/**
	 * A tax subtotal calculated for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/subtotalCalculatedTax
	 */
	subtotalCalculatedTax?: ITradeTax[];

	/**
	 * A currency exchange applicable to a tax in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/taxApplicableCurrencyExchange
	 */
	taxApplicableCurrencyExchange?: ICurrencyExchange[];

	/**
	 * The code specifying the tax currency for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/taxCurrencyCode
	 */
	taxCurrencyCode?: CurrencyCodeList[];

	/**
	 * A monetary value of the total adjustment for this header trade settlement.
	 * @see https://vocabulary.uncefact.org/totalAdjustmentAmount
	 */
	totalAdjustmentAmount?: IAmountType[];

	/**
	 * A monetary value of the total invoice on which this header trade settlement is calculated.
	 * @see https://vocabulary.uncefact.org/totalInvoiceAmount
	 */
	totalInvoiceAmount?: IAmountType[];

	/**
	 * An ultimate payee party in this header trade settlement.
	 * @see https://vocabulary.uncefact.org/ultimatePayeeParty
	 */
	ultimatePayeeParty?: ITradeParty[];
}
