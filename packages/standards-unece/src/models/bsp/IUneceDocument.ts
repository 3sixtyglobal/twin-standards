// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceAuthentication } from "./IUneceAuthentication.js";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceClause } from "./IUneceClause.js";
import type { IUneceDocumentHandlingInstructions } from "./IUneceDocumentHandlingInstructions.js";
import type { IUneceDocumentStatus } from "./IUneceDocumentStatus.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceCommunicationChannelCodeList } from "../lists/uneceCommunicationChannelCodeList.js";
import type { UneceDocumentCodeList } from "../lists/uneceDocumentCodeList.js";
import type { UneceDocumentStatusCodeList } from "../lists/uneceDocumentStatusCodeList.js";
import type { UneceLanguageId } from "../lists/uneceLanguageId.js";
import type { UneceLineStatusCodeList } from "../lists/uneceLineStatusCodeList.js";
import type { UneceMessageFunctionCodeList } from "../lists/uneceMessageFunctionCodeList.js";
import type { UneceReferenceCodeList } from "../lists/uneceReferenceCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Written, printed or electronic matter that is referenced.
 * @see https://vocabulary.uncefact.org/Document
 */
export interface IUneceDocument {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Document;

	/**
	 * The specified period within which this referenced document may be accepted.
	 * @see https://vocabulary.uncefact.org/acceptablePeriod
	 */
	acceptablePeriod?: IUneceSpecifiedPeriod;

	/**
	 * The date, time, date time, or other date time value of the acceptance of this referenced document.
	 * @see https://vocabulary.uncefact.org/acceptanceDateTime
	 * @format date-time
	 */
	acceptanceDateTime?: string;

	/**
	 * A specified binary file attached to this referenced document.
	 * @see https://vocabulary.uncefact.org/attachedBinaryFile
	 */
	attachedBinaryFile?: IUneceBinaryFile[];

	/**
	 * A binary object that is attached or otherwise appended to this referenced document.
	 * @see https://vocabulary.uncefact.org/attachmentBinaryObject
	 */
	attachmentBinaryObject?: string;

	/**
	 * The indication of whether or not this referenced document is an authenticated original.
	 * @see https://vocabulary.uncefact.org/authenticatedOriginalIndicator
	 */
	authenticatedOriginalIndicator?: boolean;

	/**
	 * The code specifying the category of this referenced document.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * The code specifying the channel by which this referenced document is sent, such as mail, email, fax.
	 * @see https://vocabulary.uncefact.org/communicationChannelCode
	 */
	communicationChannelCode?: UneceCommunicationChannelCodeList;

	/**
	 * A contractual clause of this referenced document.
	 * @see https://vocabulary.uncefact.org/contractualClause
	 */
	contractualClause?: IUneceClause[];

	/**
	 * The indication of whether or not this referenced document requires a control.
	 * @see https://vocabulary.uncefact.org/controlRequirementIndicator
	 */
	controlRequirementIndicator?: boolean;

	/**
	 * The indication of whether or not the referenced document is a copy.
	 * @see https://vocabulary.uncefact.org/copyIndicator
	 */
	copyIndicator?: boolean;

	/**
	 * The number of copies issued of this referenced document.
	 * @see https://vocabulary.uncefact.org/copyIssuedQuantity
	 */
	copyIssuedQuantity?: IUneceQuantityType;

	/**
	 * The number of copies required of this referenced document.
	 * @see https://vocabulary.uncefact.org/copyRequiredQuantity
	 */
	copyRequiredQuantity?: IUneceQuantityType;

	/**
	 * The date, time, date time, or other date time value of the creation of this referenced document.
	 * @see https://vocabulary.uncefact.org/creationDateTime
	 * @format date-time
	 */
	creationDateTime?: string;

	/**
	 * A textual description for this referenced document.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the purpose of an amendment to this referenced document.
	 * @see https://vocabulary.uncefact.org/documentAmendmentPurposeCode
	 */
	documentAmendmentPurposeCode?: string;

	/**
	 * An identifier for a language used in this referenced document.
	 * @see https://vocabulary.uncefact.org/documentLanguageId
	 */
	documentLanguageId?: string | IJsonLdValueObject;

	/**
	 * The code specifying the status of a line in this referenced document.
	 * @see https://vocabulary.uncefact.org/documentLineStatusCode
	 */
	documentLineStatusCode?: UneceLineStatusCodeList;

	/**
	 * The code specifying the status for this referenced document.
	 * @see https://vocabulary.uncefact.org/documentStatusCode
	 */
	documentStatusCode?: UneceDocumentStatusCodeList;

