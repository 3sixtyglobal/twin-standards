// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceDurationUnitMeasureType } from "./IUneceDurationUnitMeasureType.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUnecePaymentDiscountTerms } from "./IUnecePaymentDiscountTerms.js";
import type { IUnecePaymentPenaltyTerms } from "./IUnecePaymentPenaltyTerms.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UnecePaymentTermsId } from "../lists/unecePaymentTermsId.js";
import type { UnecePaymentTermsTypeCodeList } from "../lists/unecePaymentTermsTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Terms and conditions by which payment has been or will be made for trade purposes.
 * @see https://vocabulary.uncefact.org/PaymentTerms
 */
export interface IUnecePaymentTerms extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.PaymentTerms;

	/**
	 * Trade payment discount terms applicable to these trade payment terms.
	 * @see https://vocabulary.uncefact.org/applicablePaymentDiscountTerms
	 */
	applicablePaymentDiscountTerms?: IUnecePaymentDiscountTerms[];

	/**
	 * Trade payment penalty terms applicable to these trade payment terms.
	 * @see https://vocabulary.uncefact.org/applicablePaymentPenaltyTerms
	 */
	applicablePaymentPenaltyTerms?: IUnecePaymentPenaltyTerms[];

	/**
	 * The date, time, date time, or other date time value of the bill start specified by these trade payment terms.
	 * @see https://vocabulary.uncefact.org/billStartDateTime
	 */
	billStartDateTime?: string;

	/**
	 * A textual description of these trade payment terms.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The date, time, date time, or other date time value of the due date specified by these trade payment terms.
	 * @see https://vocabulary.uncefact.org/dueDateTime
	 */
	dueDateTime?: string;

	/**
	 * The measure of a length of time duration specified for these trade payment terms, such as 12 hours, 15 days, 2 weeks, 3
	 * months, 5 years.
	 * @see https://vocabulary.uncefact.org/durationUnitDurationMeasure
	 */
	durationUnitDurationMeasure?: IUneceDurationUnitMeasureType;

	/**
	 * An equivalent monetary value to be transferred between debtor and creditor before deduction of charges for these trade
	 * payment terms, expressed in the currency of the debtor's account which is different from the currency in which it is to
	 * be transferred.
	 * @see https://vocabulary.uncefact.org/equivalentAmount
	 */
	equivalentAmount?: IUneceAmountType[];

	/**
	 * Information, expressed as text, for these trade payment terms.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * A monetary value that has been instructed to be transferred between debtor and creditor for these trade payment terms
	 * before deduction of charges.
	 * @see https://vocabulary.uncefact.org/instructedAmount
	 */
	instructedAmount?: IUneceAmountType[];

	/**
	 * A code specifying an instruction for these trade payment terms.
	 * @see https://vocabulary.uncefact.org/instructionCode
	 */
	instructionCode?: string;

	/**
	 * A monetary value of a partial payment in these trade payment terms.
	 * @see https://vocabulary.uncefact.org/partialPaymentAmount
	 */
	partialPaymentAmount?: IUneceAmountType[];

	/**
	 * A partial payment, expressed as a percent, in these trade payment terms.
	 * @see https://vocabulary.uncefact.org/partialPaymentPercent
	 */
	partialPaymentPercent?: string;

	/**
	 * A payee party in these trade payment terms.
	 * @see https://vocabulary.uncefact.org/payeeParty
	 */
	payeeParty?: IUneceTradeParty[];

	/**
	 * The code specifying the event from which these trade payment terms are offered for a length of time.
	 * @see https://vocabulary.uncefact.org/paymentTermsEventTimeReferenceFromEventCode
	 */
	paymentTermsEventTimeReferenceFromEventCode?: string;

	/**
	 * The unique identifier of these trade payment terms.
	 * @see https://vocabulary.uncefact.org/paymentTermsId
	 */
	paymentTermsId?: UnecePaymentTermsId[];

	/**
	 * A code specifying the type of trade payment terms.
	 * @see https://vocabulary.uncefact.org/paymentTermsTypeCode
	 */
	paymentTermsTypeCode?: UnecePaymentTermsTypeCodeList;

	/**
	 * The measure of the number of settlement periods from this trade payment term time reference to the latest payment date,
	 * such as 30 days, 3 months.
	 * @see https://vocabulary.uncefact.org/settlementPeriodMeasure
	 */
	settlementPeriodMeasure?: IUneceMeasureType;

	/**
	 * An identifier of a direct debit mandate in these trade payment terms.
	 * @see https://vocabulary.uncefact.org/tradePaymentTermsDirectDebitMandateId
	 */
	tradePaymentTermsDirectDebitMandateId?: string;

	/**
	 * A code specifying a type of instruction for these trade payment terms.
	 * @see https://vocabulary.uncefact.org/tradePaymentTermsInstructionTypeCode
	 */
	tradePaymentTermsInstructionTypeCode?: string;

	/**
	 * An identifier of a payment means in these trade payment terms.
	 * @see https://vocabulary.uncefact.org/tradePaymentTermsPaymentMeansId
	 */
	tradePaymentTermsPaymentMeansId?: string;
}
