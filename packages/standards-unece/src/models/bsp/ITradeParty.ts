// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAssertion } from "./IAssertion.js";
import type { IAssessment } from "./IAssessment.js";
import type { IAuthentication } from "./IAuthentication.js";
import type { IAuthoritativeSignatoryPerson } from "./IAuthoritativeSignatoryPerson.js";
import type { IBinaryFile } from "./IBinaryFile.js";
import type { ICommunication } from "./ICommunication.js";
import type { IContactPerson } from "./IContactPerson.js";
import type { IContract } from "./IContract.js";
import type { ICooperatingOrganization } from "./ICooperatingOrganization.js";
import type { ICreditorFinancialAccount } from "./ICreditorFinancialAccount.js";
import type { ICreditorFinancialInstitution } from "./ICreditorFinancialInstitution.js";
import type { IDocument } from "./IDocument.js";
import type { IExperienceFacility } from "./IExperienceFacility.js";
import type { IExperienceItem } from "./IExperienceItem.js";
import type { IFinancialIdentity } from "./IFinancialIdentity.js";
import type { IGovernmentRegistration } from "./IGovernmentRegistration.js";
import type { IGuestPerson } from "./IGuestPerson.js";
import type { IInformationSource } from "./IInformationSource.js";
import type { ILanguageProficiency } from "./ILanguageProficiency.js";
import type { ILegalOrganization } from "./ILegalOrganization.js";
import type { ILicence } from "./ILicence.js";
import type { ILogisticsLocation } from "./ILogisticsLocation.js";
import type { IMembership } from "./IMembership.js";
import type { IOrganizationalCertificate } from "./IOrganizationalCertificate.js";
import type { IOrganizationalCertification } from "./IOrganizationalCertification.js";
import type { IProcessCertificate } from "./IProcessCertificate.js";
import type { IProductBatch } from "./IProductBatch.js";
import type { IProductBatchCertificate } from "./IProductBatchCertificate.js";
import type { IProductCertificate } from "./IProductCertificate.js";
import type { IProductionFacility } from "./IProductionFacility.js";
import type { IProductionProcess } from "./IProductionProcess.js";
import type { IProprietaryIdentity } from "./IProprietaryIdentity.js";
import type { IRiskAnalysisResult } from "./IRiskAnalysisResult.js";
import type { IService } from "./IService.js";
import type { IServiceCharge } from "./IServiceCharge.js";
import type { ISpecifiedCertificate } from "./ISpecifiedCertificate.js";
import type { ISpecifiedDeclaration } from "./ISpecifiedDeclaration.js";
import type { ISpecifiedInspection } from "./ISpecifiedInspection.js";
import type { ISpecifiedMaterial } from "./ISpecifiedMaterial.js";
import type { ISpecifiedNote } from "./ISpecifiedNote.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { ISustainabilityInspection } from "./ISustainabilityInspection.js";
import type { ITaxRegistration } from "./ITaxRegistration.js";
import type { ITechnicalCharacteristic } from "./ITechnicalCharacteristic.js";
import type { ITradeAddress } from "./ITradeAddress.js";
import type { ITradeContact } from "./ITradeContact.js";
import type { ITradeProduct } from "./ITradeProduct.js";
import type { LanguageCodeList } from "../lists/languageCodeList.js";
import type { PartyRoleCodeList } from "../lists/partyRoleCodeList.js";
import type { PartyTypeCodeList } from "../lists/partyTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An individual, a group, or a body having a role in a trade business function.
 * @see https://vocabulary.uncefact.org/TradeParty
 */
export interface ITradeParty extends IJsonLdNodeObject {
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
	agreedContract?: IContract[];

	/**
	 * An alliance name, expressed as text, for this trade party.
	 * @see https://vocabulary.uncefact.org/allianceName
	 */
	allianceName?: string;

	/**
	 * An assessment applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableAssessment
	 */
	applicableAssessment?: IAssessment[];

	/**
	 * A specified declaration applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableDeclaration
	 */
	applicableDeclaration?: ISpecifiedDeclaration[];

	/**
	 * A specified licence applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableLicence
	 */
	applicableLicence?: ILicence[];

	/**
	 * An organizational certificate applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableOrganizationalCertificate
	 */
	applicableOrganizationalCertificate?: IOrganizationalCertificate[];

	/**
	 * An organizational certification applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableOrganizationalCertification
	 */
	applicableOrganizationalCertification?: IOrganizationalCertification[];

	/**
	 * A process certificate applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableProcessCertificate
	 */
	applicableProcessCertificate?: IProcessCertificate[];

	/**
	 * A product batch certificate applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableProductBatchCertificate
	 */
	applicableProductBatchCertificate?: IProductBatchCertificate[];

	/**
	 * A product certificate applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableProductCertificate
	 */
	applicableProductCertificate?: IProductCertificate[];

	/**
	 * A logistics service charge applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableServiceCharge
	 */
	applicableServiceCharge?: IServiceCharge[];

	/**
	 * A certificate applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedCertificate
	 */
	applicableSpecifiedCertificate?: ISpecifiedCertificate[];

