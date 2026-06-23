// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Information relevant to a condition of a validation.
 * @see https://vocabulary.uncefact.org/ValidationStatus
 */
export interface IUneceValidationStatus {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ValidationStatus;

	/**
	 * Information, expressed as text, related to the reason for this validation status.
	 * @see https://vocabulary.uncefact.org/additionalReason
	 */
	additionalReason?: string;

	/**
	 * A reason, expressed as text, for this validation status.
	 * @see https://vocabulary.uncefact.org/reason
	 */
	reason?: string;

	/**
	 * The code specifying the condition of this validation status.
	 * @see https://vocabulary.uncefact.org/validationDocumentStatusConditionCode
	 */
	validationDocumentStatusConditionCode?: string;

	/**
	 * The code specifying the reason for this validation status.
	 * @see https://vocabulary.uncefact.org/validationStatusReasonCode
	 */
	validationStatusReasonCode?: string;
}
