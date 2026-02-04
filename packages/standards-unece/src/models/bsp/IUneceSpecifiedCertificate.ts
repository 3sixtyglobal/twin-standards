// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceClause } from "./IUneceClause.js";
import type { IUneceDocumentStatus } from "./IUneceDocumentStatus.js";
import type { IUneceObject } from "./IUneceObject.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { IUneceSupplyChainTradeTransaction } from "./IUneceSupplyChainTradeTransaction.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { IUneceTradeLocation } from "./IUneceTradeLocation.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceCertificateTypeCodeList } from "../lists/uneceCertificateTypeCodeList.js";
import type { UneceLanguageCodeList } from "../lists/uneceLanguageCodeList.js";
import type { UneceSubjectCodeList } from "../lists/uneceSubjectCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A document issued by a government, public organization or association to certify a property of a person, entity, process
 * or object.
 * @see https://vocabulary.uncefact.org/SpecifiedCertificate
 */
export interface IUneceSpecifiedCertificate extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecifiedCertificate;

	/**
	 * The actual effective date, time, date time or other date time value for this specified certificate.
	 * @see https://vocabulary.uncefact.org/actualEffectiveDateTime
	 */
	actualEffectiveDateTime?: string;

	/**
	 * A code specifying an alias name of this specified certificate.
	 * @see https://vocabulary.uncefact.org/aliasNameCode
	 */
	aliasNameCode?: string;

	/**
	 * A clause applicable to this specified certificate.
	 * @see https://vocabulary.uncefact.org/applicableClause
	 */
	applicableClause?: IUneceClause[];

	/**
	 * A geographic region, expressed as text, applicable for this specified certificate.
	 * @see https://vocabulary.uncefact.org/applicableGeographicRegion
	 */
	applicableGeographicRegion?: string;

	/**
	 * A referenced standard applicable to this specified certificate.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IUneceStandard[];

	/**
	 * A sustainability characteristic applicable to this specified certificate.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

	/**
	 * The code specifying the assurance level, such as certified by third party, for this specified certificate.
	 * @see https://vocabulary.uncefact.org/assuranceLevelCode
	 */
	assuranceLevelCode?: string;

	/**
	 * A binary file attached to this specified certificate.
	 * @see https://vocabulary.uncefact.org/attachedBinaryFile
	 */
	attachedBinaryFile?: IUneceBinaryFile[];

	/**
	 * A code specifying an available language for this specified certificate.
	 * @see https://vocabulary.uncefact.org/availableLanguageCode
	 */
	availableLanguageCode?: UneceLanguageCodeList[];

	/**
	 * A capability level, expressed as text, in this specified certificate.
	 * @see https://vocabulary.uncefact.org/capabilityLevel
	 */
	capabilityLevel?: string;

	/**
	 * A code specifying a category for this specified certificate.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * A code specifying a type of specified certificate.
	 * @see https://vocabulary.uncefact.org/certificateTypeCode
	 */
	certificateTypeCode?: UneceCertificateTypeCodeList[];

	/**
	 * An object certified by this specified certificate.
	 * @see https://vocabulary.uncefact.org/certifiedObject
	 */
	certifiedObject?: IUneceObject[];

	/**
	 * The certified party for this specified certificate.
	 * @see https://vocabulary.uncefact.org/certifiedParty
	 */
	certifiedParty?: IUneceTradeParty;

	/**
	 * The number of certified persons for this specified certificate.
	 * @see https://vocabulary.uncefact.org/certifiedPersonQuantity
	 */
	certifiedPersonQuantity?: IUneceQuantityType;

	/**
	 * A textual description of this specified certificate.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The date, time, date time, or other date time value from which this specified certificate is effective.
	 * @see https://vocabulary.uncefact.org/effectiveFromDateTime
	 */
	effectiveFromDateTime?: string;

	/**
	 * An endorsement date, time, date time or other date time value for this specified certificate.
	 * @see https://vocabulary.uncefact.org/endorsementDateTime
	 */
	endorsementDateTime?: string;

	/**
	 * The expiry date, time, date time, or other date time value for this specified certificate.
	 * @see https://vocabulary.uncefact.org/expiryDateTime
	 */
	expiryDateTime?: string;

	/**
	 * The identifier for this specified certificate.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An issuance location for this specified certificate.
	 * @see https://vocabulary.uncefact.org/issuanceLocation
	 */
	issuanceLocation?: IUneceTradeLocation[];

	/**
	 * The issue date, time, date time, or other date time value for this specified certificate.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 */
	issueDateTime?: string;

	/**
	 * The code specifying the reason why this specified certificate was issued.
	 * @see https://vocabulary.uncefact.org/issueReasonCode
	 */
	issueReasonCode?: string;

	/**
	 * The issuer party for this specified certificate.
	 * @see https://vocabulary.uncefact.org/issuerParty
	 */
	issuerParty?: IUneceTradeParty[];

	/**
	 * A latest endorsement date, time, date time or other date time value for this specified certificate.
	 * @see https://vocabulary.uncefact.org/latestEndorsementDateTime
	 */
	latestEndorsementDateTime?: string;

	/**
	 * A name, expressed as text, for this specified certificate.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * An identifier of a party for this specified certificate.
	 * @see https://vocabulary.uncefact.org/partyId
	 */
	partyId?: string;

	/**
	 * The party, other than the issuer, providing this specified certificate.
	 * @see https://vocabulary.uncefact.org/providingParty
	 */
	providingParty?: IUneceTradeParty;

	/**
	 * A code specifying a purpose of this specified certificate.
	 * @see https://vocabulary.uncefact.org/purposeCode
	 */
	purposeCode?: string;

	/**
	 * A supply chain trade transaction related to this specified certificate.
	 * @see https://vocabulary.uncefact.org/relatedTradeTransaction
	 */
	relatedTradeTransaction?: IUneceSupplyChainTradeTransaction[];

	/**
	 * A reported status for this specified certificate.
	 * @see https://vocabulary.uncefact.org/reportedDocumentStatus
	 */
	reportedDocumentStatus?: IUneceDocumentStatus[];

	/**
	 * The requested effective date, time, date time or other date time value for this specified certificate.
	 * @see https://vocabulary.uncefact.org/requestedEffectiveDateTime
	 */
	requestedEffectiveDateTime?: string;

	/**
	 * The indication of whether or not this specified certificate is required.
	 * @see https://vocabulary.uncefact.org/requiredIndicator
	 */
	requiredIndicator?: boolean;

	/**
	 * A sequence number for this specified certificate.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * The code specifying the status of this specified certificate.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * A code specifying a subject type for this specified certificate.
	 * @see https://vocabulary.uncefact.org/subjectTypeCode
	 */
	subjectTypeCode?: UneceSubjectCodeList[];

	/**
	 * The indication of whether or not this specified certificate is valid.
	 * @see https://vocabulary.uncefact.org/validIndicator
	 */
	validIndicator?: boolean;

	/**
	 * A date, time, date time or other date time value until which this specified certificate will remain valid under the
	 * terms of an approved extension period.
	 * @see https://vocabulary.uncefact.org/validityExtendedUntilDateTime
	 */
	validityExtendedUntilDateTime?: string;

	/**
	 * A code specifying a type of validity for this specified certificate.
	 * @see https://vocabulary.uncefact.org/validityTypeCode
	 */
	validityTypeCode?: string;
}
