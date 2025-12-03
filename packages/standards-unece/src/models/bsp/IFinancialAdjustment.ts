// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAmountType } from "./IAmountType.js";
import type { IDocument } from "./IDocument.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITradeTax } from "./ITradeTax.js";
import type { AccountingDebitCreditStatusCodeList } from "../lists/accountingDebitCreditStatusCodeList.js";
import type { FinancialAdjustmentReasonCodeList } from "../lists/financialAdjustmentReasonCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A correction or modification to reflect actual financial conditions.
 * @see https://vocabulary.uncefact.org/FinancialAdjustment
 */
export interface IFinancialAdjustment extends IJsonLdNodeObject {
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
	accountingDebitCreditStatusDirectionCode?: AccountingDebitCreditStatusCodeList[];

	/**
	 * An actual monetary value added or subtracted as a result of this financial adjustment.
	 * @see https://vocabulary.uncefact.org/actualAmount
	 */
	actualAmount?: IAmountType[];

	/**
	 * The actual date, time, date time, or other date time value of this financial adjustment.
	 * @see https://vocabulary.uncefact.org/actualDateTime
	 */
	actualDateTime?: string;

	/**
	 * The actual quantity added or subtracted as a result of this financial adjustment.
	 * @see https://vocabulary.uncefact.org/actualQuantity
	 */
	actualQuantity?: IQuantityType;

	/**
	 * The claim related party for this financial adjustment.
	 * @see https://vocabulary.uncefact.org/claimRelatedParty
	 */
	claimRelatedParty?: ITradeParty[];

	/**
	 * A code specifying a reason for this financial adjustment.
	 * @see https://vocabulary.uncefact.org/financialAdjustmentReasonCode
	 */
	financialAdjustmentReasonCode?: FinancialAdjustmentReasonCodeList;

	/**
	 * The invoice document referenced for this financial adjustment.
	 * @see https://vocabulary.uncefact.org/invoiceReferenceDocument
	 */
	invoiceReferenceDocument?: IDocument[];

	/**
	 * A reason, expressed as text, for this financial adjustment.
	 * @see https://vocabulary.uncefact.org/reason
	 */
	reason?: string;

	/**
	 * A trade tax related to this financial adjustment.
	 * @see https://vocabulary.uncefact.org/relatedTax
	 */
	relatedTax?: ITradeTax[];
}
