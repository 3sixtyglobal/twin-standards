// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceCurrencyExchange } from "./IUneceCurrencyExchange.js";
import type { IUneceExperienceItem } from "./IUneceExperienceItem.js";
import type { IUneceGuarantee } from "./IUneceGuarantee.js";
import type { IUnecePaymentMeans } from "./IUnecePaymentMeans.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTradeSettlementPaymentMonetarySummation } from "./IUneceTradeSettlementPaymentMonetarySummation.js";
import type { IUneceTradeTax } from "./IUneceTradeTax.js";
import type { UneceCurrencyCodeList } from "../lists/uneceCurrencyCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The information that enables the reconciliation of a payment with the item(s) that the payment is intended to settle,
 * for example a commercial invoice.
 * @see https://vocabulary.uncefact.org/PaymentTradeSettlement
 */
export interface IUnecePaymentTradeSettlement extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.PaymentTradeSettlement;

	/**
	 * A monetary value accepted for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/acceptedAmount
	 */
	acceptedAmount?: IUneceAmountType[];

	/**
	 * A description, expressed as text, of additional information supplied to enable the matching of an entry with the items
	 * that the payment is intended to settle.
	 * @see https://vocabulary.uncefact.org/additionalDescription
	 */
	additionalDescription?: string;

	/**
	 * The tax applicable to this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/applicableTax
	 */
	applicableTax?: IUneceTradeTax[];

	/**
	 * The creation date, time, date time, or other date time value for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/creationDateTime
	 */
	creationDateTime?: string;

	/**
	 * The monetary value of the credit note for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/creditNoteAmount
	 */
	creditNoteAmount?: IUneceAmountType;

	/**
	 * The unique identifier of the creditor reference for this payment trade settlement, such as a specific identifier
	 * assigned by the creditor to reference the financial transaction.
	 * @see https://vocabulary.uncefact.org/creditorReferenceId
	 */
	creditorReferenceId?: string;

	/**
	 * The unique identifier of the issuer of the creditor reference for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/creditorReferenceIssuerId
	 */
	creditorReferenceIssuerId?: string;

	/**
	 * The code specifying the type of creditor reference for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/creditorReferenceTypeCode
	 */
	creditorReferenceTypeCode?: string;

	/**
	 * The monetary value of the payment that is the discount for this trade settlement, such as from the application of an
	 * agreed discount to the amount due.
	 * @see https://vocabulary.uncefact.org/discountAmount
	 */
	discountAmount?: IUneceAmountType;

	/**
	 * The due date, time, date time, or other date time value for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/dueDateTime
	 */
	dueDateTime?: string;

	/**
	 * The monetary value of the payment that is the exact amount due and payable for this trade settlement, such as the amount
	 * due to the creditor.
	 * @see https://vocabulary.uncefact.org/duePayableAmount
	 */
	duePayableAmount?: IUneceAmountType[];

	/**
	 * The financial guarantee identified for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/identifiedGuarantee
	 */
	identifiedGuarantee?: IUneceGuarantee;

	/**
	 * An instruction, expressed as text, for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/instruction
	 */
	instruction?: string;

	/**
	 * The identifier of the invoice payer assigned reference of this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/invoicePayerAssignedReferenceId
	 */
	invoicePayerAssignedReferenceId?: string;

	/**
	 * The payee party for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/payeeParty
	 */
	payeeParty?: IUneceTradeParty[];

	/**
	 * The payer party for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/payerParty
	 */
	payerParty?: IUneceTradeParty[];

	/**
	 * A monetary value of the payment for this trade settlement payment.
	 * @see https://vocabulary.uncefact.org/paymentAmount
	 */
	paymentAmount?: IUneceAmountType;

	/**
	 * The currency exchange applicable to this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/paymentApplicableCurrencyExchange
	 */
	paymentApplicableCurrencyExchange?: IUneceCurrencyExchange;

	/**
	 * The code specifying the currency for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/paymentCurrencyCode
	 */
	paymentCurrencyCode?: UneceCurrencyCodeList;

	/**
	 * The penalty percentage related to this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/penaltyPercent
	 */
	penaltyPercent?: string;

	/**
	 * The code specifying the priority for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/priorityCode
	 */
	priorityCode?: string;

	/**
	 * The type of proprietary creditor reference, expressed as text, for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/proprietaryCreditorReferenceType
	 */
	proprietaryCreditorReferenceType?: string;

	/**
	 * The receipt date, time, date time, or other date time value for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/receiptDateTime
	 */
	receiptDateTime?: string;

	/**
	 * A specified experience item recorded for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/recordedExperienceItem
	 */
	recordedExperienceItem?: IUneceExperienceItem[];

	/**
	 * A monetary value of the refund related to this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/refundAmount
	 */
	refundAmount?: IUneceAmountType;

	/**
	 * A monetary value requested for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/requestedAmount
	 */
	requestedAmount?: IUneceAmountType[];

	/**
	 * The payment means specified for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentMeans
	 */
	specifiedPaymentMeans?: IUnecePaymentMeans[];

	/**
	 * The monetary summation totals specified for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedTradeSettlementPaymentMonetarySummation
	 */
	specifiedTradeSettlementPaymentMonetarySummation?: IUneceTradeSettlementPaymentMonetarySummation[];

	/**
	 * The code specifying the status of this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * A monetary value of the tax related to this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/taxAmount
	 */
	taxAmount?: IUneceAmountType[];

	/**
	 * The monetary value of the total tax for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/totalTaxAmount
	 */
	totalTaxAmount?: IUneceAmountType;

	/**
	 * The indication of whether or not this payment trade settlement includes a transfer fee.
	 * @see https://vocabulary.uncefact.org/transferFeeInclusiveIndicator
	 */
	transferFeeInclusiveIndicator?: boolean;

	/**
	 * The code specifying the type of this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * An unstructured description, expressed as text, for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/unstructuredDescription
	 */
	unstructuredDescription?: string;
}