	/**
	 * A specified inspection applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedInspection
	 */
	applicableSpecifiedInspection?: ISpecifiedInspection[];

	/**
	 * A sustainability characteristic applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A sustainability inspection applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityInspection
	 */
	applicableSustainabilityInspection?: ISustainabilityInspection[];

	/**
	 * A technical characteristic applicable to this trade party.
	 * @see https://vocabulary.uncefact.org/applicableTechnicalCharacteristic
	 */
	applicableTechnicalCharacteristic?: ITechnicalCharacteristic[];

	/**
	 * A membership associated with this trade party.
	 * @see https://vocabulary.uncefact.org/associatedMembership
	 */
	associatedMembership?: IMembership[];

	/**
	 * A party associated with this trade party, such as a local agent of a shipping line.
	 * @see https://vocabulary.uncefact.org/associatedParty
	 */
	associatedParty?: ITradeParty[];

	/**
	 * A trade party associated with this trade party to whom incoming mail is marked with words such as 'for the attention of'
	 * or 'FAO' or 'ATTN'.
	 * @see https://vocabulary.uncefact.org/attentionOfAssociatedParty
	 */
	attentionOfAssociatedParty?: ITradeParty[];

	/**
	 * An experience item available for this trade party.
	 * @see https://vocabulary.uncefact.org/availableExperienceItem
	 */
	availableExperienceItem?: IExperienceItem[];

	/**
	 * An experience facility made available for or by this trade party.
	 * @see https://vocabulary.uncefact.org/availableFacility
	 */
	availableFacility?: IExperienceFacility[];

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
	cAGEId?: string;

	/**
	 * A chain name, expressed as text, for this trade party.
	 * @see https://vocabulary.uncefact.org/chainName
	 */
	chainName?: string;

	/**
	 * Personal language proficiency skills claimed by this trade party.
	 * @see https://vocabulary.uncefact.org/claimedLanguageProficiency
	 */
	claimedLanguageProficiency?: ILanguageProficiency[];

	/**
	 * A commented review note specified for this trade party.
	 * @see https://vocabulary.uncefact.org/commentedReviewNote
	 */
	commentedReviewNote?: ISpecifiedNote[];

	/**
	 * A confirmed document authentication for this trade party.
	 * @see https://vocabulary.uncefact.org/confirmedAuthentication
	 */
	confirmedAuthentication?: IAuthentication[];

	/**
	 * A cooperative information source specified for this trade party.
	 * @see https://vocabulary.uncefact.org/cooperativeInformationSource
	 */
	cooperativeInformationSource?: IInformationSource[];

	/**
	 * The unique Department Of Defense Activity Address Code (DODAAC) identifier for this trade party.
	 * @see https://vocabulary.uncefact.org/dODAACId
	 */
	dODAACId?: string;

	/**
	 * The unique nine-digit Data Universal Numbering System (DUNS) identifier for this trade party.
	 * @see https://vocabulary.uncefact.org/dUNSId
	 */
	dUNSId?: string;

	/**
	 * A trade contact defined for this trade party.
	 * @see https://vocabulary.uncefact.org/definedContact
	 */
	definedContact?: ITradeContact[];

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
	emailURICommunication?: ICommunication[];

	/**
	 * The communication address of the end point URI for this trade party.
	 * @see https://vocabulary.uncefact.org/endPointURICommunication
	 */
	endPointURICommunication?: ICommunication[];

	/**
	 * A fax communication for this trade party.
	 * @see https://vocabulary.uncefact.org/faxCommunication
	 */
	faxCommunication?: ICommunication[];

	/**
	 * A Global Location Number (GLN) identifier for this trade party.
	 * @see https://vocabulary.uncefact.org/gLNId
	 */
	gLNId?: string;

	/**
	 * A globally unique identifier of this trade party.
	 * @see https://vocabulary.uncefact.org/globalId
	 */
	globalId?: string;

	/**
	 * A unique identifier of this trade party.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A referenced notification document issued to this trade party.
	 * @see https://vocabulary.uncefact.org/issuedNotificationReferencedDocument
	 */
	issuedNotificationReferencedDocument?: IDocument[];

	/**
	 * A file containing a specified binary representation of a logo associated with this trade party.
	 * @see https://vocabulary.uncefact.org/logoAssociatedBinaryFile
	 */
	logoAssociatedBinaryFile?: IBinaryFile[];

	/**
	 * The referenced logo document for this trade party.
	 * @see https://vocabulary.uncefact.org/logoReferencedDocument
	 */
	logoReferencedDocument?: IDocument[];

	/**
	 * A name, expressed as text, for this trade party.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The creditor financial account owned by this trade party.
	 * @see https://vocabulary.uncefact.org/ownedFinancialAccount
	 */
	ownedFinancialAccount?: ICreditorFinancialAccount[];

	/**
	 * A code specifying the role of this trade party.
	 * @see https://vocabulary.uncefact.org/partyRoleCode
	 */
	partyRoleCode?: PartyRoleCodeList[];

