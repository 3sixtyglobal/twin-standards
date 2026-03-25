// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceAssertion } from "./IUneceAssertion.js";
import type { IUneceAssessment } from "./IUneceAssessment.js";
import type { IUneceAuthentication } from "./IUneceAuthentication.js";
import type { IUneceAuthoritativeSignatoryPerson } from "./IUneceAuthoritativeSignatoryPerson.js";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceCommunication } from "./IUneceCommunication.js";
import type { IUneceContactPerson } from "./IUneceContactPerson.js";
import type { IUneceContract } from "./IUneceContract.js";
import type { IUneceCooperatingOrganization } from "./IUneceCooperatingOrganization.js";
import type { IUneceCreditorFinancialAccount } from "./IUneceCreditorFinancialAccount.js";
import type { IUneceCreditorFinancialInstitution } from "./IUneceCreditorFinancialInstitution.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceExperienceFacility } from "./IUneceExperienceFacility.js";
import type { IUneceExperienceItem } from "./IUneceExperienceItem.js";
import type { IUneceFinancialIdentity } from "./IUneceFinancialIdentity.js";
import type { IUneceGovernmentRegistration } from "./IUneceGovernmentRegistration.js";
import type { IUneceGuestPerson } from "./IUneceGuestPerson.js";
import type { IUneceInformationSource } from "./IUneceInformationSource.js";
import type { IUneceLanguageProficiency } from "./IUneceLanguageProficiency.js";
import type { IUneceLegalOrganization } from "./IUneceLegalOrganization.js";
import type { IUneceLicence } from "./IUneceLicence.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceMembership } from "./IUneceMembership.js";
import type { IUneceOrganizationalCertificate } from "./IUneceOrganizationalCertificate.js";
import type { IUneceOrganizationalCertification } from "./IUneceOrganizationalCertification.js";
import type { IUneceProcessCertificate } from "./IUneceProcessCertificate.js";
import type { IUneceProductBatch } from "./IUneceProductBatch.js";
import type { IUneceProductBatchCertificate } from "./IUneceProductBatchCertificate.js";
import type { IUneceProductCertificate } from "./IUneceProductCertificate.js";
import type { IUneceProductionFacility } from "./IUneceProductionFacility.js";
import type { IUneceProductionProcess } from "./IUneceProductionProcess.js";
import type { IUneceProprietaryIdentity } from "./IUneceProprietaryIdentity.js";
import type { IUneceRiskAnalysisResult } from "./IUneceRiskAnalysisResult.js";
import type { IUneceService } from "./IUneceService.js";
import type { IUneceServiceCharge } from "./IUneceServiceCharge.js";
import type { IUneceSpecifiedCertificate } from "./IUneceSpecifiedCertificate.js";
import type { IUneceSpecifiedDeclaration } from "./IUneceSpecifiedDeclaration.js";
import type { IUneceSpecifiedInspection } from "./IUneceSpecifiedInspection.js";
import type { IUneceSpecifiedMaterial } from "./IUneceSpecifiedMaterial.js";
import type { IUneceSpecifiedNote } from "./IUneceSpecifiedNote.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { IUneceSustainabilityInspection } from "./IUneceSustainabilityInspection.js";
import type { IUneceTaxRegistration } from "./IUneceTaxRegistration.js";
import type { IUneceTechnicalCharacteristic } from "./IUneceTechnicalCharacteristic.js";
import type { IUneceTradeAddress } from "./IUneceTradeAddress.js";
import type { IUneceTradeContact } from "./IUneceTradeContact.js";
import type { IUneceTradeProduct } from "./IUneceTradeProduct.js";
import type { UneceLanguageCodeList } from "../lists/uneceLanguageCodeList.js";
import type { UnecePartyRoleCodeList } from "../lists/unecePartyRoleCodeList.js";
import type { UnecePartyTypeCodeList } from "../lists/unecePartyTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An individual, a group, or a body having a role in a trade business function.
 * @see https://vocabulary.uncefact.org/TradeParty
 */
export interface IUneceTradeParty {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TradeParty;

	/**
	 * A trade contract agreed with this trade party.
	 * @see https://vocabulary.uncefact.org/agreedContract
	 */
	agreedContract?: IUneceContract[];

	/**
	 * An alliance name, expressed as text, for this trade party.
	 * @see https://vocabulary.uncefact.org/allianceName
	 */
	allianceName?: string;

	/**
	 * An assessment applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableAssessment
	 */
	applicableAssessment?: IUneceAssessment[];

