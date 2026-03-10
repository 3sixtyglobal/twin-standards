// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceAuthentication } from "./IUneceAuthentication.js";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceClause } from "./IUneceClause.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceDocumentCodeList } from "../lists/uneceDocumentCodeList.js";
import type { UneceDocumentStatusCodeList } from "../lists/uneceDocumentStatusCodeList.js";
import type { UneceMessageFunctionCodeList } from "../lists/uneceMessageFunctionCodeList.js";
import type { UneceResponseTypeCodeList } from "../lists/uneceResponseTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of data for a piece of written, printed or electronic matter that is exchanged between two or more parties.
 * @see https://vocabulary.uncefact.org/ExchangedDocument
 */
export interface IUneceExchangedDocument {
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
	 * @format date-time
	 */
	acceptanceDateTime?: string;

	/**
	 * An additional identifier of this exchanged document.
	 * @see https://vocabulary.uncefact.org/additionalId
	 */
	additionalId?: string | IJsonLdValueObject;

	/**
	 * A party representing another party for this exchanged document.
	 * @see https://vocabulary.uncefact.org/agentParty
	 */
	agentParty?: IUneceTradeParty[];

	/**
	 * An amendment purpose, expressed in text, for this exchanged document.
	 * @see https://vocabulary.uncefact.org/amendmentPurpose
	 */
	amendmentPurpose?: string;

	/**
	 * The approver signature that authenticates this exchanged document.
	 * @see https://vocabulary.uncefact.org/approverSignatoryAuthentication
	 */
	approverSignatoryAuthentication?: IUneceAuthentication;

	/**
	 * A binary file attached to this exchanged document.
	 * @see https://vocabulary.uncefact.org/attachedBinaryFile
	 */
	attachedBinaryFile?: IUneceBinaryFile[];

	/**
	 * A binary object that is attached or otherwise appended to this exchanged document.
	 * @see https://vocabulary.uncefact.org/attachmentBinaryObject
	 */
	attachmentBinaryObject?: string;

	/**
	 * The buyer signature that authenticates this exchanged document.
	 * @see https://vocabulary.uncefact.org/buyerSignatoryAuthentication
	 */
	buyerSignatoryAuthentication?: IUneceAuthentication;

	/**
	 * The date, time, date time, or other date time value of a cancellation of the exchanged document.
	 * @see https://vocabulary.uncefact.org/cancellationDateTime
	 * @format date-time
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
	contractualClause?: IUneceClause[];

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
	copyIssuedQuantity?: IUneceQuantityType;

	/**
	 * The number of copies required of this exchanged document.
	 * @see https://vocabulary.uncefact.org/copyRequiredQuantity
	 */
	copyRequiredQuantity?: IUneceQuantityType;

	/**
	 * The date, time, date time, or other date time value of a creation of this exchanged document.
	 * @see https://vocabulary.uncefact.org/creationDateTime
	 * @format date-time
	 */
	creationDateTime?: string;

	/**
	 * A unique identifier, for customs purposes, for this exchanged document.
	 * @see https://vocabulary.uncefact.org/customsId
	 */
	customsId?: string | IJsonLdValueObject;

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
	documentResponseDocumentTypeCode?: UneceDocumentCodeList[];

	/**
	 * The code specifying the status of this exchanged document.
	 * @see https://vocabulary.uncefact.org/documentStatusCode
	 */
	documentStatusCode?: UneceDocumentStatusCodeList;

	/**
	 * The code specifying the type of exchanged document.
	 * @see https://vocabulary.uncefact.org/documentTypeCode
	 */
	documentTypeCode?: UneceDocumentCodeList;

	/**
	 * The specified period within which this exchanged document is effective.
	 * @see https://vocabulary.uncefact.org/effectiveSpecifiedPeriod
	 */
	effectiveSpecifiedPeriod?: IUneceSpecifiedPeriod;

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
	exchangedDocumentResponseTypeCode?: UneceResponseTypeCodeList[];

	/**
	 * The first or primary signature that authenticates this exchanged document.
	 * @see https://vocabulary.uncefact.org/firstSignatoryAuthentication
	 */
	firstSignatoryAuthentication?: IUneceAuthentication;

	/**
	 * The date, time, date time or other date time value when the first version of this exchanged document was issued.
	 * @see https://vocabulary.uncefact.org/firstVersionIssueDateTime
	 * @format date-time
	 */
	firstVersionIssueDateTime?: string;

	/**
	 * The fourth signature, also known as the third counter signature, that has been authenticated on this exchanged document
	 * indicating where appropriate the authentication party.
	 * @see https://vocabulary.uncefact.org/fourthSignatoryAuthentication
	 */
	fourthSignatoryAuthentication?: IUneceAuthentication;

	/**
	 * The unique global identifier for this exchanged document.
	 * @see https://vocabulary.uncefact.org/globalId
	 */
	globalId?: string | IJsonLdValueObject;

	/**
	 * Header information, expressed as text, for this exchanged document.
	 * @see https://vocabulary.uncefact.org/headerInformation
	 */
	headerInformation?: string;

	/**
	 * The unique identifier of this exchanged document.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * A note included in this exchanged document.
	 * @see https://vocabulary.uncefact.org/includedNote
	 */
	includedNote?: IUneceNote[];

	/**
	 * Information, expressed as text, for this exchanged document.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * The date, time, date time or other date time value for the issuance of this exchanged document.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 * @format date-time
	 */
	issueDateTime?: string;