	/**
	 * A code specifying the type of trade party that is independent of its role.
	 * @see https://vocabulary.uncefact.org/partyTypeCode
	 */
	partyTypeCode?: PartyTypeCodeList[];

	/**
	 * The postal address for this trade party.
	 * @see https://vocabulary.uncefact.org/postalAddress
	 */
	postalAddress?: ITradeAddress[];

	/**
	 * A production process provided by this trade party.
	 * @see https://vocabulary.uncefact.org/providedProcess
	 */
	providedProcess?: IProductionProcess[];

	/**
	 * A transport service provided by this trade party.
	 * @see https://vocabulary.uncefact.org/providedService
	 */
	providedService?: IService[];

	/**
	 * The indication of whether or not this trade party is quality assured.
	 * @see https://vocabulary.uncefact.org/qualityAssuranceIndicator
	 */
	qualityAssuranceIndicator?: boolean;

	/**
	 * The unique Routing Identifier Code (RIC) identifier for this trade party.
	 * @see https://vocabulary.uncefact.org/rICId
	 */
	rICId?: string;

	/**
	 * A registered identifier of this trade party.
	 * @see https://vocabulary.uncefact.org/registeredId
	 */
	registeredId?: string;

	/**
	 * A product batch related to this trade party.
	 * @see https://vocabulary.uncefact.org/relatedBatch
	 */
	relatedBatch?: IProductBatch[];

	/**
	 * Material related to this trade party.
	 * @see https://vocabulary.uncefact.org/relatedMaterial
	 */
	relatedMaterial?: ISpecifiedMaterial[];

	/**
	 * An experience item requested for or by this trade party.
	 * @see https://vocabulary.uncefact.org/requestedExperienceItem
	 */
	requestedExperienceItem?: IExperienceItem[];

	/**
	 * A referenced notification document requested by this trade party.
	 * @see https://vocabulary.uncefact.org/requestedNotificationReferencedDocument
	 */
	requestedNotificationReferencedDocument?: IDocument[];

	/**
	 * An experience item reserved for or by this trade party.
	 * @see https://vocabulary.uncefact.org/reservedExperienceItem
	 */
	reservedExperienceItem?: IExperienceItem[];

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
	searchedWishListExperienceItem?: IExperienceItem[];

	/**
	 * The sustainability assertion specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedAssertion
	 */
	specifiedAssertion?: IAssertion[];

	/**
	 * A person specified to sign on behalf of this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedAuthoritativeSignatoryPerson
	 */
	specifiedAuthoritativeSignatoryPerson?: IAuthoritativeSignatoryPerson[];

	/**
	 * A contact person specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedContactPerson
	 */
	specifiedContactPerson?: IContactPerson[];

	/**
	 * A cooperating organization specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedCooperatingOrganization
	 */
	specifiedCooperatingOrganization?: ICooperatingOrganization[];

	/**
	 * A creditor financial institution specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedCreditorFinancialInstitution
	 */
	specifiedCreditorFinancialInstitution?: ICreditorFinancialInstitution[];

	/**
	 * A production facility specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedFacility
	 */
	specifiedFacility?: IProductionFacility[];

	/**
	 * The financial identity specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedFinancialIdentity
	 */
	specifiedFinancialIdentity?: IFinancialIdentity[];

	/**
	 * A governmental registration specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedGovernmentRegistration
	 */
	specifiedGovernmentRegistration?: IGovernmentRegistration[];

	/**
	 * A guest person specified by this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedGuestPerson
	 */
	specifiedGuestPerson?: IGuestPerson[];

	/**
	 * The legally constituted organization specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedLegalOrganization
	 */
	specifiedLegalOrganization?: ILegalOrganization[];

	/**
	 * A logistics related location or place specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedLogisticsLocation
	 */
	specifiedLogisticsLocation?: ILogisticsLocation[];

	/**
	 * A proprietary identity specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedProprietaryIdentity
	 */
	specifiedProprietaryIdentity?: IProprietaryIdentity[];

	/**
	 * A result of a logistics risk analysis calculation specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedRiskAnalysisResult
	 */
	specifiedRiskAnalysisResult?: IRiskAnalysisResult[];

	/**
	 * A tax registration specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedTaxRegistration
	 */
	specifiedTaxRegistration?: ITaxRegistration[];

	/**
	 * A product specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedTradeProduct
	 */
	specifiedTradeProduct?: ITradeProduct[];

	/**
	 * A subcontractor for this trade party.
	 * @see https://vocabulary.uncefact.org/subcontractorParty
	 */
	subcontractorParty?: ITradeParty[];

	/**
	 * A telephone communication for this trade party.
	 * @see https://vocabulary.uncefact.org/telephoneCommunication
	 */
	telephoneCommunication?: ICommunication;

	/**
	 * A code specifying a language for this trade party.
	 * @see https://vocabulary.uncefact.org/tradePartyLanguageCode
	 */
	tradePartyLanguageCode?: LanguageCodeList[];

	/**
	 * A Uniform Resource Identifier (URI) communication for this trade party, such as a web or email address.
	 * @see https://vocabulary.uncefact.org/uRICommunication
	 */
	uRICommunication?: ICommunication[];
}