	/**
	 * A type, expressed as text, for this referenced document.
	 * @see https://vocabulary.uncefact.org/documentType
	 */
	documentType?: string;

	/**
	 * The code specifying the type of referenced document.
	 * @see https://vocabulary.uncefact.org/documentTypeCode
	 */
	documentTypeCode?: UneceDocumentCodeList;

	/**
	 * The specified period within which this referenced document is effective.
	 * @see https://vocabulary.uncefact.org/effectiveSpecifiedPeriod
	 */
	effectiveSpecifiedPeriod?: IUneceSpecifiedPeriod;

	/**
	 * The indication of whether or not this referenced document is presented in an electronic format.
	 * @see https://vocabulary.uncefact.org/electronicPresentationIndicator
	 */
	electronicPresentationIndicator?: boolean;

	/**
	 * A unique global identifier for this referenced document.
	 * @see https://vocabulary.uncefact.org/globalId
	 */
	globalId?: string | IJsonLdValueObject;

	/**
	 * A unique identifier for this referenced document.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * A monetary value included in this referenced document.
	 * @see https://vocabulary.uncefact.org/includedAmount
	 */
	includedAmount?: IUneceAmountType[];

	/**
	 * A note included in this referenced document.
	 * @see https://vocabulary.uncefact.org/includedNote
	 */
	includedNote?: IUneceNote[];

	/**
	 * Information, expressed as text, for this referenced document.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * The formatted date or date time for the issuance of this referenced document.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 * @format date-time
	 */
	issueDateTime?: string;

	/**
	 * The logistics related location where this referenced document has been issued.
	 * @see https://vocabulary.uncefact.org/issueLogisticsLocation
	 */
	issueLogisticsLocation?: IUneceLogisticsLocation;

	/**
	 * The unique issuer assigned identifier for this referenced document.
	 * @see https://vocabulary.uncefact.org/issuerAssignedId
	 */
	issuerAssignedId?: string | IJsonLdValueObject;

	/**
	 * The trade related party that issues this referenced document.
	 * @see https://vocabulary.uncefact.org/issuerParty
	 */
	issuerParty?: IUneceTradeParty;

	/**
	 * Handling instructions specified by the issuer for this referenced document.
	 * @see https://vocabulary.uncefact.org/issuerSpecifiedInstructions
	 */
	issuerSpecifiedInstructions?: IUneceDocumentHandlingInstructions[];

	/**
	 * The unique identifier of an item in this referenced document.
	 * @see https://vocabulary.uncefact.org/itemIdentificationId
	 */
	itemIdentificationId?: string | IJsonLdValueObject;

	/**
	 * The number of lines for this referenced document.
	 * @see https://vocabulary.uncefact.org/lineCountNumeric
	 */
	lineCountNumeric?: string;

	/**
	 * The unique identifier of a line in this referenced document.
	 * @see https://vocabulary.uncefact.org/lineId
	 */
	lineId?: string | IJsonLdValueObject;

	/**
	 * The number of line items in this referenced document.
	 * @see https://vocabulary.uncefact.org/lineItemQuantity
	 */
	lineItemQuantity?: IUneceQuantityType;

	/**
	 * The logistics related location where this referenced document has been lodged.
	 * @see https://vocabulary.uncefact.org/lodgementLocation
	 */
	lodgementLocation?: IUneceLogisticsLocation;

	/**
	 * The code specifying the purpose of this referenced document.
	 * @see https://vocabulary.uncefact.org/messageFunctionPurposeCode
	 */
	messageFunctionPurposeCode?: UneceMessageFunctionCodeList;

	/**
	 * A name, expressed as text, for this referenced document.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The number of originals issued of this referenced document.
	 * @see https://vocabulary.uncefact.org/originalIssuedQuantity
	 */
	originalIssuedQuantity?: IUneceQuantityType;

	/**
	 * The number of originals required of this referenced document.
	 * @see https://vocabulary.uncefact.org/originalRequiredQuantity
	 */
	originalRequiredQuantity?: IUneceQuantityType;

	/**
	 * The identifier of the page for this referenced document.
	 * @see https://vocabulary.uncefact.org/pageId
	 */
	pageId?: string | IJsonLdValueObject;

	/**
	 * An identifier for a previous revision of this referenced document.
	 * @see https://vocabulary.uncefact.org/previousRevisionId
	 */
	previousRevisionId?: string | IJsonLdValueObject;

