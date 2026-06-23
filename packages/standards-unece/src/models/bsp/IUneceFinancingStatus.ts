// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Information relevant to a condition of financing.
 * @see https://vocabulary.uncefact.org/FinancingStatus
 */
export interface IUneceFinancingStatus {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.FinancingStatus;

	/**
	 * The code specifying the condition of this financing status.
	 * @see https://vocabulary.uncefact.org/financingStatusConditionCode
	 */
	financingStatusConditionCode?: string;

	/**
	 * The code specifying the reason for this financing status.
	 * @see https://vocabulary.uncefact.org/financingStatusReasonCode
	 */
	financingStatusReasonCode?: string;

	/**
	 * A reason, expressed as text, for this financing status.
	 * @see https://vocabulary.uncefact.org/reason
	 */
	reason?: string;

	/**
	 * Information, expressed as text, related to the reason for this financing status.
	 * @see https://vocabulary.uncefact.org/reasonInformation
	 */
	reasonInformation?: string;
}