	/**
	 * A specified declaration applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableDeclaration
	 */
	applicableDeclaration?: IUneceSpecifiedDeclaration[];

	/**
	 * A specified licence applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableLicence
	 */
	applicableLicence?: IUneceLicence[];

	/**
	 * An organizational certificate applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableOrganizationalCertificate
	 */
	applicableOrganizationalCertificate?: IUneceOrganizationalCertificate[];

	/**
	 * An organizational certification applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableOrganizationalCertification
	 */
	applicableOrganizationalCertification?: IUneceOrganizationalCertification[];

	/**
	 * A process certificate applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableProcessCertificate
	 */
	applicableProcessCertificate?: IUneceProcessCertificate[];

	/**
	 * A product batch certificate applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableProductBatchCertificate
	 */
	applicableProductBatchCertificate?: IUneceProductBatchCertificate[];

	/**
	 * A product certificate applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableProductCertificate
	 */
	applicableProductCertificate?: IUneceProductCertificate[];

	/**
	 * A logistics service charge applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableServiceCharge
	 */
	applicableServiceCharge?: IUneceServiceCharge[];

	/**
	 * A certificate applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedCertificate
	 */
	applicableSpecifiedCertificate?: IUneceSpecifiedCertificate[];

	/**
	 * A specified inspection applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedInspection
	 */
	applicableSpecifiedInspection?: IUneceSpecifiedInspection[];

	/**
	 * A sustainability characteristic applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

	/**
	 * A sustainability inspection applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityInspection
	 */
	applicableSustainabilityInspection?: IUneceSustainabilityInspection[];

	/**
	 * A technical characteristic applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableTechnicalCharacteristic
	 */
	applicableTechnicalCharacteristic?: IUneceTechnicalCharacteristic[];

	/**
	 * A membership associated with this trade party.
	 * @see https://vocabulary.uncefact.org/associatedMembership
	 */
	associatedMembership?: IUneceMembership[];

	/**
	 * A party associated with this trade party, such as a local agent of a shipping line.
	 * @see https://vocabulary.uncefact.org/associatedParty
	 */
	associatedParty?: IUneceTradeParty[];

	/**
	 * A trade party associated with this trade party to whom incoming mail is marked with words such as 'for the attention of'
	 * or 'FAO' or 'ATTN'.
	 * @see https://vocabulary.uncefact.org/attentionOfAssociatedParty
	 */
	attentionOfAssociatedParty?: IUneceTradeParty[];

	/**
	 * An experience item available for this trade party.
	 * @see https://vocabulary.uncefact.org/availableExperienceItem
	 */
	availableExperienceItem?: IUneceExperienceItem[];

	/**
	 * An experience facility made available for or by this trade party.
	 * @see https://vocabulary.uncefact.org/availableFacility
	 */
	availableFacility?: IUneceExperienceFacility[];

	/**
	 * A brand name, expressed as text, for this trade party.
	 * @see https://vocabulary.uncefact.org/brandName
	 */
	brandName?: string;

	/**
	 * The code specifying the business type of this trade party.
	 * @see https://vocabulary.uncefact.org/businessTypeCode
	 */
	businessTypeCode?: string;

	/**
	 * The unique Commercial And Government Entity (CAGE) identifier for this trade party.
	 * @see https://vocabulary.uncefact.org/cAGEId
	 */
	cAGEId?: string | IJsonLdValueObject;

	/**
	 * A chain name, expressed as text, for this trade party.
	 * @see https://vocabulary.uncefact.org/chainName
	 */
	chainName?: string;

	/**
	 * Personal language proficiency skills claimed by this trade party.
	 * @see https://vocabulary.uncefact.org/claimedLanguageProficiency
	 */
	claimedLanguageProficiency?: IUneceLanguageProficiency[];

	/**
	 * A commented review note specified for this trade party.
	 * @see https://vocabulary.uncefact.org/commentedReviewNote
	 */
	commentedReviewNote?: IUneceSpecifiedNote[];

	/**
	 * A confirmed document authentication for this trade party.
	 * @see https://vocabulary.uncefact.org/confirmedAuthentication
	 */
	confirmedAuthentication?: IUneceAuthentication[];

	/**
	 * A cooperative information source specified for this trade party.
	 * @see https://vocabulary.uncefact.org/cooperativeInformationSource
	 */
	cooperativeInformationSource?: IUneceInformationSource[];