	/**
	 * A process condition, expressed as text, for this referenced document.
	 * @see https://vocabulary.uncefact.org/processCondition
	 */
	processCondition?: string;

	/**
	 * The code specifying the process condition for this referenced document.
	 * @see https://vocabulary.uncefact.org/processConditionCode
	 */
	processConditionCode?: string;

	/**
	 * A proprietary type, expressed as text, for this referenced document.
	 * @see https://vocabulary.uncefact.org/proprietaryType
	 */
	proprietaryType?: string;

	/**
	 * The date, time, date time, or other date time value for the formal receipt of this referenced document.
	 * @see https://vocabulary.uncefact.org/receiptDateTime
	 * @format date-time
	 */
	receiptDateTime?: string;

	/**
	 * A trade related party that receives this referenced document.
	 * @see https://vocabulary.uncefact.org/recipientTradeParty
	 */
	recipientTradeParty?: IUneceTradeParty[];

	/**
	 * The reference date or date time for this referenced document.
	 * @see https://vocabulary.uncefact.org/referenceDateTime
	 * @format date-time
	 */
	referenceDateTime?: string;

	/**
	 * The code specifying the type of relationship between this referenced document and another artefact, such as a
	 * replacement of an original document.
	 * @see https://vocabulary.uncefact.org/referenceRelationshipTypeCode
	 */
	referenceRelationshipTypeCode?: UneceReferenceCodeList;

	/**
	 * The code specifying the reference type of this referenced document.
	 * @see https://vocabulary.uncefact.org/referenceTypeCode
	 */
	referenceTypeCode?: UneceReferenceCodeList;

	/**
	 * A remark, expressed as text, regarding this referenced document.
	 * @see https://vocabulary.uncefact.org/remarks
	 */
	remarks?: string;

	/**
	 * The report count for this referenced document.
	 * @see https://vocabulary.uncefact.org/reportCountNumeric
	 */
	reportCountNumeric?: string;

	/**
	 * A revision, expressed as text, for this referenced document.
	 * @see https://vocabulary.uncefact.org/revision
	 */
	revision?: string;

	/**
	 * A date, time, date time or other date time value for the revision of this referenced document.
	 * @see https://vocabulary.uncefact.org/revisionDateTime
	 * @format date-time
	 */
	revisionDateTime?: string;

	/**
	 * A unique identifier for a revision of this referenced document.
	 * @see https://vocabulary.uncefact.org/revisionId
	 */
	revisionId?: string | IJsonLdValueObject;

	/**
	 * A section name, expressed as text, for this referenced document.
	 * @see https://vocabulary.uncefact.org/sectionName
	 */
	sectionName?: string;

	/**
	 * The trade related party that sends this referenced document.
	 * @see https://vocabulary.uncefact.org/senderTradeParty
	 */
	senderTradeParty?: IUneceTradeParty;

	/**
	 * A signatory authentication for this referenced document.
	 * @see https://vocabulary.uncefact.org/signatoryAuthentication
	 */
	signatoryAuthentication?: IUneceAuthentication[];

	/**
	 * Status information specified for this referenced document.
	 * @see https://vocabulary.uncefact.org/specifiedDocumentStatus
	 */
	specifiedDocumentStatus?: IUneceDocumentStatus[];

	/**
	 * A status, expressed as text, for this referenced document.
	 * @see https://vocabulary.uncefact.org/status
	 */
	status?: string;

	/**
	 * The identifier of the subordinate line of this referenced document.
	 * @see https://vocabulary.uncefact.org/subordinateLineId
	 */
	subordinateLineId?: string | IJsonLdValueObject;

	/**
	 * A code specifying a subtype of this referenced document.
	 * @see https://vocabulary.uncefact.org/subtypeCode
	 */
	subtypeCode?: string;

	/**
	 * The total issue count for this referenced document.
	 * @see https://vocabulary.uncefact.org/totalIssueCountNumeric
	 */
	totalIssueCountNumeric?: string;

	/**
	 * The unique Uniform Resource Identifier (URI) for this referenced document.
	 * @see https://vocabulary.uncefact.org/uRIId
	 */
	uRIId?: string | IJsonLdValueObject;

	/**
	 * A period of validity specified for this referenced document.
	 * @see https://vocabulary.uncefact.org/validityPeriod
	 */
	validityPeriod?: IUneceSpecifiedPeriod[];

	/**
	 * The identifier for the version of this referenced document.
	 * @see https://vocabulary.uncefact.org/versionId
	 */
	versionId?: string | IJsonLdValueObject;
}
