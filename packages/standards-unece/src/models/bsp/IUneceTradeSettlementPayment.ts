// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUnecePaymentTradeSettlement } from "./IUnecePaymentTradeSettlement.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The specific discharge obligations in respect of funds or securities transferred between two or more parties as part of
 * a trade settlement.
 * @see https://vocabulary.uncefact.org/TradeSettlementPayment
 */
export interface IUneceTradeSettlementPayment {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TradeSettlementPayment;

	/**
	 * A date, time, date time or other date time value of a closing book due date for this trade settlement payment.
	 * @see https://vocabulary.uncefact.org/closingBookDueDateTime
	 */
	closingBookDueDateTime?: string;

	/**
	 * The unique identifier for the end-to-end processing of this trade settlement payment, such as an identifier assigned by
	 * an initiating party to unambiguously identify the transaction.
	 * @see https://vocabulary.uncefact.org/endToEndId
	 */
	endToEndId?: string;

	/**
	 * The unique identifier of the instruction for this trade settlement payment.
	 * @see https://vocabulary.uncefact.org/instructionId
	 */
	instructionId?: string;

	/**
	 * The date, time, date time or other date time value of the requested execution of this trade settlement payment.
	 * @see https://vocabulary.uncefact.org/requestedExecutionDateTime
	 */
	requestedExecutionDateTime?: string;

	/**
	 * A trade settlement payment specified for this trade settlement payment.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentTradeSettlement
	 */
	specifiedPaymentTradeSettlement?: IUnecePaymentTradeSettlement[];
}