	/**
	 * The unique Department Of Defense Activity Address Code (DODAAC) identifier for this trade party.
	 * @see https://vocabulary.uncefact.org/dODAACId
	 */
	dODAACId?: string | IJsonLdValueObject;

	/**
	 * The unique nine-digit Data Universal Numbering System (DUNS) identifier for this trade party.
	 * @see https://vocabulary.uncefact.org/dUNSId
	 */
	dUNSId?: string | IJsonLdValueObject;

	/**
	 * A trade contact defined for this trade party.
	 * @see https://vocabulary.uncefact.org/definedContact
	 */
	definedContact?: IUneceTradeContact[];

	/**
	 * A textual description of this trade party.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A code specifying a disclosure level for this trade party.
	 * @see https://vocabulary.uncefact.org/disclosureLevelCode
	 */
	disclosureLevelCode?: string;

	/**
	 * The email communication for this trade party.
	 * @see https://vocabulary.uncefact.org/emailURICommunication
	 */
	emailURICommunication?: IUneceCommunication;

	/**
	 * The communication address of the end point URI for this trade party.
	 * @see https://vocabulary.uncefact.org/endPointURICommunication
	 */
	endPointURICommunication?: IUneceCommunication;

	/**
	 * A fax communication for this trade party.
	 * @see https://vocabulary.uncefact.org/faxCommunication
	 */
	faxCommunication?: IUneceCommunication[];

	/**
	 * A Global Location Number (GLN) identifier for this trade party.
	 * @see https://vocabulary.uncefact.org/gLNId
	 */
	gLNId?: string | IJsonLdValueObject;

	/**
	 * A globally unique identifier of this trade party.
	 * @see https://vocabulary.uncefact.org/globalId
	 */
	globalId?: string | IJsonLdValueObject;

	/**
	 * A unique identifier of this trade party.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * A referenced notification document issued to this trade party.
	 * @see https://vocabulary.uncefact.org/issuedNotificationReferencedDocument
	 */
	issuedNotificationReferencedDocument?: IUneceDocument[];

	/**
	 * A file containing a specified binary representation of a logo associated with this trade party.
	 * @see https://vocabulary.uncefact.org/logoAssociatedBinaryFile
	 */
	logoAssociatedBinaryFile?: IUneceBinaryFile[];

	/**
	 * The referenced logo document for this trade party.
	 * @see https://vocabulary.uncefact.org/logoReferencedDocument
	 */
	logoReferencedDocument?: IUneceDocument;

	/**
	 * A name, expressed as text, for this trade party.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The creditor financial account owned by this trade party.
	 * @see https://vocabulary.uncefact.org/ownedFinancialAccount
	 */
	ownedFinancialAccount?: IUneceCreditorFinancialAccount;

	/**
	 * A code specifying the role of this trade party.
	 * @see https://vocabulary.uncefact.org/partyRoleCode
	 */
	partyRoleCode?: (UnecePartyRoleCodeList | string)[];

	/**
	 * A code specifying the type of trade party that is independent of its role.
	 * @see https://vocabulary.uncefact.org/partyTypeCode
	 */
	partyTypeCode?: UnecePartyTypeCodeList[];

	/**
	 * The postal address for this trade party.
	 * @see https://vocabulary.uncefact.org/postalAddress
	 */
	postalAddress?: IUneceTradeAddress;

	/**
	 * A production process provided by this trade party.
	 * @see https://vocabulary.uncefact.org/providedProcess
	 */
	providedProcess?: IUneceProductionProcess[];

	/**
	 * A transport service provided by this trade party.
	 * @see https://vocabulary.uncefact.org/providedService
	 */
	providedService?: IUneceService[];

	/**
	 * The indication of whether or not this trade party is quality assured.
	 * @see https://vocabulary.uncefact.org/qualityAssuranceIndicator
	 */
	qualityAssuranceIndicator?: boolean;

	/**
	 * The unique Routing Identifier Code (RIC) identifier for this trade party.
	 * @see https://vocabulary.uncefact.org/rICId
	 */
	rICId?: string | IJsonLdValueObject;

	/**
	 * A registered identifier of this trade party.
	 * @see https://vocabulary.uncefact.org/registeredId
	 */
	registeredId?: string | IJsonLdValueObject;

	/**
	 * A product batch related to this trade party.
	 * @see https://vocabulary.uncefact.org/relatedBatch
	 */
	relatedBatch?: IUneceProductBatch[];

