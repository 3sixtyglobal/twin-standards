// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceDocumentCharacteristic } from "./IUneceDocumentCharacteristic.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { UneceDocumentStatusCodeList } from "../lists/uneceDocumentStatusCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The information relevant to a condition related to a document.
 * @see https://vocabulary.uncefact.org/DocumentStatus
 */
export interface IUneceDocumentStatus extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.DocumentStatus;

	/**
	 * A condition, expressed as text, for this document status.
	 * @see https://vocabulary.uncefact.org/condition
	 */
	condition?: string;

	/**
	 * The textual description of this document status.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the condition of this document status.
	 * @see https://vocabulary.uncefact.org/documentStatusConditionCode
	 */
	documentStatusConditionCode?: UneceDocumentStatusCodeList;

	/**
	 * The code specifying the process condition of this document status.
	 * @see https://vocabulary.uncefact.org/documentStatusProcessConditionCode
	 */
	documentStatusProcessConditionCode?: string;

	/**
	 * A code specifying a reason for this document status.
	 * @see https://vocabulary.uncefact.org/documentStatusReasonCode
	 */
	documentStatusReasonCode?: string;

	/**
	 * A note included for this document status.
	 * @see https://vocabulary.uncefact.org/includedNote
	 */
	includedNote?: IUneceNote;

	/**
	 * Information, expressed as text, for this document status.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * The invalid information, expressed as text, for this document status.
	 * @see https://vocabulary.uncefact.org/invalidInformation
	 */
	invalidInformation?: string;

	/**
	 * A process condition, expressed as text, for this document status.
	 * @see https://vocabulary.uncefact.org/processCondition
	 */
	processCondition?: string;

	/**
	 * A reason, expressed as text, for this document status.
	 * @see https://vocabulary.uncefact.org/reason
	 */
	reason?: string;

	/**
	 * A reason classification, expressed as text, for this document status.
	 * @see https://vocabulary.uncefact.org/reasonClassification
	 */
	reasonClassification?: string;

	/**
	 * The code specifying the reason classification for this document status.
	 * @see https://vocabulary.uncefact.org/reasonClassificationCode
	 */
	reasonClassificationCode?: string;

	/**
	 * Reason information, expressed as text, for this document status.
	 * @see https://vocabulary.uncefact.org/reasonInformation
	 */
	reasonInformation?: string;

	/**
	 * The code specifying the reason for the information for this document status.
	 * @see https://vocabulary.uncefact.org/reasonInformationCode
	 */
	reasonInformationCode?: string;

	/**
	 * The reference date, time, date time or other date time value for this document status.
	 * @see https://vocabulary.uncefact.org/referenceDateTime
	 */
	referenceDateTime?: string;

	/**
	 * A requested action, expressed as text, for this document status.
	 * @see https://vocabulary.uncefact.org/requestedAction
	 */
	requestedAction?: string;

	/**
	 * The code specifying the requested action for this document status.
	 * @see https://vocabulary.uncefact.org/requestedActionCode
	 */
	requestedActionCode?: string;

	/**
	 * A sequence number for this document status.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * A document characteristic specified for this document status.
	 * @see https://vocabulary.uncefact.org/specifiedDocumentCharacteristic
	 */
	specifiedDocumentCharacteristic?: IUneceDocumentCharacteristic;

	/**
	 * The valid information, expressed as text, for this document status.
	 * @see https://vocabulary.uncefact.org/validInformation
	 */
	validInformation?: string;

	/**
	 * A specified validity period for this document status.
	 * @see https://vocabulary.uncefact.org/validityPeriod
	 */
	validityPeriod?: IUneceSpecifiedPeriod;
}
