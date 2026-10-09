// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { UneceAcknowledgementCodeList } from "../lists/uneceAcknowledgementCodeList.js";
import type { UneceDocumentCodeList } from "../lists/uneceDocumentCodeList.js";
import type { UneceStatusCodeList } from "../lists/uneceStatusCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A document exchanged between parties for a business application level acknowledgement of the receipt of information.
 * @see https://vocabulary.uncefact.org/AcknowledgementDocument
 */
export interface IUneceAcknowledgementDocument {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AcknowledgementDocument;

	/**
	 * The code specifying the channel by which this acknowledgement document is sent, such as mail, email, fax.
	 * @see https://vocabulary.uncefact.org/acknowledgementDocumentChannelCode
	 */
	acknowledgementDocumentChannelCode?: string;

	/**
	 * Reason information, expressed as text, for this acknowledgement document.
	 * @see https://vocabulary.uncefact.org/acknowledgementDocumentReasonInformation
	 */
	acknowledgementDocumentReasonInformation?: string;

	/**
	 * A code specifying a status for this acknowledgement document.
	 * @see https://vocabulary.uncefact.org/acknowledgementDocumentStatusCode
	 */
	acknowledgementDocumentStatusCode?: UneceStatusCodeList[];

	/**
	 * A code specifying an acknowledgment status for this acknowledgement document.
	 * @see https://vocabulary.uncefact.org/acknowledgementStatusCode
	 */
	acknowledgementStatusCode?: UneceAcknowledgementCodeList[];

	/**
	 * The code specifying the channel by which this acknowledgement document is sent, such as mail, email, fax.
	 * @see https://vocabulary.uncefact.org/channelCode
	 */
	channelCode?: string;

	/**
	 * The indication of whether or not this acknowledgement document has a control requirement.
	 * @see https://vocabulary.uncefact.org/controlRequirementIndicator
	 */
	controlRequirementIndicator?: boolean;

	/**
	 * The date or date time value of the creation of this acknowledgement document.
	 * @see https://vocabulary.uncefact.org/creationDateTime
	 * @json-schema format:date-time
	 */
	creationDateTime?: string;

	/**
	 * A code specifying a type of acknowledgement document.
	 * @see https://vocabulary.uncefact.org/documentTypeCode
	 */
	documentTypeCode?: UneceDocumentCodeList[];

	/**
	 * The unique identifier of this acknowledgement document.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The date, time, date time or other date time value for the issuance of this acknowledgement document.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 * @json-schema format:date-time
	 */
	issueDateTime?: string;

	/**
	 * The unique identifier of an item in this acknowledgement document.
	 * @see https://vocabulary.uncefact.org/itemIdentificationId
	 */
	itemIdentificationId?: string | IJsonLdValueObject;

	/**
	 * The indication of whether or not this acknowledgement document has multiple references.
	 * @see https://vocabulary.uncefact.org/multipleReferencesIndicator
	 */
	multipleReferencesIndicator?: boolean;

	/**
	 * The name, expressed as text, for this acknowledgement document.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A process condition, expressed as text, for this acknowledgement document.
	 * @see https://vocabulary.uncefact.org/processCondition
	 */
	processCondition?: string;

	/**
	 * The code specifying the process condition for this acknowledgement document.
	 * @see https://vocabulary.uncefact.org/processConditionCode
	 */
	processConditionCode?: string;

	/**
	 * A document referenced by this acknowledgement document.
	 * @see https://vocabulary.uncefact.org/referenceDocument
	 */
	referenceDocument?: IUneceDocument[];

	/**
	 * The date, time, date time or other date time value of the receipt of the report being acknowledged by this
	 * acknowledgment document.
	 * @see https://vocabulary.uncefact.org/reportReceiptDateTime
	 * @json-schema format:date-time
	 */
	reportReceiptDateTime?: string;

	/**
	 * The date, time, date time or other date time value of the submission of the report being acknowledged by this
	 * acknowledgment document.
	 * @see https://vocabulary.uncefact.org/reportSubmissionDateTime
	 * @json-schema format:date-time
	 */
	reportSubmissionDateTime?: string;

	/**
	 * A status, expressed as text, for this acknowledgement document.
	 * @see https://vocabulary.uncefact.org/status
	 */
	status?: string;
}
