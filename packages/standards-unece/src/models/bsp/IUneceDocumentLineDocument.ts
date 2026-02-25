// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceAcknowledgementDocument } from "./IUneceAcknowledgementDocument.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { UneceLineStatusCodeList } from "../lists/uneceLineStatusCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of data for a line on a piece of written, printed or electronic matter that provides information or
 * evidence.
 * @see https://vocabulary.uncefact.org/DocumentLineDocument
 */
export interface IUneceDocumentLineDocument {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.DocumentLineDocument;

	/**
	 * The code specifying the category assigned by the buyer for this document line.
	 * @see https://vocabulary.uncefact.org/buyerAssignedCategoryCode
	 */
	buyerAssignedCategoryCode?: string;

	/**
	 * The code specifying the category of this document line.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * The code specifying the type of response requested for this document line.
	 * @see https://vocabulary.uncefact.org/documentLineDocumentRequestedResponseTypeCode
	 */
	documentLineDocumentRequestedResponseTypeCode?: string;

	/**
	 * The code specifying the status of this document line.
	 * @see https://vocabulary.uncefact.org/documentLineStatusCode
	 */
	documentLineStatusCode?: UneceLineStatusCodeList;

	/**
	 * The period within which this document line is effective.
	 * @see https://vocabulary.uncefact.org/effectiveSpecifiedPeriod
	 */
	effectiveSpecifiedPeriod?: IUneceSpecifiedPeriod;

	/**
	 * The identifier of this document line document.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A note included in this document line.
	 * @see https://vocabulary.uncefact.org/includedNote
	 */
	includedNote?: IUneceNote[];

	/**
	 * The date, time, date time, or other date time value for the issuance of this document line.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 */
	issueDateTime?: string;

	/**
	 * The date, time, date time, or other date time value for the latest revision of this document line.
	 * @see https://vocabulary.uncefact.org/latestRevisionDateTime
	 */
	latestRevisionDateTime?: string;

	/**
	 * The unique identifier of this document line.
	 * @see https://vocabulary.uncefact.org/lineId
	 */
	lineId?: string;

	/**
	 * A reason, expressed as text, for the line status in this document line.
	 * @see https://vocabulary.uncefact.org/lineStatusReason
	 */
	lineStatusReason?: string;

	/**
	 * The code specifying the line status reason for this document line.
	 * @see https://vocabulary.uncefact.org/lineStatusReasonCode
	 */
	lineStatusReasonCode?: string;

	/**
	 * The unique identifier of the parent line to this document line.
	 * @see https://vocabulary.uncefact.org/parentLineId
	 */
	parentLineId?: string;

	/**
	 * The date, time, date time, or other date time value of the publication of this document line.
	 * @see https://vocabulary.uncefact.org/publicationDateTime
	 */
	publicationDateTime?: string;

	/**
	 * The acknowledgement document referenced in this document line.
	 * @see https://vocabulary.uncefact.org/referenceAcknowledgementDocument
	 */
	referenceAcknowledgementDocument?: IUneceAcknowledgementDocument;

	/**
	 * A document referenced from this document line.
	 * @see https://vocabulary.uncefact.org/referenceDocument
	 */
	referenceDocument?: IUneceDocument[];

	/**
	 * The code specifying the response reason of this document line.
	 * @see https://vocabulary.uncefact.org/responseReasonCode
	 */
	responseReasonCode?: string;

	/**
	 * An identifier of a subordinate line of this document line.
	 * @see https://vocabulary.uncefact.org/subordinateLineId
	 */
	subordinateLineId?: string;

	/**
	 * The universally unique identifier (UUID) of this document line.
	 * @see https://vocabulary.uncefact.org/uUIDLineId
	 */
	uUIDLineId?: string;
}
