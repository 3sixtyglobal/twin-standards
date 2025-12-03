// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Information relevant to a condition of a cancellation.
 * @see https://vocabulary.uncefact.org/CancellationStatus
 */
export interface ICancellationStatus extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CancellationStatus;

	/**
	 * The code specifying the condition of this cancellation status.
	 * @see https://vocabulary.uncefact.org/cancellationDocumentStatusConditionCode
	 */
	cancellationDocumentStatusConditionCode?: string;

	/**
	 * The code specifying the reason for this cancellation status.
	 * @see https://vocabulary.uncefact.org/cancellationStatusReasonCode
	 */
	cancellationStatusReasonCode?: string;

	/**
	 * A reason, expressed as text, for this cancellation status.
	 * @see https://vocabulary.uncefact.org/reason
	 */
	reason?: string;

	/**
	 * Information, expressed as text, related to the reason for this cancellation status.
	 * @see https://vocabulary.uncefact.org/reasonInformation
	 */
	reasonInformation?: string;
}