	/**
	 * Material related to this trade party.
	 * @see https://vocabulary.uncefact.org/relatedMaterial
	 */
	relatedMaterial?: IUneceSpecifiedMaterial[];

	/**
	 * An experience item requested for or by this trade party.
	 * @see https://vocabulary.uncefact.org/requestedExperienceItem
	 */
	requestedExperienceItem?: IUneceExperienceItem[];

	/**
	 * A referenced notification document requested by this trade party.
	 * @see https://vocabulary.uncefact.org/requestedNotificationReferencedDocument
	 */
	requestedNotificationReferencedDocument?: IUneceDocument[];

	/**
	 * An experience item reserved for or by this trade party.
	 * @see https://vocabulary.uncefact.org/reservedExperienceItem
	 */
	reservedExperienceItem?: IUneceExperienceItem[];

	/**
	 * A role, expressed as text, for this trade party.
	 * @see https://vocabulary.uncefact.org/role
	 */
	role?: string;

	/**
	 * A name of a sales manager, expressed as text, for this trade party.
	 * @see https://vocabulary.uncefact.org/salesManagerName
	 */
	salesManagerName?: string;

	/**
	 * An experience item wish list searched for or by this trade party.
	 * @see https://vocabulary.uncefact.org/searchedWishListExperienceItem
	 */
	searchedWishListExperienceItem?: IUneceExperienceItem[];

	/**
	 * The sustainability assertion specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedAssertion
	 */
	specifiedAssertion?: IUneceAssertion;

	/**
	 * A person specified to sign on behalf of this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedAuthoritativeSignatoryPerson
	 */
	specifiedAuthoritativeSignatoryPerson?: IUneceAuthoritativeSignatoryPerson[];

	/**
	 * A contact person specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedContactPerson
	 */
	specifiedContactPerson?: IUneceContactPerson[];

	/**
	 * A cooperating organization specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedCooperatingOrganization
	 */
	specifiedCooperatingOrganization?: IUneceCooperatingOrganization[];

	/**
	 * A creditor financial institution specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedCreditorFinancialInstitution
	 */
	specifiedCreditorFinancialInstitution?: IUneceCreditorFinancialInstitution[];

	/**
	 * A production facility specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedFacility
	 */
	specifiedFacility?: IUneceProductionFacility[];

	/**
	 * The financial identity specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedFinancialIdentity
	 */
	specifiedFinancialIdentity?: IUneceFinancialIdentity;

	/**
	 * A governmental registration specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedGovernmentRegistration
	 */
	specifiedGovernmentRegistration?: IUneceGovernmentRegistration[];

	/**
	 * A guest person specified by this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedGuestPerson
	 */
	specifiedGuestPerson?: IUneceGuestPerson[];

	/**
	 * The legally constituted organization specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedLegalOrganization
	 */
	specifiedLegalOrganization?: IUneceLegalOrganization;

	/**
	 * A logistics related location or place specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedLogisticsLocation
	 */
	specifiedLogisticsLocation?: IUneceLogisticsLocation[];

	/**
	 * A proprietary identity specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedProprietaryIdentity
	 */
	specifiedProprietaryIdentity?: IUneceProprietaryIdentity[];

	/**
	 * A result of a logistics risk analysis calculation specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedRiskAnalysisResult
	 */
	specifiedRiskAnalysisResult?: IUneceRiskAnalysisResult[];

	/**
	 * A tax registration specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedTaxRegistration
	 */
	specifiedTaxRegistration?: IUneceTaxRegistration[];

	/**
	 * A product specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedTradeProduct
	 */
	specifiedTradeProduct?: IUneceTradeProduct[];

	/**
	 * A subcontractor for this trade party.
	 * @see https://vocabulary.uncefact.org/subcontractorParty
	 */
	subcontractorParty?: IUneceTradeParty[];

	/**
	 * A telephone communication for this trade party.
	 * @see https://vocabulary.uncefact.org/telephoneCommunication
	 */
	telephoneCommunication?: IUneceCommunication[];

	/**
	 * A code specifying a language for this trade party.
	 * @see https://vocabulary.uncefact.org/tradePartyLanguageCode
	 */
	tradePartyLanguageCode?: UneceLanguageCodeList[];

	/**
	 * A Uniform Resource Identifier (URI) communication for this trade party, such as a web or email address.
	 * @see https://vocabulary.uncefact.org/uRICommunication
	 */
	uRICommunication?: IUneceCommunication[];
}
