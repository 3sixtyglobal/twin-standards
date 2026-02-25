// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { UneceAdjustmentReasonCodeList } from "../lists/uneceAdjustmentReasonCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A correction or modification to reflect actual delivery conditions.
 * @see https://vocabulary.uncefact.org/DeliveryAdjustment
 */
export interface IUneceDeliveryAdjustment {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.DeliveryAdjustment;

	/**
	 * An actual monetary value added or subtracted as a result of this delivery adjustment.
	 * @see https://vocabulary.uncefact.org/actualAmount
	 */
	actualAmount?: IUneceAmountType[];

	/**
	 * The actual date, time, date time, or other date time value of this delivery adjustment.
	 * @see https://vocabulary.uncefact.org/actualDateTime
	 */
	actualDateTime?: string;

	/**
	 * The actual quantity added or subtracted as a result of this delivery adjustment.
	 * @see https://vocabulary.uncefact.org/actualQuantity
	 */
	actualQuantity?: IUneceQuantityType;

	/**
	 * The code specifying a reason for this delivery adjustment.
	 * @see https://vocabulary.uncefact.org/adjustmentReasonCode
	 */
	adjustmentReasonCode?: UneceAdjustmentReasonCodeList;

	/**
	 * A reason, expressed as text, for this delivery adjustment.
	 * @see https://vocabulary.uncefact.org/reason
	 */
	reason?: string;
}
