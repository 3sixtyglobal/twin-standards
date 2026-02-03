// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAccountingAccount } from "./IUneceAccountingAccount.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceFinancialAdjustment } from "./IUneceFinancialAdjustment.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceTradeAllowanceCharge } from "./IUneceTradeAllowanceCharge.js";
import type { IUneceTradeTax } from "./IUneceTradeTax.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The information, at a subordinate line level, that enables the reconciliation of a financial transaction with the
 * item(s) that the financial transaction is intended to settle, for example a commercial invoice.
 * @see https://vocabulary.uncefact.org/SubordinateLineTradeSettlement
 */
export interface IUneceSubordinateLineTradeSettlement extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SubordinateLineTradeSettlement;

	/**
	 * The code, specifying the direction, either an addition or subtraction, for the amount of this subordinate line trade
	 * settlement.
	 * @see https://vocabulary.uncefact.org/amountDirectionCode
	 */
	amountDirectionCode?: string;

	/**
	 * A tax applicable to this subordinate line trade settlement.
	 * @see https://vocabulary.uncefact.org/applicableTax
	 */
	applicableTax?: IUneceTradeTax;

	/**
	 * The billing period specified for the subordinate line of this trade settlement.
	 * @see https://vocabulary.uncefact.org/billingPeriod
	 */
	billingPeriod?: IUneceSpecifiedPeriod;

	/**
	 * An invoice document referenced for this subordinate line trade settlement.
	 * @see https://vocabulary.uncefact.org/invoiceReferencedDocument
	 */
	invoiceReferencedDocument?: IUneceDocument;

	/**
	 * A purchase accounting account specified for the subordinate line of this trade settlement.
	 * @see https://vocabulary.uncefact.org/purchaseSpecifiedAccountingAccount
	 */
	purchaseSpecifiedAccountingAccount?: IUneceAccountingAccount;

	/**
	 * An allowance or charge specified for this subordinate line trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedAllowanceCharge
	 */
	specifiedAllowanceCharge?: IUneceTradeAllowanceCharge;

	/**
	 * A financial adjustment specified for this subordinate line trade settlement.
	 * @see https://vocabulary.uncefact.org/specifiedFinancialAdjustment
	 */
	specifiedFinancialAdjustment?: IUneceFinancialAdjustment;
}