	/**
	 * The location where this exchanged document has been issued.
	 * @see https://vocabulary.uncefact.org/issueLogisticsLocation
	 */
	issueLogisticsLocation?: IUneceLogisticsLocation;

	/**
	 * The party that issues this exchanged document.
	 * @see https://vocabulary.uncefact.org/issuerParty
	 */
	issuerParty?: IUneceTradeParty;

	/**
	 * The unique identifier of a specific item in this exchanged document.
	 * @see https://vocabulary.uncefact.org/itemIdentificationId
	 */
	itemIdentificationId?: string | IJsonLdValueObject;

	/**
	 * A unique identifier for a language used in this exchanged document.
	 * @see https://vocabulary.uncefact.org/languageId
	 */
	languageId?: string | IJsonLdValueObject;

	/**
	 * The count of the number of lines in this exchanged document.
	 * @see https://vocabulary.uncefact.org/lineCountNumeric
	 */
	lineCountNumeric?: string;

	/**
	 * The number of line items in this exchanged document.
	 * @see https://vocabulary.uncefact.org/lineItemQuantity
	 */
	lineItemQuantity?: IUneceQuantityType;

	/**
	 * The location where this exchanged document has been lodged.
	 * @see https://vocabulary.uncefact.org/lodgementLocation
	 */
	lodgementLocation?: IUneceLogisticsLocation;

	/**
	 * A code specifying the purpose of this exchanged document, such as request or reminder.
	 * @see https://vocabulary.uncefact.org/messageFunctionPurposeCode
	 */
	messageFunctionPurposeCode?: UneceMessageFunctionCodeList[];

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
	originalIssuedQuantity?: IUneceQuantityType;

	/**
	 * The number of originals required of this exchanged document.
	 * @see https://vocabulary.uncefact.org/originalRequiredQuantity
	 */
	originalRequiredQuantity?: IUneceQuantityType;

	/**
	 * The party that owns this exchanged document.
	 * @see https://vocabulary.uncefact.org/ownerParty
	 */
	ownerParty?: IUneceTradeParty;

	/**
	 * The unique identifier of a specific page of this exchanged document.
	 * @see https://vocabulary.uncefact.org/pageId
	 */
	pageId?: string | IJsonLdValueObject;

	/**
	 * A platform provider party specified for this exchanged document.
	 * @see https://vocabulary.uncefact.org/platformProviderParty
	 */
	platformProviderParty?: IUneceTradeParty[];

	/**
	 * The unique identifier of the previous revision of this exchanged document.
	 * @see https://vocabulary.uncefact.org/previousRevisionId
	 */
	previousRevisionId?: string | IJsonLdValueObject;

	/**
	 * The purpose, expressed as text, of this exchanged document.
	 * @see https://vocabulary.uncefact.org/purpose
	 */
	purpose?: string;

	/**
	 * A unique recipient assigned identifier for this exchanged document.
	 * @see https://vocabulary.uncefact.org/recipientAssignedId
	 */
	recipientAssignedId?: string | IJsonLdValueObject;

	/**
	 * A trade party that receives this exchanged document.
	 * @see https://vocabulary.uncefact.org/recipientTradeParty
	 */
	recipientTradeParty?: IUneceTradeParty[];

	/**
	 * Other documents referenced by this exchanged document.
	 * @see https://vocabulary.uncefact.org/referenceDocument
	 */
	referenceDocument?: IUneceDocument[];

	/**
	 * A date, time, date time, or other date time value of a rejection response of the exchanged document.
	 * @see https://vocabulary.uncefact.org/rejectionResponseDateTime
	 * @format date-time
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
	 * @format date-time
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
	 * @format date-time
	 */
	revisionDateTime?: string;

	/**
	 * The unique identifier of the revision of this exchanged document.
	 * @see https://vocabulary.uncefact.org/revisionId
	 */
	revisionId?: string | IJsonLdValueObject;

	/**
	 * The second signature, also known as the first counter signature, that has been authenticated on this exchanged document
	 * indicating where appropriate the authentication party.
	 * @see https://vocabulary.uncefact.org/secondSignatoryAuthentication
	 */
	secondSignatoryAuthentication?: IUneceAuthentication;

	/**
	 * A unique sender assigned identifier for this exchanged document.
	 * @see https://vocabulary.uncefact.org/senderAssignedId
	 */
	senderAssignedId?: string | IJsonLdValueObject;

	/**
	 * The party that sends this exchanged document.
	 * @see https://vocabulary.uncefact.org/senderTradeParty
	 */
	senderTradeParty?: IUneceTradeParty;

	/**
	 * A signatory document authentication for this exchanged document.
	 * @see https://vocabulary.uncefact.org/signatoryAuthentication
	 */
	signatoryAuthentication?: IUneceAuthentication[];

	/**
	 * The date, time, date time or other date time value for the formal submission of this exchanged document to a receiver by
	 * a sender.
	 * @see https://vocabulary.uncefact.org/submissionDateTime
	 * @format date-time
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
	suffixId?: string | IJsonLdValueObject;

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
	thirdSignatoryAuthentication?: IUneceAuthentication;

	/**
	 * The total number of pages for this exchanged document.
	 * @see https://vocabulary.uncefact.org/totalPageQuantity
	 */
	totalPageQuantity?: IUneceQuantityType;

	/**
	 * A unique trader assigned identifier for this exchanged document.
	 * @see https://vocabulary.uncefact.org/traderAssignedId
	 */
	traderAssignedId?: string | IJsonLdValueObject;

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
	versionId?: string | IJsonLdValueObject;
}
