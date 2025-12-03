// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAuthentication } from "./IAuthentication.js";
import type { IBinaryFile } from "./IBinaryFile.js";
import type { IClause } from "./IClause.js";
import type { IDocument } from "./IDocument.js";
import type { ILogisticsLocation } from "./ILogisticsLocation.js";
import type { INote } from "./INote.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { DocumentCodeList } from "../lists/documentCodeList.js";
import type { DocumentStatusCodeList } from "../lists/documentStatusCodeList.js";
import type { MessageFunctionCodeList } from "../lists/messageFunctionCodeList.js";
import type { ResponseTypeCodeList } from "../lists/responseTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of data for a piece of written, printed or electronic matter that is exchanged between two or more parties.
 * @see https://vocabulary.uncefact.org/ExchangedDocument
 */
export interface IExchangedDocument extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ExchangedDocument;

	/**
	 * The date, time, date time, or other date time value for the acceptance of this exchanged document.
	 * @see https://vocabulary.uncefact.org/acceptanceDateTime
	 */
	acceptanceDateTime?: string;

	/**
	 * An additional identifier of this exchanged document.
	 * @see https://vocabulary.uncefact.org/additionalId
	 */
	additionalId?: string;

	/**
	 * A party representing another party for this exchanged document.
	 * @see https://vocabulary.uncefact.org/agentParty
	 */
	agentParty?: ITradeParty;

	/**
	 * An amendment purpose, expressed in text, for this exchanged document.
	 * @see https://vocabulary.uncefact.org/amendmentPurpose
	 */
	amendmentPurpose?: string;

	/**
	 * The approver signature that authenticates this exchanged document.
	 * @see https://vocabulary.uncefact.org/approverSignatoryAuthentication
	 */
	approverSignatoryAuthentication?: IAuthentication[];

	/**
	 * A binary file attached to this exchanged document.
	 * @see https://vocabulary.uncefact.org/attachedBinaryFile
	 */
	attachedBinaryFile?: IBinaryFile[];

	/**
	 * A binary object that is attached or otherwise appended to this exchanged document.
	 * @see https://vocabulary.uncefact.org/attachmentBinaryObject
	 */
	attachmentBinaryObject?: string;

	/**
	 * The buyer signature that authenticates this exchanged document.
	 * @see https://vocabulary.uncefact.org/buyerSignatoryAuthentication
	 */
	buyerSignatoryAuthentication?: IAuthentication[];

	/**
	 * The date, time, date time, or other date time value of a cancellation of the exchanged document.
	 * @see https://vocabulary.uncefact.org/cancellationDateTime
	 */
	cancellationDateTime?: string;

	/**
	 * The code specifying a category for this exchanged document.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * A contractual clause of this exchanged document.
	 * @see https://vocabulary.uncefact.org/contractualClause
	 */
	contractualClause?: IClause[];

	/**
	 * The indication of whether or not this exchanged document has specific control requirements.
	 * @see https://vocabulary.uncefact.org/controlRequirementIndicator
	 */
	controlRequirementIndicator?: boolean;

	/**
	 * The indication of whether or not this exchanged document is a copy.
	 * @see https://vocabulary.uncefact.org/copyIndicator
	 */
	copyIndicator?: boolean;

	/**
	 * The number of copies issued of this exchanged document.
	 * @see https://vocabulary.uncefact.org/copyIssuedQuantity
	 */
	copyIssuedQuantity?: IQuantityType;

	/**
	 * The number of copies required of this exchanged document.
	 * @see https://vocabulary.uncefact.org/copyRequiredQuantity
	 */
	copyRequiredQuantity?: IQuantityType;

	/**
	 * The date, time, date time, or other date time value of a creation of this exchanged document.
	 * @see https://vocabulary.uncefact.org/creationDateTime
	 */
	creationDateTime?: string;

	/**
	 * A unique identifier, for customs purposes, for this exchanged document.
	 * @see https://vocabulary.uncefact.org/customsId
	 */
	customsId?: string;

	/**
	 * A textual description of this exchanged document.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A disposition, expressed as text, for this exchanged document.
	 * @see https://vocabulary.uncefact.org/disposition
	 */
	disposition?: string;

	/**
	 * A code specifying a type of response document for this exchanged document, such as a requested or required response
	 * document type.
	 * @see https://vocabulary.uncefact.org/documentResponseDocumentTypeCode
	 */
	documentResponseDocumentTypeCode?: DocumentCodeList[];

	/**
	 * The code specifying the status of this exchanged document.
	 * @see https://vocabulary.uncefact.org/documentStatusCode
	 */
	documentStatusCode?: DocumentStatusCodeList[];

	/**
	 * The code specifying the type of exchanged document.
	 * @see https://vocabulary.uncefact.org/documentTypeCode
	 */
	documentTypeCode?: DocumentCodeList[];

	/**
	 * The specified period within which this exchanged document is effective.
	 * @see https://vocabulary.uncefact.org/effectiveSpecifiedPeriod
	 */
	effectiveSpecifiedPeriod?: ISpecifiedPeriod;

	/**
	 * The indication of whether or not this exchanged document is presented in an electronic format.
	 * @see https://vocabulary.uncefact.org/electronicPresentationIndicator
	 */
	electronicPresentationIndicator?: boolean;

	/**
	 * A code specifying a purpose of an amendment to this exchanged document.
	 * @see https://vocabulary.uncefact.org/exchangedDocumentAmendmentPurposeCode
	 */
	exchangedDocumentAmendmentPurposeCode?: string;

	/**
	 * A code specifying a type of response requested for this exchanged document.
	 * @see https://vocabulary.uncefact.org/exchangedDocumentResponseTypeCode
	 */
	exchangedDocumentResponseTypeCode?: ResponseTypeCodeList[];

	/**
	 * The first or primary signature that authenticates this exchanged document.
	 * @see https://vocabulary.uncefact.org/firstSignatoryAuthentication
	 */
	firstSignatoryAuthentication?: IAuthentication[];

	/**
	 * The date, time, date time or other date time value when the first version of this exchanged document was issued.
	 * @see https://vocabulary.uncefact.org/firstVersionIssueDateTime
	 */
	firstVersionIssueDateTime?: string;

	/**
	 * The fourth signature, also known as the third counter signature, that has been authenticated on this exchanged document
	 * indicating where appropriate the authentication party.
	 * @see https://vocabulary.uncefact.org/fourthSignatoryAuthentication
	 */
	fourthSignatoryAuthentication?: IAuthentication[];

	/**
	 * The unique global identifier for this exchanged document.
	 * @see https://vocabulary.uncefact.org/globalId
	 */
	globalId?: string;

	/**
	 * Header information, expressed as text, for this exchanged document.
	 * @see https://vocabulary.uncefact.org/headerInformation
	 */
	headerInformation?: string;

	/**
	 * The unique identifier of this exchanged document.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A note included in this exchanged document.
	 * @see https://vocabulary.uncefact.org/includedNote
	 */
	includedNote?: INote[];

	/**
	 * Information, expressed as text, for this exchanged document.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * The date, time, date time or other date time value for the issuance of this exchanged document.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 */
	issueDateTime?: string;

	/**
	 * The location where this exchanged document has been issued.
	 * @see https://vocabulary.uncefact.org/issueLogisticsLocation
	 */
	issueLogisticsLocation?: ILogisticsLocation[];

	/**
	 * The party that issues this exchanged document.
	 * @see https://vocabulary.uncefact.org/issuerParty
	 */
	issuerParty?: ITradeParty[];

	/**
	 * The unique identifier of a specific item in this exchanged document.
	 * @see https://vocabulary.uncefact.org/itemIdentificationId
	 */
	itemIdentificationId?: string;

	/**
	 * A unique identifier for a language used in this exchanged document.
	 * @see https://vocabulary.uncefact.org/languageId
	 */
	languageId?: string;

	/**
	 * The count of the number of lines in this exchanged document.
	 * @see https://vocabulary.uncefact.org/lineCountNumeric
	 */
	lineCountNumeric?: string;

	/**
	 * The number of line items in this exchanged document.
	 * @see https://vocabulary.uncefact.org/lineItemQuantity
	 */
	lineItemQuantity?: IQuantityType[];

	/**
	 * The location where this exchanged document has been lodged.
	 * @see https://vocabulary.uncefact.org/lodgementLocation
	 */
	lodgementLocation?: ILogisticsLocation[];

	/**
	 * A code specifying the purpose of this exchanged document, such as request or reminder.
	 * @see https://vocabulary.uncefact.org/messageFunctionPurposeCode
	 */
	messageFunctionPurposeCode?: MessageFunctionCodeList[];

	/**
	 * A name, expressed as text, of this exchanged document.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A status of an offset processing, expressed as text, for this exchanged document, such as the process offsetted by this
	 * document.
	 * @see https://vocabulary.uncefact.org/offsetProcessingStatus
	 */
	offsetProcessingStatus?: string;

	/**
	 * The number of originals issued of this exchanged document.
	 * @see https://vocabulary.uncefact.org/originalIssuedQuantity
	 */
	originalIssuedQuantity?: IQuantityType;

	/**
	 * The number of originals required of this exchanged document.
	 * @see https://vocabulary.uncefact.org/originalRequiredQuantity
	 */
	originalRequiredQuantity?: IQuantityType;

	/**
	 * The party that owns this exchanged document.
	 * @see https://vocabulary.uncefact.org/ownerParty
	 */
	ownerParty?: ITradeParty[];

	/**
	 * The unique identifier of a specific page of this exchanged document.
	 * @see https://vocabulary.uncefact.org/pageId
	 */
	pageId?: string;

	/**
	 * A platform provider party specified for this exchanged document.
	 * @see https://vocabulary.uncefact.org/platformProviderParty
	 */
	platformProviderParty?: ITradeParty[];

	/**
	 * The unique identifier of the previous revision of this exchanged document.
	 * @see https://vocabulary.uncefact.org/previousRevisionId
	 */
	previousRevisionId?: string;

	/**
	 * The purpose, expressed as text, of this exchanged document.
	 * @see https://vocabulary.uncefact.org/purpose
	 */
	purpose?: string;

	/**
	 * A unique recipient assigned identifier for this exchanged document.
	 * @see https://vocabulary.uncefact.org/recipientAssignedId
	 */
	recipientAssignedId?: string;

	/**
	 * A trade party that receives this exchanged document.
	 * @see https://vocabulary.uncefact.org/recipientTradeParty
	 */
	recipientTradeParty?: ITradeParty[];

	/**
	 * Other documents referenced by this exchanged document.
	 * @see https://vocabulary.uncefact.org/referenceDocument
	 */
	referenceDocument?: IDocument[];

	/**
	 * A date, time, date time, or other date time value of a rejection response of the exchanged document.
	 * @see https://vocabulary.uncefact.org/rejectionResponseDateTime
	 */
	rejectionResponseDateTime?: string;

	/**
	 * A remark, expressed as text, regarding this exchanged document.
	 * @see https://vocabulary.uncefact.org/remarks
	 */
	remarks?: string;

	/**
	 * A date, time, date time, or other date time value of a response of the exchanged document.
	 * @see https://vocabulary.uncefact.org/responseDateTime
	 */
	responseDateTime?: string;

	/**
	 * A code specifying a response reason for this exchanged document.
	 * @see https://vocabulary.uncefact.org/responseReasonCode
	 */
	responseReasonCode?: string;

	/**
	 * The date, time, date time or other date time value for the revision of this exchanged document.
	 * @see https://vocabulary.uncefact.org/revisionDateTime
	 */
	revisionDateTime?: string;

	/**
	 * The unique identifier of the revision of this exchanged document.
	 * @see https://vocabulary.uncefact.org/revisionId
	 */
	revisionId?: string;

	/**
	 * The second signature, also known as the first counter signature, that has been authenticated on this exchanged document
	 * indicating where appropriate the authentication party.
	 * @see https://vocabulary.uncefact.org/secondSignatoryAuthentication
	 */
	secondSignatoryAuthentication?: IAuthentication[];

	/**
	 * A unique sender assigned identifier for this exchanged document.
	 * @see https://vocabulary.uncefact.org/senderAssignedId
	 */
	senderAssignedId?: string;

	/**
	 * The party that sends this exchanged document.
	 * @see https://vocabulary.uncefact.org/senderTradeParty
	 */
	senderTradeParty?: ITradeParty[];

	/**
	 * A signatory document authentication for this exchanged document.
	 * @see https://vocabulary.uncefact.org/signatoryAuthentication
	 */
	signatoryAuthentication?: IAuthentication[];

	/**
	 * The date, time, date time or other date time value for the formal submission of this exchanged document to a receiver by
	 * a sender.
	 * @see https://vocabulary.uncefact.org/submissionDateTime
	 */
	submissionDateTime?: string;

	/**
	 * The code specifying the subtype of this exchanged document.
	 * @see https://vocabulary.uncefact.org/subtypeCode
	 */
	subtypeCode?: string;

	/**
	 * A unique suffix identifier for this exchanged document.
	 * @see https://vocabulary.uncefact.org/suffixId
	 */
	suffixId?: string;

	/**
	 * Summary information, expressed as text, for this exchanged document.
	 * @see https://vocabulary.uncefact.org/summaryInformation
	 */
	summaryInformation?: string;

	/**
	 * The third signature, also known as the second counter signature, that has been authenticated on this exchanged document
	 * indicating where appropriate the authentication party.
	 * @see https://vocabulary.uncefact.org/thirdSignatoryAuthentication
	 */
	thirdSignatoryAuthentication?: IAuthentication[];

	/**
	 * The total number of pages for this exchanged document.
	 * @see https://vocabulary.uncefact.org/totalPageQuantity
	 */
	totalPageQuantity?: IQuantityType;

	/**
	 * A unique trader assigned identifier for this exchanged document.
	 * @see https://vocabulary.uncefact.org/traderAssignedId
	 */
	traderAssignedId?: string;

	/**
	 * An urgency, expressed as text, of this exchanged document.
	 * @see https://vocabulary.uncefact.org/urgency
	 */
	urgency?: string;

	/**
	 * The code specifying the urgency for this exchanged document.
	 * @see https://vocabulary.uncefact.org/urgencyCode
	 */
	urgencyCode?: string;

	/**
	 * The unique identifier for the version of this exchanged document.
	 * @see https://vocabulary.uncefact.org/versionId
	 */
	versionId?: string;
}
