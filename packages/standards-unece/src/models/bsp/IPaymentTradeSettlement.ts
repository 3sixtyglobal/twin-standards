// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAmountType } from "./IAmountType.js";
import type { ICurrencyExchange } from "./ICurrencyExchange.js";
import type { IExperienceItem } from "./IExperienceItem.js";
import type { IGuarantee } from "./IGuarantee.js";
import type { IPaymentMeans } from "./IPaymentMeans.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITradeSettlementPaymentMonetarySummation } from "./ITradeSettlementPaymentMonetarySummation.js";
import type { ITradeTax } from "./ITradeTax.js";
import type { CurrencyCodeList } from "../lists/currencyCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The information that enables the reconciliation of a payment with the item(s) that the payment is intended to settle,
 * for example a commercial invoice.
 * @see https://vocabulary.uncefact.org/PaymentTradeSettlement
 */
export interface IPaymentTradeSettlement extends IJsonLdNodeObject {
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
	acceptedAmount?: IAmountType[];

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
	applicableTax?: ITradeTax[];

	/**
	 * The creation date, time, date time, or other date time value for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/creationDateTime
	 */
	creationDateTime?: string;

	/**
	 * The monetary value of the credit note for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/creditNoteAmount
	 */
	creditNoteAmount?: IAmountType[];

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
	discountAmount?: IAmountType[];

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
	duePayableAmount?: IAmountType[];

	/**
	 * The financial guarantee identified for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/identifiedGuarantee
	 */
	identifiedGuarantee?: IGuarantee[];

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
	payeeParty?: ITradeParty[];

	/**
	 * The payer party for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/payerParty
	 */
	payerParty?: ITradeParty[];

	/**
	 * A monetary value of the payment for this trade settlement payment.
	 * @see https://vocabulary.uncefact.org/paymentAmount
	 */
	paymentAmount?: IAmountType[];

	/**
	 * The currency exchange applicable to this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/paymentApplicableCurrencyExchange
	 */
	paymentApplicableCurrencyExchange?: ICurrencyExchange[];

	/**
	 * The code specifying the currency for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/paymentCurrencyCode
	 */
	paymentCurrencyCode?: CurrencyCodeList[];

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
	recordedExperienceItem?: IExperienceItem[];

	/**
	 * A monetary value of the refund related to this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/refundAmount
	 */
	refundAmount?: IAmountType;

	/**
	 * A monetary value requested for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/requestedAmount
	 */
	requestedAmount?: IAmountType[];

	/**
	 * The payment means specified for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentMeans
	 */
	specifiedPaymentMeans?: IPaymentMeans[];

	/**
	 * The monetary summation totals specified for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedTradeSettlementPaymentMonetarySummation
	 */
	specifiedTradeSettlementPaymentMonetarySummation?: ITradeSettlementPaymentMonetarySummation[];

	/**
	 * The code specifying the status of this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * A monetary value of the tax related to this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/taxAmount
	 */
	taxAmount?: IAmountType[];

	/**
	 * The monetary value of the total tax for this payment trade settlement.
	 * @see https://vocabulary.uncefact.org/totalTaxAmount
	 */
	totalTaxAmount?: IAmountType[];

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
