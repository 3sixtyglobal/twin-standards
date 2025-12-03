// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAmountType } from "./IAmountType.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { AdjustmentReasonCodeList } from "../lists/adjustmentReasonCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A correction or modification to reflect actual delivery conditions.
 * @see https://vocabulary.uncefact.org/DeliveryAdjustment
 */
export interface IDeliveryAdjustment extends IJsonLdNodeObject {
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
	actualAmount?: IAmountType[];

	/**
	 * The actual date, time, date time, or other date time value of this delivery adjustment.
	 * @see https://vocabulary.uncefact.org/actualDateTime
	 */
	actualDateTime?: string;

	/**
	 * The actual quantity added or subtracted as a result of this delivery adjustment.
	 * @see https://vocabulary.uncefact.org/actualQuantity
	 */
	actualQuantity?: IQuantityType;

	/**
	 * The code specifying a reason for this delivery adjustment.
	 * @see https://vocabulary.uncefact.org/adjustmentReasonCode
	 */
	adjustmentReasonCode?: AdjustmentReasonCodeList[];

	/**
	 * A reason, expressed as text, for this delivery adjustment.
	 * @see https://vocabulary.uncefact.org/reason
	 */
	reason?: string;
}
