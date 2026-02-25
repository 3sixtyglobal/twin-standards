// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTradeTax } from "./IUneceTradeTax.js";
import type { UneceAccountingDebitCreditStatusCodeList } from "../lists/uneceAccountingDebitCreditStatusCodeList.js";
import type { UneceFinancialAdjustmentReasonCodeList } from "../lists/uneceFinancialAdjustmentReasonCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A correction or modification to reflect actual financial conditions.
 * @see https://vocabulary.uncefact.org/FinancialAdjustment
 */
export interface IUneceFinancialAdjustment {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.FinancialAdjustment;

	/**
	 * The code specifying whether the financial adjustment must be subtracted or added.
	 * @see https://vocabulary.uncefact.org/accountingDebitCreditStatusDirectionCode
	 */
	accountingDebitCreditStatusDirectionCode?: UneceAccountingDebitCreditStatusCodeList;

	/**
	 * An actual monetary value added or subtracted as a result of this financial adjustment.
	 * @see https://vocabulary.uncefact.org/actualAmount
	 */
	actualAmount?: IUneceAmountType[];

	/**
	 * The actual date, time, date time, or other date time value of this financial adjustment.
	 * @see https://vocabulary.uncefact.org/actualDateTime
	 */
	actualDateTime?: string;

	/**
	 * The actual quantity added or subtracted as a result of this financial adjustment.
	 * @see https://vocabulary.uncefact.org/actualQuantity
	 */
	actualQuantity?: IUneceQuantityType;

	/**
	 * The claim related party for this financial adjustment.
	 * @see https://vocabulary.uncefact.org/claimRelatedParty
	 */
	claimRelatedParty?: IUneceTradeParty;

	/**
	 * A code specifying a reason for this financial adjustment.
	 * @see https://vocabulary.uncefact.org/financialAdjustmentReasonCode
	 */
	financialAdjustmentReasonCode?: UneceFinancialAdjustmentReasonCodeList[];

	/**
	 * The invoice document referenced for this financial adjustment.
	 * @see https://vocabulary.uncefact.org/invoiceReferenceDocument
	 */
	invoiceReferenceDocument?: IUneceDocument;

	/**
	 * A reason, expressed as text, for this financial adjustment.
	 * @see https://vocabulary.uncefact.org/reason
	 */
	reason?: string;

	/**
	 * A trade tax related to this financial adjustment.
	 * @see https://vocabulary.uncefact.org/relatedTax
	 */
	relatedTax?: IUneceTradeTax[];
}
