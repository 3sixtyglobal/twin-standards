// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceBooking } from "./IUneceBooking.js";
import type { IUneceCreditorFinancialAccount } from "./IUneceCreditorFinancialAccount.js";
import type { IUneceFinancingFinancialAccount } from "./IUneceFinancingFinancialAccount.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of financing related data that provides an overview of key points.
 * @see https://vocabulary.uncefact.org/FinancingSummaryDocument
 */
export interface IUneceFinancingSummaryDocument {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.FinancingSummaryDocument;

	/**
	 * An original total monetary value of accepted transactions in this financing summary document.
	 * @see https://vocabulary.uncefact.org/acceptedTransactionOriginalTotalAmount
	 */
	acceptedTransactionOriginalTotalAmount?: IUneceAmountType[];

	/**
	 * The financed applied rate, expressed as a percentage, in this financing summary document.
	 * @see https://vocabulary.uncefact.org/financedAppliedRatePercent
	 */
	financedAppliedRatePercent?: string;

	/**
	 * A financed total monetary value in this financing summary document.
	 * @see https://vocabulary.uncefact.org/financedTotalAmount
	 */
	financedTotalAmount?: IUneceAmountType[];

	/**
	 * The number of financed transactions specified in this financing summary document.
	 * @see https://vocabulary.uncefact.org/financedTransactionSpecifiedQuantity
	 */
	financedTransactionSpecifiedQuantity?: IUneceQuantityType;

	/**
	 * The financing financial account, used for managing the line of credit, specified for this financing summary document.
	 * @see https://vocabulary.uncefact.org/lineOfCreditSpecifiedFinancialAccount
	 */
	lineOfCreditSpecifiedFinancialAccount?: IUneceFinancingFinancialAccount;

	/**
	 * The financial booking related to this financing summary document.
	 * @see https://vocabulary.uncefact.org/relatedBooking
	 */
	relatedBooking?: IUneceBooking;

	/**
	 * The creditor financial account, used for crediting, specified for this financing summary document.
	 * @see https://vocabulary.uncefact.org/specifiedCreditorFinancialAccount
	 */
	specifiedCreditorFinancialAccount?: IUneceCreditorFinancialAccount;
}
